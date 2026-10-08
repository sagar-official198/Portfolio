import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#skills' },
  {
    name: 'GitHub',
    href: 'https://github.com/sagar-official198',
    external: true,
  },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const scrollDirection = useScrollDirection();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress(
        height > 0 ? (scrollTop / height) * 100 : 0
      );

      const sections = navLinks
        .filter((link) => !link.external)
        .map((link) => link.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (
            rect.top <= 150 &&
            rect.bottom >= 150
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (
    href: string,
    external?: boolean
  ) => {
    if (external) {
      window.open(
        href,
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: scrollDirection === 'down' ? -100 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
      >

        {/* Progress */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple"
          style={{
            width: `${scrollProgress}%`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNavigation('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-cyan flex items-center justify-center text-white font-black shadow-lg group-hover:scale-110 transition-transform">
              AS
            </div>

            <div className="hidden sm:block text-left">
              <p className="font-black text-sm text-slate-900 dark:text-white">
                ABHIRAJ SAGAR
              </p>

              <p className="text-[9px] font-mono text-gray-500 tracking-widest">
                FULL-STACK DEVELOPER
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => {
              const section =
                link.href.startsWith('#')
                  ? link.href.substring(1)
                  : '';

              const isActive =
                !link.external &&
                activeSection === section;

              return (
                <button
                  key={link.name}
                  onClick={() =>
                    handleNavigation(
                      link.href,
                      link.external
                    )
                  }
                  className={`relative px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-indigo'
                      : 'text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-indigo rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">

            <a
              href="https://www.linkedin.com/in/abhiraj-sagar-777220239/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-500 hover:text-brand-cyan transition-all"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href="https://github.com/sagar-official198"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-500 hover:text-brand-cyan transition-all"
            >
              <GithubIcon size={16} />
            </a>

            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-500 hover:text-brand-indigo transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            <a
              href="/Abhiraj_Sagar_Resume.pdf"
              download
              className="ml-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-bold flex items-center gap-2 hover:-translate-y-1 transition-transform"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-2">

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() =>
                    handleNavigation(
                      link.href,
                      link.external
                    )
                  }
                  className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-brand-indigo transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <div className="border-t border-black/5 dark:border-white/5 mt-3 pt-4 flex gap-3">

                <a
                  href="https://www.linkedin.com/in/abhiraj-sagar-777220239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl glass flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/sagar-official198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl glass flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>

              </div>

              <a
                href="/Abhiraj_Sagar_Resume.pdf"
                download
                className="mt-2 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center gap-2 text-sm font-bold"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
