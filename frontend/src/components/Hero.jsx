import React from "react";
import { motion } from "framer-motion";
import { Download, Eye, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Main Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-14 py-20">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3 tracking-wide uppercase">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-5 text-gray-900 dark:text-white">
            Hi, I'm <br />

            <span className="text-gradient">
              Sparshika Mali
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
            B.Tech Computer Science Student
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Passionate about web development, problem solving,
            and building modern responsive applications with clean UI and smooth user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            {/* Projects Button */}
            <Link to="projects" smooth={true} duration={500}>
              <button className="flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/30">
                <Eye size={20} />
                View Projects
              </button>
            </Link>

            {/* Resume Button */}
            <Link to="resume" smooth={true} duration={500}>
              <button className="flex items-center gap-2 px-7 py-3 glass-card text-gray-800 dark:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
                <Download size={20} />
                Resume
              </button>
            </Link>

            {/* Contact Button */}
            <Link to="contact" smooth={true} duration={500}>
              <button className="flex items-center gap-2 px-7 py-3 border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
                <Mail size={20} />
                Contact Me
              </button>
            </Link>

          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-20 rounded-full"></div>

            {/* Profile Image */}
            <img
              src="/profile.jpeg"
              alt="Sparshika Mali"
              className="relative z-10 w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;