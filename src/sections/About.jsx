import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase } from 'lucide-react';

const highlights = [
  { icon: <Award size={18} className="text-[#06B6D4]" />, title: "Academic Metric", value: "CGPA 9.19", detail: "University Top Tier" },
  { icon: <GraduationCap size={18} className="text-[#6366F1]" />, title: "Education Track", value: "B.E Computer Science & Design", detail: "University of Mysore School of Engineering" },
  { icon: <Briefcase size={18} className="text-emerald-500" />, title: "Active Internship", value: "Frontend Developer Intern", detail: "Cognifyz Technologies" }
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#6366F1] uppercase tracking-widest block mb-2">About Me</span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">Building Products, Solving Problems, Creating Impact.</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <div className="lg:col-span-7 space-y-5 text-left font-['Inter'] text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              I am <span className="text-[#F8FAFC] font-medium">Likhith P S Das</span>, a final-year B.E. Computer Science & Design student at the University of Mysore School of Engineering with a CGPA of 9.19.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              I specialize in Full Stack Development using <span className="text-[#6366F1] font-medium">React.js, Node.js, Express.js, and MongoDB</span>. I enjoy building scalable web applications, secure digital platforms, and user-centric solutions.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              My experience includes developing modular architectures such as <span className="text-[#F8FAFC] font-medium">Data TwinX, FocusForge, QuickBite, Weather Insights, KisanVerse</span>, and <span className="text-[#F8FAFC] font-medium">enterprise-grade MERN stack applications.</span>.
            </motion.p>
          </div>

          <div className="lg:col-span-5 w-full space-y-3.5">
            {highlights.map((card, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, x: 15 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-900 bg-[#111827]/40 text-left font-['Inter']"
              >
                <div className="p-2 bg-[#0B1120] border border-slate-800 rounded-lg shrink-0">{card.icon}</div>
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#94A3B8] uppercase block">{card.title}</span>
                  <h3 className="text-base font-bold font-['Space_Grotesk'] text-[#F8FAFC] mt-0.5">{card.value}</h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{card.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}