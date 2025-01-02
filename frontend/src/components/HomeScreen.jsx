import React, { useState , useContext,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import { UserContext } from "../context/user.context";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { RiDeleteBinLine } from "react-icons/ri";

const HomeScreen = () => {
  const { user } = useContext(UserContext)
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ projectName, setProjectName ] = useState(null)
  const [projects, setProjects] = useState([]);
  
  const navigate = useNavigate();
  // Create a new project and update local state
  function createProject (e) {
    e.preventDefault();
    console.log({projectName});
    axios.post('/project/create', {name : projectName}).then((res)=>{
      console.log(res)
      setIsModalOpen(false);
    }).catch((error)=>{console.log(error)})
    // Add the new project to the list
    /*
    const newProject = { _id: Date.now().toString(), name: projectName, users: [] };
    setProjects([...projects, newProject]);
    setIsModalOpen(false);
    setProjectName("");*/
    const newProject = { _id: Date.now().toString(), name: projectName, users: [] };
  setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  useEffect(() => {
    axios.get('/project/all').then((res) => {
      setProjects(res.data.projects);

    }).catch(err => {
        console.log(err)
    })

}, [])
  const handleLogout = () => {
    // Clear user session or any authentication logic you have
    localStorage.removeItem('token'); // Assuming the user is stored in local storage
    navigate("/Home"); // Redirect to login page
  };

  
  {/*Deletetion API*/}
  const handleDeleteProject = async (projectId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;
  
    try {
      await deleteProjectById(projectId); 
      setProjects((prev) => prev.filter((project) => project._id !== projectId));
      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete the project.");
    }
  };
  

  return (
    <>
     
    <main className="p-8 bg-gradient-to-b from-gray-900 to-gray-800   min-h-screen pt-18">
       
      {/* Logout Button */}
      <div className="text-right mb-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Greeting Message */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-neonWhite mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome Back, {user.name}!
      </motion.h1>

      {/* Projects Section */}
      <motion.div
        className="projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0,y: -50 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* New Project Button */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="project flex items-center justify-center bg-gray-800 text-neonBlue font-medium text-lg p-6 border border-slate-600 rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          + New Project
        </motion.button>

        {/* Existing Projects */}
        {projects.map((project) => (
  <motion.div
    key={project._id}
    className="project bg-gray-800 p-6 border border-slate-600 rounded-lg cursor-pointer hover:bg-gray-700 hover:scale-105 transition-transform relative"
    whileHover={{ scale: 1.05 }}
  >
    {/* Delete Icon */}
    <motion.button
      onClick={(e) => {
        e.stopPropagation(); // Prevent navigation when delete is clicked
        handleDeleteProject(project._id);
      }}
      className="absolute top-2 right-2 text-gray-400 hover:text-blue-500 transition"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <RiDeleteBinLine size={20} />
    </motion.button>

    {/* Project Details */}
    <div onClick={() => navigate(`/project`, { state: { project } })}>
      <h2 className="font-semibold text-neonWhite text-lg mb-2">{project.name}</h2>
      <div className="text-sm text-gray-400">
        <p>
          <i className="ri-user-line mr-2"></i>
          Collaborators: {project.users.length}
        </p>
      </div>
    </div>
  </motion.div>
))}



      </motion.div>

      {/* Modal for Creating a New Project */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white p-6 rounded-md shadow-lg w-1/3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl text-gray-800 font-bold mb-4">
              Create New Project
            </h2>
            <form onSubmit={createProject}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-700 text-black rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-2">
  <button
    type="button"
    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
    onClick={() => setIsModalOpen(false)}
  >
    Cancel
  </button>
  <button
    type="submit"
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
  >
    Create
  </button>
</div>

            </form>
          </motion.div>
        </motion.div>
      )}
    </main>
    </>
  );
};

export default HomeScreen;


