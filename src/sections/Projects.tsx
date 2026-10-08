import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, WalletCards, UsersRound } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

const projects = [
  {
    id: 'smart-expense', title: 'Smart Expense', subtitle: 'Personal Finance Management', icon: <WalletCards size={26} />,
    description: 'A full-stack MERN application for managing salary, expenses, savings, and financial analytics.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts'],
  },
  {
    id: 'smarthire', title: 'SmartHire', subtitle: 'AI-Powered Recruitment & ATS', icon: <UsersRound size={26} />,
    description: 'An AI-powered recruitment platform for resume screening, candidate ranking, and job matching.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Clerk'],
  },
];

export const Projects: React.FC = () => {
  React.useEffect(() => {
    if (sessionStorage.getItem('scrollToSection') === 'projects') {
      sessionStorage.removeItem('scrollToSection');
      setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    }
  }, []);

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden bg-grid-pattern">
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Featured <span className="text-brand-cyan">Projects</span></motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan mx-auto mt-3 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative flex flex-col group border border-black/5 dark:border-white/5 p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-md hover:-translate-y-1.5 hover:border-brand-cyan/40 transition-all">
              <div className="h-36 rounded-xl bg-gradient-to-br from-brand-indigo/15 via-brand-purple/10 to-brand-cyan/15 border border-brand-cyan/10 flex flex-col items-center justify-center text-brand-cyan mb-5">
                {project.icon}<span className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white">{project.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto mb-5">{project.tags.map((tag) => <span key={tag} className="px-2 py-0.5 text-[9px] font-mono rounded-full border font-semibold bg-brand-cyan/5 text-brand-cyan border-brand-cyan/15">{tag}</span>)}</div>
              <div className="flex items-center gap-2.5">
                <Link to={`/project/${project.id}`} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-brand-indigo to-brand-cyan"><ExternalLink size={12} />Case Study</Link>
                <a href="https://github.com/sagar-official198" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-[10px] font-bold uppercase tracking-wider rounded-lg"><GithubIcon size={12} />GitHub</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
