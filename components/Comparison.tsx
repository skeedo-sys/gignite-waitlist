
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-[#0d1c12]">
              Why wait weeks when you can have it in <span className="text-primary italic">minutes?</span>
            </h2>
            <p className="text-xl text-[#0d1c12]/60 mb-12 leading-relaxed font-medium">
              Traditional banking hasn't evolved for the digital generation. We've built Gignite to be the financial partner you actually deserve.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined font-bold text-3xl">check_circle</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-xl mb-1">Zero Paperwork</h4>
                  <p className="text-base text-[#0d1c12]/60 font-medium">Everything is 100% digital, from start to finish.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined font-bold text-3xl">check_circle</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-xl mb-1">Transparent Rates</h4>
                  <p className="text-base text-[#0d1c12]/60 font-medium">No hidden processing fees or surprise insurance costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined font-bold text-3xl">check_circle</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-xl mb-1">Flexible Repayment</h4>
                  <p className="text-base text-[#0d1c12]/60 font-medium">Repay on your schedule with automated digital collection.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="relative bg-white p-10 rounded-[2.5rem] shadow-lg border border-primary/5">
              <div className="mb-10">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0d1c12]/40 mb-6">Loan Experience</h4>
                <div className="space-y-8">
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100 opacity-60">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-extrabold text-red-700 uppercase tracking-tighter">Traditional Banks</span>
                      <span className="text-xs font-bold text-red-600 uppercase">14-21 Days</span>
                    </div>
                    <div className="w-full bg-red-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 w-full h-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-6 rounded-2xl border-2 border-primary scale-[1.03] shadow-lg shadow-primary/10">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-extrabold text-[#0d1c12] uppercase tracking-tighter">Gignite App</span>
                      <span className="text-xs font-bold text-[#0d1c12] uppercase">5 Minutes</span>
                    </div>
                    <div className="w-full bg-primary/20 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary w-[5%] h-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background-light p-8 rounded-3xl border border-black/5">
                <div className="flex items-center gap-5 mb-5">
                  <div className="size-12 rounded-full overflow-hidden bg-slate-200 ring-4 ring-white">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Tanvir Ahmed" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtuiOSeQY7hkbfU64aAIoEagtIvdgU0yOtay_dTKTR70YmSTVUPWhvU973IXZXytXTu1M7bXO3--R6TsEBrPvwwOkhFkLlehtk3DljM5DetulUHg0D3q323k0en_TxN84WF5idZHZOJrwQ1fHXr5LgKSHwwSPwR66vw-zno7LlL4pcVaehEAG19AyIMNf-o_Sj2IS1iZ8FoO1ULydY9wXm5v8cK8a2QcG4Yfjo_UwU2vbvbjM_nRL2LQf4LE4aVmqchjkSPQf5SfU" 
                    />
                  </div>
                  <div>
                    <p className="text-base font-extrabold">Tanvir Ahmed</p>
                    <p className="text-xs font-bold text-[#0d1c12]/40 uppercase tracking-widest">Freelance Developer</p>
                  </div>
                </div>
                <p className="text-base text-[#0d1c12]/70 leading-relaxed font-medium italic">
                  "I needed funds for a new laptop to start a project. Gignite approved me in 10 minutes. This is what modern finance should look like."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
