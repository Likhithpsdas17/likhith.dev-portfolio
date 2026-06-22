import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, ShieldCheck, Terminal, ArrowUpRight } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: "FocusForge Production Dashboard",
    organization: "Digital Heroes",
    year: "2026",
    type: "Achievement",
    icon: <Terminal size={16} className="text-[#06B6D4]" />,
    description: "Successfully engineered and optimized high-fidelity frontend systems assignment adhering strictly to production-grade requirements.",
    badgeColor: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5"
  },
  {
    id: 2,
    title: "Full Stack Development Certification",
    organization: "Internshala Trainings",
    year: "2025",
    type: "Certification",
    icon: <ShieldCheck size={16} className="text-[#6366F1]" />,
    description: "Comprehensive verification validation across corporate application layers, server routes, storage infrastructure, and state controllers.",
    badgeColor: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5"
  },
  {
    id: 3,
    title: "Frontend Development Internship",
    organization: "Cognifyz Technologies",
    year: "2024",
    type: "Internship",
    icon: <Briefcase size={16} className="text-emerald-500" />,
    description: "Built scalable layouts, managed declarative UI architectures, and collaborated on cross-functional frontend performance metrics.",
    badgeColor: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5"
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="achievements" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      {/* Structural Minimal Background Accents */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#6366F1]/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Typography System */}
        <div className="mb-16 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#6366F1] uppercase tracking-widest block mb-2">
            Track Record
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            Achievements & Milestones
          </h2>
        </div>

        {/* Linear/Vercel Timeline Stack Architecture */}
        <motion.div 
          className="relative pl-2 sm:pl-6 border-l border-slate-900/80 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievementsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-xl border border-slate-900/80 bg-[#111827]/40 hover:bg-[#111827]/70 hover:border-slate-800/60 transition-all duration-200 text-left font-['Inter']"
            >
              {/* Context Alignment Target Marker */}
              <div className="absolute -left-[15px] sm:-left-[31px] top-7 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-[#6366F1] border border-[#0B1120] transition-colors duration-200" />

              {/* Icon Matrix Wrapper */}
              <div className="p-2.5 bg-[#0B1120] border border-slate-800/80 rounded-lg text-[#94A3B8] group-hover:text-[#F8FAFC] group-hover:border-slate-700/60 shrink-0 transition-colors duration-150">
                {item.icon}
              </div>

              {/* Data Content Array */}
              <div className="flex-1 space-y-2 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#6366F1] transition-colors duration-150">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  {/* Badges Row Context */}
                  <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                    <span className={`text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded border ${item.badgeColor}`}>
                      {item.type}
                    </span>
                    <span className="text-[11px] font-semibold font-['Space_Grotesk'] text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800/40">
                      {item.year}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed max-w-2xl font-normal pt-1">
                  {item.description}
                </p>
              </div>

              {/* Subtle Interactive Detail Indicator */}
              <div className="absolute top-4 right-4 text-slate-700 opacity-0 group-hover:opacity-100 group-hover:text-slate-500 transition-all duration-200 pointer-events-none">
                <ArrowUpRight size={14} />
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}