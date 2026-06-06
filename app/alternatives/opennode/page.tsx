import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight, Check, X, Server, Key, Coins, Palette, Settings, DollarSign, Code, ExternalLink, ArrowUpRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'OpenNode Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
  description: 'OpenNode alternative for merchants who want multi-chain, non-custodial crypto payments. Ditch Bitcoin-only, 1% fees, and custodial risk — self-host with XPay Labs.',
  keywords: ['OpenNode alternative', 'alternative to OpenNode', 'OpenNode vs self-hosted', 'self-hosted crypto payment gateway', 'Bitcoin payment processor alternative'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/alternatives/opennode',
    languages: {
      'x-default': 'https://www.xpaylabs.com/alternatives/opennode',
      'en-US': 'https://www.xpaylabs.com/alternatives/opennode',
    },
  },
  openGraph: {
    title: 'OpenNode Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
    description: 'OpenNode alternative for merchants who want non-custodial, multi-chain crypto payments without the 1% fee overhead.',
    url: 'https://www.xpaylabs.com/alternatives/opennode',
    type: 'website',
  },
  twitter: {
    title: 'OpenNode Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
    description: 'OpenNode alternative for merchants who want non-custodial, multi-chain crypto payments without the 1% fee overhead.',
    card: 'summary_large_image',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes XPay Labs a good OpenNode alternative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is a self-hosted, non-custodial crypto payment gateway with multi-chain support. Unlike OpenNode — which is Bitcoin-only, custodial, and charges ~1% fees — XPay Labs gives you full private key control, 0% transaction fees, and support for TRON, EVM chains, and SUI with stablecoins like USDT and USDC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is XPay Labs cheaper than OpenNode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. OpenNode charges approximately 1% per transaction with no monthly fee. XPay Labs charges 0% transaction fees — you only pay blockchain network gas fees, which on TRON or L2 networks are typically fractions of a cent. For a business processing $100k/month, OpenNode would cost $12,000/year in fees versus near-zero with XPay Labs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does XPay Labs support Bitcoin and Lightning Network like OpenNode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs focuses on stablecoin payments on TRON, EVM-compatible chains (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Base), and SUI. If you need native Bitcoin and Lightning Network support specifically, OpenNode is the better choice. XPay Labs is designed for merchants who prioritize stablecoin settlement and multi-chain reach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use XPay Labs without giving up custody of my funds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is fully non-custodial. Every invoice generates a unique deposit address derived from your own node seed — held inside your Docker container. Funds settle directly to your wallet in real time. OpenNode, by contrast, is custodial — they hold the private keys and pay out on a schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'What chains does XPay Labs support that OpenNode does not?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpenNode supports Bitcoin on-chain and Lightning Network only. XPay Labs supports TRON (TRC-20 USDT/USDC), EVM-compatible chains (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Base), and SUI. This covers the vast majority of stablecoin payment volume that OpenNode cannot process.',
      },
    },
  ],
};

const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  about: {
    '@type': 'Product',
    name: 'OpenNode vs XPay Labs Comparison',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.xpaylabs.com/alternatives/opennode' },
  ],
};

export default function OpenNodeAlternativePage() {
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
              <span>OpenNode Alternative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              OpenNode Alternative —{' '}
              <span className="text-gradient-purple-blue">Multi-Chain</span> Self-Hosted Payment Gateway
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              OpenNode makes Bitcoin and Lightning payments simple, but its Bitcoin-only focus, custodial model,
              and ~1% fees leave merchants needing stablecoin and multi-chain options in the cold.{' '}
              <strong className="text-white">XPay Labs</strong> is the self-hosted, non-custodial alternative —
              multi-chain by design, zero fees, and full control.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://docs.xpaylabs.com/"
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

          {/* Why Merchants Leave OpenNode */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-blue">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8">
                Why Merchants Are Looking for an OpenNode Alternative
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">High Fees</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    OpenNode charges <strong className="text-gray-300">~1% per transaction</strong> with no monthly fee, but
                    that still translates to $1,000 in fees per $100k processed. For growing businesses, those
                    costs add up fast — especially compared to a self-hosted solution at near-zero cost.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">Bitcoin-Only</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    OpenNode is strictly Bitcoin — on-chain and Lightning Network. There is no support for
                    stablecoins (USDT, USDC), TRON, EVM chains, or SUI. If your customers want to pay with
                    anything other than BTC, OpenNode cannot process it.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Key className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">Custodial Model</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    OpenNode is custodial — they control the private keys and hold settlement funds. Payouts
                    happen on OpenNode's schedule, not yours. If OpenNode experiences regulatory pressure or
                    operational issues, access to your funds may be delayed or restricted.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              OpenNode vs XPay Labs — Side by Side
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm font-sans">
                <thead>
                  <tr className="bg-[#0b0e25] border-b border-white/8">
                    <th className="p-4 text-gray-400 font-medium w-1/3">Feature</th>
                    <th className="p-4 text-orange-400 font-medium w-1/3">OpenNode</th>
                    <th className="p-4 text-brand-cyan font-medium w-1/3">XPay Labs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Transaction Fees</td>
                    <td className="p-4 text-gray-400">~1% per transaction</td>
                    <td className="p-4 text-green-400">0% (gas only)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Monthly Plan Fee</td>
                    <td className="p-4 text-gray-400">$0 (pay-per-use)</td>
                    <td className="p-4 text-green-400">$0 (self-hosted)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Custody Model</td>
                    <td className="p-4 text-gray-400">Custodial — OpenNode controls keys</td>
                    <td className="p-4 text-green-400">Non-custodial — you control keys</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Settlement Control</td>
                    <td className="p-4 text-gray-400">Scheduled payouts (manual/timed)</td>
                    <td className="p-4 text-green-400">Instant — funds arrive in your wallet</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Supported Chains</td>
                    <td className="p-4 text-gray-400">Bitcoin (on-chain + Lightning)</td>
                    <td className="p-4 text-green-400">TRON, EVM (ETH, BNB, Polygon, Arbitrum, Optimism, Base), SUI</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Supported Assets</td>
                    <td className="p-4 text-gray-400">BTC only</td>
                    <td className="p-4 text-green-400">USDT, USDC, ETH, BNB, MATIC, native coins</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">White-Label Checkout</td>
                    <td className="p-4 text-gray-400">OpenNode branding present</td>
                    <td className="p-4 text-green-400">Full white-label (your brand)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Source Access</td>
                    <td className="p-4 text-gray-400">Closed-source (proprietary)</td>
                    <td className="p-4 text-green-400">Free (XPay License)</td>
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
                    <td className="p-4 text-gray-400">REST API + webhooks</td>
                    <td className="p-4 text-green-400">REST API + HMAC-signed webhooks</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Lightning Network</td>
                    <td className="p-4 text-green-400">Native support</td>
                    <td className="p-4 text-gray-400">Not supported (stablecoin-first)</td>
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
                      OpenNode charges a <strong className="text-gray-300">~1% transaction fee</strong> with no monthly
                      subscription. While the lack of a fixed monthly cost is better than some competitors, the 1%
                      per-transaction fee still compounds significantly. For a business doing{' '}
                      <strong className="text-gray-300">$100k/month</strong> in Bitcoin revenue, OpenNode costs{' '}
                      <strong className="text-gray-300">$12,000/year</strong> in fees.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs charges <strong className="text-green-400">0% transaction fees</strong> and{' '}
                      <strong className="text-green-400">$0 monthly fees</strong>. Your only costs are server hosting
                      (as low as $10/month on a VPS) and blockchain gas fees — on TRON or L2s, those are
                      typically fractions of a cent. At $100k/month volume, XPay Labs saves you over $11,500/year.
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
                      OpenNode operates a <strong className="text-gray-300">custodial model</strong>. When a customer pays via
                      OpenNode, funds go to OpenNode's wallets first. OpenNode then settles to your bank account
                      or Bitcoin wallet on a schedule. You never hold the private keys. This introduces
                      counterparty risk: if OpenNode faces regulatory action, technical issues, or account
                      restrictions, your funds are at risk.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs is <strong className="text-green-400">fully non-custodial</strong>. Every invoice generates a
                      unique deposit address derived from your own node seed — held exclusively inside your
                      Docker container. Funds settle directly to your wallet in real-time. No third party touches
                      your money, no withdrawal delays, no account freeze risk. Your keys, your coins.
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
                    <h3 className="text-xl font-display font-medium text-white">Chain & Asset Support</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      OpenNode is Bitcoin-only: on-chain BTC and Lightning Network. That's excellent if your
                      customers all hold Bitcoin, but it excludes the vast and growing ecosystem of stablecoin
                      payments. <strong className="text-gray-300">TRON (TRC-20 USDT)</strong> alone processes more daily
                      transaction volume than Bitcoin. L2 networks like Arbitrum and Base host billions in DeFi
                      liquidity. SUI is emerging as a fast, low-cost alternative.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs supports <strong className="text-green-400">TRON</strong>,
                      <strong className="text-green-400"> EVM-compatible chains</strong> (Ethereum, BNB Chain, Polygon,
                      Arbitrum, Optimism, Base), and <strong className="text-green-400">SUI</strong> — with
                      <strong className="text-green-400"> USDT, USDC, ETH, BNB, MATIC</strong>, and native gas coins.
                      This covers the vast majority of non-Bitcoin crypto payment volume worldwide.
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
                      OpenNode's hosted checkout page includes OpenNode branding. While clean and functional, it
                      introduces a third-party presence into your payment flow. Merchants who want a fully branded
                      experience — especially those running white-label or custom storefronts — will find this
                      limiting.
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
                      OpenNode aggregates transactions and pays out on a schedule — daily auto-payouts to your
                      Bitcoin wallet or bank account. You cannot access individual payments in real-time, and
                      settlement speed depends on OpenNode's batch processing. Fiat conversion to USD is available
                      but adds another layer of delay and cost.
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
                  OpenNode provides a clean REST API and webhook notifications, but the core infrastructure is{' '}
                  <strong className="text-gray-300">closed-source and proprietary</strong>. You cannot audit the
                  code, customize the integration, or contribute features. The API is well-documented but limited
                  to what OpenNode decides to support.
                </p>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  XPay Labs is <strong className="text-green-400">source-available</strong> — every line of code is
                  visible on GitHub. You can audit security, submit pull requests, fork the project, and extend
                  it however you need. The REST API is complemented by{' '}
                  <strong className="text-gray-300">HMAC-signed webhooks</strong> for secure server-to-server
                  notifications, and the Docker deployment means you can be running in minutes.
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
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">O</div>
                    <h3 className="text-lg font-display font-medium text-white">OpenNode</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">~1% transaction fee on every payment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">Bitcoin-only — no stablecoin support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">Custodial — funds held by OpenNode</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">Settlement delays (daily batches)</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    Estimated annual cost at $100k/mo volume: <strong className="text-red-400">~$12,000</strong>
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
                      <span className="text-gray-400">Multi-chain (TRON, EVM, SUI) + stablecoins</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">Non-custodial — you control keys</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">Instant settlement to your wallet</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    Estimated annual cost at $100k/mo volume: <strong className="text-green-400">~$120 (VPS)</strong>
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
                    <span>You want to accept stablecoins (USDT/USDC) alongside or instead of Bitcoin</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want full control of private keys and instant settlement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You process over $50k/month and want to eliminate the 1% fee drag</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You need TRON (USDT), SUI, or L2 support for your customers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want a white-label checkout with your own branding and domain</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You have DevOps capability to run a Docker container</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want auditable, self-hosted payment infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want to avoid KYC and onboarding delays</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <X className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-display font-medium text-white">Stay with OpenNode If…</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You only accept Bitcoin (on-chain and Lightning) and don't need stablecoins</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You rely on Lightning Network for instant, low-cost Bitcoin micropayments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You prefer a fully managed SaaS solution with no server maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You need fiat settlement to your bank account (OpenNode handles conversion)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You have regulatory requirements that mandate a licensed payment processor</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>You don't want to manage your own Docker deployment and server</span>
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
                How to Migrate from OpenNode to XPay Labs
              </h2>

              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
                Migrating from OpenNode to XPay Labs means expanding your payment capabilities beyond Bitcoin to
                multi-chain stablecoin support. The invoice-based architecture is conceptually similar, making
                the transition smooth.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">1</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Deploy XPay Labs</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Spin up the XPay Labs Docker container on your VPS or server. Configure environment variables
                      for your node seed, RPC providers, and HMAC secret. Full instructions in the{' '}
                      <Link href="https://docs.xpaylabs.com/" className="text-brand-cyan hover:text-white transition-colors underline underline-offset-2">deployment guide</Link>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">2</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Generate Your Node Seed</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      XPay Labs derives unique deposit addresses from a BIP-39 mnemonic seed you generate. Back
                      this up securely — it is your master key. Unlike OpenNode, you never share this seed with
                      anyone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">3</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Configure Your Supported Chains</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Enable the chains you want to accept payments on — TRON, Ethereum, BNB Chain, Polygon,
                      Arbitrum, Optimism, Base, SUI, or all of them. Configure RPC endpoints for each chain.
                      This is where you immediately surpass OpenNode's Bitcoin-only limitation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">4</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Update Your Checkout Integration</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Replace OpenNode API calls with XPay Labs REST API endpoints. The invoice creation flow is
                      similar: create an invoice, get a payment address, and listen for webhook confirmations.
                      Our HMAC-signed webhooks provide reliable server-to-server notifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">5</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Go Live & Monitor</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Point your checkout flow to your self-hosted XPay Labs page. Because XPay Labs is
                      white-label by default, your customers will see your brand — not a third-party logo.
                      Run both systems in parallel during a transition period to ensure zero downtime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">Pro Tip:</strong> Run OpenNode and XPay Labs in parallel for 1–2 weeks.
                Route a percentage of traffic to XPay Labs and compare settlement times, fee savings, and payment
                    success rates. You'll quickly see the benefit of stablecoin and multi-chain support.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                Ready to Go Beyond Bitcoin?
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                Stop paying 1% per transaction. Stop being limited to Bitcoin-only. Stop trusting third parties
                with your settlement funds. Deploy XPay Labs today and accept multi-chain stablecoin payments
                on your own terms.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="https://docs.xpaylabs.com/"
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
