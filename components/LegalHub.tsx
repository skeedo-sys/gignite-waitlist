import React from 'react';

interface LegalHubProps {
  onNavigate?: (document: string) => void;
}

const LegalHub: React.FC<LegalHubProps> = ({ onNavigate }) => {
  const documents = [
    {
      id: 'tos',
      title: 'Terms of Service',
      description: 'Legal terms and conditions governing your use of the Gignite platform',
      icon: 'description',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700',
      updated: 'May 15, 2024',
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal data',
      icon: 'privacy_tip',
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700',
      updated: 'February 15, 2024',
    },
    {
      id: 'cookies',
      title: 'Cookie Policy',
      description: 'Information about cookies and tracking technologies we use',
      icon: 'cookie',
      color: 'bg-amber-50 border-amber-200',
      textColor: 'text-amber-700',
      updated: 'February 15, 2024',
    },
    {
      id: 'aup',
      title: 'Acceptable Use Policy',
      description: 'Rules and standards for proper platform usage and conduct',
      icon: 'gavel',
      color: 'bg-red-50 border-red-200',
      textColor: 'text-red-700',
      updated: 'February 15, 2024',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-[#0df259] font-medium uppercase tracking-wider mb-6">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-300">/</span>
            <span>Legal</span>
          </nav>
          <h1 className="text-5xl lg:text-6xl font-black text-[#0d1c12] tracking-tight mb-4">
            Legal & Compliance
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about Gignite's policies and your rights. We're committed to transparency and your
            peace of mind.
          </p>
        </div>

        {/* Legal Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => onNavigate?.(doc.id)}
              className={`${doc.color} border-2 rounded-2xl p-8 text-left hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`material-symbols-outlined text-4xl ${doc.textColor}`}>
                  {doc.icon}
                </span>
                <span className="text-xs font-bold text-gray-400">Updated: {doc.updated}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d1c12] mb-3 group-hover:text-[#0df259] transition-colors">
                {doc.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {doc.description}
              </p>
              <div className="flex items-center gap-2 text-[#0df259] font-bold text-sm group-hover:gap-3 transition-all">
                <span>Read Full Document</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </button>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-[#0df259]/10 to-blue-50 border border-[#0df259]/20 rounded-3xl p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1c12] mb-4">Your Privacy Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gignite is committed to protecting your personal information. We comply with all applicable data protection
                laws in Bangladesh and maintain the highest standards of security. Your data is encrypted, secure, and only
                used as outlined in our Privacy Policy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0df259]">verified</span>
                  <span className="text-[#0d1c12] font-semibold">End-to-end encryption</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0df259]">verified</span>
                  <span className="text-[#0d1c12] font-semibold">Secure data storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0df259]">verified</span>
                  <span className="text-[#0d1c12] font-semibold">Regular security audits</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0d1c12] mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a user of Gignite, you have specific rights regarding your data. You can request access to your
                information, ask for corrections, or request deletion where applicable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0df259]">person</span>
                  <span className="text-[#0d1c12] font-semibold">Right to access your data</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0df259]">edit</span>
                  <span className="text-[#0d1c12] font-semibold">Right to correct information</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0df259]">delete</span>
                  <span className="text-[#0d1c12] font-semibold">Right to request deletion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0d1c12] text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-[#0d1c12] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0df259]">help</span>
                Is my data secure?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. We use industry-leading encryption and security measures to protect your data. All data transmission is
                secured with TLS/SSL encryption.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-[#0d1c12] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0df259]">help</span>
                How long do you keep my data?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We retain your data as long as your account is active. KYC records are kept for 5 years per regulatory
                requirements.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-[#0d1c12] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0df259]">help</span>
                Can I delete my account and data?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. You can request account deletion at any time. We'll securely delete your data within 90 days, except
                where legal retention is required.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-[#0d1c12] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0df259]">help</span>
                Who do I contact with privacy questions?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Please contact our Data Protection Officer at <strong>privacy@gignite.com</strong>. We'll respond within 7
                business days.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#0d1c12] mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our legal team is here to help clarify any questions about our policies or your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@gignite.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0df259] text-[#0d1c12] rounded-lg font-bold hover:scale-[1.02] transition-transform"
            >
              <span className="material-symbols-outlined">mail</span>
              Email Our Legal Team
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 text-[#0d1c12] rounded-lg font-bold hover:bg-gray-50 transition-colors"
            >
              <span className="material-symbols-outlined">phone</span>
              Schedule a Call
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalHub;
