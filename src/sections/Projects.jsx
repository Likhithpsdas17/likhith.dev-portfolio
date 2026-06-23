import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight, CheckCircle2, Layers, Server } from 'lucide-react';

const projectsData = [
  {
    title: "Data TwinX",
    description: "A secure Digital Data Lifecycle & Trust Management System that creates digital twins for documents, tracks ownership, sharing history, access logs, and trust analytics while ensuring secure document management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
    metrics: [
      { key: "Security Protocol", val: "JWT Auth" },
      { key: "Data Integrity", val: "Secure Sharing" },
      { key: "Trust Engine", val: "Trust Analytics" },
      { key: "System Scope", val: "Lifecycle Tracking" }
    ],
    github: "https://github.com/Likhithpsdas17/DataTwinX-FullStack",
    live: "https://datatwinx-frontend.vercel.app",
  },
  {
    title: "FocusForge",
    description: "A productivity and interview preparation dashboard featuring task management, Pomodoro timer, application tracking, analytics, settings, and persistent local storage support.",
    tech: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
    metrics: [
      { key: "Architecture", val: "6 Core Modules" },
      { key: "UI Adaptability", val: "100% Responsive" },
      { key: "State Persistence", val: "Local Storage" },
      { key: "Target Deployment", val: "Vercel Deploy" }
    ],
    github: "https://github.com/Likhithpsdas17/FocusForge",
    live: "https://focus-forge-nine-zeta.vercel.app/",
  },
  {
    title: "QuickBite",
    description: "A modern Swiggy-inspired food delivery platform featuring restaurant discovery, advanced search, category filtering, cart management, responsive UI, and seamless user experience.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "React Router"],
    metrics: [
      { key: "Viewport Adapt", val: "Responsive Design" },
      { key: "State Layer", val: "Redux Cart Mgmt" },
      { key: "Data Flow", val: "Search & Filtering" }
    ],
    github: "https://github.com/Likhithpsdas17/Frontend_Internship",
    live: "https://frontend-internship-gamma.vercel.app",
  },
  {
    title: "YouTube Clone",
    description: "A high-fidelity video streaming web application integrating authentication routing pipelines, live content feeds, video playback, and relational backend persistence models.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    metrics: [
      { key: "System Target", val: "Video Platform" },
      { key: "Access Layer", val: "Authentication" },
      { key: "Data Pipeline", val: "MongoDB Integration" }
    ],
    github: "https://github.com/Likhithpsdas17/youtube-clone",
    live: "https://youtube-clone-chi-mauve.vercel.app",
  },
  {
    title: "Weather Insights",
    description: "Weather forecasting application providing current conditions and multi-day forecasts using OpenWeatherMap APIs.",
    tech: ["JavaScript", "API Integration", "Tailwind CSS"],
    metrics: [
      { key: "Data Stream", val: "Real-Time Weather" },
      { key: "Pipeline Target", val: "API Integration" },
      { key: "Display Layer", val: "Forecast Dashboard" }
    ],
    github: "https://github.com/Likhithpsdas17/Weather-Forecast",
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,#6366f102,transparent_35%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Block */}
        <div className="mb-16 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6366F1] uppercase tracking-[0.2em] block mb-2">
            SELECTED CASES
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            Production Repositories
          </h2>
        </div>

        {/* Responsive Grid Structure Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-900/80 bg-[#111827]/40 hover:bg-[#111827]/60 hover:border-slate-800/60 transition-all duration-200 shadow-lg shadow-black/20"
            >
              <div>
                {/* Title Node */}
                <h3 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#6366F1] transition-colors duration-150 text-left mb-3">
                  {project.title}
                </h3>

                {/* Description Body text */}
                <p className="font-['Inter'] text-xs text-[#94A3B8] leading-relaxed font-normal text-left mb-5 min-h-[60px]">
                  {project.description}
                </p>

                {/* Technology Badges Matrix */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold font-['Inter'] px-2 py-0.5 rounded bg-[#0B1120] border border-slate-800 text-slate-400"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Integrated Operational Metrics Spec Sheet Section */}
                <div className="border-t border-slate-900/80 pt-4 mt-4 mb-6">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-['Space_Grotesk'] block text-left mb-2.5">
                    Engine Specifications
                  </span>
                  <div className="space-y-2">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center justify-between gap-4 font-['Inter'] text-left">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <CheckCircle2 size={11} className="text-slate-600 shrink-0" />
                          <span className="text-[11px] text-[#94A3B8] truncate">{metric.key}</span>
                        </div>
                        <span className="text-[10px] font-bold font-['Space_Grotesk'] text-[#F8FAFC] bg-[#0B1120] border border-slate-800/60 px-1.5 py-0.5 rounded shrink-0">
                          {metric.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Anchors Trigger Block */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-900/40 mt-auto w-full">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold font-['Inter'] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                >
                  <FaGithub size={13} /> Code
                </a>
                <a
                  href={project.live}
                  className="inline-flex items-center gap-1 text-xs font-semibold font-['Inter'] text-[#6366F1] hover:text-purple-400 group/link"
                >
                  Live Demo
                  <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}