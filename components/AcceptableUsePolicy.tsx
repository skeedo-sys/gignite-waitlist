import React from 'react';
import LegalDocument from './LegalDocument';
import type { ContentSection } from '../types/legal';

interface AcceptableUsePolicyProps {
  onNavigateHome?: () => void;
}

const AcceptableUsePolicy: React.FC<AcceptableUsePolicyProps> = ({ onNavigateHome }) => {
  const sections: ContentSection[] = [
    {
      id: 'overview',
      icon: 'visibility',
      title: '1. Policy Overview',
      content: (
        <>
          <p>
            This Acceptable Use Policy (AUP) outlines the rules and standards that all users of the Gignite platform must
            follow. By using our service, you agree to comply with this policy and all applicable laws and regulations.
          </p>
          <p className="mt-4">
            Gignite reserves the right to investigate any alleged violation of this policy and suspend or terminate access
            to the platform if violations are found.
          </p>
        </>
      ),
    },
    {
      id: 'prohibited-activities',
      icon: 'block',
      title: '2. Prohibited Activities',
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-[#0d1c12]">Users must not:</p>
          <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8 space-y-3">
            <div className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <div>
                <h4 className="font-bold text-[#0d1c12] mb-1">Fraud & Deception</h4>
                <p className="text-sm text-gray-600">
                  Create fake accounts, impersonate others, or provide false information to manipulate credit scores or
                  deceive financial partners
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <div>
                <h4 className="font-bold text-[#0d1c12] mb-1">Harassment & Abuse</h4>
                <p className="text-sm text-gray-600">
                  Send threatening, abusive, or harassing messages to other users or Gignite staff
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <div>
                <h4 className="font-bold text-[#0d1c12] mb-1">Unauthorized Access</h4>
                <p className="text-sm text-gray-600">
                  Attempt to hack, bypass security features, or gain unauthorized access to accounts or systems
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <div>
                <h4 className="font-bold text-[#0d1c12] mb-1">Automated Systems</h4>
                <p className="text-sm text-gray-600">
                  Use bots, scrapers, or other automated tools to access the platform without explicit permission
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <div>
                <h4 className="font-bold text-[#0d1c12] mb-1">Illegal Activities</h4>
                <p className="text-sm text-gray-600">
                  Use the platform for money laundering, terrorism financing, sanctions evasion, or other illegal purposes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <div>
                <h4 className="font-bold text-[#0d1c12] mb-1">Intellectual Property Violations</h4>
                <p className="text-sm text-gray-600">
                  Reverse-engineer algorithms, reproduce proprietary technology, or violate copyrights and trademarks
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <div>
                <h4 className="font-bold text-[#0d1c12] mb-1">Data Misuse</h4>
                <p className="text-sm text-gray-600">
                  Sell, trade, or share your Gig Credit Score with unauthorized parties or use it for purposes beyond the
                  intended scope
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-white p-1 rounded border border-red-200 text-red-500 material-symbols-outlined text-sm flex-shrink-0">
                close
              </span>
              <div>
                <h4 className="font-bold text-[#0d1c12] mb-1">Spam & Phishing</h4>
                <p className="text-sm text-gray-600">
                  Send spam communications, phishing emails, or malicious content through our platform
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'account-responsibility',
      icon: 'person',
      title: '3. Account Responsibility',
      content: (
        <>
          <p className="mb-4">You are responsible for:</p>
          <ul className="list-none space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Keeping your login credentials secure</strong> - Do not share your password with anyone
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Maintaining accurate information</strong> - Update your profile if information changes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Reporting suspicious activity</strong> - Notify us immediately of unauthorized account access
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0df259] mt-1 flex-shrink-0">check_circle</span>
              <span>
                <strong>Complying with laws</strong> - Use the platform only for lawful purposes
              </span>
            </li>
          </ul>

          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> If you believe your account has been compromised, contact us immediately at{' '}
              <strong>security@gignite.com</strong>
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'content-conduct',
      icon: 'chat',
      title: '4. Content & Communication Standards',
      content: (
        <>
          <p className="mb-4">When communicating through our platform, you agree not to:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Post illegal content</h4>
              <p className="text-sm text-gray-600">Such as hate speech, violence, or explicit material</p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Distribute malware</h4>
              <p className="text-sm text-gray-600">Any code or files designed to harm systems</p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Engage in discrimination</h4>
              <p className="text-sm text-gray-600">Based on protected characteristics</p>
            </li>
            <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#0d1c12] mb-2">Invade privacy</h4>
              <p className="text-sm text-gray-600">Share others' personal information without consent</p>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'api-usage',
      icon: 'api',
      title: '5. API & Integration Usage',
      content: (
        <>
          <p className="mb-4">If you access our API or integrate with our service:</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>Do not exceed rate limits without authorization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>Maintain API keys confidentially</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>Do not cache or store credit scores longer than necessary</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>Disclose your use of Gignite data to your customers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>Implement proper security and encryption</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0df259] font-bold">•</span>
              <span>Report security vulnerabilities responsibly</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'enforcement',
      icon: 'gavel',
      title: '6. Enforcement & Consequences',
      content: (
        <>
          <p className="mb-4">
            Violations of this Acceptable Use Policy may result in:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-4 bg-orange-50/50 border border-orange-100 p-4 rounded-lg">
              <span className="material-symbols-outlined text-orange-600 flex-shrink-0">warning</span>
              <div>
                <h4 className="font-bold text-[#0d1c12]">Warning</h4>
                <p className="text-sm text-gray-600">Formal notification of violation</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-orange-50/50 border border-orange-100 p-4 rounded-lg">
              <span className="material-symbols-outlined text-orange-600 flex-shrink-0">block</span>
              <div>
                <h4 className="font-bold text-[#0d1c12]">Temporary Suspension</h4>
                <p className="text-sm text-gray-600">Access to your account suspended for a defined period</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50/50 border border-red-100 p-4 rounded-lg">
              <span className="material-symbols-outlined text-red-600 flex-shrink-0">close</span>
              <div>
                <h4 className="font-bold text-[#0d1c12]">Permanent Termination</h4>
                <p className="text-sm text-gray-600">Account deletion and permanent ban from the platform</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50/50 border border-red-100 p-4 rounded-lg">
              <span className="material-symbols-outlined text-red-600 flex-shrink-0">gavel</span>
              <div>
                <h4 className="font-bold text-[#0d1c12]">Legal Action</h4>
                <p className="text-sm text-gray-600">Referral to law enforcement for criminal violations</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-xl p-6">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> We follow a progressive discipline approach but reserve the right to immediately
              terminate accounts for serious violations such as fraud, hacking attempts, or illegal activity.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'appeal-process',
      icon: 'description',
      title: '7. Appeal Process',
      content: (
        <>
          <p className="mb-4">
            If your account is suspended or terminated, you have the right to appeal:
          </p>
          <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4">
            <div>
              <h4 className="font-bold text-[#0d1c12] mb-2">Step 1: Submit Appeal</h4>
              <p className="text-sm text-gray-600">
                Email <strong>appeals@gignite.com</strong> within 30 days of the action with details about your case
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-bold text-[#0d1c12] mb-2">Step 2: Review Process</h4>
              <p className="text-sm text-gray-600">
                Our compliance team will review your appeal and the original violation (typically 5-7 business days)
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-bold text-[#0d1c12] mb-2">Step 3: Decision</h4>
              <p className="text-sm text-gray-600">
                You'll receive written notification of the decision with an explanation
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'security-reporting',
      icon: 'security',
      title: '8. Security Vulnerability Reporting',
      content: (
        <>
          <p className="mb-4">
            If you discover a security vulnerability in Gignite, please report it responsibly:
          </p>
          <div className="space-y-4">
            <div className="bg-green-50/50 border border-green-100 rounded-xl p-6">
              <h4 className="font-bold text-[#0d1c12] mb-3">Responsible Disclosure</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>DO report to <strong>security@gignite.com</strong> with details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>DO give us reasonable time to fix before disclosure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>DO avoid testing with real user data</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50/50 border border-red-100 rounded-xl p-6">
              <h4 className="font-bold text-[#0d1c12] mb-3">What NOT To Do</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Do NOT publicly disclose before we've had time to fix</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Do NOT demand payment for disclosure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Do NOT access or modify other users' data</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              We appreciate security researchers and will acknowledge your contribution where appropriate.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'policy-changes',
      icon: 'edit_note',
      title: '9. Changes to This Policy',
      content: (
        <>
          <p className="mb-4">
            Gignite may update this Acceptable Use Policy at any time. We will notify users of material changes via email
            or platform notification. Continued use of the service after changes indicates acceptance of the updated policy.
          </p>
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <p className="text-sm text-gray-600">
              <strong>Current Version:</strong> February 15, 2024
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'contact-aup',
      icon: 'email',
      title: '10. Questions or Concerns?',
      content: (
        <>
          <p className="mb-6">
            For questions about this Acceptable Use Policy or to report violations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 p-6 rounded-xl">
              <h4 className="font-bold text-[#0d1c12] mb-3">General Inquiries</h4>
              <a href="mailto:legal@gignite.com" className="text-[#0df259] font-bold hover:underline">
                legal@gignite.com
              </a>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-xl">
              <h4 className="font-bold text-[#0d1c12] mb-3">Security Issues</h4>
              <a href="mailto:security@gignite.com" className="text-[#0df259] font-bold hover:underline">
                security@gignite.com
              </a>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-xl">
              <h4 className="font-bold text-[#0d1c12] mb-3">Violation Reports</h4>
              <a href="mailto:compliance@gignite.com" className="text-[#0df259] font-bold hover:underline">
                compliance@gignite.com
              </a>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-xl">
              <h4 className="font-bold text-[#0d1c12] mb-3">Appeals</h4>
              <a href="mailto:appeals@gignite.com" className="text-[#0df259] font-bold hover:underline">
                appeals@gignite.com
              </a>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalDocument
      documentTitle="Gignite Acceptable Use Policy"
      documentType="Acceptable Use Policy"
      lastUpdated="February 15, 2024"
      sections={sections}
      onNavigateHome={onNavigateHome}
    />
  );
};

export default AcceptableUsePolicy;
