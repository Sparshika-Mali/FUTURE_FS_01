import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-7 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              B.Tech Computer Science Student at NMIMS Shirpur
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-lg">
              Hello! I'm Sparshika, a Computer Science student interested in
              technology, project development, and continuous learning. I have
              worked on academic projects related to DBMS, Web Development, and
              IoT while building a strong foundation in programming and
              problem-solving.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Alongside academics, I actively focus on improving my technical
              skills through internships, project building, and practical
              learning experiences to strengthen my professional profile.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;