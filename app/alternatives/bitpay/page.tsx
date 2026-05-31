import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight, Check, X, Server, Key, Coins, Palette, Settings, DollarSign, Code, ExternalLink, ArrowUpRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'BitPay Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
  description: 'BitPay alternative for merchants who want non-custodial, self-hosted crypto payments. Lower fees, full chain support, white-label checkout — no third-party risk.',
  keywords: ['BitPay alternative', 'alternative to BitPay', 'BitPay vs self-hosted', 'self-hosted crypto payment gateway', 'non-custodial bitcoin payments', 'crypto payment processor comparison'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/alternatives/bitpay',
    languages: {
      'x-default': 'https://www.xpaylabs.com/alternatives/bitpay',
      'en-US': 'https://www.xpaylabs.com/alternatives/bitpay',
    },
  },
  openGraph: {
    title: 'BitPay Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
    description: 'BitPay alternative for merchants who want non-custodial, self-hosted crypto payments without the overhead.',
    url: 'https://www.xpaylabs.com/alternatives/bitpay',
    type: 'website',
  },
  twitter: {
    title: 'BitPay Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
    description: 'BitPay alternative for merchants who want non-custodial, self-hosted crypto payments without the overhead.',
    card: 'summary_large_image',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes XPay Labs a good BitPay alternative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is a self-hosted, non-custodial crypto payment gateway. Unlike BitPay, you retain full control of private keys, funds settle directly to your wallet, there are no monthly fees, and you get support for TRON, EVM chains, and SUI — not just Bitcoin and a handful of coins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is XPay Labs cheaper than BitPay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs charges 0% transaction fees and has no monthly subscription. You only pay network gas fees. BitPay charges 1% per transaction plus a $30+/month plan fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate from BitPay to XPay Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Migration involves deploying the XPay Labs Docker container on your server, generating your node seed, and redirecting your checkout API calls from BitPay to XPay Labs endpoints. A full migration guide is available in the documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does XPay Labs support Bitcoin like BitPay does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs focuses on TRON, EVM-compatible chains (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Base), and SUI. For Bitcoin-native merchants, BitPay remains the better choice. XPay Labs is designed for multi-chain and stablecoin-first payment workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the XPay Labs codebase auditable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is source-available under the XPay Enterprise License. The full core codebase is published on GitHub for audit. You can inspect exactly how key derivation, transaction scanning, and webhook dispatch work. BitPay\'s core infrastructure is proprietary and closed-source.',
      },
    },
  ],
};

const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  about: {
    '@type': 'Product',
    name: 'BitPay vs XPay Labs Comparison',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.xpaylabs.com/alternatives/bitpay' },
  ],
};

export default function BitPayAlternativePage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">

        <JsonLd data={faqSchema} />
        <JsonLd data={comparisonSchema} />
        <JsonLd data={breadcrumbSchema} />

        <Header />

        <main className="relative gradient-bg pt-24 pb-20">

          {/* Hero Section */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono mb-6">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>BitPay Alternative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              BitPay Alternative —{' '}
              <span className="text-gradient-purple-blue">Self-Hosted</span> Crypto Payment Gateway
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              BitPay pioneered crypto payments for merchants, but its custodial model, high fees, and limited chain
              support leave growing businesses wanting more. <strong className="text-white">XPay Labs</strong> is the
              self-hosted, non-custodial alternative — full control, zero monthly fees, and multi-chain by design.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
              >
                <Server className="w-4 h-4" />
                <span>View Deployment Guide</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                <span>XPay Labs Overview</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Why Merchants Leave BitPay */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-blue">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8">
                Why Merchants Are Looking for a BitPay Alternative
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">High Fees</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BitPay charges <strong className="text-gray-300">1% per transaction</strong> plus a monthly plan fee starting at
                    $30/month. For a business processing $100k/month, that's over $12k/year in fees alone.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Key className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">Custodial Risk</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BitPay holds settlement funds and pays out on a schedule. You don't control the private keys. If
                    BitPay freezes, delays, or restricts your account, your funds are inaccessible.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">Limited Chain Support</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BitPay supports BTC, BCH, ETH, and a handful of stablecoins. For merchants serving users on
                    TRON (USDT), SUI, or L2 networks like Arbitrum and Base, there is no native support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              BitPay vs XPay Labs — Side by Side
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm font-sans">
                <thead>
                  <tr className="bg-[#0b0e25] border-b border-white/8">
                    <th className="p-4 text-gray-400 font-medium w-1/3">Feature</th>
                    <th className="p-4 text-orange-400 font-medium w-1/3">BitPay</th>
                    <th className="p-4 text-brand-cyan font-medium w-1/3">XPay Labs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Transaction Fees</td>
                    <td className="p-4 text-gray-400">1% per transaction</td>
                    <td className="p-4 text-green-400">0% (gas only)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Monthly Plan Fee</td>
                    <td className="p-4 text-gray-400">$30 – $300+/month</td>
                    <td className="p-4 text-green-400">$0 (self-hosted)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Custody Model</td>
                    <td className="p-4 text-gray-400">Custodial — BitPay controls keys</td>
                    <td className="p-4 text-green-400">Non-custodial — you control keys</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Settlement Control</td>
                    <td className="p-4 text-gray-400">Scheduled payouts (manual)</td>
                    <td className="p-4 text-green-400">Instant — funds arrive in your wallet</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Supported Chains</td>
                    <td className="p-4 text-gray-400">BTC, BCH, ETH, LTC, DOGE, 5 stablecoins</td>
                    <td className="p-4 text-green-400">TRON, EVM (ETH, BNB, Polygon, Arbitrum, Optimism, Base), SUI</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">White-Label Checkout</td>
                    <td className="p-4 text-gray-400">BitPay branding required</td>
                    <td className="p-4 text-green-400">Full white-label (your brand)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Source Access</td>
                    <td className="p-4 text-gray-400">Closed-source (proprietary)</td>
                    <td className="p-4 text-green-400">Source-available (XPay License)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Deployment</td>
                    <td className="p-4 text-gray-400">Cloud (SaaS)</td>
                    <td className="p-4 text-green-400">Self-hosted (Docker, VPS, bare metal)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">KYC Requirements</td>
                    <td className="p-4 text-gray-400">Required (business verification)</td>
                    <td className="p-4 text-green-400">None (self-sovereign)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Webhook / API</td>
                    <td className="p-4 text-gray-400">REST API + IPN</td>
                    <td className="p-4 text-green-400">REST API + HMAC-signed webhooks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Feature-by-Feature Deep Dive */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10">
              Detailed Feature Comparison
            </h2>

            <div className="space-y-8">
              {/* Fees */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <DollarSign className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">Pricing & Fees</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BitPay's fee structure combines a <strong className="text-gray-300">1% transaction fee</strong> with a
                      monthly plan ($30/month for Starter, $300/month for Business, custom pricing for Enterprise).
                      For a business doing $50k/month in crypto revenue, BitPay costs <strong className="text-gray-300">$500 in
                      transaction fees</strong> plus the monthly plan — over <strong className="text-gray-300">$6,000/year</strong>.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs charges <strong className="text-green-400">0% transaction fees</strong> and
                      <strong className="text-green-400"> $0 monthly fees</strong>. As a self-hosted solution, your only
                      costs are server hosting (as low as $10/month on a VPS) and blockchain network gas fees
                      (typically fractions of a cent per transaction on TRON or L2s). Over a year, that's a savings
                      of thousands of dollars.
                    </p>
                  </div>
                </div>
              </article>

              {/* Custody */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">Custody & Key Management</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BitPay uses a <strong className="text-gray-300">custodial model</strong>. When a customer pays, the funds go
                      to BitPay's wallet. BitPay then settles to your bank account or crypto wallet on a schedule.
                      You never hold the private keys. This introduces counterparty risk: if BitPay experiences
                      regulatory issues, technical outages, or account restrictions, your funds are at risk.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs is <strong className="text-green-400">fully non-custodial</strong>. Every invoice generates a
                      unique deposit address derived from your own node seed — held exclusively inside your Docker
                      container. Funds settle directly to your wallet in real-time. No third party touches your
                      money, no withdrawal delays, no account freeze risk. Your keys, your coins.
                    </p>
                  </div>
                </div>
              </article>

              {/* Chain Support */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Coins className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">Chain & Token Support</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BitPay supports Bitcoin, Bitcoin Cash, Ethereum, Litecoin, Dogecoin, and five stablecoins
                      (USDC, USDP, GUSD, PAX, BUSD). While this covers the basics, it misses the chains where
                      stablecoin volume is exploding: <strong className="text-gray-300">TRON (TRC-20 USDT)</strong>, which processes
                      more USDT volume than any other chain; <strong className="text-gray-300">L2 networks</strong> like Arbitrum,
                      Optimism, and Base; and emerging chains like <strong className="text-gray-300">SUI</strong>.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs supports <strong className="text-green-400">TRON</strong>,
                      <strong className="text-green-400"> EVM-compatible chains</strong> (Ethereum, BNB Chain, Polygon,
                      Arbitrum, Optimism, Base), and <strong className="text-green-400">SUI</strong>. This covers the vast
                      majority of stablecoin and altcoin payment volume. New chains can be added by the community
                      via pull request — the code is open.
                    </p>
                  </div>
                </div>
              </article>

              {/* White-Label */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Palette className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">White-Label & Brand Control</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BitPay's checkout page and email notifications carry BitPay branding. Merchants on the
                      standard plan cannot remove BitPay logos or customize the checkout domain. Enterprise plans
                      may offer white-label, but at significant additional cost.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs is <strong className="text-green-400">fully white-label by default</strong>. The checkout page
                      uses your brand colors, logo, and domain. No "Powered by XPay Labs" badge. Your customers
                      see a seamless, professional checkout experience that reinforces your brand, not a third
                      party's.
                    </p>
                  </div>
                </div>
              </article>

              {/* Settlement Control */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Settings className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">Settlement & Payout Control</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BitPay aggregates your transactions and issues payouts on a schedule (daily, weekly, or
                      monthly depending on your plan). You cannot access funds immediately unless you pay for
                      instant settlement features. Conversion to fiat is handled by BitPay's partners, adding
                      another layer of delay and cost.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      With XPay Labs, settlement is <strong className="text-green-400">instant and direct</strong>. Each
                      invoice's payment goes straight to the derived deposit address that you control. You can
                      sweep funds, swap, or HODL on your own schedule. No waiting for batch payouts, no
                      settlement windows, no intermediary.
                    </p>
                  </div>
                </div>
              </article>

              {/* Developer Experience */}

              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-5 h-5 text-[#5B8CFF]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5B8CFF] font-mono">DEVELOPER</span>
                </div>
                <h3 className="text-xl font-display font-medium text-white">Developer Experience</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BitPay's core infrastructure is <strong className="text-gray-300">closed-source and proprietary</strong>.
                      You cannot audit the code, customize the integration, or contribute features. The API is
                      documented but limited to what BitPay decides to expose.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs is <strong className="text-green-400">source-available</strong> — every line of code is visible
                      on GitHub. You can audit security, submit pull requests, fork the project, and extend it
                      however you need. The REST API is complemented by <strong className="text-gray-300">HMAC-signed
                      webhooks</strong> for secure server-to-server notifications, and the Docker deployment means
                      you can be running in minutes.
                    </p>
                </div>
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-cyan">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
                Pricing Comparison
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">B</div>
                    <h3 className="text-lg font-display font-medium text-white">BitPay</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">1% transaction fee on every payment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">$30 – $300+ monthly plan fee</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">Settlement delays (daily/weekly batches)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">Fiat conversion fees via partners</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    Estimated annual cost at $50k/mo volume: <strong className="text-red-400">~$6,600+</strong>
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-brand-cyan/[0.03] border border-brand-cyan/10">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan">X</div>
                    <h3 className="text-lg font-display font-medium text-white">XPay Labs</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">0% transaction fee (gas only)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">$0 monthly fee (self-hosted)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">Instant settlement to your wallet</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">No fiat conversion overhead</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    Estimated annual cost at $50k/mo volume: <strong className="text-green-400">~$120 (VPS)</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Honest Assessment */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              Who Should Switch — And Who Should Stay
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-green-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Check className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-display font-medium text-white">Switch to XPay Labs If…</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You process over $10k/month and want to eliminate 1% transaction fees</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want full control of private keys and instant settlement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You need TRON (USDT), SUI, L2 support that BitPay doesn't offer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want a white-label checkout with your own branding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You have DevOps capability to run a Docker container</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want auditable, self-hosted infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want to avoid KYC/onboarding delays with payment processors</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <X className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-display font-medium text-white">Stay with BitPay If…</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You primarily accept Bitcoin and Bitcoin Cash payments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You need fiat settlement to your bank account (BitPay handles conversion)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You prefer a fully managed SaaS solution with no server maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You have regulatory requirements that mandate a licensed payment processor</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You need BitPay's Gift Card purchase and BitPay Wallet ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Migration Guide */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-purple">
              <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-purple uppercase tracking-wider font-mono mb-6">
                <Server className="w-3.5 h-3.5" />
                <span>Migration Guide</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-6">
                How to Migrate from BitPay to XPay Labs
              </h2>

              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
                Migrating payment infrastructure sounds daunting, but the process is straightforward. BitPay and XPay
                Labs share a similar invoice-based architecture, so the conceptual model maps directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">1</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Deploy XPay Labs</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Spin up the XPay Labs Docker container on your VPS or server. Configure environment variables
                      for your node seed, RPC providers, and HMAC secret. Full instructions in the{' '}
                      <Link href="/docs" className="text-brand-cyan hover:text-white transition-colors underline underline-offset-2">deployment guide</Link>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">2</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Generate Your Node Seed</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      XPay Labs derives unique deposit addresses from a BIP-39 mnemonic seed you generate. Back
                      this up securely — it is your master key. Unlike BitPay, you never share this seed with
                      anyone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">3</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Update Your Checkout Integration</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Replace BitPay API calls with XPay Labs REST API endpoints. The invoice creation flow is
                      similar: create an invoice, get a payment address, and listen for webhook confirmations.
                      Our HMAC-signed webhooks provide the same reliability as BitPay IPN.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">4</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Redirect Your Customers</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Point your checkout flow to your self-hosted XPay Labs checkout page. Because XPay Labs is
                      white-label by default, your customers will never know you switched providers — they'll
                      just see a faster, more polished checkout experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">5</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Monitor & Optimize</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Use XPay Labs' webhook logs and invoice dashboard to monitor payment flow. Run both systems
                      in parallel during a transition period to ensure zero downtime. Once comfortable, deactivate
                      your BitPay account.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">Pro Tip:</strong> Run BitPay and XPay Labs in parallel for 1–2 weeks.
                Route a percentage of traffic to XPay Labs and compare settlement times, fee savings, and failure
                rates. You'll see the difference immediately.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                Ready to Own Your Payment Infrastructure?
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                Stop paying 1% per transaction. Stop trusting third parties with your settlement funds. Deploy
                XPay Labs today and take full control of your crypto payment stack.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>Deploy Now</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>Learn More</span>
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
