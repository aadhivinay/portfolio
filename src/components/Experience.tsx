import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Briefcase, GraduationCap, Layers, MapPin, Users } from 'lucide-react';

const timeline = [
  {
    year: '2021–2022',
    period: '2021 – 2022',
    role: 'Campaign Facilitator — Kotlin',
    org: 'Google Developer Students Club, TKR College of Engineering and Technology',
    location: 'Student Developer Community',
    icon: Users,
    points: [
      'Facilitated Kotlin language campaigns for student developers',
      'Supported community learning activities and developer engagement',
    ],
    isTraining: false,
    isVolunteer: true,
  },
  {
    year: '2024',
    period: 'Nov 2024 – Jan 2025',
    role: 'Data Analyst Intern',
    org: 'Kulture Hire',
    location: 'Hyderabad, Telangana',
    icon: Briefcase,
    points: [
      'Cleaned and analyzed datasets using Excel',
      'Developed interactive Power BI dashboards',
      'Wrote and optimized SQL queries',
      'Performed trend analysis and generated business insights',
    ],
    isTraining: false,
  },
  {
    year: '2025',
    period: '2025',
    role: 'SAP Consultant Training',
    org: 'SAP Smart Field Transformation Program',
    location: 'SAP S/4HANA — MM · FI · SD',
    icon: GraduationCap,
    points: [
      'Hands-on SAP S/4HANA training across MM, FI, and SD',
      'Business processes: Procure-to-Pay and Order-to-Cash',
      'MM-FI and SD-FI integration',
    ],
    isTraining: true,
  },
  {
    year: '2025',
    period: '2025',
    role: 'SAP Capstone Project',
    org: 'SAP Consultant Capstone',
    location: 'P2P · O2C · Testing · Documentation',
    icon: Layers,
    points: [
      'Full capstone spanning organizational structure through project closure',
      'Testing with Jira and Xray, defect reporting, regression cycles',
      'Complete project documentation and process walkthroughs',
    ],
    isTraining: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-white dark:bg-ink-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          label="Experience"
          title="Professional timeline"
          description="From data analytics to SAP functional consulting — a progression through technology and business processes."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-enterprise-300 to-enterprise-700 dark:from-enterprise-700 dark:to-enterprise-900" />

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-16 sm:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className="absolute left-0 top-0 z-10">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-enterprise-500 to-enterprise-700 flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-ink-900">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                  </div>
                </div>

                <div
                  className="bg-ink-50 dark:bg-ink-800/50 rounded-xl p-5 sm:p-6 border border-ink-200/60 dark:border-ink-700/60 hover:border-enterprise-300 dark:hover:border-enterprise-700 hover:shadow-card-hover transition-all duration-300"
                  data-cursor="explore"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="section-number text-2xl font-bold text-enterprise-600 dark:text-enterprise-400">
                      {item.year}
                    </span>
                    <span className="text-xs text-ink-400 dark:text-ink-500">{item.period}</span>
                    {item.isVolunteer && (
                      <span className="ml-auto px-2.5 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-[10px] font-bold tracking-wider uppercase rounded-md border border-teal-200 dark:border-teal-800/50">
                        Volunteer
                      </span>
                    )}
                    {item.isTraining && (
                      <span className="ml-auto px-2.5 py-1 bg-enterprise-50 dark:bg-enterprise-900/30 text-enterprise-600 dark:text-enterprise-400 text-[10px] font-bold tracking-wider uppercase rounded-md border border-enterprise-200 dark:border-enterprise-800/50">
                        Training
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-ink-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-enterprise-600 dark:text-enterprise-400 font-medium text-sm mb-2">
                    {item.org}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-ink-400 dark:text-ink-500 mb-4">
                    <MapPin size={12} />
                    {item.location}
                  </p>

                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-400">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-enterprise-500 mt-1.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-center text-ink-400 dark:text-ink-500 text-xs sm:text-sm mt-10 italic max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          SAP experience reflects training and capstone project work, not commercial SAP employment.
        </motion.p>
      </div>
    </section>
  );
}
