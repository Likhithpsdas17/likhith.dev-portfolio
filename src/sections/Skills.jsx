import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Frontend', list: ['React.js', 'Redux Toolkit', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'] },
  { category: 'Backend', list: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
  { category: 'Database', list: ['MongoDB', 'Mongoose'] },
  { category: 'Tools & Platforms', list: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render'] },
  { category: 'Languages', list: ['JavaScript', 'Java'] }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#6366F1] uppercase tracking-widest block mb-2">Technical Engine</span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">Technologies I Work With</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="p-5 border border-slate-900 bg-[#111827]/40 rounded-xl flex flex-col justify-between hover:border-slate-800/80 transition-colors duration-200"
            >
              <div>
                <h3 className="font-['Space_Grotesk'] text-sm font-bold tracking-wide text-[#F8FAFC] pb-2.5 border-b border-slate-900 mb-4 text-left">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-start">
                  {group.list.map((skill, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 text-xs font-medium font-['Inter'] text-[#94A3B8] bg-[#0B1120] border border-slate-800/60 rounded-md">
                      {skill}
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