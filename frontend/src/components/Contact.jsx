import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding relative bg-gray-900 text-white overflow-hidden"
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
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <div className="section-line"></div>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card max-w-4xl mx-auto p-10 text-center"
        >
          <h3 className="text-3xl font-bold mb-5">
            Let's Connect
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Feel free to connect with me regarding internships,
            collaborations, projects, or opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-5">

            {/* Email */}
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sparshikamali41@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all font-semibold hover:-translate-y-1"
>
  <Mail size={22} />
  Email Me
</a>

            {/* GitHub */}
            <a
              href="https://github.com/Sparshika-Mali"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all font-semibold hover:-translate-y-1"
            >
              <span className="font-bold">GH</span>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sparshika-mali-774512309/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all font-semibold hover:-translate-y-1"
            >
              <span className="font-bold">IN</span>
              LinkedIn
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;