import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Responsive School Website',
    description: 'A fully responsive school website built with modern design principles, featuring multiple pages and mobile-first layout.',
    image: 'https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    liveUrl: 'https://aadhivinay.github.io./vv/',
    githubUrl: '',
    featured: false,
  },
  {
    id: 2,
    title: 'Facial Expression Analysis',
    description: 'Deep learning model that classifies facial expressions into emotion categories using convolutional neural networks.',
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'data',
    tags: ['Python', 'Deep Learning', 'CNN', 'TensorFlow'],
    liveUrl: '',
    githubUrl: 'https://github.com/aadhivinay',
    featured: false,
  },
  {
    id: 3,
    title: 'Quiz Mobile Application',
    description: 'Interactive quiz mobile app with dynamic questions, scoring system, and a clean user-friendly interface built for Android.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'web',
    tags: ['Kotlin', 'Android', 'XML'],
    liveUrl: '',
    githubUrl: 'https://github.com/aadhivinay/Quiz',
    featured: false,
  },
  {
    id: 4,
    title: 'Sales & Revenue Dashboard',
    description: 'Comprehensive Power BI dashboard analyzing sales trends, revenue patterns, and business insights.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'data',
    tags: ['Excel', 'Power BI', 'Data Visualization'],
    liveUrl: 'https://drive.google.com/file/d/1um3rhmvoduh2qNrWWl6PtmPQp3z0YeII/view?usp=drive_link',
    githubUrl: '',
    featured: false,
  },
  {
    id: 5,
    title: 'Kulture Hire Analysis',
    description: 'HR analytics project focusing on recruitment patterns and employee engagement metrics using Python.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'data',
    tags: ['Python', 'Data Analysis', 'HR Analytics'],
    liveUrl: 'https://docs.google.com/presentation/d/1iLwzu2bgn3qeQoIVIDyKO__87ZOk08a4/edit?usp=drive_link&ouid=117309196009082470976&rtpof=true&sd=true',
    githubUrl: '',
    featured: false,
  },
  {
    id: 6,
    title: 'Email Spam Filter',
    description: 'Machine learning model to identify and filter spam emails with high accuracy using NLP techniques.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'data',
    tags: ['Python', 'Machine Learning', 'NLP'],
    liveUrl: 'https://www.kaggle.com/code/aadhivinay/build-spam-filter-identify-spam-e-mails',
    githubUrl: '',
    featured: false,
  },
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web & Mobile' },
  { id: 'data', label: 'Data & ML' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-ink-50 dark:bg-ink-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          label="Projects"
          title="Technical projects"
          description="Additional work in web development, data analytics, and machine learning beyond the SAP capstone."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 lg:mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-enterprise-600 text-white shadow-md shadow-enterprise-500/20'
                  : 'bg-white dark:bg-ink-900 text-ink-500 dark:text-ink-400 border border-ink-200 dark:border-ink-800 hover:border-enterprise-300 dark:hover:border-enterprise-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => {
              const hasLinks = p.liveUrl || p.githubUrl;
              return (
                <motion.article
                  key={p.id}
                  className="group bg-white dark:bg-ink-900 rounded-2xl overflow-hidden border border-ink-200/60 dark:border-ink-800 hover:border-enterprise-300 dark:hover:border-enterprise-700 hover:shadow-card-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  layout
                  data-cursor="view"
                  data-cursor-label="VIEW"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 sm:h-52">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[500ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Desktop overlay links */}
                    {hasLinks && (
                      <div className="absolute inset-0 hidden sm:flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live site for ${p.title}`}
                            className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-ink-800 hover:bg-enterprise-600 hover:text-white shadow-lg transition-colors duration-150"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${p.title}`}
                            className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-ink-800 hover:bg-ink-800 hover:text-white shadow-lg transition-colors duration-150"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    )}

                    {/* VIEW indicator */}
                    <div className="absolute bottom-3 right-3 hidden sm:flex items-center gap-1 text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-ink-900 dark:text-white mb-2 group-hover:text-enterprise-600 dark:group-hover:text-enterprise-400 transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-ink-500 dark:text-ink-400 text-sm mb-4 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-enterprise-50 dark:bg-enterprise-900/30 text-enterprise-700 dark:text-enterprise-300 text-xs rounded-lg font-medium border border-enterprise-100 dark:border-enterprise-800/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Mobile link buttons */}
                    {hasLinks && (
                      <div className="flex gap-2 mt-4 sm:hidden">
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live site for ${p.title}`}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-enterprise-50 dark:bg-enterprise-900/30 text-enterprise-700 dark:text-enterprise-300 border border-enterprise-100 dark:border-enterprise-800/40 transition-colors"
                          >
                            <ExternalLink size={14} />
                            Live
                          </a>
                        )}
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${p.title}`}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 border border-ink-200 dark:border-ink-700 transition-colors"
                          >
                            <Github size={14} />
                            Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
