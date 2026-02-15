import React from 'react';
import LegalDocument from './LegalDocument';
import type { ContentSection } from '../types/legal';

interface CookiePolicyProps {
  onNavigateHome?: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onNavigateHome }) => {
  const sections: ContentSection[] = [
    {
      id: 'what-are-cookies',
      icon: 'cookie',
      title: '1. What Are Cookies?',
      content: (
        <>
          <p>
            Cookies are small data files that are stored on your device (computer, tablet, or mobile phone) when you visit
            our website. They help us recognize you, remember your preferences, and enhance your browsing experience. Cookies
            are widely used on the internet and are necessary for many website features to function properly.
          </p>
          <p className="mt-4">
            This Cookie Policy explains what cookies we use, why we use them, and how you can manage your cookie preferences.
          </p>
        </>
      ),
    },
    {
      id: 'cookie-types',
      icon: 'category',
      title: '2. Types of Cookies We Use',
      content: (
        <>
          <p className="mb-4">We use the following categories of cookies:</p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <span className="bg-[#0df259]/20 text-[#0df259] material-symbols-outlined text-sm rounded p-1 flex-shrink-0">
                  lock
                </span>
                <h4 className="font-bold text-[#0d1c12]">Essential (Strictly Necessary) Cookies</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                These cookies are essential for the website to function properly. They enable core functionality such as:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                <li>User authentication and session management</li>
                <li>Security and fraud prevention</li>
                <li>Maintaining user preferences</li>
                <li>Remembering login information</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3 font-semibold">
                ⚠️ Cannot be disabled. Required for service operation.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <span className="bg-blue-100 text-blue-600 material-symbols-outlined text-sm rounded p-1 flex-shrink-0">
                  analytics
                </span>
                <h4 className="font-bold text-[#0d1c12]">Analytics Cookies</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                These cookies help us understand how users interact with our website. We use:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                <li>Google Analytics to track page views and user behavior</li>
                <li>Session recording tools (with consent) to improve UX</li>
                <li>Conversion tracking to measure campaign effectiveness</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                <strong>Retention:</strong> Typically 26 months from last activity
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <span className="bg-purple-100 text-purple-600 material-symbols-outlined text-sm rounded p-1 flex-shrink-0">
                  campaign
                </span>
                <h4 className="font-bold text-[#0d1c12]">Marketing & Advertising Cookies</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                These cookies are used to deliver personalized advertisements and marketing messages:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                <li>Facebook Pixel for retargeting campaigns</li>
                <li>Google Ads for conversion tracking</li>
                <li>LinkedIn tracking for B2B marketing</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                <strong>Optional:</strong> Can be disabled in cookie settings
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <span className="bg-green-100 text-green-600 material-symbols-outlined text-sm rounded p-1 flex-shrink-0">
                  settings
                </span>
                <h4 className="font-bold text-[#0d1c12]">Preference Cookies</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                These cookies remember your choices to provide a personalized experience:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                <li>Language preference (English/Bangla)</li>
                <li>Theme selection (light/dark mode)</li>
                <li>Accessibility preferences</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                <strong>Duration:</strong> Up to 1 year
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'third-party',
      icon: 'share',
      title: '3. Third-Party Cookies',
      content: (
        <>
          <p className="mb-4">
            We work with third-party service providers that place cookies on your device. These include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 p-4 rounded-xl">
              <h5 className="font-bold text-sm text-[#0d1c12] mb-2">Google Analytics</h5>
              <p className="text-xs text-gray-600 mb-3">User behavior and traffic analysis</p>
              <a href="#" className="text-xs text-[#0df259] font-semibold hover:underline">
                Manage →
              </a>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-xl">
              <h5 className="font-bold text-sm text-[#0d1c12] mb-2">Facebook Pixel</h5>
              <p className="text-xs text-gray-600 mb-3">Conversion tracking and retargeting</p>
              <a href="#" className="text-xs text-[#0df259] font-semibold hover:underline">
                Manage →
              </a>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-xl">
              <h5 className="font-bold text-sm text-[#0d1c12] mb-2">Supabase</h5>
              <p className="text-xs text-gray-600 mb-3">Backend service provider</p>
              <a href="#" className="text-xs text-[#0df259] font-semibold hover:underline">
                Manage →
              </a>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-xl">
              <h5 className="font-bold text-sm text-[#0d1c12] mb-2">Hotjar</h5>
              <p className="text-xs text-gray-600 mb-3">Session recording and heatmaps</p>
              <a href="#" className="text-xs text-[#0df259] font-semibold hover:underline">
                Manage →
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'manage-cookies',
      icon: 'settings',
      title: '4. How to Manage Your Cookies',
      content: (
        <>
          <p className="mb-4">
            You have full control over your cookie preferences. Here's how you can manage them:
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
              <h5 className="font-bold text-[#0d1c12] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">language</span>
                Browser Settings
              </h5>
              <p className="text-sm text-gray-700">
                Most browsers allow you to refuse cookies or alert you when a cookie is being sent. Here's how:
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mt-3 ml-4 list-disc">
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                </li>
                <li>
                  <strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Manage website data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and other site data
                </li>
              </ul>
            </div>

            <div className="bg-red-50/50 border border-red-100 rounded-xl p-6">
              <h5 className="font-bold text-[#0d1c12] mb-2">
                ⚠️ Note on Disabling Cookies
              </h5>
              <p className="text-sm text-gray-700">
                If you disable essential cookies, you may not be able to access or properly use our website. Some features
                like login, account security, and transaction processing require essential cookies to function.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'california-privacy',
      icon: 'verified_user',
      title: '5. Do Not Track (DNT) & Privacy Laws',
      content: (
        <>
          <p className="mb-4">
            While we respect your privacy choices, we do not currently respond to "Do Not Track" (DNT) browser signals.
            However, we comply with the following privacy regulations:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Bangladesh Data Protection:</strong> We comply with Bangladesh's data protection and financial
                regulations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>GDPR (if applicable):</strong> If you access our service from the EU, we comply with GDPR
                requirements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Consent:</strong> We obtain explicit consent before using non-essential cookies
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'cookie-consent',
      icon: 'mail_outline',
      title: '6. Cookie Consent Banner',
      content: (
        <>
          <p className="mb-4">
            When you first visit our website, you'll see a cookie consent banner at the bottom of the page. The banner
            provides options to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-lg">
              <span className="material-symbols-outlined text-[#0df259]">check</span>
              <span className="text-sm">Accept all cookies</span>
            </li>
            <li className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-lg">
              <span className="material-symbols-outlined text-[#0df259]">check</span>
              <span className="text-sm">Manage cookie preferences</span>
            </li>
            <li className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-lg">
              <span className="material-symbols-outlined text-[#0df259]">check</span>
              <span className="text-sm">Reject non-essential cookies</span>
            </li>
            <li className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-lg">
              <span className="material-symbols-outlined text-[#0df259]">check</span>
              <span className="text-sm">View this policy</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            You can change your cookie preferences at any time by clicking the cookie icon in the footer or accessing
            your browser settings.
          </p>
        </>
      ),
    },
    {
      id: 'cookie-table',
      icon: 'table_chart',
      title: '7. Cookie Reference Table',
      content: (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left p-3 font-bold text-[#0d1c12]">Cookie Name</th>
                  <th className="text-left p-3 font-bold text-[#0d1c12]">Purpose</th>
                  <th className="text-left p-3 font-bold text-[#0d1c12]">Duration</th>
                  <th className="text-left p-3 font-bold text-[#0d1c12]">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-mono text-xs text-gray-700">_sess</td>
                  <td className="p-3 text-gray-600">Session authentication</td>
                  <td className="p-3 text-gray-600">Session</td>
                  <td className="p-3">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Essential</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-mono text-xs text-gray-700">_ga</td>
                  <td className="p-3 text-gray-600">Google Analytics</td>
                  <td className="p-3 text-gray-600">2 years</td>
                  <td className="p-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">Analytics</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-mono text-xs text-gray-700">_fbp</td>
                  <td className="p-3 text-gray-600">Facebook Pixel</td>
                  <td className="p-3 text-gray-600">3 months</td>
                  <td className="p-3">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">Marketing</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-mono text-xs text-gray-700">lang</td>
                  <td className="p-3 text-gray-600">Language preference</td>
                  <td className="p-3 text-gray-600">1 year</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Preference</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: 'contact-cookies',
      icon: 'email',
      title: '8. Questions About Cookies?',
      content: (
        <>
          <p className="mb-6">
            If you have any questions about how we use cookies or wish to report a privacy concern, please contact our
            Privacy Team:
          </p>
          <div className="bg-white border border-gray-100 p-6 rounded-xl space-y-4">
            <div>
              <p className="text-xs text-gray-600 font-semibold uppercase">Email</p>
              <a href="mailto:privacy@gignite.com" className="text-[#0df259] font-bold hover:underline">
                privacy@gignite.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-semibold uppercase">Mailing Address</p>
              <p className="font-bold text-[#0d1c12]">Gignite Tech Ltd, Dhaka, Bangladesh</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-semibold uppercase">Last Updated</p>
              <p className="font-bold text-[#0d1c12]">February 15, 2024</p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalDocument
      documentTitle="Gignite Cookie Policy"
      documentType="Cookie Policy"
      lastUpdated="February 15, 2024"
      sections={sections}
      onNavigateHome={onNavigateHome}
    />
  );
};

export default CookiePolicy;
