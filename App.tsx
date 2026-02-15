
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden antialiased">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
