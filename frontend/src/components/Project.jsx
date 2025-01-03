import React, { useState, useEffect, useRef } from 'react';
import {
  RiAddFill, RiGroupFill, RiCloseFill, RiSendPlaneFill, RiUserFill, RiHomeFill,
} from 'react-icons/ri';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaPencilAlt } from "react-icons/fa";
import axios from '../config/axios';

const Project = () => {
  const location = useLocation();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(new Set());
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [users, setUsers] = useState([]);
  const [project,setProject]=useState(location.state.project)
  const navigate = useNavigate();
  const sidePanelRef = useRef();
  const messageBox = useRef();

  const staticMessages = [
    { sender: "ai", message: "Hello, how can I assist you today?" },
    { sender: "user", message: "Can you explain this feature?" },
  ];

  useEffect(() => {
    setMessages(staticMessages);
  }, []);

  useEffect(() => {
    axios.get(`/project/get-project/${location.state.project._id}`).then(res => {
        setProject(res.data.project)
    })
    axios.get('/users/all')
      .then(res => setUsers(res.data.users))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    gsap.to(sidePanelRef.current, {
      x: isSidePanelOpen ? 0 : "-100%",
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isSidePanelOpen]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages([...messages, { sender: 'user', message: messageInput }]);
      setMessageInput('');
    }
  };

  const handleUserClick = (id) => {
    setSelectedUserId((prevSelectedUserId) => {
      const newSelectedUserId = new Set(prevSelectedUserId);
      if (newSelectedUserId.has(id)) {
        newSelectedUserId.delete(id);
      } else {
        newSelectedUserId.add(id);
      }
      return newSelectedUserId;
    });
  };

  const addCollaborators = () => {
    if (!location.state?.project?._id) {
      console.error("Project ID is not defined.");
      return;
    }
    axios.put("/project/add-user", {
      projectId: location.state.project._id,
      users: Array.from(selectedUserId),
    })
      .then(res => {
        console.log(res.data);
        setIsModalOpen(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <main className="h-screen w-screen flex flex-col md:flex-row bg-gray-100">
      <section className="left relative flex flex-col h-full md:h-screen min-w-full md:min-w-96 bg-gray-800 text-white">
        <header className="flex justify-between items-center p-2 px-4 w-full bg-gray-900">
          <Link to="/homescreen" className="text-white-500">
            <RiHomeFill size={20} />
          </Link>
          <button className="flex gap-2 text-white" onClick={() => setIsModalOpen(true)}>
            <RiAddFill className="mr-1" />
            <p>Add collaborator</p>
          </button>
          <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} className="p-2 text-white">
            <RiGroupFill />
          </button>
        </header>
        <div className="conversation-area pt-14 pb-10 flex-grow flex flex-col h-full">
          <div
            ref={messageBox}
            className="message-box p-1 flex-grow flex flex-col gap-1 overflow-auto max-h-full"
          >
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${
                  msg.sender === 'ai' ? 'self-start' : 'self-end'
                } message flex flex-col p-2 bg-gray-700 w-fit rounded-md`}
              >
                <small className="opacity-65 text-xs text-gray-400">{msg.sender}</small>
                <div className="text-sm">
                  <p>{msg.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="inputField w-full flex">
          <input
            className="p-2 px-4 border-none outline-none flex-grow bg-gray-700 text-white"
            type="text"
            placeholder="Enter message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button className="px-5 bg-blue-500 text-white" onClick={handleSendMessage}>
            <RiSendPlaneFill />
          </button>
        </div>
        <div
          ref={sidePanelRef}
          className="sidePanel w-full h-full flex flex-col gap-2 bg-gray-700 absolute transition-all"
          style={{ transform: "translateX(-100%)" }}
        >
          <header className="flex justify-between items-center px-4 p-2 bg-gray-900">
            <h1 className="font-semibold text-lg text-white">Collaborators</h1>
            <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} className="p-2 text-white">
              <RiCloseFill />
            </button>
          </header>
          <div className="users flex flex-col gap-2">
            {project.users.map((user) => (
              <div key={user._id} className="user p-2 flex gap-2 items-center">
                <div className="aspect-square rounded-full w-10 h-10 flex items-center justify-center bg-gray-600">
                  <RiUserFill className="text-white" />
                </div>
                <h1 className="font-semibold text-lg text-white">{user.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="right flex-grow h-full flex bg-gray-200">
        <div className="code-editor flex flex-col flex-grow h-full">
          <header className="flex justify-between items-center p-2 px-4 w-full bg-gray-200">
            <Link to="/whiteboard" className="text-gray-700">
              <FaPencilAlt size={20} />
            </Link>
          </header>
          <div className="flex flex-col flex-grow justify-center items-center">
            <h2 className="text-xl font-bold text-gray-700">Welcome to the Project</h2>
            <p className="text-gray-600">Select a file or add collaborators to get started.</p>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-700 p-4 rounded-md w-96 max-w-full relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <header className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Select User</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2">
                <RiCloseFill />
              </button>
            </header>
            <div className="users-list flex flex-col gap-2 mb-16 max-h-96 overflow-auto">
              {users.map((user) => (
                <div
                  key={user._id}
                  className={`user cursor-pointer hover:bg-gray-200 ${
                    selectedUserId.has(user._id) ? 'bg-gray-300' : ''
                  } p-2 flex gap-2 items-center`}
                  onClick={() => handleUserClick(user._id)}
                >
                  <div className="aspect-square rounded-full w-10 h-10 flex items-center justify-center bg-gray-600">
                    <RiUserFill className="text-white" />
                  </div>
                  <h1 className="font-semibold text-lg text-white">{user.email}</h1>
                </div>
              ))}
            </div>
            <button
              onClick={addCollaborators}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Collaborators
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default Project;
