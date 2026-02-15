
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[#0d1c12] text-2xl font-bold">bolt</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#0d1c12]">Gignite</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#process">Process</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#comparison">Comparison</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#faq">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/5 transition-all text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">language</span>
            <span>EN/BN</span>
          </button>
          <a 
            href="#waitlist" 
            className="bg-primary text-[#0d1c12] px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
