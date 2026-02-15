
import React from 'react';
import { useLanguage } from '../src/hooks/useLanguage';

const Comparison: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="comparison" className="py-16 bg-background-light overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#0d1c12]">
              {t.comparison.heading}
            </h2>
            <p className="text-xl text-[#0d1c12]/60 mb-8 leading-relaxed font-medium">
              {t.comparison.subheading}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined font-bold text-3xl">check_circle</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-xl mb-1">{t.comparison.benefit1Title}</h4>
                  <p className="text-base text-[#0d1c12]/60 font-medium">{t.comparison.benefit1Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined font-bold text-3xl">check_circle</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-xl mb-1">{t.comparison.benefit2Title}</h4>
                  <p className="text-base text-[#0d1c12]/60 font-medium">{t.comparison.benefit2Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined font-bold text-3xl">check_circle</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-xl mb-1">{t.comparison.benefit3Title}</h4>
                  <p className="text-base text-[#0d1c12]/60 font-medium">{t.comparison.benefit3Desc}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="relative bg-white p-8 rounded-[1.5rem] shadow-md border border-primary/5">
              <div className="mb-8">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0d1c12]/40 mb-4">{t.comparison.loanExperience}</h4>
                <div className="space-y-6">
                  <div className="bg-red-50 p-4 rounded-2xl border border-red-100 opacity-60">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-extrabold text-red-700 uppercase tracking-tighter">{t.comparison.traditional}</span>
                      <span className="text-xs font-bold text-red-600 uppercase">{t.comparison.tradDays}</span>
                    </div>
                    <div className="w-full bg-red-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 w-full h-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-2xl border-2 border-primary scale-[1.03] shadow-lg shadow-primary/10">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-extrabold text-[#0d1c12] uppercase tracking-tighter">{t.comparison.gignite}</span>
                      <span className="text-xs font-bold text-[#0d1c12] uppercase">{t.comparison.gigniteMinutes}</span>
                    </div>
                    <div className="w-full bg-primary/20 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary w-[5%] h-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background-light p-6 rounded-3xl border border-black/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-full overflow-hidden bg-slate-200 ring-4 ring-white">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Tanvir Ahmed" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtuiOSeQY7hkbfU64aAIoEagtIvdgU0yOtay_dTKTR70YmSTVUPWhvU973IXZXytXTu1M7bXO3--R6TsEBrPvwwOkhFkLlehtk3DljM5DetulUHg0D3q323k0en_TxN84WF5idZHZOJrwQ1fHXr5LgKSHwwSPwR66vw-zno7LlL4pcVaehEAG19AyIMNf-o_Sj2IS1iZ8FoO1ULydY9wXm5v8cK8a2QcG4Yfjo_UwU2vbvbjM_nRL2LQf4LE4aVmqchjkSPQf5SfU" 
                    />
                  </div>
                  <div>
                    <p className="text-base font-extrabold">{t.comparison.testimonialName}</p>
                    <p className="text-xs font-bold text-[#0d1c12]/40 uppercase tracking-widest">{t.comparison.testimonialRole}</p>
                  </div>
                </div>
                <p className="text-base text-[#0d1c12]/70 leading-relaxed font-medium italic">
                  {t.comparison.testimonialText}
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
