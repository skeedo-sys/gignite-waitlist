
import React from 'react';

const steps = [
  {
    number: 1,
    title: "Instant Sign Up",
    description: "Create your profile in 30 seconds using just your phone number and basic details."
  },
  {
    number: 2,
    title: "Digital Verification",
    description: "A quick NID scan and facial verification. No physical documents or branch visits needed."
  },
  {
    number: 3,
    title: "Wallet Funding",
    description: "Once approved, funds land directly in your bKash, Nagad, or bank account instantly."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#0d1c12]">Three simple steps to funding</h2>
          <p className="text-[#0d1c12]/60 max-w-xl mx-auto text-lg font-medium">From application to disbursement, we've removed every unnecessary hurdle.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group p-10 rounded-3xl bg-background-light border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="size-14 rounded-2xl bg-primary flex items-center justify-center mb-8 text-[#0d1c12] font-extrabold text-2xl shadow-lg shadow-primary/20">
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
