
import React from 'react';
import { useLanguage } from '../src/hooks/useLanguage';

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-background-light border-t border-primary/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-[#0d1c12]">Gignite</span>
            </div>
            <p className="text-sm text-[#0d1c12]/50">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-bold text-[#0d1c12]/70">
            <a className="hover:text-primary transition-colors" href="#privacy">{t.footer.privacy}</a>
            <a className="hover:text-primary transition-colors" href="#tos">{t.footer.tos}</a>
            <a className="hover:text-primary transition-colors" href="#cookies">{t.footer.cookies}</a>
            <a className="hover:text-primary transition-colors" href="#legal">{t.footer.allLegal}</a>
          </div>

          {/* Language Switcher */}
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
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-[10px] font-bold text-[#0d1c12]/30 uppercase tracking-[0.2em]">
          © 2026 Gignite Technologies. {t.footer.allRights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
