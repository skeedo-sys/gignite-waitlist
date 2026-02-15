
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-6 pt-44 pb-24 text-center">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[#0d1c12]/70">Early Access Now Open</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto text-[#0d1c12]">
        Get <span className="text-primary italic">25,000 to 50,000</span> BDT in Minutes
      </h1>
      
      <p className="text-lg md:text-xl text-[#0d1c12]/60 max-w-2xl mx-auto mb-12 leading-relaxed">
        The future of micro-loans for the next generation of Bangladeshi earners. Simple, digital, and lightning-fast. No hidden fees, just growth.
      </p>
      
      <div id="waitlist" className="max-w-lg mx-auto p-2 bg-white rounded-2xl shadow-lg border border-primary/5 flex flex-col md:flex-row gap-2">
        <input 
          className="flex-1 border-0 focus:ring-0 px-4 py-4 rounded-xl text-sm font-medium placeholder:text-slate-400 bg-transparent" 
          placeholder="Enter your email address" 
          type="email"
        />
        <button className="bg-primary text-[#0d1c12] px-8 py-4 rounded-xl font-bold text-sm hover:brightness-105 transition-all shadow-lg shadow-primary/10">
          Get Early Access
        </button>
      </div>
      
      <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xl">security</span>
          <span className="text-xs font-bold uppercase tracking-widest">Bank-Grade Security</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xl">verified_user</span>
          <span className="text-xs font-bold uppercase tracking-widest">NID Verified</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
