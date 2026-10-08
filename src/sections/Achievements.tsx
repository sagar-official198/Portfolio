import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Zap,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Achievement {
  title: string;
  metric: string;
  sub: string;
  details: string;
  icon: React.ReactNode;
  color: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'Coding Decoding War',
    metric: 'Qualified',
    sub: 'CGC College',
    details:
      'Qualified in a coding challenge focused on real-time problem-solving and output accuracy.',
    icon: <GraduationCap size={22} />,
    color: 'indigo',
  },

  {
    title: 'Innovate India Coding Championship',
    metric: 'Participant',
    sub: 'National Level',
    details:
      'Participated in a national-level coding competition that showcased algorithmic and logic-building skills.',
    icon: <Award size={22} />,
    color: 'purple',
  },

  {
    title: 'Senior NCC Cadet',
    metric: 'NCC',
    sub: 'Leadership & Teamwork',
    details:
      'Participated in parades, drills, and national-level camps, building teamwork and coordination skills.',
    icon: <Cpu size={22} />,
    color: 'cyan',
  },

  {
    title: 'Expense Management Application',
    metric: 'Smart Expense',
    sub: 'Full Stack MERN',
    details:
      'Developed Smart Expense, a full-stack expense tracking application with salary management, expense tracking, savings calculation, dashboard analytics, authentication, and MongoDB integration.',
    icon: <Zap size={22} />,
    color: 'purple',
  },
];

export const Achievements: React.FC = () => {
  const triggerConfetti = (color: string) => {
    let colors = ['#5E6AD2', '#8A94E5', '#38BDF8'];

    if (color === 'indigo') {
      colors = ['#5E6AD2', '#4F46E5'];
    }

    if (color === 'purple') {
      colors = ['#8A94E5', '#A5B4FC'];
    }

    if (color === 'cyan') {
      colors = ['#38BDF8', '#0EA5E9'];
    }

    confetti({
      particleCount: 120,
      spread: 70,
      colors: colors,
      origin: {
        y: 0.7,
      },
    });
  };

  return (
    <section
      id="achievements"
      className="py-16 md:py-20 relative overflow-hidden bg-grid-pattern"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ==================== HEADING ==================== */}

        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Key{' '}
            <span className="text-brand-cyan">
              Achievements
            </span>
          </motion.h2>

          {/* Heading Line */}
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: '80px',
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />

          {/* Subtitle */}
          <p className="text-xs text-gray-500 dark:text-gray-400 font-mono tracking-widest uppercase mt-4">
            A glimpse of my journey and development milestones
          </p>
        </div>

        {/* ==================== ACHIEVEMENT GRID ==================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
              }}
              onClick={() =>
                triggerConfetti(item.color)
              }
              className="relative p-5 md:p-6 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col md:flex-row gap-6 items-start md:items-center cursor-pointer select-none group overflow-hidden"
            >

              {/* ==================== CORNER GLOW ==================== */}

              <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-transparent blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-brand-cyan/10" />

              {/* ==================== ICON ==================== */}

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan transition-transform duration-300 group-hover:scale-110 relative z-10">
                {item.icon}
              </div>

              {/* ==================== CONTENT ==================== */}

              <div className="flex-1 text-left relative z-10">

                {/* Metric + Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">

                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white font-sans tracking-tight transition-colors duration-300 group-hover:text-brand-cyan">
                    {item.metric}
                  </h3>

                  <span className="text-[9px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-brand-cyan/5 dark:bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/15 dark:border-brand-cyan/20 transition-all duration-300 self-start sm:self-center">
                    {item.sub}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider font-mono">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {item.details}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
