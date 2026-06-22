import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ArrowUpRight, MapPin, GraduationCap } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#0B1120] pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid Pattern Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-[#6366F1]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Side Content Container */}
        <motion.div className="lg:col-span-7 space-y-6 text-left" variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-slate-800/80 bg-[#111827]/80 text-[#94A3B8] font-['Inter'] font-medium text-xs rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              Open to Internships & Full-Time Opportunities
            </span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1 variants={item} className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC]">
              Likhith P S Das
            </motion.h1>
            <motion.h2 variants={item} className="font-['Space_Grotesk'] text-xl sm:text-2xl font-medium tracking-tight text-[#6366F1]">
              Software Engineer • Full Stack Developer • MERN Stack Developer
            </motion.h2>
          </div>

          <motion.p variants={item} className="font-['Inter'] text-[#94A3B8] text-sm sm:text-base max-w-xl leading-relaxed">
            Full Stack Developer passionate about building scalable web applications, secure digital platforms, and modern user experiences. Experienced in React.js, Node.js, Express.js, MongoDB, REST APIs, and full-stack application development.
          </motion.p>

          {/* Integrated Statistics Dashboard Group */}
          <motion.div variants={item} className="grid grid-cols-3 gap-4 max-w-md py-4 my-2 border-t border-b border-slate-900/60 font-['Space_Grotesk']">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">10+</div>
              <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider mt-0.5">Projects Built</div>
            </div>
            <div className="border-l border-slate-900/60 pl-4">
              <div className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">3+</div>
              <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider mt-0.5">Certifications</div>
            </div>
            <div className="border-l border-slate-900/60 pl-4">
              <div className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">1</div>
              <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider mt-0.5">Internship</div>
            </div>
          </motion.div>

          {/* Action Trigger Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3.5 pt-2">
            <a href="#featured-projects" className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-md bg-[#6366F1] hover:bg-[#5356E2] text-[#F8FAFC] font-['Inter'] font-semibold text-xs transition-colors shadow-sm shadow-black/20">
              View Projects <ArrowUpRight size={14} />
            </a>
            <a href="/Likhith_FullStack_Resume.pdf" download className="inline-flex items-center px-4.5 py-2.5 rounded-md border border-slate-800 bg-[#111827]/90 hover:border-slate-700 text-[#F8FAFC] font-['Inter'] font-semibold text-xs transition-colors">
              Download Resume
            </a>
          </motion.div>

          {/* Social Profiles Row */}
          <motion.div variants={item} className="flex items-center gap-4 pt-4 max-w-md">
            {[
              { icon: <FaGithub size={16} />, href: 'https://github.com/Likhithpsdas17', label: 'GitHub' },
              { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/likhithpsdas', label: 'LinkedIn' },
              { icon: <FaEnvelope size={16} />, href: 'mailto:likhithdaz16@gmail.com', label: 'Email' }
            ].map((social, idx) => (
              <a key={idx} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer" className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] bg-[#111827]/40 border border-slate-800 rounded-md hover:border-slate-700 transition-colors">
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Cards Layout */}
        <motion.div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="w-full max-w-[320px] sm:max-w-[340px] flex flex-col gap-3">
            <div className="relative w-full aspect-[4/5] rounded-[24px] p-[1px] bg-gradient-to-b from-slate-800 via-slate-900/40 to-slate-900 shadow-2xl shadow-black/50 overflow-hidden group">
              <div className="absolute inset-0 bg-[#111827] rounded-[23px] overflow-hidden">
                <img src="/profile.jpg" alt="Likhith" className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 w-full font-['Inter'] text-left">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 border border-slate-900 bg-[#111827]/60 backdrop-blur-sm rounded-xl">
                <MapPin size={14} className="text-[#6366F1]" />
                <span className="text-xs font-medium text-[#94A3B8]">Based in <span className="text-[#F8FAFC]">Mysore, India</span></span>
              </div>
              <div className="flex items-center justify-between gap-2.5 px-3.5 py-2.5 border border-slate-900 bg-[#111827]/60 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-2.5 min-w-0">
                  <GraduationCap size={14} className="text-[#06B6D4] shrink-0" />
                  <span className="text-xs font-medium text-[#F8FAFC] truncate">B.E. Computer Science & Design</span>
                </div>
                <span className="text-[10px] font-bold font-['Space_Grotesk'] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded shrink-0">9.19 CGPA</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}