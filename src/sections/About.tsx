import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Sparkles,
} from 'lucide-react';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-20 relative overflow-hidden bg-grid-pattern"
    >
      {/* Background Glows */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] rounded-full bg-brand-cyan/10 blur-[100px] pointer-events-none" />

      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            About <span className="text-brand-indigo">Me</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >

          {/* Bio */}
          <motion.div
            className="flex flex-col items-start text-left"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              Full-Stack MERN Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Hi, I'm Abhiraj Sagar, a Full-Stack MERN Developer passionate
              about building modern, responsive, and user-friendly web
              applications. I work with React.js, JavaScript, Node.js,
              Express.js, MongoDB, REST APIs, JWT authentication, and
              Tailwind CSS.
              <br />
              <br />
              I enjoy developing complete applications from frontend
              interfaces to backend APIs and database integration. I focus
              on writing clean, maintainable code and creating applications
              that provide a smooth user experience.
              <br />
              <br />
              My projects include SmartHire, an AI-powered recruitment and
              ATS platform, and Smart Expense, a full-stack expense
              management application built using the MERN stack.
            </p>

            {/* Education Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">

              {/* MCA */}
              <div className="relative p-5 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 flex gap-4 shadow-lg overflow-hidden group">

                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-cyan/10 text-brand-cyan shrink-0 relative z-10">
                  <GraduationCap size={25} />
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                    Post Graduation
                  </p>

                  <h4 className="font-bold text-slate-800 dark:text-white">
                    MCA
                  </h4>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Babu Banarasi Das University, UP
                  </p>

                  <p className="text-xs text-brand-cyan mt-2">
                    Sep 2024 - Jun 2026
                  </p>
                </div>
              </div>

              {/* BCA */}
              <div className="relative p-5 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-purple/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 flex gap-4 shadow-lg overflow-hidden group">

                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-purple/10" />

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-purple/10 text-brand-purple shrink-0 relative z-10">
                  <BookOpen size={24} />
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                    Graduation
                  </p>

                  <h4 className="font-bold text-slate-800 dark:text-white">
                    BCA
                  </h4>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Chandigarh Engineering College, Punjab
                  </p>

                  <p className="text-xs text-brand-purple mt-2">
                    Bachelor of Computer Applications
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">

              <div className="p-5 rounded-3xl glass text-center">
                <Briefcase
                  className="mx-auto text-brand-cyan mb-3"
                  size={24}
                />

                <h4 className="font-bold text-slate-800 dark:text-white">
                  MERN Stack
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  Full-Stack Development
                </p>
              </div>

              <div className="p-5 rounded-3xl glass text-center">
                <Sparkles
                  className="mx-auto text-brand-purple mb-3"
                  size={24}
                />

                <h4 className="font-bold text-slate-800 dark:text-white">
                  SmartHire
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  AI-Powered Recruitment
                </p>
              </div>

              <div className="p-5 rounded-3xl glass text-center">
                <Briefcase
                  className="mx-auto text-brand-indigo mb-3"
                  size={24}
                />

                <h4 className="font-bold text-slate-800 dark:text-white">
                  Smart Expense
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  Expense Management
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
