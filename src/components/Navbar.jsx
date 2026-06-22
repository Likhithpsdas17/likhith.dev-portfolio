import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' }, // Synced to navigate smoothly to your core featured grid
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-[#0B1120]/80 backdrop-blur-md border-slate-800/60 shadow-lg shadow-black/10' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="font-['Space_Grotesk'] font-bold text-[#F8FAFC] tracking-tight text-lg">
          Likhith<span className="text-[#6366F1]">.</span>dev
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-['Inter'] text-sm font-medium tracking-wide text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
          
          {/* Main Action Callout Button */}
          <a
            href="/Likhith_FullStack_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#111827] border border-slate-800 hover:border-slate-700 text-[#F8FAFC] font-['Inter'] font-semibold text-sm transition-colors duration-150"
          >
            Resume <ArrowUpRight size={14} className="text-[#94A3B8]" />
          </a>
        </div>

        {/* Mobile Nav Toggle Trigger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-20 left-0 right-0 bg-[#0B1120] border-b border-slate-800 px-6 py-6 flex flex-col gap-4 md:hidden shadow-2xl shadow-black"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-['Inter'] text-base font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors py-2 border-b border-slate-900/60 last:border-none"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Likhith_FullStack_Resume.pdf"
              download
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 mt-2 px-4 py-2.5 rounded-md bg-[#111827] border border-slate-800 text-[#F8FAFC] font-['Inter'] font-semibold text-sm"
            >
              Resume <ArrowUpRight size={14} className="text-[#94A3B8]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}