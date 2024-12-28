import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos'; // AOS JS
import Navbar from './navbar';
import Marquee from './Marquee';
const Contact = () => {
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
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Text */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-semibold text-neonBlue mb-4">
              Get in Touch
            </h2>
            <p>
              Have any questions, feedback, or inquiries? We'd love to hear from you! Reach out to us, and our team will respond as soon as possible.
            </p>
          </div>

          {/* Right Section: Contact Info */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-semibold text-neonBlue mb-4">
              Contact Information
            </h2>
            <div className="mt-4">
              <p className="font-medium text-neonBlue">Email:</p>
              <p className="text-gray-300">support@cortexai.com</p>
            </div>
            <div className="mt-4">
              <p className="font-medium text-neonBlue">Phone:</p>
              <p className="text-gray-300">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300">
            Reach out to us with any questions. We're here to help!
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;

