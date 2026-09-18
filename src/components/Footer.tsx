import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const focusAreas = ['SAP Consulting', 'Business Processes', 'Technology', 'Analytics'];

const socials = [
  { icon: Mail, href: 'mailto:aadhivinay2002@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aadhi-vinay-063251234/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/aadhivinay', label: 'GitHub' },
];

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Profile' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#processes', label: 'Processes' },
  { href: '#capstone', label: 'Capstone' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-enterprise-500 via-enterprise-700 to-enterprise-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final slide statement */}
        <motion.div
          className="pt-20 lg:pt-28 pb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl mx-auto text-balance">
            Let's build something meaningful.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-ink-900 border border-ink-800 rounded-lg text-sm font-medium text-ink-400"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="border-t border-ink-800 py-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold tracking-tight mb-3">Aadhi Vinay</h3>
              <p className="text-ink-400 text-sm leading-relaxed mb-4">
                SAP Consultant — MM · FI · SD · S/4HANA.
                Transforming business processes through SAP, analytics, and technology.
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 bg-ink-900 rounded-xl flex items-center justify-center text-ink-400 hover:text-enterprise-400 hover:bg-ink-800 border border-ink-800 hover:border-enterprise-700 transition-all duration-200"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Nav */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs font-bold tracking-wider uppercase text-ink-500 mb-5">Navigate</h4>
              <ul className="grid grid-cols-2 gap-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-ink-400 hover:text-enterprise-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-enterprise-500 rounded-full mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs font-bold tracking-wider uppercase text-ink-500 mb-5">Get In Touch</h4>
              <a
                href="mailto:aadhivinay2002@gmail.com"
                className="inline-flex items-center gap-2 text-ink-400 hover:text-enterprise-400 transition-colors text-sm group"
              >
                aadhivinay2002@gmail.com
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-ink-500 text-sm mt-3">Hyderabad, India</p>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ink-800 py-6">
          <p className="text-ink-500 text-xs text-center">
            © 2025 Aadhi Vinay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
