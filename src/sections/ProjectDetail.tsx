import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, WalletCards, UsersRound } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

const caseStudies = {
  'smart-expense': {
    title: 'Smart Expense', subtitle: 'Personal Expense & Finance Management System', icon: <WalletCards size={24} />,
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    overview: 'A full-stack finance management application for managing salary, expenses, savings, and financial analytics.',
    challenge: 'Creating a secure, user-specific finance experience with clear data visualisation and reliable backend APIs.',
    solution: 'Built protected JWT-based APIs with Node.js and Express.js, integrated MongoDB Atlas through Mongoose, and delivered a responsive dashboard with balance calculations, savings insights, and Recharts analytics.',
    features: ['JWT authentication with protected APIs and user-specific financial data.', 'Salary, expense, dashboard, and analytics modules.', 'Responsive dashboard with expense tracking and savings insights.', 'Deployment-ready architecture for Vercel, Render, and MongoDB Atlas.'],
  },
  smarthire: {
    title: 'SmartHire', subtitle: 'AI-Powered Recruitment & ATS Platform', icon: <UsersRound size={24} />,
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Clerk', 'Nodemailer'],
    overview: 'An AI-powered recruitment platform for resume screening, candidate ranking, and job matching.',
    challenge: 'Making candidate screening and recruitment workflows easier for both recruiters and job seekers.',
    solution: 'Built recruiter and job-seeker modules with authentication, dashboards, candidate search, filters, job management, and automated shortlisting emails.',
    features: ['Resume parsing, skill extraction, ATS scoring, and improvement suggestions.', 'Candidate-to-job matching and ranking based on skills and requirements.', 'Recruiter and job-seeker dashboards with secure authentication.', 'Automated shortlisting emails using Nodemailer.'],
  },
} as const;

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: keyof typeof caseStudies }>();
  const project = id ? caseStudies[id] : undefined;
  if (!project) return <Navigate to="/" replace />;

  return (
    <main className="min-h-screen pt-28 pb-16 px-6 bg-grid-pattern">
      <div className="max-w-4xl mx-auto">
        <Link to="/" onClick={() => sessionStorage.setItem('scrollToSection', 'projects')} className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-brand-cyan"><ArrowLeft size={16} />Back to Projects</Link>
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-6 md:p-10 rounded-3xl bg-white/90 dark:bg-neutral-900/90 border border-black/5 dark:border-white/5 shadow-xl">
          <div className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-widest">{project.icon}{project.subtitle}</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">{project.title}</h1>
          <p className="mt-5 text-base text-gray-600 dark:text-gray-300 leading-relaxed">{project.overview}</p>
          <div className="flex flex-wrap gap-2 mt-6">{project.stack.map((item) => <span key={item} className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">{item}</span>)}</div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div><h2 className="text-sm font-black uppercase tracking-wider text-brand-cyan">The Challenge</h2><p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.challenge}</p></div>
            <div><h2 className="text-sm font-black uppercase tracking-wider text-brand-cyan">The Solution</h2><p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p></div>
          </div>
          <div className="mt-10"><h2 className="text-sm font-black uppercase tracking-wider text-brand-cyan">Key Features</h2><div className="grid md:grid-cols-2 gap-3 mt-4">{project.features.map((feature) => <div key={feature} className="flex gap-3 p-4 rounded-xl bg-slate-50 dark:bg-white/5 text-sm text-gray-700 dark:text-gray-300"><CheckCircle2 size={17} className="text-brand-cyan shrink-0" />{feature}</div>)}</div></div>
          <a href="https://github.com/sagar-official198" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-10 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-bold uppercase tracking-wider"><GithubIcon size={15} />View GitHub Profile</a>
        </motion.section>
      </div>
    </main>
  );
};
