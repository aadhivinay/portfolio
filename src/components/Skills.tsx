import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Code, Lightbulb, Laptop, Database, Globe, Brain, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and creating visual stories through the lens. The art of photography continues to inspire my creative journey.',
      level: 90,
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Code,
      title: 'Competitive Coding',
      description: 'Proficient in C++ with 5-star rating on HackerRank. Continuously improving Python skills through data analysis projects.',
      level: 95,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Excel in analytical thinking and breaking down complex issues. Creative innovation drives my approach to finding solutions.',
      level: 88,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Laptop,
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks. Creating responsive and interactive user experiences.',
      level: 85,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Transforming raw data into actionable insights using Python, SQL, and visualization tools.',
      level: 92,
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Understanding user behavior and creating data-driven marketing strategies for better engagement.',
      level: 75,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            What I bring to the table - a diverse set of technical and creative abilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 5 }}
              >
                <skill.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Proficiency
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'Kotlin', 'MySQL', 'Power BI', 'Excel', 'HTML', 'CSS',
              'JavaScript', 'React', 
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 font-medium shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;