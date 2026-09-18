import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Flag, Layers, CheckCircle2, FileText, Award, ChevronDown } from 'lucide-react';

const sprints = [
  {
    num: '01',
    icon: Flag,
    title: 'Foundation & Organization',
    subtitle: 'Foundation / Organization',
    points: ['Organizational structure setup', 'Enterprise configuration fundamentals', 'Master data framework'],
  },
  {
    num: '02',
    icon: Layers,
    title: 'Procure-to-Pay — MM & FI',
    subtitle: 'P2P — MM & FI',
    points: ['Material and vendor master data', 'Purchase requisition to invoice cycle', 'MM-FI integration and accounting documents'],
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'SD / Business Processes',
    subtitle: 'SD / Business Processes',
    points: ['Order-to-Cash cycle', 'Sales orders, delivery, and billing', 'SD-FI integration and pricing'],
  },
  {
    num: '04',
    icon: FileText,
    title: 'Testing / Defect Reporting',
    subtitle: 'Testing / Test Execution / Defect Reporting',
    points: ['Test case preparation and execution', 'Defect logging in Jira and Xray', 'Regression and retesting cycles'],
  },
  {
    num: '05',
    icon: Award,
    title: 'Final Documentation / Project Closure',
    subtitle: 'Final Documentation / Project Closure',
    points: ['Complete project documentation', 'Process walkthrough and sign-off', 'Capstone review and closure'],
  },
];

const caseStudySections = [
  { label: 'Challenge', value: 'Apply SAP S/4HANA training to a realistic business scenario covering organizational setup, master data, P2P and O2C cycles, module integration, and testing.' },
  { label: 'Approach', value: 'Structured the project into five sprints, each building on the previous — from organizational structure through full process execution, testing, and closure.' },
  { label: 'Business Processes', value: 'Procure-to-Pay (MM & FI) and Order-to-Cash (SD & FI), with MM-FI and SD-FI integration across master data, transactions, and accounting.' },
  { label: 'Testing', value: 'Test case preparation, execution, defect reporting in Jira and Xray, regression testing, and retesting across all sprints.' },
  { label: 'Deliverables', value: 'Complete project documentation, process walkthroughs, and capstone closure — demonstrating end-to-end SAP functional understanding.' },
];

const tags = ['SAP S/4HANA', 'SAP MM', 'SAP FI', 'SAP SD', 'P2P', 'O2C', 'Testing', 'Jira / Xray'];

export default function SapCapstone() {
  const [expanded, setExpanded] = useState(false);
  const [activeSprint, setActiveSprint] = useState<number | null>(null);

  return (
    <section id="capstone" className="py-20 lg:py-32 bg-ink-50 dark:bg-ink-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-enterprise-500 via-enterprise-700 to-enterprise-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          label="Capstone"
          title="SAP Smart Field Transformation"
          description="SAP Consultant Capstone — a business-process-oriented project covering organizational structure, master data, P2P, O2C, integration, testing, and documentation."
        />

        {/* Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gradient-to-r from-enterprise-500 to-enterprise-700 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-md"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Case study sections */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
          {caseStudySections.map((section, i) => (
            <motion.div
              key={section.label}
              className="p-5 rounded-xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 hover:border-enterprise-300 dark:hover:border-enterprise-700 hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true, margin: '-80px' }}
              data-cursor="explore"
            >
              <h4 className="text-xs font-bold tracking-wider uppercase text-enterprise-600 dark:text-enterprise-400 mb-3">
                {section.label}
              </h4>
              <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">
                {section.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Expand/Collapse button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="capstone-sprints"
            className="group inline-flex items-center gap-2 bg-enterprise-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-enterprise-500/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <ChevronDown size={18} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
            {expanded ? 'Hide Sprint Details' : 'View Sprint Details'}
          </button>
        </div>

        {/* Sprint timeline */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id="capstone-sprints"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-enterprise-300 to-enterprise-700 dark:from-enterprise-700 dark:to-enterprise-900" />

                <div className="space-y-4">
                  {sprints.map((sprint, i) => (
                    <motion.div
                      key={sprint.num}
                      className="relative pl-16 sm:pl-20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="absolute left-0 top-0 z-10">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-enterprise-500 to-enterprise-700 flex items-center justify-center shadow-lg ring-4 ring-ink-50 dark:ring-ink-950">
                          <sprint.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                        </div>
                      </div>

                      <div
                        className="bg-white dark:bg-ink-900 rounded-xl p-5 sm:p-6 shadow-card hover:shadow-card-hover border border-ink-200 dark:border-ink-800 transition-all duration-200 cursor-pointer"
                        onClick={() => setActiveSprint(activeSprint === i ? null : i)}
                        data-cursor="explore"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="section-number text-xs font-bold text-enterprise-500">SPRINT {sprint.num}</span>
                          </div>
                          <ChevronDown
                            size={16}
                            className={`text-ink-400 transition-transform duration-200 ${activeSprint === i ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <h3 className="text-base font-bold text-ink-900 dark:text-white mb-1">
                          {sprint.title}
                        </h3>
                        <p className="text-enterprise-600 dark:text-enterprise-400 text-sm font-medium mb-3">
                          {sprint.subtitle}
                        </p>

                        <AnimatePresence>
                          {activeSprint === i && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div className="flex flex-wrap gap-2 pt-2">
                                {sprint.points.map((point) => (
                                  <span
                                    key={point}
                                    className="px-3 py-1.5 bg-ink-50 dark:bg-ink-800 text-ink-600 dark:text-ink-400 text-xs sm:text-sm rounded-lg font-medium border border-ink-200/60 dark:border-ink-700/60"
                                  >
                                    {point}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          className="text-center text-ink-400 dark:text-ink-500 text-xs sm:text-sm mt-10 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          This capstone reflects training and project experience, not commercial SAP implementation work.
        </motion.p>
      </div>
    </section>
  );
}
