import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Airline Reservation Management System",
    description:
      "A DBMS subject project focused on airline reservation data management, including passengers, flights, routes, bookings, and payment records using a structured database design.",
    image: "/airline.png",
    tech: ["DBMS", "MySQL", "Database Design"],
  },

  {
    title: "Food Inventory Management System",
    description:
      "A Web Programming coursework project designed to manage food inventory details, track stock information, and organize item records through a simple web-based interface.",
    image: "/wp.png",
    tech: ["Web Programming", "HTML", "CSS", "JavaScript"],
  },

  {
    title: "IoT-Based Industrial Fire and Electrical Hazard Detection System",
    description:
      "An IoT-based academic project focused on detecting fire and electrical hazards in industrial environments using sensors and alert-based safety mechanisms.",
    image: "/iot.png",
    tech: ["IoT", "Sensors", "Industrial Safety"],
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website created to showcase academic projects, technical skills, internship work, and professional profile in a clean modern layout.",
    image: "/portfolio.png",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
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
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="section-line"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden flex flex-col card-hover"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">

                <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;