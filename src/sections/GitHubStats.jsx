import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';

export default function GitHubStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Synced background parameters ensuring zero card boundaries bleed into background layers
  const baseApiUrl = "https://github-readme-stats.vercel.app/api";
  const themeParams = "&theme=dark&bg_color=111827&title_color=f8fafc&text_color=94a3b8&icon_color=6366f1&hide_border=true";

  return (
    <section id="github-stats" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      {/* Background Micro Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#6366f102,transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-left">
          <div>
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6366F1] uppercase tracking-[0.2em] block mb-2">
              OPEN SOURCE ACTIVITY
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
              GitHub Contribution Engineering
            </h2>
          </div>

          <a 
            href="https://github.com/Likhithpsdas17" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] border border-slate-900 text-xs font-semibold font-['Inter'] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-slate-800 transition-all self-start sm:self-auto group/btn"
          >
            <FaGithub size={14} className="text-slate-400 group-hover/btn:text-[#F8FAFC]" />
            Visit GitHub Profile
            <ArrowUpRight size={14} className="text-slate-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 3-Column Stats Matrix Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1: GitHub Profile Card */}
          <motion.div 
            variants={itemVariants}
            className="p-5 rounded-2xl border border-slate-900 bg-[#111827]/40 hover:bg-[#111827]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[210px]"
          >
            <div className="text-left border-b border-slate-900 pb-3 mb-2">
              <h3 className="font-['Space_Grotesk'] text-xs font-bold text-slate-400 uppercase tracking-wider">
                Profile Analytics
              </h3>
            </div>
            <div className="flex-1 flex items-center justify-center w-full">
              <img 
                src={`${baseApiUrl}?username=Likhithpsdas17&show_icons=true${themeParams}`} 
                alt="GitHub Profile Metrics"
                className="w-full max-w-full h-auto select-none pointer-events-none scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Column 2: Contribution Streak */}
          <motion.div 
            variants={itemVariants}
            className="p-5 rounded-2xl border border-slate-900 bg-[#111827]/40 hover:bg-[#111827]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[210px]"
          >
            <div className="text-left border-b border-slate-900 pb-3 mb-2">
              <h3 className="font-['Space_Grotesk'] text-xs font-bold text-slate-400 uppercase tracking-wider">
                Commit Consistency
              </h3>
            </div>
            <div className="flex-1 flex items-center justify-center w-full">
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=Likhithpsdas17${themeParams}`} 
                alt="GitHub Contribution Streak"
                className="w-full max-w-full h-auto select-none pointer-events-none scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Column 3: Most Used Languages */}
          <motion.div 
            variants={itemVariants}
            className="p-5 rounded-2xl border border-slate-900 bg-[#111827]/40 hover:bg-[#111827]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[210px] md:col-span-2 lg:col-span-1"
          >
            <div className="text-left border-b border-slate-900 pb-3 mb-2">
              <h3 className="font-['Space_Grotesk'] text-xs font-bold text-slate-400 uppercase tracking-wider">
                Language Infrastructure
              </h3>
            </div>
            <div className="flex-1 flex items-center justify-center w-full">
              <img 
                src={`${baseApiUrl}/top-langs/?username=Likhithpsdas17&layout=compact${themeParams}`} 
                alt="Most Used Languages"
                className="w-full max-w-full h-auto select-none pointer-events-none scale-[1.01]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}