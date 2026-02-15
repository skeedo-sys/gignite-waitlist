
import React, { useState } from 'react';
import { useLanguage } from '../src/hooks/useLanguage';
import { useAddToWaitlist } from '../src/hooks/useSupabase';

const Hero: React.FC = () => {
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
    <section id="hero" className="max-w-5xl mx-auto px-6 pt-[10rem] pb-[7rem] text-center">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[#0d1c12]/70">{t.hero.badge}</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto text-[#0d1c12]">
        {t.hero.heading}
      </h1>
      
      <p className="text-lg md:text-xl text-[#0d1c12]/60 max-w-2xl mx-auto mb-8 leading-relaxed">
        {t.hero.subheading}
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div id="waitlist" className="p-1.5 bg-white rounded-2xl shadow-lg border border-primary/5 flex flex-col md:flex-row gap-2">
          <input 
            className="flex-1 border-0 focus:ring-0 px-4 py-3 rounded-xl text-sm font-medium placeholder:text-slate-400 bg-transparent" 
            placeholder={t.hero.emailPlaceholder}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <button 
            type="submit"
            disabled={loading || !email.trim()}
            className="bg-primary text-[#0d1c12] px-6 py-2.5 rounded-xl font-bold text-sm hover:brightness-105 transition-all shadow-lg shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Joining...' : t.hero.cta}
          </button>
        </div>
        
        {success && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-medium text-green-800">✓ Successfully added to waitlist!</p>
          </div>
        )}
        
        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm font-medium text-red-800">{error}</p>
          </div>
        )}
      </form>
      
      <div className="mt-8 flex items-center justify-center gap-8 grayscale opacity-50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xl">security</span>
          <span className="text-xs font-bold uppercase tracking-widest">{t.hero.security}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xl">verified_user</span>
          <span className="text-xs font-bold uppercase tracking-widest">{t.hero.verified}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
