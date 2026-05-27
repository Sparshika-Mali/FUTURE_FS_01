import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding relative">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Resume</span>
          </h2>

          <div className="section-line"></div>
        </motion.div>

        {/* Resume Card */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass-card max-w-3xl w-full p-10 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              Want to know more details?
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Check out my full resume to learn more about my education,
              technical skills, projects, and internship experience.
            </p>

            <a
              href="/Sparshika_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:-translate-y-1 text-lg"
            >
              <Download size={22} />
              Download Resume
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Resume;