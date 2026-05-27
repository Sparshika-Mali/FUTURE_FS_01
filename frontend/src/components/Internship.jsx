import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, BookOpen, TrendingUp } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-20 relative bg-indigo-50 dark:bg-indigo-950/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-full"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-6 mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Future Interns</h3>
                  <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">Full Stack Web Development Intern</p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-gray-500 dark:text-gray-400 font-medium">Present</p>
                <p className="text-sm text-gray-400">Remote</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              
              {/* Journey & Roadmap */}
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-xl font-semibold mb-3">
                    <BookOpen className="text-purple-500" size={20} /> Learning Roadmap
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-2">
                    <li>Mastering React.js and modern UI/UX design.</li>
                    <li>Building robust backends with Node.js & Express.</li>
                    <li>Database design and management with MySQL.</li>
                    <li>Deploying applications to cloud platforms.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="flex items-center gap-2 text-xl font-semibold mb-3">
                    <TrendingUp className="text-green-500" size={20} /> Professional Growth
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 ml-2">
                    Gaining hands-on experience by contributing to real-world tasks, participating in code reviews, and adopting industry-standard version control workflows.
                  </p>
                </div>
              </div>

              {/* GitHub & Journey */}
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-xl font-semibold mb-3">
                    <MapPin className="text-blue-500" size={20} /> Internship Journey
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 ml-2">
                    My journey at Future Interns has been incredibly rewarding. I'm taking ownership of complex components, bridging the gap between design and functionality, and learning to write cleaner, more efficient code every day.
                  </p>
                </div>


              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
