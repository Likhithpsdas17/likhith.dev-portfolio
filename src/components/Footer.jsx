import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1120] py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-900/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-['Inter'] text-xs text-[#94A3B8]">
        <p>© {currentYear} Likhith P S Das. All architecture rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/Likhithpsdas17" target="_blank" rel="noreferrer" className="hover:text-[#F8FAFC] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/likhithpsdas" target="_blank" rel="noreferrer" className="hover:text-[#F8FAFC] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}