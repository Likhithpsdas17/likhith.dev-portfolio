import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building } from 'lucide-react';

export default function Experience() {
    const experience = [
  {
    company: "Cognifyz Technologies",
    role: "Frontend Developer Intern",
    duration: "Dec 2023 - Mar 2024",
    points: [
      "Developed responsive user interfaces using React.js and Tailwind CSS.",
      "Built QuickBite, a food delivery web application inspired by Swiggy.",
      "Implemented reusable React components and responsive layouts.",
      "Collaborated on frontend development best practices and project delivery.",
    ],
  },
  {
    company: "Freelance Digital Marketing",
    role: "Graphic Design & Digital Marketing",
    duration: "2022 - Present",
    points: [
      "Designed logos, brochures, flyers, banners, and social media creatives.",
      "Worked with clients on branding and promotional campaigns.",
      "Delivered visual assets aligned with client business goals.",
    ],
  },
];
  return (
    <section id="experience" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-left">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#6366F1] uppercase tracking-widest block mb-2">History Journey</span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">Professional Experience</h2>
        </div>

        <motion.div 
          className="relative pl-6 border-l border-slate-900"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          {/* Node marker point */}
          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#6366F1] border border-[#0B1120]" />

          <div className="text-left space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F8FAFC]">Frontend Developer Intern</h3>
                <div className="flex items-center gap-2 text-sm text-[#94A3B8] mt-1">
                  <Building size={14} className="text-[#06B6D4]" />
                  <span>Cognifyz Technologies</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] bg-[#111827] px-2.5 py-1 rounded border border-slate-900 self-start sm:self-center">
                <Calendar size={12} />
                <span>Internship Tenure</span>
              </div>
            </div>

            <ul className="space-y-2.5 font-['Inter'] text-sm text-[#94A3B8] list-none pl-0">
              <li className="flex items-start gap-2.5">
                <span className="text-[#6366F1] mt-1 text-xs">▪</span>
                Architected components utilizing standard declarative functional logic in React coupled with Tailwind CSS layouts.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#6366F1] mt-1 text-xs">▪</span>
                Integrated modular RESTful API architectures while implementing persistent interface systems across layouts.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#6366F1] mt-1 text-xs">▪</span>
                Refactored state lifecycle hooks to reduce global viewport calculation layout drift.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}