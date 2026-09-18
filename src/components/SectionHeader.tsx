import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ number, label, title, description, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={`mb-12 lg:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      <motion.div
        className={`flex items-center gap-4 mb-6 ${isCenter ? 'justify-center' : ''}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="section-number text-5xl lg:text-7xl font-bold text-enterprise-200 dark:text-enterprise-900/50 leading-none">
          {number}
        </span>
        <div className="h-px w-12 bg-enterprise-300 dark:bg-enterprise-700"></div>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-enterprise-600 dark:text-enterprise-400">
          {label}
        </span>
      </motion.div>

      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ink-900 dark:text-white tracking-tight leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className={`text-ink-500 dark:text-ink-400 text-base sm:text-lg mt-4 max-w-2xl ${isCenter ? 'mx-auto' : ''} leading-relaxed`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
