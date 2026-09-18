import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { GraduationCap, Layers, BarChart3, Code, Users, Briefcase, ArrowUpRight } from 'lucide-react';

const profileBlocks = [
  { label: 'Education', value: 'B.Tech — Computer Science & Engineering', icon: GraduationCap },
  { label: 'SAP Focus', value: 'MM · FI · SD · S/4HANA', icon: Layers },
  { label: 'Analytics', value: 'Excel · SQL · Power BI', icon: BarChart3 },
  { label: 'Background', value: 'Data Analytics · Software Development', icon: Briefcase },
];

const skillCategories = [
  {
    key: 'sap',
    label: 'SAP',
    icon: Layers,
    skills: ['SAP S/4HANA', 'SAP MM', 'SAP FI', 'SAP SD', 'P2P', 'O2C', 'Master Data', 'Testing', 'Jira', 'Xray'],
  },
  {
    key: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    skills: ['Excel', 'Power BI', 'SQL', 'MySQL', 'Data Cleaning', 'Dashboard Development', 'Reporting', 'Trend Analysis'],
  },
  {
    key: 'development',
    label: 'Development',
    icon: Code,
    skills: ['Python', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Kotlin', 'XML'],
  },
  {
    key: 'professional',
    label: 'Professional',
    icon: Users,
    skills: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Teamwork', 'Collaboration', 'Documentation', 'Attention to Detail', 'Adaptability', 'Learning Agility'],
  },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState('sap');
  const activeSkills = skillCategories.find(c => c.key === activeCategory)!;

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-ink-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          label="Profile"
          title="Technology background. Business process mindset. SAP-focused future."
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left: Profile statement + blocks */}
          <div>
            <motion.div
              className="space-y-4 text-ink-600 dark:text-ink-400 text-base leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <p>
                I am a B.Tech Computer Science and Engineering graduate currently pursuing
                hands-on SAP S/4HANA training through the SAP Smart Field Transformation program.
                My training covers SAP MM, FI, and SD modules with a strong focus on real-world
                business processes.
              </p>
              <p>
                I have completed a comprehensive SAP capstone project spanning Procure-to-Pay (P2P)
                and Order-to-Cash (O2C) cycles, MM-FI and SD-FI integration, testing, defect
                reporting with Jira and Xray, and full project documentation.
              </p>
              <p>
                Previously, I worked as a Data Analyst Intern at Kulture Hire, where I developed
                interactive Power BI dashboards, wrote optimized SQL queries, and delivered
                actionable business insights. This analytical background complements my SAP
                functional training and strengthens my problem-solving approach.
              </p>
            </motion.div>

            {/* Profile blocks */}
            <div className="grid sm:grid-cols-2 gap-4">
              {profileBlocks.map((block, i) => (
                <motion.div
                  key={block.label}
                  className="group p-5 rounded-xl bg-ink-50 dark:bg-ink-800/50 border border-ink-200/60 dark:border-ink-700/60 hover:border-enterprise-300 dark:hover:border-enterprise-700 hover:shadow-card-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true, margin: '-80px' }}
                  data-cursor="explore"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <block.icon size={16} className="text-enterprise-500" strokeWidth={2} />
                    <span className="text-xs font-bold tracking-wider uppercase text-enterprise-600 dark:text-enterprise-400">
                      {block.label}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-ink-800 dark:text-ink-200 leading-snug">
                    {block.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Skill Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="sticky top-24">
              <h3 className="text-sm font-bold tracking-wider uppercase text-ink-400 dark:text-ink-500 mb-6">
                Skill Map
              </h3>

              {/* Category selector */}
              <div className="flex flex-wrap gap-2 mb-8">
                {skillCategories.map((cat) => {
                  const isActive = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-enterprise-600 text-white shadow-md shadow-enterprise-500/20'
                          : 'bg-ink-50 dark:bg-ink-800/60 text-ink-500 dark:text-ink-400 border border-ink-200 dark:border-ink-700 hover:border-enterprise-300 dark:hover:border-enterprise-700'
                      }`}
                    >
                      <cat.icon size={15} />
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Skills display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-wrap gap-2.5"
                >
                  {activeSkills.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="px-4 py-2.5 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-300 rounded-xl text-sm font-medium border border-ink-200 dark:border-ink-700 hover:border-enterprise-300 dark:hover:border-enterprise-700 hover:text-enterprise-700 dark:hover:text-enterprise-400 hover:shadow-sm transition-all duration-150"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
