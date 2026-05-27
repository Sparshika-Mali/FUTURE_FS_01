import React from "react";
import { motion } from "framer-motion";

const skills = [
  "DBMS",
  "Web Development",
  "Java",
  "C++",
  "Python",
  "Core DSA",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-padding relative bg-gray-100/50 dark:bg-gray-900/20"
    >
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
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="section-line"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="glass-card p-6 min-h-[110px] flex items-center justify-center text-center card-hover"
            >
              <h3 className="text-lg md:text-xl font-semibold">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;