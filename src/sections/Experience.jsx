import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Terminal, 
  Cpu, 
  Palette, 
  Layers, 
  Calendar, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';

const statsData = [
  { label: "Internships Completed", value: "2" },
  { label: "Training Programs", value: "1" },
  { label: "Freelance Tenure", value: "Active" },
  { label: "Production Shipped", value: "10+" }
];

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Websort",
    duration: "2026",
    icon: <Terminal size={16} className="text-indigo-400" />,
    tech: ["React.js", "Next.js", "Tailwind CSS", "Design Systems"],
    points: [
      "Engineered highly responsive frontend application modules for scalable enterprise client infrastructures.",
      "Architected clean, accessible, and comprehensive design tokens for modern unified UI component systems.",
      "Constructed performant, decoupled, and reusable React core elements to accelerate code reuse speeds.",
      "Optimized client-side rendering runtimes, decreasing viewport shifting and boosting localized interface performance."
    ]
  },
  {
    role: "Full Stack Development Trainee",
    company: "Internshala Trainings",
    duration: "2025",
    icon: <Cpu size={16} className="text-cyan-400" />,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas"],
    points: [
      "Completed comprehensive training specializing in decoupled full-stack architectural engineering patterns.",
      "Configured robust RESTful routing layouts, controller layers, and schema indices across relational systems.",
      "Shipped multiple live, database-driven web platforms handling decoupled cross-origin state cycles.",
      "Deployed stateless validation protocols utilizing tokenization pipelines and production environment configurations."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Cognifyz Technologies",
    duration: "Dec 2024 – Mar 2025",
    icon: <Briefcase size={16} className="text-emerald-400" />,
    tech: ["React.js", "Tailwind CSS", "REST APIs", "Performance Tuning"],
    points: [
      "Built production-ready single page applications utilizing semantic layouts and fully utility-first layouts.",
      "Translated high-fidelity layout wireframes into maintainable, modular, and performant functional component pools.",
      "Integrated secure downstream REST service endpoints into clean declarative state handlers.",
      "Tested and refined responsive component structures across multi-tier display break-points and viewports."
    ]
  },
  {
    role: "Freelance Graphic & Digital Designer",
    company: "Self Employed",
    duration: "2022 - Present",
    icon: <Palette size={16} className="text-amber-400" />,
    tech: ["Brand Strategy", "Vector Assets", "UI Wireframing", "Asset Optimization"],
    points: [
      "Designed logos, identity guides, and visual creative assets for international startups and operations.",
      "Collaborated direct with founders to deliver optimized digital marketing collateral across varying channels.",
      "Formulated production-ready creative vectors and layout assets scaling flawlessly across hardware spaces.",
      "Managed development life-cycles, tracking requests, iteration frameworks, and revision requirements."
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="experience" className="relative w-full py-28 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60 overflow-hidden">
      {/* Engineering Grid Underlay Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b03_1px,transparent_1px),linear-gradient(to_bottom,#1e293b04_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header Elements */}
        <div className="mb-20 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#6366F1] uppercase tracking-[0.25em] block mb-2.5">
            PROFESSIONAL TIMELINE
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Engineering Career History
          </h2>
        </div>

        {/* Metric Statistics Row Block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1 rounded-[20px] border border-slate-900 bg-[#111827]/20 mb-20 backdrop-blur-sm">
          {statsData.map((stat, sIdx) => (
            <div key={sIdx} className="p-4 sm:p-5 rounded-[16px] bg-[#111827]/40 border border-slate-900/80 text-left hover:border-slate-800/40 transition-colors">
              <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight block">
                {stat.value}
              </span>
              <span className="font-['Inter'] text-[11px] font-medium text-slate-500 uppercase tracking-wide block mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Master Timeline Flow Field Container */}
        <motion.div 
          className="relative pl-6 sm:pl-10 text-left border-l border-slate-900"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {experienceData.map((exp, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="relative mb-14 last:mb-0 group"
            >
              {/* Outer Pulsing Active Indicator Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-[11px] h-[11px] rounded-full bg-slate-900 border-2 border-slate-800 group-hover:border-[#6366F1] group-hover:bg-[#6366F1] transition-all duration-300 flex items-center justify-center">
                <div className="w-1 h-1 bg-transparent rounded-full group-hover:bg-white scale-0 group-hover:scale-100 transition-transform duration-200" />
              </div>

              {/* Glassmorphism Structural Core Shell */}
              <div className="p-6 sm:p-8 rounded-[20px] border border-slate-900 bg-[#111827]/30 backdrop-blur-md group-hover:bg-[#111827]/60 group-hover:border-slate-800/80 shadow-xl shadow-black/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.01] via-transparent to-transparent pointer-events-none" />
                
                {/* Information Title Header Control Unit */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-900/60 pb-5 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0B1120] border border-slate-800/80 rounded-xl group-hover:border-slate-700/60 group-hover:bg-[#0B1120]/80 transition-colors shadow-inner mt-0.5 shrink-0">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#6366F1] transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <div className="font-['Inter'] text-sm font-semibold text-slate-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  {/* Period Context Stamp */}
                  <div className="inline-flex items-center gap-2 text-xs font-medium font-['Inter'] text-slate-400 bg-[#0B1120] border border-slate-900 px-3 py-1.5 rounded-lg self-start sm:self-auto shrink-0 select-none">
                    <Calendar size={12} className="text-slate-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Achievement Set List Node */}
                <ul className="space-y-3 font-['Inter'] text-xs sm:text-sm text-[#94A3B8] list-none pl-0 mb-6">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#6366F1] mt-2 shrink-0 transition-colors duration-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Micro Tech Tags Footing Row */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900/40">
                  {exp.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-semibold font-['Inter'] px-2 py-0.5 rounded bg-[#0B1120]/80 border border-slate-900 text-slate-400 group-hover:text-slate-300 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}