import React from "react";
import { motion } from "framer-motion";
import { Download, Eye, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-2 overflow-hidden bg-[#111827]"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-2">
            Welcome to my portfolio
          </h2>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white">
            Hi, I'm <br />
            <span className="text-gradient">Sparshika Mali</span>
          </h1>

          <p className="text-gray-400 mb-4 text-lg">
            B.Tech Computer Science Student
          </p>

          <p className="text-gray-400 mb-6 max-w-2xl text-xl leading-relaxed">
            Passionate about learning, building projects, and exploring modern
            technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="projects" smooth={true} duration={500}>
              <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all hover:-translate-y-1">
                <Eye size={20} />
                View Projects
              </button>
            </Link>

            <Link to="resume" smooth={true} duration={500}>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-all hover:-translate-y-1">
                <Download size={20} />
                Resume
              </button>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              <button className="flex items-center gap-2 px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all rounded-full font-medium hover:-translate-y-1">
                <Mail size={20} />
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            <img
              src="/profile.jpeg"
              alt="Sparshika Mali"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;