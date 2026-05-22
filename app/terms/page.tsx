import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import { NextIntlClientProvider } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { translations } from '../../lib/translations';

export const metadata: Metadata = {
  title: 'XPay Labs — Terms of Service',
  description: 'Terms of Service governing the use of XPay Labs self-hosted crypto payment infrastructure software.',
};

export default function EnglishTermsPage() {
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
            Terms of Service
          </h1>

          <div className="text-sm text-gray-400 font-sans space-y-6 leading-relaxed">
            <p className="text-gray-500 text-xs font-mono">Last updated: May 22, 2026</p>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing, downloading, or using XPay Labs ("the Software"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, you may not install, access, or use the Software. XPay Labs reserves the right to update these Terms at any time without prior notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">2. Description of Service</h2>
              <p>
                XPay Labs is an open-source, self-hosted software infrastructure that enables merchants and developers to deploy their own non-custodial cryptocurrency payment gateway. The Software is provided as a set of containerized microservices that merchants install on their own infrastructure. XPay Labs does not process, store, or transmit payments on behalf of any user.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">3. License</h2>
              <p>
                XPay Labs is distributed under a proprietary license. You are granted a non-exclusive, non-transferable, revocable license to use the Software solely for lawful business purposes. Redistribution, sublicensing, or resale of the Software as a competing product is strictly prohibited without express written consent from XPay Labs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">4. User Responsibilities</h2>
              <div className="space-y-2">
                <p>As a user of XPay Labs, you acknowledge and agree that:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>You are solely responsible for the security, backup, and confidentiality of your cryptographic keys, mnemonic seeds, and API credentials.</li>
                  <li>You are responsible for ensuring your use of the Software complies with all applicable local, national, and international laws and regulations, including but not limited to anti-money laundering (AML) and know-your-customer (KYC) requirements.</li>
                  <li>You assume all risks associated with cryptocurrency transactions, including market volatility, network congestion, and blockchain reorgs.</li>
                  <li>You must maintain the security of your server infrastructure, including firewalls, access controls, and OS-level patches.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">5. Non-Custodial Disclaimer</h2>
              <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 text-xs space-y-2">
                <div className="font-bold text-white flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-orange-400" />
                  <span>IMPORTANT</span>
                </div>
                <p>
                  XPay Labs is strictly non-custodial infrastructure software. The Software does not hold, control, or have access to user funds at any time. All private keys are generated and stored locally on your infrastructure and never transmitted to XPay Labs or any third party. XPay Labs cannot reverse transactions, recover lost keys, or freeze funds. You have complete and exclusive control over your assets.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, XPay Labs and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the Software; (ii) any unauthorized access to or alteration of your data; (iii) any loss of cryptographic keys or funds; (iv) any blockchain network failures, forks, or attacks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">7. No Warranty</h2>
              <p>
                The Software is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. XPay Labs does not warrant that the Software will be uninterrupted, error-free, or secure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">8. Termination</h2>
              <p>
                XPay Labs reserves the right to terminate or suspend access to the Software and related services at any time, without prior notice, for conduct that XPay Labs believes violates these Terms or is harmful to other users, third parties, or XPay Labs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of Singapore.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">10. Contact</h2>
              <p>
                For questions about these Terms, please contact us at{' '}
                <a href="mailto:legal@xpaylabs.com" className="text-blue-400 hover:text-blue-300 transition-colors">legal@xpaylabs.com</a>.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
