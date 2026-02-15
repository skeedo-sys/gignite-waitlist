
import React from 'react';
import { useLanguage } from '../src/hooks/useLanguage';

const FAQ: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t.faq.q1,
      answer: t.faq.a1
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#0d1c12]">{t.faq.heading}</h2>
          <p className="text-[#0d1c12]/60 text-lg font-medium">{t.faq.subheading}</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group border border-[#0d1c12]/5 rounded-2xl bg-background-light overflow-hidden transition-all duration-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-xl font-extrabold text-[#0d1c12]">{faq.question}</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary font-bold">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-[#0d1c12]/60 leading-relaxed text-lg font-medium border-t border-black/5 pt-3 mt-1">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
