import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1rJBPBQg8kNfbFkpXABba7sezVos9YFQK/view?usp=drive_link';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-50 via-white to-ink-50 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-enterprise-100/40 dark:bg-enterprise-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-enterprise-200/30 dark:bg-enterprise-800/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgb(37 99 235) 1px, transparent 1px), linear-gradient(90deg, rgb(37 99 235) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="show" className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <motion.div variants={item} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-enterprise-500" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-enterprise-600 dark:text-enterprise-400">
                  SAP Consulting &middot; Business Process &middot; Technology
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-ink-900 dark:text-white tracking-tight leading-[1.05]"
              >
                Aadhi Vinay
              </motion.h1>

              <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-xl sm:text-2xl font-semibold text-ink-700 dark:text-ink-200">
                  SAP Consultant
                </span>
                <span className="hidden sm:inline text-ink-300 dark:text-ink-600">|</span>
                <div className="flex gap-2">
                  {['MM', 'FI', 'SD', 'S/4HANA'].map((m) => (
                    <span key={m} className="px-2.5 py-1 text-xs font-bold tracking-wide bg-enterprise-50 dark:bg-enterprise-900/40 text-enterprise-700 dark:text-enterprise-300 rounded-md border border-enterprise-200 dark:border-enterprise-800/50">
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.p variants={item} className="mt-6 text-base sm:text-lg text-ink-500 dark:text-ink-400 leading-relaxed max-w-xl text-pretty">
                Transforming business processes through SAP, analytics, and technology.
                Computer Science graduate with hands-on S/4HANA training across MM, FI, and SD —
                with a capstone spanning P2P, O2C, integration, testing, and documentation.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#about"
                  data-cursor="explore"
                  data-cursor-label="EXPLORE"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="group inline-flex items-center justify-center gap-2 bg-enterprise-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-enterprise-500/20 hover:shadow-xl hover:shadow-enterprise-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Explore Profile
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-200 border border-ink-200 dark:border-ink-700 px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-enterprise-400 dark:hover:border-enterprise-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
              </motion.div>

              <motion.div variants={item} className="mt-8 flex gap-3">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/aadhi-vinay-063251234/', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/aadhivinay', label: 'GitHub' },
                  { icon: Mail, href: 'mailto:aadhivinay2002@gmail.com', label: 'Email' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 bg-white dark:bg-ink-800 rounded-xl flex items-center justify-center text-ink-400 dark:text-ink-500 border border-ink-200 dark:border-ink-700 hover:text-enterprise-600 dark:hover:text-enterprise-400 hover:border-enterprise-300 dark:hover:border-enterprise-700 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right: Premium Profile Portrait */}
            <motion.div variants={item} className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <ProfilePortrait />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProfilePortrait() {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
      {/* Outer animated accent ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-enterprise-200 dark:border-enterprise-800/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      {/* Dashed inner ring */}
      <motion.div
        className="absolute inset-3 rounded-full border border-dashed border-enterprise-300/60 dark:border-enterprise-700/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Offset shadow frame */}
      <div className="absolute inset-4 rounded-full bg-enterprise-100/30 dark:bg-enterprise-900/20 translate-x-2 translate-y-2" />

      {/* Portrait frame */}
      <motion.div
        className="absolute inset-4 rounded-full overflow-hidden bg-ink-100 dark:bg-ink-800 shadow-premium ring-1 ring-enterprise-200/50 dark:ring-enterprise-800/50 group"
        data-cursor="view"
        data-cursor-label="PROFILE"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img
          src="/Personal_Profile.jpeg"
          alt="Aadhi Vinay — SAP Consultant"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          loading="eager"
        />
        {/* Subtle gradient overlay at bottom for label legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 to-transparent" />
      </motion.div>

      {/* Floating label: SAP CONSULTANT */}
      <motion.div
        className="absolute -top-2 right-2 sm:right-0 bg-white dark:bg-ink-800 px-3 py-1.5 rounded-lg shadow-lg border border-enterprise-200 dark:border-ink-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      >
        <span className="text-[10px] font-bold tracking-wider uppercase text-enterprise-600 dark:text-enterprise-400">
          SAP Consultant
        </span>
      </motion.div>

      {/* Floating metadata: MM · FI · SD */}
      <motion.div
        className="absolute -bottom-2 left-2 sm:left-0 bg-enterprise-600 px-3 py-1.5 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
      >
        <span className="text-[10px] font-bold tracking-wider uppercase text-white">
          MM · FI · SD
        </span>
      </motion.div>

      {/* Corner accent dots */}
      <motion.div
        className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-enterprise-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      />
      <motion.div
        className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-enterprise-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
      />
    </div>
  );
}
