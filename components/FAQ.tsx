
import React from 'react';

const faqs = [
  {
    question: "What is the interest rate?",
    answer: "We pride ourselves on being transparent. Our rates are calculated based on your profile, ranging from 1.5% to 3% monthly. No hidden processing fees or insurance charges."
  },
  {
    question: "Who is eligible for a loan?",
    answer: "Currently, we are focusing on young professionals, gig workers, and students in Bangladesh aged 18-35 with a valid NID and an active mobile wallet (bKash/Nagad)."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-grade 256-bit encryption. Your NID data and facial recognition metrics are encrypted and never shared with third parties."
  },
  {
    question: "When will the app launch?",
    answer: "We are currently in a closed pilot. Users on the waitlist will get priority access starting early next quarter. Join now to lock in your spot!"
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0d1c12]">Common Questions</h2>
          <p className="text-[#0d1c12]/60 text-lg font-medium">Everything you need to know about our waitlist and service.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group border border-[#0d1c12]/5 rounded-2xl bg-background-light overflow-hidden transition-all duration-300"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                <span className="text-xl font-extrabold text-[#0d1c12]">{faq.question}</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary font-bold">expand_more</span>
              </summary>
              <div className="px-8 pb-8 text-[#0d1c12]/60 leading-relaxed text-lg font-medium border-t border-black/5 pt-4 mt-2">
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
