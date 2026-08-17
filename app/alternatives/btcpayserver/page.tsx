import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Shield, Check, X, ArrowRight, ExternalLink, DollarSign, Coins, Github, Cpu, Code2, Layers, Zap, Settings, Globe, Terminal, FileCode } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'BTCPay Server Alternative — Self-Hosted Multi-Chain Payment Gateway | XPay Labs',
  description: 'BTCPay Server alternative for merchants who need stablecoin and multi-chain support. XPay Labs offers TRON, EVM, and SUI — not just Bitcoin. 0% fees, non-custodial, Docker deployment.',
  keywords: ['BTCPay Server alternative', 'alternative to BTCPay Server', 'BTCPay vs XPay Labs', 'self-hosted crypto payment gateway', 'multi-chain payment gateway', 'stablecoin payment gateway', 'non-custodial payment processor'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/alternatives/btcpayserver',
    languages: {
      'x-default': 'https://www.xpaylabs.com/alternatives/btcpayserver',
      'en-US': 'https://www.xpaylabs.com/alternatives/btcpayserver',
    },
  },
  openGraph: {
    title: 'BTCPay Server Alternative — Self-Hosted Multi-Chain Payment Gateway | XPay Labs',
    description: 'BTCPay Server alternative with native TRON, EVM, and SUI support. 0% fees, non-custodial, Stripe-like developer API.',
    url: 'https://www.xpaylabs.com/alternatives/btcpayserver',
    type: 'website',
  },
  twitter: {
    title: 'BTCPay Server Alternative — Self-Hosted Multi-Chain Payment Gateway | XPay Labs',
    description: 'BTCPay Server alternative with native TRON, EVM, and SUI support. 0% fees, non-custodial, Stripe-like developer API.',
    card: 'summary_large_image',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is XPay Labs different from BTCPay Server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BTCPay Server is a self-hosted payment processor focused primarily on Bitcoin and Lightning Network. XPay Labs is designed for multi-chain stablecoin payments — TRON (TRC20 USDT), all EVM chains, and SUI. XPay also offers a Stripe-inspired REST API, HMAC-signed webhooks, and lighter infrastructure requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can XPay Labs replace BTCPay Server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your payment needs center on stablecoins and modern multi-chain support, XPay Labs is a strong replacement. If you primarily process Bitcoin and Lightning payments, BTCPay Server remains the better choice. Some merchants run both in parallel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is easier to deploy: BTCPay Server or XPay Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs requires less infrastructure — a VPS with 8GB RAM and 4 vCPU is sufficient. BTCPay Server typically needs more resources due to its full Bitcoin node requirement. XPay Labs uses a single docker-compose file, while BTCPay Server requires multiple services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does XPay Labs support Bitcoin like BTCPay Server does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs focuses on TRON, EVM-compatible chains, and SUI. For Bitcoin-native payments, BTCPay Server is the stronger solution. XPay Labs is optimized for stablecoin-first payment workflows on modern blockchain networks.',
      },
    },
  ],
};

const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  about: {
    '@type': 'Thing',
    name: 'BTCPay Server vs XPay Labs Comparison',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.xpaylabs.com/alternatives/btcpayserver' },
  ],
};

export default function BTCPayServerAlternativePage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">

        <JsonLd data={faqSchema} />
        <JsonLd data={comparisonSchema} />
        <JsonLd data={breadcrumbSchema} />

        <Header />

        <main className="relative gradient-bg pt-24 pb-20">

          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full text-xs font-bold text-green-400 uppercase tracking-wider font-mono mb-6">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>BTCPay Server Alternative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              BTCPay Server Alternative —{' '}
              <span className="text-gradient-purple-blue">Multi-Chain</span> and Stablecoin Native
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              BTCPay Server pioneered self-hosted Bitcoin payments. But if your business needs{' '}
              <strong className="text-white">stablecoin support on TRON, EVM chains, and SUI</strong>,
              XPay Labs is the modern alternative — built for multi-chain from day one.
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
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Why Merchants Consider Alternatives */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-blue">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8">
                Why Merchants Look Beyond BTCPay Server
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">Limited Chain Support</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BTCPay Server is Bitcoin-first. While it supports some altcoins via plugins, native
                    stablecoin support on TRON, modern L2s, and SUI is not available out of the box.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">Heavy Infrastructure</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BTCPay Server requires a full Bitcoin node (~500GB+ blockchain data) or a third-party
                    server. For merchants who don&apos;t need Bitcoin node infrastructure, this is overkill.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">Developer Experience</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BTCPay&apos;s API and greenfield API are comprehensive but complex. XPay Labs offers a
                    Stripe-inspired REST API with simpler integration patterns and HMAC-signed webhooks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              BTCPay Server vs XPay Labs — Side by Side
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm font-sans">
                <thead>
                  <tr className="bg-[#0b0e25] border-b border-white/8">
                    <th className="p-4 text-gray-400 font-medium w-1/3">Feature</th>
                    <th className="p-4 text-green-400 font-medium w-1/3">BTCPay Server</th>
                    <th className="p-4 text-brand-cyan font-medium w-1/3">XPay Labs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Primary Focus</td>
                    <td className="p-4 text-gray-400">Bitcoin + Lightning Network</td>
                    <td className="p-4 text-green-400">Multi-chain stablecoins (TRON, EVM, SUI)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Transaction Fees</td>
                    <td className="p-4 text-gray-400">0% (self-hosted)</td>
                    <td className="p-4 text-green-400">0% (gas only)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Custody Model</td>
                    <td className="p-4 text-gray-400">Non-custodial</td>
                    <td className="p-4 text-green-400">Non-custodial</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Blockchains</td>
                    <td className="p-4 text-gray-400">BTC, LN, altcoins via plugins</td>
                    <td className="p-4 text-green-400">TRON, EVM (ETH, BNB, Polygon, Arbitrum, Optimism, Base), SUI</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Stablecoins</td>
                    <td className="p-4 text-gray-400">Limited (plugin-dependent)</td>
                    <td className="p-4 text-green-400">First-class USDT, USDC, custom tokens</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">API Style</td>
                    <td className="p-4 text-gray-400">Greenfield API (REST)</td>
                    <td className="p-4 text-green-400">Stripe-inspired REST API</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Webhook Security</td>
                    <td className="p-4 text-gray-400">Standard webhooks</td>
                    <td className="p-4 text-green-400">HMAC-SHA256 signed payloads</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Infrastructure</td>
                    <td className="p-4 text-gray-400">Full BTC node or third-party</td>
                    <td className="p-4 text-green-400">Lightweight Docker (8GB RAM / 4 vCPU)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">White-Label</td>
                    <td className="p-4 text-gray-400">Full white-label</td>
                    <td className="p-4 text-green-400">Full white-label (Vue 3 checkout)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">License</td>
                    <td className="p-4 text-gray-400">MIT (fully open source)</td>
                    <td className="p-4 text-gray-400">MIT License</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">Payment Detection</td>
                    <td className="p-4 text-gray-400">Block confirmation dependent</td>
                    <td className="p-4 text-green-400">Sub-second mempool scanning</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">SDK Languages</td>
                    <td className="p-4 text-gray-400">C#, JS, Python, Go</td>
                    <td className="p-4 text-green-400">Node.js, Python, Go, cURL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Feature Deep Dive */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10">
              Detailed Feature Comparison
            </h2>

            <div className="space-y-8">
              {/* Chain Support */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Layers className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">Chain & Asset Support</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BTCPay Server excels at <strong className="text-gray-300">Bitcoin and Lightning Network</strong>
                      payments. It supports altcoins through plugin integrations, but each requires separate
                      node infrastructure and configuration. Stablecoin support is not native.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs is <strong className="text-green-400">multi-chain by design</strong>. TRON, Ethereum,
                      BNB Chain, Polygon, Arbitrum, Optimism, Base, and SUI are all supported natively with a
                      single deployment. USDT and USDC are first-class currencies. Custom tokens are configured
                      via simple JSON — no plugin development required.
                    </p>
                  </div>
                </div>
              </article>

              {/* Infrastructure */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Server className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">Infrastructure Requirements</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BTCPay Server requires either a full Bitcoin archival node (~500GB+ disk, significant RAM)
                      or a connection to a third-party Lightning node provider. This infrastructure overhead
                      can be prohibitive for smaller merchants.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs runs on a <strong className="text-green-400">standard VPS with 8GB RAM and 4 vCPU</strong>.
                      No full blockchain node required — it connects to RPC providers (Trongrid, Infura, etc.)
                      for chain data. Deployment is a single <code className="text-brand-cyan text-xs bg-[#04050f] px-1.5 py-0.5 rounded">docker compose up -d</code>.
                    </p>
                  </div>
                </div>
              </article>

              {/* Developer Experience */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Code2 className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">Developer Experience</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BTCPay&apos;s Greenfield API is comprehensive but carries the complexity of a decade-old
                      codebase. The API surface is large, documentation can be challenging to navigate,
                      and webhook payloads require significant parsing.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs offers a <strong className="text-green-400">Stripe-inspired REST API</strong> —
                      predictable endpoints, consistent JSON responses, and clear error messages. Webhooks
                      are signed with <strong className="text-gray-300">HMAC-SHA256</strong> for security
                      verification. SDK examples are available in Node.js, Python, Go, and cURL.
                    </p>
                  </div>
                </div>
              </article>

              {/* Payment Detection */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">Payment Detection Speed</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BTCPay Server relies on block confirmations to detect payments. For Bitcoin, this means
                      waiting 10+ minutes for a single confirmation. Lightning Network offers instant payments
                      but requires channel management and liquidity.
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs uses <strong className="text-green-400">mempool-level scanning</strong> to detect
                      payments within 1–6 seconds of broadcast. On TRON, detection is typically under 2 seconds.
                      The system can be configured to wait for confirmations (1 for TRON, 2 for EVM) before
                      firing webhooks, providing the optimal balance of speed and finality.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Honest Assessment */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              Which Solution Fits Your Use Case?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-green-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Check className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-display font-medium text-white">Choose XPay Labs If…</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You primarily accept stablecoins (USDT, USDC) on TRON, EVM, or SUI</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want a lightweight Docker deployment without running a full Bitcoin node</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You need a modern, Stripe-inspired REST API with HMAC webhooks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want sub-second payment detection via mempool scanning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You need native support for multiple EVM L2s (Arbitrum, Optimism, Base)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want open-source code (GPL-3.0 / MIT) that can be audited and forked</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-green-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Check className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-display font-medium text-white">Choose BTCPay Server If…</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>Bitcoin and Lightning Network are your primary payment rails</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want a fully MIT open-source solution (permissive license)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You need the extensive BTCPay plugin ecosystem</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You have the infrastructure to run a full Bitcoin node</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You need a non-developer-friendly dashboard with built-in POS</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>You want a larger community and more third-party integrations</span>
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
                Migrating from BTCPay Server to XPay Labs
              </h2>

              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
                Both are self-hosted, so migration is about deploying a new stack alongside your existing setup.
                Run both in parallel until you&apos;re confident in the transition.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">1</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Deploy XPay Labs</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Spin up XPay Labs on a separate VPS or alongside your BTCPay instance. Configure RPC
                      endpoints for the chains you need. See the{' '}
                      <Link href="https://docs.xpaylabs.com/" className="text-brand-cyan hover:text-white transition-colors underline underline-offset-2">deployment guide</Link>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">2</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Configure Your API Integration</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Update your checkout integration to point at XPay Labs API endpoints. The invoice flow
                      is similar to BTCPay: create invoice → get address → listen for webhook. Our
                      HMAC-signed webhooks provide verifiable payloads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">3</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Run Parallel & Compare</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Route a percentage of traffic to XPay Labs while keeping BTCPay Server live. Compare
                      settlement times, detection speed, and reliability. Most merchants see faster detection
                      on TRON and EVM chains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">4</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">Redirect & Decommission</h3>
                    <p className="text-sm text-gray-400 font-sans">
                      Once confident, redirect all traffic to XPay Labs. Keep your BTCPay Server node running
                      for historical data access, or export invoices and decommission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                Ready for Multi-Chain Payments?
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                Deploy XPay Labs alongside your BTCPay Server instance and compare performance.
                Free software, zero transaction fees, and native multi-chain stablecoin support.
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
