import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaLaptopCode, FaFolderOpen } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';

const statCards = [
  {
    label: "Total Repositories",
    value: "20+",
    icon: <FaCodeBranch size={16} className="text-[#6366F1]" />,
    description: "Public and private codebase repositories maintaining clean Git architecture."
  },
  {
    label: "Technologies Used",
    value: "12+",
    icon: <FaLaptopCode size={16} className="text-[#06B6D4]" />,
    description: "Languages, framework variants, and runtime environments deployed actively."
  },
  {
    label: "Active Projects",
    value: "6",
    icon: <FaFolderOpen size={16} className="text-emerald-500" />,
    description: "Live web systems, API microservices, and client side application instances."
  }
];

export default function GitHubStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  return (
    <section id="github-stats" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#6366f103,transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading System */}
        <div className="mb-16 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6366F1] uppercase tracking-[0.2em] block mb-2">
            OPEN SOURCE ACTIVITY
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            GitHub Engineering Metrics
          </h2>
        </div>

        {/* Top Tier: Integrated Metric Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border border-slate-900 bg-[#111827]/40 hover:bg-[#111827]/70 hover:border-slate-800/60 transition-all duration-200 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-[#0B1120] border border-slate-800/60 rounded-xl group-hover:border-slate-700/60 transition-colors">
                  {card.icon}
                </div>
                <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
                  {card.value}
                </span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-sm font-bold text-[#F8FAFC] tracking-tight mb-1.5">
                {card.label}
              </h3>
              <p className="font-['Inter'] text-xs text-[#94A3B8] leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Tier: Live Readme Stats Vector Callouts */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Main Activity Overview Cards Block */}
          <div className="lg:col-span-7 flex flex-col justify-between p-5 sm:p-6 rounded-[20px] border border-slate-900 bg-[#111827]/40 hover:border-slate-800/40 transition-colors overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-4 mb-4 w-full text-left">
              <div>
                <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#F8FAFC]">
                  Profile Synchronization Index
                </h4>
                <p className="text-[11px] font-['Inter'] text-slate-500">
                  Live snapshot tracking remote contributions and repository telemetry.
                </p>
              </div>
              <a 
                href="https://github.com/Likhithpsdas17" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1120] border border-slate-800 text-xs font-semibold font-['Inter'] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-slate-700 transition-all self-start sm:self-center"
              >
                <FaGithub size={13} /> @Likhithpsdas17 <ArrowUpRight size={12} />
              </a>
            </div>
            
            <div className="flex-1 flex items-center justify-center min-h-[195px] w-full">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=Likhithpsdas17&show_icons=true&theme=transparent&title_color=f8fafc&text_color=94a3b8&icon_color=6366f1&border_color=transparent" 
                alt="Likhith's GitHub Stats"
                className="w-full max-w-full h-auto select-none pointer-events-none custom-svg-filter" 
                loading="lazy"
              />
            </div>
          </div>

          {/* Compact Top Languages Breakdown Block */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-[20px] border border-slate-900 bg-[#111827]/40 hover:border-slate-800/40 transition-colors overflow-hidden">
            <div className="border-b border-slate-900 pb-4 mb-4 text-left">
              <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#F8FAFC]">
                Language Compilation Weight
              </h4>
              <p className="text-[11px] font-['Inter'] text-slate-500">
                Automated byte-level breakdown across production applications.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center min-h-[195px] w-full">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Likhithpsdas17&layout=compact&theme=transparent&title_color=f8fafc&text_color=94a3b8&border_color=transparent font_name=Space+Grotesk" 
                alt="Likhith's Top Languages"
                className="w-full max-w-full h-auto select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}