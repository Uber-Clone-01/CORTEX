import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi"; // Import the close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-black text-white fixed top-0 w-full shadow-lg z-50"
    >
      <div className="w-full container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          className="text-2xl text-neonWhite font-futuristic"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/">CortexAI</Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-neonWhite font-medium">
          {["Home", "Features", "About", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-neonBlue text-xl"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-neonWhite cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="w-6 h-1 bg-neonWhite mb-1"
          ></motion.div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-1 bg-neonWhite mb-1"
          ></motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? -45 : 0 }}
            className="w-6 h-1 bg-neonWhite"
          ></motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-0 right-0 bg-black h-screen w-3/4 md:hidden flex flex-col items-center justify-center space-y-8 text-neonWhite"
        >
          <div
            className="absolute top-4 right-6 text-neonWhite text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            <HiX /> {/* Close Icon */}
          </div>

          <motion.div>
            <Link
              to="/"
              className="hover:text-neonBlue text-xl"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </motion.div>
          <motion.div>
            <Link
              to="/features"
              className="hover:text-neonBlue text-xl"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
          </motion.div>
          <motion.div>
            <Link
              to="/about"
              className="hover:text-neonBlue text-xl"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </motion.div>
          <motion.div>
            <Link
              to="/contact"
              className="hover:text-neonBlue text-xl"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;


