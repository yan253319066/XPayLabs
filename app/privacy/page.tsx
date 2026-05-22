import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import { NextIntlClientProvider } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { translations } from '../../lib/translations';

export const metadata: Metadata = {
  title: 'XPay Labs — Privacy Policy',
  description: 'Privacy Policy for XPay Labs self-hosted crypto payment infrastructure software.',
};

export default function EnglishPrivacyPage() {
  return (
    <NextIntlClientProvider locale="en" messages={translations.en}>
      <div className="relative min-h-screen bg-[#040612] text-gray-200">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 hover:text-white transition-colors pb-4 border-b border-white/5 mb-10">
            <ArrowLeft className="w-4 h-4" />
            <Link href="/">Back to Home</Link>
          </div>

          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded text-xs font-bold text-blue-400 uppercase tracking-wide font-mono mb-6">
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL — V1.0</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-none mb-8">
            Privacy Policy
          </h1>

          <div className="text-sm text-gray-400 font-sans space-y-6 leading-relaxed">
            <p className="text-gray-500 text-xs font-mono">Last updated: May 22, 2026</p>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">1. Introduction</h2>
              <p>
                XPay Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our software. Please read this policy carefully. By using our website or software, you consent to the practices described herein.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">2. Information We Collect</h2>
              <div className="space-y-2">
                <p className="font-medium text-gray-300">Information You Provide:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li><strong>Contact Information:</strong> When you contact us via email or through our website, we may collect your name, email address, and any information you choose to include in your message.</li>
                  <li><strong>Communication Data:</strong> We may retain records of correspondence with you.</li>
                </ul>
              </div>
              <div className="space-y-2 mt-3">
                <p className="font-medium text-gray-300">Information Collected Automatically:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li><strong>Usage Data:</strong> We may collect information about how you interact with our website, including pages visited, time spent on pages, and referring URLs.</li>
                  <li><strong>Device Data:</strong> We may collect information about your device, including browser type, operating system, and IP address.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To provide, operate, and maintain our website and software.</li>
                <li>To respond to your inquiries, support requests, or comments.</li>
                <li>To improve our website, software, and user experience.</li>
                <li>To detect, prevent, and address technical issues or security vulnerabilities.</li>
                <li>To comply with legal obligations and enforce our Terms of Service.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">4. Information We Do NOT Collect</h2>
              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-xs space-y-2">
                <div className="font-bold text-white flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-green-400" />
                  <span>IMPORTANT — BY DESIGN</span>
                </div>
                <p>
                  Because XPay Labs is self-hosted software, we never have access to: your cryptographic private keys, mnemonic seeds, merchant wallet addresses, transaction data, customer payment information, or any data processed within your self-hosted deployment. All sensitive data remains exclusively on your infrastructure and is never transmitted to XPay Labs servers.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">5. Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>With your explicit consent.</li>
                <li>To comply with applicable laws, regulations, or legal process.</li>
                <li>To protect our rights, property, or safety, and that of our users or others.</li>
                <li>With service providers who assist us in operating our website (e.g., hosting providers), subject to strict confidentiality agreements.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">6. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption in transit (TLS) and at rest where applicable. However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">7. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of the website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">8. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction or deletion of your personal information.</li>
                <li>Object to or restrict processing of your personal information.</li>
                <li>Withdraw consent at any time where processing is based on consent.</li>
                <li>Lodge a complaint with a data protection authority.</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us at the email address below.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">11. Contact</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@xpaylabs.com" className="text-blue-400 hover:text-blue-300 transition-colors">privacy@xpaylabs.com</a>.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
