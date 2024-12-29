import React, { useState, useEffect, useRef } from 'react';
import { RiAddFill, RiGroupFill, RiCloseFill, RiSendPlaneFill, RiUserFill, RiHomeFill } from 'react-icons/ri';
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Project = () => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(new Set());
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const navigate = useNavigate();
    const sidePanelRef = useRef();

    const staticUsers = [
        { email: "user1@example.com" },
        { email: "user2@example.com" },
        { email: "user3@example.com" },
    ];

    const staticMessages = [
        { sender: "ai", message: "Hello, how can I assist you today?" },
        { sender: "user", message: "Can you explain this feature?" },
    ];

    const messageBox = useRef();

    useEffect(() => {
        setMessages(staticMessages);
    }, []);

    useEffect(() => {
        if (isSidePanelOpen) {
            gsap.to(sidePanelRef.current, { x: 0, duration: 0.5, ease: "power2.out" });
        } else {
            gsap.to(sidePanelRef.current, { x: "-100%", duration: 0.5, ease: "power2.in" });
        }
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

    return (
        <main className="h-screen w-screen flex flex-col md:flex-row bg-gray-100">
            <section className="left relative flex flex-col h-full md:h-screen min-w-full md:min-w-96 bg-gray-800 text-white">
                <header className="flex justify-between items-center p-2 px-4 w-full bg-gray-900">
                    {/* Home Button */}
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
                >
                    <header className="flex justify-between items-center px-4 p-2 bg-gray-900">
                        <h1 className="font-semibold text-lg text-white">Collaborators</h1>
                        <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} className="p-2 text-white">
                            <RiCloseFill />
                        </button>
                    </header>
                    <div className="users flex flex-col gap-2">
                        {staticUsers.map((user, index) => (
                            <div key={index} className="user p-2 flex gap-2 items-center">
                                <div className="aspect-square rounded-full w-10 h-10 flex items-center justify-center bg-gray-600">
                                    <RiUserFill className="text-white" />
                                </div>
                                <h1 className="font-semibold text-lg text-white">{user.email}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="right flex-grow h-full flex bg-gray-200">
                <div className="code-editor flex flex-col flex-grow h-full justify-center items-center">
                    <h2 className="text-xl font-bold text-gray-700">Welcome to the Project</h2>
                    <p className="text-gray-600">Select a file or add collaborators to get started.</p>
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
                        className="bg-white p-4 rounded-md w-96 max-w-full relative"
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
                            {staticUsers.map((user, index) => (
                                <div
                                    key={index}
                                    className={`user cursor-pointer hover:bg-gray-200 ${
                                        Array.from(selectedUserId).indexOf(user.email) !== -1 ? 'bg-gray-300' : ''
                                    } p-2 flex gap-2 items-center`}
                                    onClick={() => handleUserClick(user.email)}
                                >
                                    <div className="aspect-square rounded-full w-10 h-10 flex items-center justify-center bg-gray-600">
                                        <RiUserFill className="text-white" />
                                    </div>
                                    <h1 className="font-semibold text-lg text-black">{user.email}</h1>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => {
                                console.log("Collaborators added:", Array.from(selectedUserId));
                                setIsModalOpen(false);
                            }}
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













