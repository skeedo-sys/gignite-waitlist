
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-background-light px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0d1c12] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary opacity-[0.08] blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary opacity-[0.08] blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-white text-3xl md:text-7xl font-extrabold mb-8 relative z-10 leading-tight">
            Be the first to get funded
          </h2>
          <p className="text-white/60 text-xl mb-14 max-w-xl mx-auto relative z-10 font-medium">
            Join 15,000+ early birds waiting to ignite their financial future. Secure your spot on the priority list today.
          </p>
          
          <div className="max-w-xl mx-auto p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col md:flex-row gap-2 relative z-10">
            <input 
              className="flex-1 border-0 focus:ring-0 px-6 py-4 rounded-xl text-lg font-medium bg-transparent text-white placeholder:text-white/40" 
              placeholder="Your best email" 
              type="email"
            />
            <button className="bg-primary text-[#0d1c12] px-10 py-4 rounded-xl font-extrabold text-base hover:brightness-110 transition-all shadow-xl shadow-primary/20 active:scale-95">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
