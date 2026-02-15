
import React from 'react';
import { useLanguage } from '../src/hooks/useLanguage';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-primary p-1 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
          <span className="text-xl font-extrabold tracking-tight text-[#0d1c12]">Gignite</span>
        </div>

        
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#process">{t.navbar.process}</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#comparison">{t.navbar.comparison}</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#faq">{t.navbar.faq}</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white rounded-lg p-1 border border-primary/10">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
                language === 'en' 
                  ? 'bg-primary text-[#0d1c12]' 
                  : 'text-[#0d1c12]/50 hover:bg-primary/10'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('bn')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
                language === 'bn' 
                  ? 'bg-primary text-[#0d1c12]' 
                  : 'text-[#0d1c12]/50 hover:bg-primary/10'
              }`}
            >
              বন
            </button>
          </div>
          <a 
            href="#waitlist" 
            className="bg-primary text-[#0d1c12] px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
          >
            {t.navbar.joinWaitlist}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
