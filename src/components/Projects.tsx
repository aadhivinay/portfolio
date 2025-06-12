import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Tindog',
      description: 'A modern dating app interface for dogs, built with responsive design and interactive elements.',
      image: './dog.png',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://aadhivinay.github.io./bv/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Apple Clone',
      description: 'Pixel-perfect recreation of Apple\'s website with smooth animations and modern design principles.',
      image: './apple.png',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://aadhivinay.github.io./iv/',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Quiz Application',
      description: 'Interactive quiz application with dynamic questions, scoring system, and user-friendly interface.',
      image: './quiz.png',
      category: 'web',
      tags: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/aadhivinay/Quiz'
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'Responsive portfolio website showcasing projects and skills with modern design aesthetics.',
      image: './Vinay profile.jpg',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://aadhivinay.github.io./vv/',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Sales & Revenue Dashboard',
      description: 'Comprehensive dashboard analyzing sales trends, revenue patterns, and business insights.',
      image: './sales.png',
      category: 'data',
      tags: ['Excel', 'Data Visualization', 'Analytics'],
      liveUrl: 'https://drive.google.com/file/d/1um3rhmvoduh2qNrWWl6PtmPQp3z0YeII/view?usp=drive_link',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'KultureHire Survey Data Analysis',
      description: 'HR analytics project focusing on recruitment patterns and employee engagement metrics.',
      image: './kulture.png',
      category: 'data',
      tags: ['Python', 'Data Analysis', 'HR Analytics'],
      liveUrl: 'https://docs.google.com/presentation/d/1iLwzu2bgn3qeQoIVIDyKO__87ZOk08a4/edit?usp=drive_link&ouid=117309196009082470976&rtpof=true&sd=true',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Email Spam Filter',
      description: 'Machine learning model to identify and filter spam emails with high accuracy rates.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'data',
      tags: ['Python', 'Machine Learning', 'NLP'],
      liveUrl: 'https://www.kaggle.com/code/aadhivinay/build-spam-filter-identify-spam-e-mails',
      githubUrl: '#'
    },
    {
      id: 8,
      title: 'Power Consumption Analysis',
      description: 'Data analysis of power consumption patterns and energy efficiency optimization strategies.',
      image: './power.png',
      category: 'data',
      tags: ['Python', 'Data Visualization', 'Analytics'],
      liveUrl: 'https://www.kaggle.com/code/aadhivinay/power-consumption-data-analysis',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'data', label: 'Data Analysis' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-slate-50 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl !== '#' && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-cyan-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.githubUrl !== '#' && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;