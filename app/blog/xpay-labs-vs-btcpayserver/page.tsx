import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, X, Server, Shield, DollarSign, Globe, Zap, BookOpen } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'XPay Labs (xpay) vs BTCPay Server: Self-Hosted Crypto Payment Gateways Compared (2026)',
  description: 'A detailed comparison of XPay Labs (xpay) vs BTCPay Server in 2026. Compare features, chain support, pricing, security, multi-tenant support, and developer experience to choose the best self-hosted crypto payment gateway.',
  keywords: ['XPay Labs vs BTCPay Server', 'xpay vs btcpay', 'self-hosted crypto payment gateway comparison', 'BTCPay Server alternative', 'XPay Labs comparison', 'XPay Labs multi-tenant', 'BTCPay Server multi-tenant'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/blog/xpay-labs-vs-btcpayserver',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/xpay-labs-vs-btcpayserver',
      'en-US': 'https://www.xpaylabs.com/blog/xpay-labs-vs-btcpayserver',
    },
  },
  openGraph: {
    title: 'XPay Labs (xpay) vs BTCPay Server: Self-Hosted Crypto Payment Gateways Compared',
    description: 'Detailed 2026 comparison of XPay Labs and BTCPay Server — features, chain support, pricing, security, and developer experience.',
    url: 'https://www.xpaylabs.com/blog/xpay-labs-vs-btcpayserver',
    type: 'article',
  },
  twitter: {
    title: 'XPay Labs (xpay) vs BTCPay Server: Self-Hosted Crypto Payment Gateways Compared',
    description: 'Detailed 2026 comparison of XPay Labs and BTCPay Server — features, chain support, pricing, security, and developer experience.',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'XPay Labs (xpay) vs BTCPay Server: Self-Hosted Crypto Payment Gateways Compared (2026)',
  description: 'A detailed comparison of XPay Labs and BTCPay Server across features, chain support, pricing, security, and developer experience.',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
};

const comparisonRows = [
  {
    feature: 'Chain Support',
    xpay: 'TRON (TRC-20), EVM (Ethereum, BSC, Polygon, Arbitrum, Base, 15+), SUI',
    btcpay: 'Bitcoin, Lightning, Liquid, Ethereum, BSC, Polygon — community plugins vary',
    winner: 'XPay Labs — broader EVM + SUI + TRON',
  },
  {
    feature: 'Stablecoin Support',
    xpay: 'Native — USDT, USDC, DAI out of the box on all chains',
    btcpay: 'Via plugins — USDT/USDC on Ethereum/BSC/Polygon only',
    winner: 'XPay Labs — first-class stablecoin architecture',
  },
  {
    feature: 'Transaction Fees',
    xpay: '0% — no gateway fees, only network gas',
    btcpay: '0% — no gateway fees, only network fees',
    winner: 'Tie',
  },
  {
    feature: 'Custody Model',
    xpay: 'Non-custodial — keys in Docker, no third-party access',
    btcpay: 'Non-custodial — keys on your server',
    winner: 'Tie',
  },
  {
    feature: 'Payment Detection',
    xpay: 'Mempool-level, 1-6 seconds across all chains',
    btcpay: 'Block-level, typically 30s-10min depending on blockchain',
    winner: 'XPay Labs — sub-second detection on all chains',
  },
  {
    feature: 'Deployment',
    xpay: 'Single docker-compose.yml file',
    btcpay: 'Multi-container with many opt-in services',
    winner: 'XPay Labs — simpler deployment',
  },
  {
    feature: 'API Design',
    xpay: 'Stripe-inspired REST API — clean, predictable, versioned',
    btcpay: 'Greenfield API — powerful but more complex',
    winner: 'XPay Labs — developer-first DX',
  },
  {
    feature: 'Webhook System',
    xpay: 'HMAC-SHA256 signed, configurable retry, delivery logs',
    btcpay: 'Webhook support, HMAC optional, fewer delivery guarantees',
    winner: 'XPay Labs — signed webhooks by default',
  },
  {
    feature: 'White-Label Checkout',
    xpay: 'Full customization — CSS variables, no iframes, no branding',
    btcpay: 'Pre-built checkout with customization options',
    winner: 'XPay Labs — true white-label',
  },
  {
    feature: 'Community & Ecosystem',
    xpay: 'Early-stage, smaller community, fewer plugins',
    btcpay: 'Mature, large community, extensive plugin ecosystem',
    winner: 'BTCPay Server — established ecosystem',
  },
  {
    feature: 'Bitcoin & Lightning',
    xpay: 'Not supported — stablecoin-first architecture',
    btcpay: 'First-class Bitcoin and Lightning support',
    winner: 'BTCPay Server — Bitcoin-native',
  },
  {
    feature: 'Fiat Conversion',
    xpay: 'Not built-in — on-chain stablecoin settlement only',
    btcpay: 'Via plugins — selective fiat integration options',
    winner: 'BTCPay Server — more off-ramp options',
  },
  {
    feature: 'Documentation',
    xpay: 'Clean, concise, Stripe-style docs with quickstart',
    btcpay: 'Extensive wiki documentation contributed by community',
    winner: 'Subjective — XPay Labs is more polished, BTCPay is more comprehensive',
  },
  {
    feature: 'Multi-Tenant',
    xpay: 'Native — unlimited merchants per deployment, isolated API credentials and fee structure',
    btcpay: 'Not supported — each merchant requires a separate deployment',
    winner: 'XPay Labs — built-in multi-tenant architecture',
  },
];

export default function XPayVsBTCPayPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="relative gradient-bg pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <BlogNavigation
              prev={{
                href: '/blog/performance-benchmarks-multi-chain-gateway',
                title: 'Performance Benchmarks: Multi-Chain Gateway on a $5 VPS',
              }}
              next={null}
            />

            {/* Header Section */}
            <section className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono mb-6">
                <span>Comparison</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                XPay Labs (xpay) vs BTCPay Server: Which Self-Hosted Crypto Gateway Wins in 2026?
              </h1>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500 font-mono">
                <span>June 3, 2026</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>12 min read</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                Both XPay Labs and BTCPay Server are excellent self-hosted crypto payment gateways — but 
                they serve different needs. This comparison breaks down every dimension so you can choose 
                the right one for your business.
              </p>
            </section>

            {/* Quick Verdict */}
            <section className="mb-12">
              <div className="glass-panel rounded-2xl p-6 glow-blue">
                <h2 className="text-lg font-display font-medium text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand-blue" />
                  Quick Verdict
                </h2>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Choose <strong className="text-brand-blue">XPay Labs (xpay)</strong> if you need stablecoin payment infrastructure 
                  on TRON, EVM chains, or SUI with sub-second detection, a clean REST API, and true white-label checkout. 
                  Choose <strong className="text-white">BTCPay Server</strong> if you need Bitcoin and Lightning support, a mature 
                  plugin ecosystem, or serve a Bitcoin-native merchant base. For multi-chain stablecoin merchants, 
                  XPay Labs is the better choice. For Bitcoin-first merchants, BTCPay Server remains unmatched.
                </p>
              </div>
            </section>

            {/* Overview Comparison Table */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-6">
                Feature Comparison
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Feature</th>
                      <th className="p-4 text-brand-cyan font-medium">XPay Labs (xpay)</th>
                      <th className="p-4 text-gray-400 font-medium">BTCPay Server</th>
                      <th className="p-4 text-gray-400 font-medium">Winner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-200 font-medium whitespace-nowrap">{row.feature}</td>
                        <td className="p-4 text-gray-300">{row.xpay}</td>
                        <td className="p-4 text-gray-300">{row.btcpay}</td>
                        <td className="p-4 text-xs">
                          {row.winner.startsWith('XPay Labs') ? (
                            <span className="text-brand-cyan font-semibold">{row.winner}</span>
                          ) : row.winner.startsWith('BTCPay') ? (
                            <span className="text-gray-300 font-semibold">{row.winner}</span>
                          ) : (
                            <span className="text-gray-500">{row.winner}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Chain Support Deep Dive */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Chain Support: The Biggest Difference
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                The most significant difference between XPay Labs and BTCPay Server is blockchain support. 
                BTCPay Server was built for Bitcoin — its Ethereum and Polygon support came later via 
                community plugins. XPay Labs was built from scratch as a multi-chain, stablecoin-first gateway.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-brand-cyan">
                  <h3 className="text-base font-display font-medium text-brand-cyan mb-3">
                    XPay Labs (xpay) Chains
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> TRON (TRC-20 USDT, USDC)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Ethereum & EVM (20+ chains)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> BNB Chain, Polygon, Arbitrum, Optimism</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Base, Avalanche, zkSync, Linea, Scroll</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> SUI native support</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✕</span> No Bitcoin or Lightning</li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-gray-500">
                  <h3 className="text-base font-display font-medium text-gray-300 mb-3">
                    BTCPay Server Chains
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Bitcoin (first-class)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Lightning Network (LNURL, LNBits)</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Liquid Network</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Ethereum, BSC, Polygon (plugins)</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✕</span> No TRON support</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✕</span> No SUI support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* When to Choose Each */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-6">
                When to Choose Each Gateway
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel rounded-2xl p-6 glow-cyan">
                  <h3 className="text-base font-display font-medium text-brand-cyan mb-4 flex items-center gap-2">
                    <Server className="w-5 h-5" />
                    Choose XPay Labs (xpay) If...
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> You process stablecoin payments (USDT, USDC) on TRON, EVM chains, or SUI</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> You need sub-second payment detection for real-time checkout</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> You want a Stripe-quality API with HMAC-signed webhooks</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> You need true white-label checkout with no third-party branding</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> You prefer a single docker-compose.yml deployment</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> You run a payment platform serving multiple merchants — XPay Labs has native multi-tenant support</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> You want clean, modern documentation with quickstart guides</li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-purple">
                  <h3 className="text-base font-display font-medium text-gray-300 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Choose BTCPay Server If...
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> You need Bitcoin and Lightning Network support</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> You want a large, mature plugin ecosystem</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> You need a well-established community and third-party integrations</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> You want fiat off-ramp options via plugins</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> You serve Bitcoin-native merchants or customers</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> You need tried-and-tested infrastructure with years of production use</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  Ready to Try XPay Labs (xpay)?
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  Deploy your own self-hosted crypto payment gateway in under 30 minutes. Zero transaction fees, 
                  non-custodial security, and multi-chain support. No signup, no KYC — just Docker.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>Deploy XPay Labs</span>
                  </Link>
                  <Link
                    href="/alternatives/btcpayserver"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>See BTCPay Server Alternative</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
