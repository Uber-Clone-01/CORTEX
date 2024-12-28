import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos'; // AOS JS
import Navbar from './navbar';
import Marquee from './Marquee';
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Animation triggers only once when in view
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white pt-24">
       <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-neonBlue mb-8">
          About CortexAI
        </h1>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-300">
            CortexAI is a cutting-edge platform designed to simplify and enhance the process of website development. Our mission is to bring the power of AI to developers, providing them with a collaborative environment and automated website creation tools.
          </p>
        </div>

        {/* Creators Section */}
        <h2 className="text-3xl font-semibold text-center text-neonBlue mb-8">
          Meet the Creators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-right"
          >
          <h3 className="text-2xl font-semibold text-neonBlue mb-4">Sanchay Kumar</h3>
<p className="text-lg text-gray-300 mb-4">
  A third-year student pursuing Electronics and Communication Engineering. Sanchay is passionate about integrating AI with web development and played a key role in developing the core algorithms and platform architecture of CortexAI.
</p>
<p className="text-lg text-gray-300">
  Sanchay has a strong background in software development and enjoys working on automation projects. With a keen interest in AI, Sanchay aims to push the boundaries of technology and streamline web development processes.
</p>

          </div>

          {/* Sanchay Kumar */}
          <div
            className="bg-gray-800 p-6 rounded-lg "
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-neonBlue mb-4">Swabhi Singh</h3>
<p className="text-lg text-gray-300 mb-4">
  Swabhi Singh is also a third-year student pursuing Electronics and Communication Engineering. Swabhi is focused on web development and AI integration, contributing to the frontend design and user experience of CortexAI.
</p>
<p className="text-lg text-gray-300">
  Swabhi combines a passion for full-stack web development with a deep interest in AI. She is committed to building innovative, user-friendly platforms that provide value to developers and create seamless experiences.
</p>

          </div>
        </div>
      </div>
      <Marquee/>
    </div>
  );
};

export default About;
