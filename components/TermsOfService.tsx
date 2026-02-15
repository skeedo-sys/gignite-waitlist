import React from 'react';
import LegalDocument from './LegalDocument';
import type { ContentSection } from '../types/legal';

interface TermsOfServiceProps {
  onNavigateHome?: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigateHome }) => {
  const sections: ContentSection[] = [
    {
      id: 'acceptance',
      icon: 'description',
      title: '1. Acceptance of Terms',
      content: (
        <>
          <p>
            Welcome to Gignite. By accessing or using our platform, website, and AI-driven services, you agree to be bound
            by these Terms of Service. These terms constitute a legally binding agreement between you ("User") and Gignite
            Tech Ltd.
          </p>
          <p>
            If you do not agree to all of these terms, you are expressly prohibited from using the platform and must
            discontinue use immediately. We reserve the right to modify these terms at any time, with updates indicated by
            the "Last Updated" date at the top of this document.
          </p>
        </>
      ),
    },
    {
      id: 'service',
      icon: 'analytics',
      title: '2. Description of Service',
      content: (
        <>
          <p>
            Gignite provides an AI-driven credit scoring platform specifically designed for the gig economy. Our proprietary
            algorithms analyze diverse data points including transaction history, gig platform ratings, and local economic
            factors to generate "Gig Credit Scores."
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1">check_circle</span>
              <span>Real-time analysis of alternative data for financial inclusion.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1">check_circle</span>
              <span>Direct connection between Bangladeshi gig workers and financial institutions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1">check_circle</span>
              <span>Personalized financial health dashboards and recommendations.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'eligibility',
      icon: 'how_to_reg',
      title: '3. Eligibility',
      content: (
        <>
          <p>To use Gignite, you must meet the following criteria:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-1">Residency</h4>
              <p className="text-sm text-gray-500">Must be a legal resident or citizen of Bangladesh.</p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-1">Age</h4>
              <p className="text-sm text-gray-500">Must be at least 18 years of age or older.</p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-1">Profession</h4>
              <p className="text-sm text-gray-500">
                Active engagement in the gig/platform economy (e.g., freelance, ride-sharing).
              </p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-1">Identification</h4>
              <p className="text-sm text-gray-500">
                Possession of a valid National ID (NID) for KYC verification.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'conduct',
      icon: 'block',
      title: '4. Prohibited Conduct',
      content: (
        <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8 space-y-4">
          <p className="text-gray-700 font-semibold mb-2 uppercase text-xs tracking-widest">You agree not to:</p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <span>Provide false, inaccurate, or misleading information to manipulate your Gig Credit Score.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <span>Attempt to reverse-engineer, decompile, or extract the source code of our AI algorithms.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <span>Use any automated system (bots, scrapers) to access the service without written permission.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <span>Interfere with the security features of the platform or access unauthorized data.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'intellectual',
      icon: 'inventory_2',
      title: '5. Intellectual Property',
      content: (
        <>
          <p>
            Unless otherwise indicated, the platform is our proprietary property. All source code, databases, functionality,
            software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content")
            and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by Gignite.
          </p>
          <p>
            Your "Gig Credit Score" results are provided for your personal use and for sharing with authorized financial
            partners only. You do not acquire ownership of the methodology used to calculate such scores.
          </p>
        </>
      ),
    },
    {
      id: 'liability',
      icon: 'error_outline',
      title: '6. Limitation of Liability',
      content: (
        <div className="text-gray-700 italic bg-gray-50 border-l-4 border-[#0df259] p-6 rounded-r-xl">
          <p className="font-semibold text-sm mb-4">
            TO THE FULLEST EXTENT PERMITTED BY LAW, GIGNITE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY,
            OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm font-semibold">
            <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES;</li>
            <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES;</li>
            <li>ANY ERRORS OR OMISSIONS IN AI-DRIVEN SCORING REPORTS;</li>
            <li>FINANCIAL DECISIONS MADE BY THIRD-PARTY LENDERS BASED ON GIGNITE SCORES.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'law',
      icon: 'flag',
      title: '7. Governing Law',
      content: (
        <div className="space-y-6">
          <p>
            These terms shall be governed by and defined following the laws of <strong>Bangladesh</strong>. Gignite Tech Ltd
            and yourself irrevocably consent that the courts of Dhaka, Bangladesh shall have exclusive jurisdiction to resolve
            any dispute which may arise in connection with these terms.
          </p>
          <div className="mt-8 p-6 bg-white border border-[#0df259]/20 rounded-xl flex items-center gap-6">
            <div className="size-16 rounded-full overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                alt="National Flag of Bangladesh"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrlNCAXPZYHWmL02kfwyh9DP07CDyxtxvCfQRAuCpl8d9NM8f7fLJ0nmahtHZg6fYqCfFHwmCoFdp66i15jkNZ4NmJOvgvSU2vt3lCtoP0MzQKQNxNsr44QY6Yx4GCNuArC4qY79CSAQ2rG5s2KOZSxCAeNl1MZidesn682XqvW0kQut1XB61JgTqwDwWP8EPepGLIETJoIVVwEdZCRqgIxfgJHTXPMs8udixkeib3QyBWzhCNLAA-3cEYQuTWi1g8vCPw9KNq_jk"
              />
            </div>
            <div>
              <h4 className="font-bold text-[#0d1c12]">Legal Jurisdiction</h4>
              <p className="text-sm text-gray-500">Dhaka Metropolitan Area, People's Republic of Bangladesh.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <LegalDocument
      documentTitle="Gignite Terms of Service"
      documentType="Terms of Service"
      lastUpdated="May 15, 2024"
      sections={sections}
      onNavigateHome={onNavigateHome}
    />
  );
};

export default TermsOfService;
