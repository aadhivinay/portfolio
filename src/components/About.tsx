import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Target, label: 'Projects Completed', value: '15+' },
    { icon: Award, label: 'Years Experience', value: '1+' },
    { icon: Users, label: 'Client Satisfaction', value: '100%' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Get to know me better and discover my journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              GDSC TKRCET Campaign Facilitator
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                I am a passionate Data Analyst and Web Designer who graduated with a Bachelor of Technology 
                in Computer Science Engineering from TKR Educational Institutions.
              </p>
              <p>
                With a strong foundation in data analysis and web development, I love transforming complex 
                data into meaningful insights and creating engaging digital experiences. My expertise spans 
                across competitive coding with C++ (5-star HackerRank rating) and Python development.
              </p>
              <p>
                As a GDSC Campaign Facilitator (Kotlin), I led initiatives that bridge technology and community, 
                fostering innovation and learning among peers.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="mt-8 space-y-4">
              {[
                { skill: 'Data Analysis', percentage: 90 },
                { skill: 'Web Development', percentage: 85 },
                { skill: 'Problem Solving', percentage: 95 },
                { skill: 'Python Programming', percentage: 88 },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item.skill}</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Working on projects"
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;