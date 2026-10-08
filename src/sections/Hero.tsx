import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Code2, Download, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import profileImg from '../assets/ABHI.jpg';

const skills = ['React.js', 'Node.js', 'MongoDB', 'REST APIs'];

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-grid-pattern pt-24 pb-12">
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-brand-indigo/20 blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-28 right-0 w-96 h-96 rounded-full bg-brand-cyan/15 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_75%_40%,rgba(94,106,210,0.15),transparent_25%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="lg:col-span-7 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan text-xs font-bold tracking-wide">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" /></span>
            Open to fresher opportunities
          </div>

          <p className="mt-7 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-brand-indigo dark:text-brand-cyan">Hello, I am</p>
          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-slate-900 dark:text-white">Abhiraj<br /><span className="bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan bg-clip-text text-transparent">Sagar.</span></h1>
          <h2 className="mt-6 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200">Full-Stack MERN Developer</h2>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">I build responsive web applications with React.js, Node.js, Express.js, and MongoDB—focused on clean interfaces, secure REST APIs, JWT authentication, and practical AI-powered features.</p>

          <div className="flex flex-wrap gap-2 mt-7">{skills.map((skill) => <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200 shadow-sm">{skill}</span>)}</div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button onClick={() => scrollTo('#projects')} className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan text-white font-bold shadow-lg hover:scale-[1.03] transition-transform">View My Work <ArrowRight size={17} /></button>
            <a href="/Abhiraj_Sagar_Resume.pdf" download className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-white font-bold hover:border-brand-cyan/40 hover:scale-[1.03] transition-all"><Download size={17} />Download Resume</a>
            <button onClick={() => scrollTo('#contact')} className="inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-xl text-brand-indigo dark:text-brand-cyan font-bold hover:bg-brand-cyan/10 transition-colors"><Send size={16} />Contact</button>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-8 text-xs text-gray-500 dark:text-gray-400">
            <a href="mailto:sagarabhirajcgc62617tc@gmail.com" className="inline-flex items-center gap-1.5 hover:text-brand-cyan"><Mail size={14} />sagarabhirajcgc62617tc@gmail.com</a>
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} />Uttar Pradesh, India</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-[280px] sm:w-[340px]">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-brand-indigo/25 via-brand-purple/20 to-brand-cyan/25 blur-2xl" />
            <div className="relative p-3 rounded-[2rem] bg-white/70 dark:bg-neutral-900/75 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.45rem] aspect-[4/5] bg-slate-100 dark:bg-neutral-950">
                <img src={profileImg} alt="Abhiraj Sagar" className="w-full h-full object-cover object-top" loading="eager" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/75 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between text-white"><div><p className="text-sm font-black">Abhiraj Sagar</p><p className="text-[10px] uppercase tracking-widest text-white/70">MERN Developer</p></div><div className="w-9 h-9 grid place-items-center rounded-xl bg-white/15 backdrop-blur border border-white/20"><Code2 size={17} /></div></div>
              </div>
            </div>
            <div className="absolute -left-8 top-12 px-3 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 shadow-xl text-[10px] font-bold text-slate-700 dark:text-white flex items-center gap-2"><Sparkles size={14} className="text-brand-cyan" />MERN Stack</div>
          </div>
        </motion.div>
      </div>

      <button onClick={() => scrollTo('#about')} aria-label="Scroll to about section" className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:inline-flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-brand-cyan"><span>Explore</span><ArrowDown size={16} className="animate-bounce" /></button>
    </section>
  );
};
