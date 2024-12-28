import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="bg-gray-900 py-4 overflow-hidden opacity-9">
      <motion.div
        className="flex space-x-12 animate-marquee text-neonBlue font-medium text-lg whitespace-nowrap px-16"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
       
        <p>CortexAI - Revolutionizing the Future of Web Development</p>
        <p>|</p>
        <p>AI-Powered Website Creation</p>
        <p>|</p>
        <p>Collaborative Development Environment for Teams</p>
        <p>|</p>
        <p>Optimize Your Development with AI Assistance</p>
        <p>|</p>
        <p>Effortless Website Creation with AI-Driven Insights</p>
        <p>|</p>
        <p>Faster Development. Better Results. CortexAI</p>
        <p>|</p>
        <p>Building the Future of Websites, One Line of Code at a Time</p>
      </motion.div>
      <section>
          {/* Footer */}
                <footer className="py-6 bg-black text-center">
                  <motion.p
                    className="text-neonWhite"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    © 2024 CortexAI. All rights reserved.
                  </motion.p>
                </footer>
      </section>
    </div>
  );
};

export default Marquee;
