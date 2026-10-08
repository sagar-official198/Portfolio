import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  points: string[];
}

const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Babu Banarasi Das University, UP, India',
    period: 'Sep 2024 - Jun 2026',
    description: 'Postgraduate studies focused on software development, programming, databases, and modern web technologies.',
    points: ['Strengthened full-stack development and problem-solving skills.', 'Built practical MERN-stack applications using RESTful APIs.'],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Chandigarh Engineering College, Punjab, India',
    period: 'Jul 2020 - Mar 2023',
    description: 'Undergraduate computer applications program covering programming, databases, and software fundamentals.',
    points: ['Built a foundation in programming, databases, and object-oriented programming.', 'Developed algorithmic thinking and structured problem-solving skills.'],
  },
];

export const Experience: React.FC = () => (
  <section id="experience" className="py-16 md:py-20 relative bg-grid-pattern">
    <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div className="text-center mb-16">
        <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Education <span className="text-brand-indigo">Journey</span>
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full" />
      </div>
      <div className="max-w-4xl mx-auto relative pl-6 md:pl-10">
        <div className="absolute left-[7px] md:left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-indigo/10 rounded-full" />
        <div className="flex flex-col gap-10">
          {educationData.map((item, idx) => (
            <motion.div key={item.degree} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: idx * 0.15 }} className="relative">
              <div className="absolute -left-[30px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border border-brand-cyan z-10 shadow-md bg-brand-cyan/15 text-brand-cyan"><GraduationCap size={14} /></div>
              <div className="relative bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-black/5 dark:border-white/5 p-5 md:p-6 rounded-3xl transition-all duration-500 shadow-lg hover:border-brand-cyan/40 hover:shadow-[0_20px_40px_rgba(94,106,210,0.15)] hover:-translate-y-2 overflow-hidden group">
                <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full blur-2xl transition-all pointer-events-none group-hover:bg-brand-cyan/10" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 relative z-10">
                  <div><h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-brand-cyan">{item.degree}</h3><p className="text-xs md:text-sm font-semibold text-brand-cyan mt-1 font-mono tracking-wide">{item.institution}</p></div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-cyan/5 dark:bg-brand-cyan/10 border border-brand-cyan/15 rounded-full text-[9px] font-mono text-brand-cyan font-semibold self-start md:self-center"><Calendar size={12} />{item.period}</div>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10">{item.description}</p>
                <div className="flex flex-col gap-2.5 relative z-10">{item.points.map((point) => <div key={point} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300"><span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-1.5" /><span className="leading-relaxed">{point}</span></div>)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
