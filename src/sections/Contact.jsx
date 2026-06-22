import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 border-b border-slate-900/60">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#6366F1] uppercase tracking-widest block">Get In Touch</span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">Initiate New Opportunities</h2>
        </div>

        <p className="font-['Inter'] text-sm sm:text-base text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
          I am actively exploring opportunities for engineering roles. Whether you have an available open requisition or want to discuss project infrastructure, drop a message.
        </p>

        <motion.div className="pt-4" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <a
            href="mailto:likhithdaz16@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111827] border border-slate-800 hover:border-slate-700 text-[#F8FAFC] font-['Inter'] font-semibold text-sm transition-colors group shadow-xl"
          >
            <Mail size={16} className="text-[#94A3B8] group-hover:text-[#6366F1]" />
            likhithdaz16@gmail.com
            <ArrowRight size={14} className="text-[#94A3B8] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}