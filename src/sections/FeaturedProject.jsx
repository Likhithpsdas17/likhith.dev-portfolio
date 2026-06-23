import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import {
  ArrowUpRight,
  Shield,
  Cpu,
  Database,
  Activity,
  History,
  Lock,
  Layers,
  Timer,
  Briefcase,
  BarChart3,
  Sliders,
  CheckSquare
} from 'lucide-react';

const featuredData = [
  {
    title: "Data TwinX",
    subtitle: "Digital Data Lifecycle & Trust Management Platform",
    problem: "Enterprise data distribution pipelines suffer from opaque visibility, exposing sensitive payloads to untracked modifications and insecure identity verification at endpoint nodes.",
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
    architecture: ["MERN Architecture", "Stateless JWT Validation", "Distributed Document Streams"],
    features: [
      { name: "Secure document sharing", icon: <Lock size={14} className="text-indigo-400" /> },
      { name: "Digital Twin lifecycle tracking", icon: <Cpu size={14} className="text-cyan-400" /> },
      { name: "Immutable access logs", icon: <Shield size={14} className="text-emerald-400" /> },
      { name: "Trust analytics metrics", icon: <Activity size={14} className="text-amber-400" /> },
      { name: "Strict version tracking", icon: <History size={14} className="text-rose-400" /> }
    ],
    github: "https://github.com/Likhithpsdas17/DataTwinX-FullStack",
    live: "https://datatwinx-frontend.vercel.app",
    image: "/projects/datatwinx.png",
  },
  {
    title: "FocusForge",
    subtitle: "Productivity Dashboard Platform",
    problem: "Developers navigating intensive interview preparation cycles lack unified workspace context, juggling isolated apps for tracking schedules, timing focus intervals, and reviewing analytics.",
    tech: ["React.js", "Vite", "Tailwind CSS", "LocalStorage API"],
    architecture: ["Client-Side State Persistence", "Modular Component System", "Isolated Storage Pools"],
    features: [
      { name: "Dynamic Task Manager", icon: <CheckSquare size={14} className="text-indigo-400" /> },
      { name: "Custom Pomodoro Timer", icon: <Timer size={14} className="text-rose-400" /> },
      { name: "Structured Interview Tracker", icon: <Briefcase size={14} className="text-cyan-400" /> },
      { name: "Core Analytics Dashboard", icon: <BarChart3 size={14} className="text-emerald-400" /> },
      { name: "Global Configuration Settings Panel", icon: <Sliders size={14} className="text-amber-400" /> }
    ],
    github: "https://github.com/Likhithpsdas17/FocusForge",
    live: "https://focus-forge-nine-zeta.vercel.app/",
    image: "/projects/focusforge.png"
  }
];

export default function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="featured-projects" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b04_1px,transparent_1px),linear-gradient(to_bottom,#1e293b04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="mb-16 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6366F1] uppercase tracking-[0.2em] block mb-2">
            FEATURED WORK
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            Engineering Case Studies
          </h2>
        </div>

        <motion.div
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 rounded-[24px] border border-slate-900 bg-[#111827]/40 hover:bg-[#111827]/70 hover:border-slate-800/60 transition-all duration-300 shadow-xl shadow-black/30 items-center overflow-hidden"
            >

              {/* Column 1: Premium Browser Frame - 5 Columns Width on Desktop */}
              <div className="lg:col-span-5 w-full flex flex-col rounded-xl bg-[#0B1120] border border-slate-800/80 overflow-hidden shadow-2xl relative group/screen self-center">
                
                {/* Browser Top Bar UI */}
                <div className="flex items-center gap-1.5 bg-[#111827] border-b border-slate-900 px-4 py-2.5 shrink-0 select-none">
                  <div className="w-2 h-2 rounded-full bg-rose-500/70" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/70" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
                  <div className="flex-1 max-w-xs mx-auto bg-[#0B1120] border border-slate-800/40 rounded text-[9px] text-slate-500 font-['Inter'] py-0.5 text-center truncate px-2">
                    {project.live !== "#" ? project.live.replace('https://', '') : `${project.title.toLowerCase()}.local`}
                  </div>
                </div>

                {/* Main App Preview Screen Layout */}
                <div className="relative w-full aspect-video bg-[#0A0F1D] overflow-hidden flex items-start">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover/screen:scale-[1.015]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Column 2: Structural Data Content - 7 Columns Width on Desktop */}
              <div className="lg:col-span-7 flex flex-col justify-between text-left h-full">
                <div>

                  <div className="space-y-1 mb-4">
                    <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#6366F1] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-['Inter'] text-xs font-medium text-[#6366F1] tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="mb-5 font-['Inter']">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-['Space_Grotesk'] block mb-1">
                      Problem Statement
                    </span>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
                      {project.problem}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 py-4 border-t border-b border-slate-900/60 my-5">

                    <div className="sm:col-span-7 space-y-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-['Space_Grotesk'] block">
                        Core Functional Modules
                      </span>
                      <div className="space-y-1.5">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-['Inter'] text-[#94A3B8]">
                            <div className="shrink-0">{feat.icon}</div>
                            <span className="truncate">{feat.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-5 space-y-2 border-t sm:border-t-0 sm:border-l border-slate-900/60 pt-4 sm:pt-0 sm:pl-4">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-['Space_Grotesk'] block">
                        Architecture Blueprint
                      </span>
                      <div className="space-y-1.5">
                        {project.architecture.map((arch, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-1.5 text-xs font-['Inter'] text-[#94A3B8]">
                            <Layers size={11} className="text-slate-600 shrink-0" />
                            <span className="truncate text-slate-300 font-medium">{arch}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold font-['Inter'] px-2 py-0.5 rounded bg-[#0B1120] border border-slate-800 text-[#94A3B8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-900/40 w-full mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold font-['Inter'] text-[#94A3B8] hover:text-[#F8FAFC] bg-[#0B1120]/40 border border-slate-900 px-3 py-2 rounded-lg hover:border-slate-800 transition-all duration-150"
                  >
                    <FaGithub size={13} /> Repository
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold font-['Inter'] text-[#6366F1] hover:text-purple-400 ml-auto group/link"
                    >
                      Production Launch
                      <ArrowUpRight size={14} className="text-[#6366F1] group-hover/link:text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}