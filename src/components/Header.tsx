import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const navItems = [
  { href: '#home', label: 'Home', num: '01' },
  { href: '#about', label: 'Profile', num: '02' },
  { href: '#expertise', label: 'Expertise', num: '03' },
  { href: '#processes', label: 'Processes', num: '04' },
  { href: '#capstone', label: 'Capstone', num: '05' },
  { href: '#experience', label: 'Experience', num: '06' },
  { href: '#projects', label: 'Projects', num: '07' },
  { href: '#contact', label: 'Contact', num: '08' },
];

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalSections = navItems.length;
      const current = navItems.findIndex(item => {
        const el = document.getElementById(item.href.substring(1));
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });
      if (current !== -1) {
        setActiveSection(navItems[current].href.substring(1));
        setScrollProgress((current + 1) / totalSections);
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(window.scrollY / docHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeIndex = navItems.findIndex(item => item.href === `#${activeSection}`);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-ink-950/80 backdrop-blur-2xl border-b border-ink-800/50'
              : 'bg-white/80 backdrop-blur-2xl border-b border-ink-200/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`text-base font-bold tracking-tight transition-colors ${
                isDark ? 'text-white hover:text-enterprise-400' : 'text-ink-900 hover:text-enterprise-600'
              }`}
            >
              Aadhi Vinay
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? isDark
                          ? 'text-enterprise-400'
                          : 'text-enterprise-600'
                        : isDark
                          ? 'text-ink-400 hover:text-white'
                          : 'text-ink-500 hover:text-ink-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className={`absolute -bottom-1 left-3 right-3 h-0.5 rounded-full ${
                          isDark ? 'bg-enterprise-400' : 'bg-enterprise-600'
                        }`}
                      />
                    )}
                  </a>
                );
              })}

              {/* Progress indicator */}
              <div className="ml-3 flex items-center gap-2 px-3 py-2">
                <span className="section-number text-xs font-bold text-enterprise-600 dark:text-enterprise-400">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-ink-300 dark:text-ink-600">/</span>
                <span className="section-number text-xs text-ink-400 dark:text-ink-600">
                  {String(navItems.length).padStart(2, '0')}
                </span>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`ml-1 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isDark ? 'text-amber-400 hover:bg-ink-800' : 'text-ink-500 hover:bg-ink-100'
                }`}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'moon' : 'sun'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Moon size={18} /> : <Sun size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isDark ? 'text-amber-400 hover:bg-ink-800' : 'text-ink-500 hover:bg-ink-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isDark ? 'text-white hover:bg-ink-800' : 'text-ink-900 hover:bg-ink-100'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink-200/30 dark:bg-ink-800/30">
          <div
            className="h-full bg-gradient-to-r from-enterprise-500 to-enterprise-700 transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed inset-0 z-40 lg:hidden bg-white dark:bg-ink-950 flex flex-col justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-baseline gap-4 py-3 text-2xl font-bold tracking-tight transition-colors ${
                      isActive
                        ? 'text-enterprise-600 dark:text-enterprise-400'
                        : isDark
                          ? 'text-ink-400 hover:text-white'
                          : 'text-ink-500 hover:text-ink-900'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <span className="section-number text-sm font-bold text-enterprise-400 dark:text-enterprise-700">
                      {item.num}
                    </span>
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
