
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#0d1c12]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0d1c12] text-2xl font-bold">bolt</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-[#0d1c12]">Gignite</span>
            </div>
            <p className="text-base text-[#0d1c12]/50 leading-relaxed mb-10 max-w-sm font-medium">
              Empowering the next generation of Bangladeshi earners with smart, instant credit. Financial freedom is just a few taps away.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-11 rounded-full bg-background-light flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 text-[#0d1c12]/70">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
              <a href="#" className="size-11 rounded-full bg-background-light flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 text-[#0d1c12]/70">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="#" className="size-11 rounded-full bg-background-light flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 text-[#0d1c12]/70">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-extrabold text-xs uppercase tracking-[0.2em] mb-8 text-[#0d1c12]">Product</h5>
            <ul className="space-y-5 text-base text-[#0d1c12]/60 font-semibold">
              <li><a className="hover:text-primary transition-colors" href="#">How it Works</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Eligibility</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Repayment</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Safety</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-extrabold text-xs uppercase tracking-[0.2em] mb-8 text-[#0d1c12]">Company</h5>
            <ul className="space-y-5 text-base text-[#0d1c12]/60 font-semibold">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-extrabold text-xs uppercase tracking-[0.2em] mb-8 text-[#0d1c12]">Legal</h5>
            <ul className="space-y-5 text-base text-[#0d1c12]/60 font-semibold">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Complaints</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#0d1c12]/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#0d1c12]/40 font-extrabold uppercase tracking-widest">
            © 2024 Gignite Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#0d1c12]/40 font-extrabold uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm font-bold text-primary">verified</span>
            <span>Licensed Micro-finance Institution Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
