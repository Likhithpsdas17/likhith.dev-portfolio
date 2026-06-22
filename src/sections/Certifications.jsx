import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Internshala Trainings",
    year: "2025",
  },
  {
    title: "Git & GitHub: Mastering Version Control",
    issuer: "Internshala Trainings",
    year: "2025",
  },
  {
    title: "Frontend Development Internship",
    issuer: "Cognifyz Technologies",
    year: "2024",
  },
  {
    title: "JPMorgan Chase Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2025",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#6366F1] uppercase tracking-widest block mb-2">
            Verification Records
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
            Certifications & Validation
          </h2>
        </div>

        {/* Animations Orchestrated Grid wrapper */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {certifications.map((c, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="p-5 border border-slate-900/80 bg-[#111827]/40 rounded-xl flex gap-4 items-start text-left hover:border-slate-800/80 transition-colors duration-200"
            >
              <div className="p-2 bg-[#0B1120] rounded-lg border border-slate-800 text-[#06B6D4] shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div className="font-['Inter'] flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-['Space_Grotesk'] text-sm font-bold text-[#F8FAFC] leading-snug">
                    {c.title}
                  </h3>
                  <span className="text-[10px] font-semibold font-['Space_Grotesk'] text-slate-500 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800/40 shrink-0">
                    {c.year}
                  </span>
                </div>
                <p className="text-xs text-[#94A3B8] mt-1.5">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}