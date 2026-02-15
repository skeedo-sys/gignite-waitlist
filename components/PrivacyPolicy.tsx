import React from 'react';
import LegalDocument from './LegalDocument';
import type { ContentSection } from '../types/legal';

interface PrivacyPolicyProps {
  onNavigateHome?: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateHome }) => {
  const sections: ContentSection[] = [
    {
      id: 'introduction',
      icon: 'privacy_tip',
      title: '1. Introduction & Data Controller',
      content: (
        <>
          <p>
            Gignite Tech Ltd ("we", "us", "our", or "Company") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our platform, including but
            not limited to our website, mobile application, and related services (collectively, the "Service").
          </p>
          <p>
            Gignite Tech Ltd is the data controller responsible for your personal data. If you have any questions about our
            privacy practices, please contact us at <strong>privacy@gignite.com</strong>.
          </p>
        </>
      ),
    },
    {
      id: 'information-collection',
      icon: 'info',
      title: '2. Information We Collect',
      content: (
        <>
          <p className="font-semibold mb-4">We collect personal data in the following categories:</p>
          <ul className="space-y-4">
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Identity Information</h4>
              <p className="text-sm text-gray-600">Full name, email address, phone number, National ID (NID), date of birth</p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Financial Data</h4>
              <p className="text-sm text-gray-600">
                Transaction history, income information, bank account details, payment records from gig platforms
              </p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Behavioral Data</h4>
              <p className="text-sm text-gray-600">Platform usage patterns, clicks, navigation behavior, device information</p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Third-Party Data</h4>
              <p className="text-sm text-gray-600">
                Connected gig platform APIs (Uber, Fiverr, Upwork ratings), financial institution records (with consent)
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-usage',
      icon: 'manage_accounts',
      title: '3. How We Use Your Data',
      content: (
        <>
          <p className="mb-4">We use your personal data for the following purposes:</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Service Delivery:</strong> To calculate your Gig Credit Score and provide personalized financial
                recommendations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>KYC/AML Compliance:</strong> To verify your identity and comply with Bangladeshi banking regulations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Risk Assessment:</strong> To assess credit risk and prevent fraud or misuse of the platform
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Communication:</strong> To send you service updates, security alerts, and support notifications
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Analytics & Improvement:</strong> To understand user behavior and improve our Service
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-sharing',
      icon: 'share',
      title: '4. Data Sharing & Third Parties',
      content: (
        <>
          <p className="mb-4">We may share your personal data with the following parties:</p>
          <div className="space-y-4">
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-bold text-[#0d1c12] mb-2">Financial Partners</h4>
              <p className="text-sm text-gray-600">
                Banks and microfinance institutions with your explicit consent to assess your creditworthiness
              </p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-bold text-[#0d1c12] mb-2">Gig Platform APIs</h4>
              <p className="text-sm text-gray-600">
                Uber, Upwork, Fiverr to retrieve your platform ratings and transaction history
              </p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-bold text-[#0d1c12] mb-2">Service Providers</h4>
              <p className="text-sm text-gray-600">
                Cloud hosting (Supabase), analytics tools, email providers under data processing agreements
              </p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-bold text-[#0d1c12] mb-2">Legal Requirements</h4>
              <p className="text-sm text-gray-600">
                Bangladesh Financial Intelligence Unit (FIU) and regulatory authorities if required by law
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'data-security',
      icon: 'security',
      title: '5. Data Security',
      content: (
        <>
          <p className="mb-4">
            We implement comprehensive security measures to protect your personal data from unauthorized access, alteration,
            or disclosure:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">verified</span>
              <span>End-to-end encryption for all data transmission (TLS/SSL)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">verified</span>
              <span>Database encryption at rest using industry-standard algorithms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">verified</span>
              <span>Regular security audits and penetration testing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">verified</span>
              <span>Restricted employee access to personal data on a need-to-know basis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">verified</span>
              <span>Incident response plan for data breaches</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'user-rights',
      icon: 'gavel',
      title: '6. Your Data Rights',
      content: (
        <>
          <p className="mb-4">Under Bangladeshi data protection principles, you have the following rights:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Right to Access</h4>
              <p className="text-sm text-gray-600">Request a copy of your personal data we hold</p>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Right to Rectification</h4>
              <p className="text-sm text-gray-600">Request correction of inaccurate data</p>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Right to Erasure</h4>
              <p className="text-sm text-gray-600">Request deletion of your data where applicable</p>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Right to Withdraw Consent</h4>
              <p className="text-sm text-gray-600">Withdraw consent for specific data processing</p>
            </div>
          </div>
          <p className="mt-6 text-sm">
            To exercise any of these rights, please contact us at <strong>privacy@gignite.com</strong>
          </p>
        </>
      ),
    },
    {
      id: 'retention',
      icon: 'schedule',
      title: '7. Data Retention',
      content: (
        <>
          <p className="mb-4">We retain your personal data as follows:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>
                <strong>Active Users:</strong> While your account is active and for the duration of our business relationship
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>
                <strong>KYC Records:</strong> Minimum 5 years for regulatory compliance as per Bangladesh FIU guidelines
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>
                <strong>Archived Data:</strong> Up to 7 years for legal and tax purposes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>
                <strong>Deleted Accounts:</strong> Securely deleted within 90 days, except where legal retention is required
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'cookies',
      icon: 'cookie',
      title: '8. Cookies & Tracking',
      content: (
        <>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your experience. You can manage your cookie preferences
            through your browser settings. For more details, see our dedicated Cookie Policy.
          </p>
          <div className="bg-yellow-50/50 border border-yellow-100 rounded-xl p-6">
            <p className="text-sm text-gray-700">
              <strong>Essential Cookies:</strong> Required for authentication and service functionality (cannot be disabled)
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'contact',
      icon: 'mail',
      title: '9. Contact & Complaints',
      content: (
        <>
          <p className="mb-4">For privacy inquiries or complaints, please contact:</p>
          <div className="bg-white border border-gray-100 p-6 rounded-xl space-y-3">
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-bold text-[#0d1c12]">
                <a href="mailto:privacy@gignite.com" className="hover:text-[#0df259] transition-colors">
                  privacy@gignite.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Company Address</p>
              <p className="font-bold text-[#0d1c12]">Gignite Tech Ltd, Dhaka, Bangladesh</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Data Protection Officer</p>
              <p className="font-bold text-[#0d1c12]">
                <a href="mailto:dpo@gignite.com" className="hover:text-[#0df259] transition-colors">
                  dpo@gignite.com
                </a>
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalDocument
      documentTitle="Gignite Privacy Policy"
      documentType="Privacy Policy"
      lastUpdated="February 15, 2024"
      sections={sections}
      onNavigateHome={onNavigateHome}
    />
  );
};

export default PrivacyPolicy;
