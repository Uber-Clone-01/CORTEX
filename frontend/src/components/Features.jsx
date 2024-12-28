import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos'; // AOS JS
import Navbar from './navbar';
import Marquee from './Marquee';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Animation triggers only once when in view
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white pt-24"> 
    <Navbar/>
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-neonBlue mb-8">
          Features of CortexAI
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold text-neonBlue mb-4">
              AI-Powered Website Creation
            </h2>
            <p>
              CortexAI can automatically generate websites for you. With a simple prompt, you can get a fully functional website, saving valuable development time.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-semibold text-neonBlue mb-4">
              Collaborative Developer Environment
            </h2>
            <p>
              Work with other developers seamlessly in a collaborative workspace. Share ideas, work on projects together, and contribute in real-time.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-2xl font-semibold text-neonBlue mb-4">
              AI Assistance for Faster Development
            </h2>
            <p>
              CortexAI assists you during the development process by offering suggestions and helping you debug and optimize your website in real-time.
            </p>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 4 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold text-neonBlue mb-4">
              Instant Deployment
            </h2>
            <p>
              Deploy your website instantly with a click of a button. CortexAI ensures your website is live and ready for use in minutes.
            </p>
          </div>

          {/* Feature 5 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-semibold text-neonBlue mb-4">
              Scalability and Customization
            </h2>
            <p>
              Build websites that can grow with your business. Customize the look, feel, and functionality to meet your specific needs.
            </p>
          </div>

          {/* Feature 6 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-2xl font-semibold text-neonBlue mb-4">
              Secure and Reliable Hosting
            </h2>
            <p>
              CortexAI offers reliable hosting with secure infrastructure to ensure your website remains online and protected from threats.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300">
            Discover how CortexAI can streamline your web development process today.
          </p>
        </div>
      </div>
      <Marquee/>
    </div>
  );
};

export default Features;

