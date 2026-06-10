import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Shield, Check, X, ArrowRight, ExternalLink, Zap, Coins, Lock, Code2, HelpCircle, DollarSign } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import SavingsCalculator from './SavingsCalculator';

export const metadata: Metadata = {
  title: 'Pricing — Self-Hosted Crypto Payment Gateway | XPay Labs',
  description: 'XPay Labs is free, self-hosted crypto payment software. Pay 0% transaction fees. Support plans from $1,500/year. Save $6k-$12k/year vs BitPay, Coinbase Commerce, and hosted gateways.',
  keywords: ['crypto payment gateway pricing', 'self-hosted crypto payment cost', 'BitPay vs XPay Labs cost', 'crypto payment gateway fees comparison', 'free crypto payment gateway', 'non-custodial payment gateway pricing'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/pricing',
    languages: {
      'x-default': 'https://www.xpaylabs.com/pricing',
      'en-US': 'https://www.xpaylabs.com/pricing',
      'zh-CN': 'https://www.xpaylabs.com/zh/pricing',
    },
  },
  openGraph: {
    title: 'Pricing — Self-Hosted Crypto Payment Gateway | XPay Labs',
    description: 'Free self-hosted crypto payment software. 0% transaction fees. Compare costs vs BitPay, Coinbase Commerce, and other gateways.',
    url: 'https://www.xpaylabs.com/pricing',
    type: 'website',
  },
  twitter: {
    title: 'Pricing — Self-Hosted Crypto Payment Gateway | XPay Labs',
    description: 'Free self-hosted crypto payment software. 0% transaction fees. Compare costs vs BitPay, Coinbase Commerce, and other gateways.',
    card: 'summary_large_image',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is XPay Labs really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The XPay Labs software is free to download, deploy, and use. There are no licensing fees, no per-transaction fees, and no monthly subscription costs. You only pay for your server infrastructure and blockchain network gas fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the hidden costs of running XPay Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no hidden costs. You need a VPS or server (as low as $10-20/month from providers like Hetzner, DigitalOcean, or Linode) and blockchain RPC endpoint access (free tiers available from Trongrid, Infura, or QuickNode). Total monthly operating cost: $10-50 depending on your infrastructure choices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I save compared to BitPay or Coinbase Commerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A merchant processing $100,000/month in crypto payments pays $12,000+ per year in fees to BitPay (1% + plan fees) or $9,600+ to Coinbase Commerce (0.8% + plan fees). With XPay Labs, the same volume costs approximately $120-240/year in server costs plus negligible gas fees. That is $10,000+ in annual savings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do the support plans include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Support plans provide direct access to the XPay Labs development team. The Docker plan ($1,500 one-time) covers setup, configuration, and 30 days of support. The Business plan ($3,000/year) adds 12 months of technical support, priority bug fixes, server monitoring assistance, and a 48-hour SLA. Enterprise plans offer custom integrations, dedicated onboarding, and a 24-hour SLA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a support plan to use XPay Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The software is fully functional without a support plan. Community support is available through GitHub Issues and Discord. Support plans are for merchants who want priority assistance, deployment help, or custom integrations.',
      },
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'XPay Labs',
  alternateName: 'xpay',
  description: 'Self-hosted, non-custodial crypto payment gateway supporting TRON, EVM chains, and SUI.',
  applicationCategory: 'PaymentProcessing',
  operatingSystem: 'Docker, Linux',
  offers: [
    {
      '@type': 'Offer',
      name: 'Self-Hosted Software',
      price: '0',
      priceCurrency: 'USD',
      priceValidUntil: '2030-12-31',
      description: 'Free self-hosted crypto payment software. 0% transaction fees.',
    },
    {
      '@type': 'Offer',
      name: 'Docker Setup',
      price: '1500',
      priceCurrency: 'USD',
      priceValidUntil: '2030-12-31',
      description: 'One-time Docker deployment assistance and 30-day setup support.',
    },
    {
      '@type': 'Offer',
      name: 'Business Support',
      price: '3000',
      priceCurrency: 'USD',
      priceValidUntil: '2030-12-31',
      description: 'Annual business support plan with priority SLA and monitoring assistance.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.xpaylabs.com/pricing' },
  ],
};

export default function PricingPage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} />
        <JsonLd data={productSchema} />
        <JsonLd data={breadcrumbSchema} />
        <Header />

        <main className="relative gradient-bg pt-24 pb-20">

          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full text-xs font-bold text-green-400 uppercase tracking-wider font-mono mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>Free Software — 0% Transaction Fees</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Self-Hosted Crypto Payments.{' '}
              <span className="text-gradient-purple-blue">Zero Gateway Fees.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl mx-auto">
              XPay Labs is <strong className="text-white">free, open software</strong>. No per-transaction fees,
              no revenue share, no monthly license. Deploy on your own infrastructure and pay only for server
              hosting and blockchain gas costs.
            </p>
          </section>

          {/* Cost Comparison Highlight */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-panel rounded-xl p-6 text-center glow-blue">
                <p className="text-3xl font-bold text-white font-display">0%</p>
                <p className="text-sm text-gray-400 mt-1">Per-Transaction Fee</p>
                <p className="text-xs text-gray-500 mt-1">vs 0.5–1% at hosted gateways</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center glow-cyan">
                <p className="text-3xl font-bold text-white font-display">$0</p>
                <p className="text-sm text-gray-400 mt-1">Monthly License</p>
                <p className="text-xs text-gray-500 mt-1">vs $25–$300+/mo at competitors</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center glow-purple">
                <p className="text-3xl font-bold text-white font-display">$10–$50</p>
                <p className="text-sm text-gray-400 mt-1">Monthly Server Cost</p>
                <p className="text-xs text-gray-500 mt-1">Cheap VPS is all you need</p>
              </div>
            </div>
          </section>

          {/* Interactive Savings Calculator */}
          <SavingsCalculator />

          {/* Support Plans */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                Support Plans
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
                The software is free. These plans cover <strong className="text-white">deployment assistance and
                technical support</strong> from the core team. Community support via GitHub and Discord is always free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Docker Setup */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col border border-white/5">
                <div className="flex items-center space-x-2 mb-4">
                  <Server className="w-5 h-5 text-brand-blue" />
                  <h3 className="text-lg font-display font-medium text-white">Docker Setup</h3>
                </div>
                <p className="text-3xl font-bold text-white font-display mb-1">$1,500</p>
                <p className="text-xs text-gray-500 font-mono mb-6">one-time setup fee</p>
                <ul className="space-y-3 text-sm flex-1">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Docker environment setup & configuration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Blockchain RPC connection (TRON, EVM, SUI)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Webhook endpoint integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">30 days of setup support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://t.me/OS_Blockchain"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>Contact Sales</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Business Plan */}
              <div className="rounded-2xl p-6 sm:p-8 flex flex-col border border-brand-cyan/30 bg-brand-cyan/[0.03] glow-cyan relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-cyan text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-brand-cyan" />
                  <h3 className="text-lg font-display font-medium text-white">Business</h3>
                </div>
                <p className="text-3xl font-bold text-white font-display mb-1">$3,000</p>
                <p className="text-xs text-gray-500 font-mono mb-6">per year</p>
                <ul className="space-y-3 text-sm flex-1">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Everything in Docker Setup</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">12 months technical support & updates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Priority bug fixes & patches</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Server health monitoring assistance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">48-hour response SLA</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://t.me/OS_Blockchain"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full bg-brand-cyan hover:bg-brand-cyan/90 text-black px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-cyan/20"
                  >
                    <span>Get Business Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Enterprise */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col border border-white/5">
                <div className="flex items-center space-x-2 mb-4">
                  <Lock className="w-5 h-5 text-brand-purple" />
                  <h3 className="text-lg font-display font-medium text-white">Enterprise</h3>
                </div>
                <p className="text-3xl font-bold text-white font-display mb-1">Custom</p>
                <p className="text-xs text-gray-500 font-mono mb-6">tailored pricing</p>
                <ul className="space-y-3 text-sm flex-1">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Custom integrations & system architecture</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">White-label branding & custom domains</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Additional blockchain support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">Dedicated onboarding & migration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">24-hour response SLA</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://t.me/OS_Blockchain"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>Contact Us</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-500 font-sans leading-relaxed text-center max-w-3xl mx-auto">
              <strong className="text-gray-400">All plans include full software access.</strong> The XPay Labs software
              itself is free — support plans are optional and cover deployment assistance and priority technical support.
            </div>
          </section>

          {/* Custom Development */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
                Custom Development Services
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="overflow-x-auto rounded-xl border border-white/5">
                  <table className="w-full text-left text-sm font-sans">
                    <thead>
                      <tr className="bg-[#0b0e25] border-b border-white/8">
                        <th className="p-4 text-gray-300 font-medium">Service</th>
                        <th className="p-4 text-gray-300 font-medium text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-400">Custom API / system integration</td>
                        <td className="p-4 text-gray-300 text-right font-mono">$100–$150/hr</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-400">White-label branding customization</td>
                        <td className="p-4 text-gray-300 text-right font-mono">$500–$2,000</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-400">Custom feature development</td>
                        <td className="p-4 text-gray-300 text-right font-mono">Quote based on scope</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10 text-center">
              How We Compare to Hosted Gateways
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm font-sans">
                <thead>
                  <tr className="bg-[#0b0e25] border-b border-white/8">
                    <th className="p-4 text-gray-400 font-medium w-1/4">Feature</th>
                    <th className="p-4 text-orange-400 font-medium w-[18%]">BitPay</th>
                    <th className="p-4 text-blue-400 font-medium w-[18%]">Coinbase Commerce</th>
                    <th className="p-4 text-gray-400 font-medium w-[18%]">NowPayments</th>
                    <th className="p-4 text-brand-cyan font-medium w-[18%]">XPay Labs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Transaction Fee</td>
                    <td className="p-4 text-gray-400">1%</td>
                    <td className="p-4 text-gray-400">0.8%</td>
                    <td className="p-4 text-gray-400">0.5%</td>
                    <td className="p-4 text-green-400 font-semibold">0%</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Monthly Fee</td>
                    <td className="p-4 text-gray-400">$30–$300+</td>
                    <td className="p-4 text-gray-400">$25</td>
                    <td className="p-4 text-gray-400">$0</td>
                    <td className="p-4 text-green-400 font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Custody Model</td>
                    <td className="p-4 text-gray-400">Custodial</td>
                    <td className="p-4 text-gray-400">Custodial</td>
                    <td className="p-4 text-gray-400">Custodial</td>
                    <td className="p-4 text-green-400 font-semibold">Non-Custodial</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Settlement</td>
                    <td className="p-4 text-gray-400">Scheduled payouts</td>
                    <td className="p-4 text-gray-400">Scheduled payouts</td>
                    <td className="p-4 text-gray-400">Scheduled payouts</td>
                    <td className="p-4 text-green-400 font-semibold">Instant to your wallet</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Chains Supported</td>
                    <td className="p-4 text-gray-400">BTC, BCH, ETH, LTC</td>
                    <td className="p-4 text-gray-400">BTC, ETH, Base</td>
                    <td className="p-4 text-gray-400">BTC, ETH, TRON, BNB +12</td>
                    <td className="p-4 text-green-400 font-semibold">TRON, EVM, SUI</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">KYC Required</td>
                    <td className="p-4 text-gray-400">Yes</td>
                    <td className="p-4 text-gray-400">Yes</td>
                    <td className="p-4 text-gray-400">No (limited)</td>
                    <td className="p-4 text-green-400 font-semibold">No</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">White-Label</td>
                    <td className="p-4 text-gray-400">Enterprise only</td>
                    <td className="p-4 text-gray-400">No</td>
                    <td className="p-4 text-gray-400">Yes</td>
                    <td className="p-4 text-green-400 font-semibold">Full, no branding</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Source Code</td>
                    <td className="p-4 text-gray-400">Closed</td>
                    <td className="p-4 text-gray-400">Closed</td>
                    <td className="p-4 text-gray-400">Closed</td>
                    <td className="p-4 text-green-400 font-semibold">Free (XPay License)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Deployment</td>
                    <td className="p-4 text-gray-400">SaaS</td>
                    <td className="p-4 text-gray-400">SaaS</td>
                    <td className="p-4 text-gray-400">SaaS</td>
                    <td className="p-4 text-green-400 font-semibold">Self-hosted (Docker)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Annual Cost ($100k/mo)</td>
                    <td className="p-4 text-red-400 font-mono">~$12,360</td>
                    <td className="p-4 text-red-400 font-mono">~$9,900</td>
                    <td className="p-4 text-red-400 font-mono">~$6,000</td>
                    <td className="p-4 text-green-400 font-mono font-semibold">~$240</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-gray-500 font-sans text-center">
              XPay Labs annual cost based on VPS hosting only (~$20/mo). Optional support plans from $1,500 (Docker Setup) or $3,000/yr (Business).
            </div>
          </section>

          {/* Why Self-Hosted */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              Why Merchants Choose Self-Hosted
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">Eliminate Middleman Fees</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Hosted gateways take 0.5–1% of every transaction. Self-hosting with XPay Labs eliminates
                  this entirely — you pay only blockchain gas fees, which are typically fractions of a cent.
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Lock className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">Full Sovereign Control</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Private keys never leave your infrastructure. No third party can freeze, delay, or restrict
                  your funds. Settlement is instant — funds arrive directly in your wallet on-chain.
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Code2 className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">Auditable Infrastructure</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Every line of the XPay Labs codebase is visible on GitHub. You can audit security, inspect
                  key derivation, review transaction scanning logic, and contribute improvements.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              Pricing FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is XPay Labs really free?',
                  a: 'Yes. The software is free to download, deploy, and use. No licensing fees, no per-transaction fees, no monthly subscriptions. You only pay for your server and blockchain gas fees.',
                },
                {
                  q: 'What are my actual costs?',
                  a: 'A basic VPS costs $10–20/month (Hetzner, DigitalOcean). Blockchain RPC access is free via Trongrid or Infura. Total: $10–50/month depending on scale. Compare this to $500–1,000+/month in fees at hosted gateways for the same volume.',
                },
                {
                  q: 'Do I need a support plan?',
                  a: 'No. Community support on GitHub and Discord is free and always available. Support plans are optional and provide direct access to the core development team for deployment assistance, priority bug fixes, and custom integration help.',
                },
                {
                  q: 'How much can I save compared to BitPay?',
                  a: 'A merchant processing $100k/month saves $12,000+ per year by switching from BitPay (1% fee + plan) to XPay Labs. The savings calculator above shows your exact numbers based on your volume.',
                },
                {
                  q: 'Do you offer refunds?',
                  a: 'Support plans are non-refundable as they involve direct engineering time. We offer a free discovery call before any plan purchase to ensure XPay Labs is the right fit for your use case.',
                },
              ].map((item, i) => (
                <details key={i} className="glass-panel rounded-xl group open:glow-blue">
                  <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none">
                    <span className="text-sm sm:text-base font-display font-medium text-white pr-4">
                      {item.q}
                    </span>
                    <HelpCircle className="w-4 h-4 text-gray-500 shrink-0 group-open:text-brand-cyan transition-colors" />
                  </summary>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                Start Saving on Payment Processing
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                Deploy XPay Labs on your infrastructure today. Free software, zero transaction fees,
                full non-custodial control. Community support included forever.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>Deploy Free Software</span>
                </Link>
                <a
                  href="https://t.me/OS_Blockchain"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>Talk to Sales</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
  );
}
