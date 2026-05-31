import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Shield, CheckCircle2, Zap, Cpu, Globe, ArrowRight, ExternalLink, Code2, DollarSign, Coins, Wifi } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'SUI Payment Gateway — Accept SUI and USDC on Sui Network | XPay Labs',
  description: 'Self-hosted SUI payment gateway for accepting SUI native tokens and USDC on the Sui Network. Non-custodial, 0% fees, sub-second transaction detection. Docker deployment.',
  keywords: 'SUI payment gateway, Sui Network payment processor, accept SUI tokens, SUI crypto payments, self-hosted SUI gateway, Sui blockchain payments, Move language payment gateway, SUI merchant gateway',
  alternates: {
    canonical: 'https://www.xpaylabs.com/solutions/sui-payment-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/solutions/sui-payment-gateway',
      'en-US': 'https://www.xpaylabs.com/solutions/sui-payment-gateway',
    },
  },
  openGraph: {
    title: 'SUI Payment Gateway — Accept SUI and USDC on Sui Network | XPay Labs',
    description: 'Self-hosted SUI payment gateway. Non-custodial, 0% fees, sub-second transaction detection on the Sui Network.',
    url: 'https://www.xpaylabs.com/solutions/sui-payment-gateway',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUI Payment Gateway — Accept SUI and USDC on Sui Network | XPay Labs',
    description: 'Self-hosted SUI payment gateway. Non-custodial, 0% fees, sub-second transaction detection on the Sui Network.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a SUI payment gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A SUI payment gateway enables merchants to accept cryptocurrency payments on the Sui Network — a high-performance Layer 1 blockchain built on the Move programming language. XPay Labs provides a self-hosted SUI gateway that scans the Sui blockchain for incoming SUI and USDC payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is XPay Labs the first SUI payment gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is among the first self-hosted, non-custodial payment gateways with native SUI Network support. Most hosted payment processors do not yet support SUI, giving XPay Labs merchants a first-mover advantage in accepting SUI and Sui USDC payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tokens can I accept on SUI with XPay Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs supports native SUI tokens and SUI-based USDC. Additional SUI ecosystem tokens can be added by configuring their contract addresses in the node configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the SUI payment gateway non-custodial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is fully non-custodial on all supported chains, including SUI. Private keys are generated deterministically from your seed phrase and stored locally within your Docker container. Funds go directly to your wallets.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'SUI Payment Gateway', item: 'https://www.xpaylabs.com/solutions/sui-payment-gateway' },
  ],
};

export default function SuiPaymentGatewayPage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} />
        <JsonLd data={breadcrumbSchema} />
        <Header />

        <main className="relative gradient-bg pt-24 pb-20">

          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-[#6D28D9]/10 border border-[#6D28D9]/20 px-3 py-1.5 rounded-full text-xs font-bold text-[#A78BFA] uppercase tracking-wider font-mono mb-6">
              <Cpu className="w-3.5 h-3.5" />
              <span>SUI Payment Gateway</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              Self-Hosted{' '}
              <span className="text-gradient-purple-blue">SUI Payment Gateway</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              Accept native SUI and USDC payments on the Sui Network — one of the fastest-growing Layer 1
              blockchains. <strong className="text-white">Non-custodial, 0% fees</strong>, sub-second
              transaction detection. Among the first self-hosted SUI gateway solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
              >
                <Server className="w-4 h-4" />
                <span>Deploy SUI Gateway</span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Stats */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">&lt; 2s</p>
                <p className="text-xs text-gray-400 mt-1">SUI Detection Time</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">0%</p>
                <p className="text-xs text-gray-400 mt-1">Transaction Fees</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">100%</p>
                <p className="text-xs text-gray-400 mt-1">Non-Custodial</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">Early</p>
                <p className="text-xs text-gray-400 mt-1">Market Advantage</p>
              </div>
            </div>
          </section>

          {/* Why SUI */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-purple">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-6">
                Why Accept Payments on Sui Network?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <Zap className="w-8 h-8 text-[#A78BFA] mb-4" />
                  <h3 className="font-display font-medium text-white text-lg mb-2">Sub-Second Finality</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Sui Network achieves transaction finality in under 1 second — faster than any EVM chain.
                    XPay Labs detects SUI payments within 1-2 seconds of submission.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <Coins className="w-8 h-8 text-[#A78BFA] mb-4" />
                  <h3 className="font-display font-medium text-white text-lg mb-2">Low Transaction Costs</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Sui transaction fees are fractions of a cent. Combined with XPay Labs&apos; 0% gateway fee,
                    your cost per SUI payment is effectively zero.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <Globe className="w-8 h-8 text-[#A78BFA] mb-4" />
                  <h3 className="font-display font-medium text-white text-lg mb-2">First-Mover Advantage</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Most payment processors don&apos;t support SUI yet. By integrating XPay Labs, you differentiate
                    your business as an early adopter of the Sui ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10 text-center">
              SUI Payment Gateway Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <Code2 className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">Move-Native Integration</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Built for the Move programming language environment. XPay Labs connects to Sui full nodes
                  via JSON-RPC, monitoring for incoming SUI and USDC transfers.
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Shield className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">Non-Custodial by Default</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Your SUI private keys are generated from your node seed and stored exclusively in your
                  Docker container. No third party can access or move your SUI funds.
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Wifi className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">HMAC-Signed Webhooks</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Every SUI payment triggers a cryptographically signed webhook payload. Verify the HMAC
                  signature to ensure the notification came from your XPay node.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                Be First to Accept SUI Payments
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                Deploy the first self-hosted SUI payment gateway. Zero fees, non-custodial, and ready in
                minutes with Docker. Early adopters get a competitive edge.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>Deploy SUI Gateway</span>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>See Pricing</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
  );
}
