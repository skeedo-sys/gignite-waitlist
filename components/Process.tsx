
import React from 'react';
import { useLanguage } from '../src/hooks/useLanguage';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t.process.step1Title,
      description: t.process.step1Desc
    },
    {
      number: 2,
      title: t.process.step2Title,
      description: t.process.step2Desc
    },
    {
      number: 3,
      title: t.process.step3Title,
      description: t.process.step3Desc
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-[#0d1c12]">{t.process.heading}</h2>
          <p className="text-[#0d1c12]/60 max-w-xl mx-auto text-lg font-medium">{t.process.subheading}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="group p-8 rounded-3xl bg-background-light border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="size-12 rounded-2xl bg-primary flex items-center justify-center mb-6 text-[#0d1c12] font-extrabold text-xl shadow-lg shadow-primary/20">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0d1c12]">{step.title}</h3>
              <p className="text-[#0d1c12]/60 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
