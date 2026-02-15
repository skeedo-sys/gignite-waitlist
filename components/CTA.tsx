
import React, { useState } from 'react';
import { useLanguage } from '../src/hooks/useLanguage';
import { useAddToWaitlist } from '../src/hooks/useSupabase';

const CTA: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const { addToWaitlist, loading, error, success } = useAddToWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    await addToWaitlist(email);
    if (!error) {
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-background-light px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0d1c12] rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary opacity-[0.08] blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary opacity-[0.08] blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-white text-3xl md:text-6xl font-extrabold mb-6 relative z-10 leading-tight">
            {t.cta.heading}
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto relative z-10 font-medium">
            {t.cta.description}
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative z-10">
            <div className="p-1.5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col md:flex-row gap-2">
              <input 
                className="flex-1 border-0 focus:ring-0 px-4 py-3 rounded-xl text-lg font-medium bg-transparent text-white placeholder:text-white/40 disabled:opacity-50" 
                placeholder={t.cta.emailPlaceholder}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <button 
                type="submit"
                disabled={loading || !email.trim()}
                className="bg-primary text-[#0d1c12] px-6 py-2.5 rounded-xl font-extrabold text-base hover:brightness-110 transition-all shadow-xl shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Joining...' : t.cta.button}
              </button>
            </div>
            
            {success && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-400/50 rounded-xl">
                <p className="text-sm font-medium text-green-100">✓ Successfully added to waitlist!</p>
              </div>
            )}
            
            {error && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-400/50 rounded-xl">
                <p className="text-sm font-medium text-red-100">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
