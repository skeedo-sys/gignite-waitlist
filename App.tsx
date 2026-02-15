
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import AcceptableUsePolicy from './components/AcceptableUsePolicy';
import LegalHub from './components/LegalHub';
import { LanguageProvider } from './src/hooks/useLanguage';
import type { LegalDocumentType } from './types/legal';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<LegalDocumentType>('home');

  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (['tos', 'privacy', 'cookies', 'aup'].includes(hash)) {
        setCurrentPage(hash as LegalDocumentType);
      } else if (hash === 'legal') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Call on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToLegal = (document: string) => {
    window.location.hash = document;
  };

  const navigateHome = () => {
    window.location.hash = 'home';
    setCurrentPage('home');
  };

  // Render legal pages
  if (currentPage === 'tos') {
    return (
      <div className="flex min-h-screen flex-col overflow-x-hidden antialiased">
        <Navbar />
        <TermsOfService onNavigateHome={() => navigateToLegal('legal')} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="flex min-h-screen flex-col overflow-x-hidden antialiased">
        <Navbar />
        <PrivacyPolicy onNavigateHome={() => navigateToLegal('legal')} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'cookies') {
    return (
      <div className="flex min-h-screen flex-col overflow-x-hidden antialiased">
        <Navbar />
        <CookiePolicy onNavigateHome={() => navigateToLegal('legal')} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'aup') {
    return (
      <div className="flex min-h-screen flex-col overflow-x-hidden antialiased">
        <Navbar />
        <AcceptableUsePolicy onNavigateHome={() => navigateToLegal('legal')} />
        <Footer />
      </div>
    );
  }

  // Show legal hub if on legal page
  if (currentPage === 'home' && window.location.hash.includes('legal')) {
    return (
      <div className="flex min-h-screen flex-col overflow-x-hidden antialiased">
        <Navbar />
        <LegalHub onNavigate={navigateToLegal} />
        <Footer />
      </div>
    );
  }

  // Default home page
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden antialiased">
      <Navbar />
      <main className="">
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

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
