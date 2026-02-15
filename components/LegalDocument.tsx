import React from 'react';

interface ContentSection {
  id: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

interface LegalDocumentProps {
  documentTitle: string;
  documentType: string;
  lastUpdated: string;
  sections: ContentSection[];
  onNavigateHome?: () => void;
}

const LegalDocument: React.FC<LegalDocumentProps> = ({
  documentTitle,
  documentType,
  lastUpdated,
  sections,
  onNavigateHome,
}) => {
  const handleDownloadPDF = () => {
    alert('PDF download functionality would be implemented here');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-20">
      <main className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        {/* Document Hero Header */}
        <div className="mb-12 border-b border-[#0df259]/20 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <nav className="flex items-center gap-2 text-sm text-[#0df259] font-medium uppercase tracking-wider">
                <button
                  onClick={onNavigateHome}
                  className="hover:underline cursor-pointer"
                >
                  Legal
                </button>
                <span className="text-gray-300">/</span>
                <span className="text-gray-500">{documentType}</span>
              </nav>
              <h1 className="text-4xl lg:text-5xl font-black text-[#0d1c12] tracking-tight">
                {documentTitle}
              </h1>
              <p className="text-gray-500 text-lg">Last updated: {lastUpdated}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                Download PDF
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-lg">print</span>
                Print
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-1/4 lg:sticky lg:top-28 h-fit hidden lg:block">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                Table of Contents
              </h3>
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 text-[#0d1c12] hover:text-[#0df259] transition-colors"
                    >
                      <span className="material-symbols-outlined text-gray-300 group-hover:text-[#0df259]">
                        {section.icon}
                      </span>
                      <span className="text-sm font-semibold">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Helper Card */}
            <div className="mt-6 bg-[#0df259]/10 rounded-xl p-6 border border-[#0df259]/20">
              <p className="text-sm font-semibold text-[#0d1c12] mb-2">Have questions?</p>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                Our legal team is here to help you understand your rights and obligations.
              </p>
              <a
                className="text-xs font-bold text-[#0d1c12] underline decoration-[#0df259] underline-offset-4"
                href="mailto:legal@gignite.com"
              >
                legal@gignite.com
              </a>
            </div>
          </aside>

          {/* Document Content */}
          <div className="lg:w-3/4 space-y-16">
            {sections.map((section) => (
              <section key={section.id} className="scroll-mt-28" id={section.id}>
                <h2 className="text-2xl font-bold mb-6 text-[#0d1c12] flex items-center gap-3">
                  <span className="bg-[#0df259]/20 p-2 rounded-lg text-[#0df259] material-symbols-outlined">
                    {section.icon}
                  </span>
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalDocument;
