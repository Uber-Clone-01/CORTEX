import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Marquee from "./Marquee";
const Home = () => {
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations for scrolling effects
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);




  return (
    <div
  className="relative bg-black text-white font-futuristic min-h-screen overflow-hidden"
>
  <Navbar/>
  <div className="relative z-10 bg-black/50 min-h-screen">
  
  
    {/* Hero Section */}
    <section className="flex flex-col items-center justify-center text-center h-[80vh] relative">
    <motion.p
        className="text-lg md:text-2xl text-neonWhite mt-4 px-4 md:px-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        
        <img
          src="/assets/CortexAILogo.png" // Replace with your logo's path
          alt="Logo"
          className="w-20 h-20 shadow-md transition-transform duration-300 hover:scale-110"
        />
      </motion.p>
      <motion.h1
        className="text-5xl md:text-7xl text-neonWhite mt-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to CortexAI
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-neonWhite mt-4 px-4 md:px-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Revolutionizing the future with cutting-edge AI technology and solutions.
      </motion.p>
      <motion.div
  className="mt-8 relative z-20"
  initial={{ scale: 1, opacity: 1 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
>
 <Link to="/login">  <button
      className="bg-neonBlue text-white px-6 py-3 rounded-md font-bold transition transform duration-300 hover:bg- hover:scale-110 shadow-lg"
    >
      Get Started
    </button></Link>
   
  
</motion.div>

  


    </section>
    {/* Parallax Effect Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://your-image-url.com')" }}></div>
        <div className="relative z-10 text-center text-white pt-16 pb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The Future of Web Development with AI
          </motion.h2>
          <motion.p
            className="text-lg mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Cutting-edge AI solutions that transform your development process.
          </motion.p>
        </div>
      </section>
 
 

{/* Features Section */}
<section className="py-16 bg-gradient-to-b from-black to-gray-900 text-center">
  <motion.h2
    className="text-4xl text-neonWhite mb-8 font-bold"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    Features
  </motion.h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
    <motion.div
      className="feature-card bg-gray-800 p-8 rounded-lg transition transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        backgroundColor: "#1e293b", // New color on hover
        scale: 1.1, // Slight scaling effect
        boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.8)", // Glow effect
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-4">
        <img
          src="https://img.icons8.com/color/96/000000/artificial-intelligence.png"
          alt="Advanced AI"
          className="w-16 h-16"
        />
      </div>
      <h3 className="text-2xl text-neonBlue mb-4 font-semibold">
        Advanced AI
      </h3>
      <p className="text-sm text-gray-300">
        Leverage state-of-the-art AI technologies for unparalleled performance and innovative solutions.
      </p>
    </motion.div>

    <motion.div
      className="feature-card bg-gray-800 p-8 rounded-lg transition transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        backgroundColor: "#1e293b",
        scale: 1.1,
        boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.8)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-4">
        <img
          src="https://img.icons8.com/clouds/100/000000/settings.png"
          alt="Custom Solutions"
          className="w-16 h-16"
        />
      </div>
      <h3 className="text-2xl text-neonBlue mb-4 font-semibold">
        Custom Solutions
      </h3>
      <p className="text-sm text-gray-300">
        Tailored tools and solutions designed to meet the unique needs of businesses and users.
      </p>
    </motion.div>

    <motion.div
      className="feature-card bg-gray-800 p-8 rounded-lg transition transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        backgroundColor: "#1e293b",
        scale: 1.1,
        boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.8)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-4">
        <img
          src="https://img.icons8.com/clouds/100/000000/user-male.png"
          alt="User-Friendly"
          className="w-16 h-16"
        />
      </div>
      <h3 className="text-2xl text-neonBlue mb-4 font-semibold">
        User-Friendly
      </h3>
      <p className="text-sm text-gray-300">
        Simplified interfaces and intuitive designs for seamless user experiences.
      </p>
    </motion.div>
  </div>
</section>



        {/* Footer */}
      
      </div>
      <Marquee/>
    </div>
  );
};

export default Home;








