import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, DollarSign, Globe, Server, Zap, Workflow, Container, Users, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Best Crypto Payment Infrastructure — Self-Hosted Multi-Chain Gateway | XPay Labs',
  description: 'The best crypto payment infrastructure for accepting USDT, USDC, and crypto payments. Self-hosted, non-custodial, multi-chain (TRON, EVM, SUI). Deploy with Docker in minutes.',
  keywords: ['best crypto payment infrastructure', 'crypto payment gateway', 'crypto payment processor', 'crypto payment platform', 'crypto merchant account', 'multi-chain crypto payment gateway', 'self-hosted crypto payment', 'self-hosted payment gateway', 'non-custodial payment gateway', 'white label crypto payment gateway', 'stablecoin payment gateway', 'USDC payment gateway', 'USDT payment gateway', 'accept cryptocurrency payments', 'TRON payment gateway', 'EVM payment gateway', 'SUI payment gateway', 'open source crypto payment'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/best-crypto-payment-infrastructure',
    languages: {
      'x-default': 'https://www.xpaylabs.com/best-crypto-payment-infrastructure',
      'en-US': 'https://www.xpaylabs.com/best-crypto-payment-infrastructure',
      'zh-CN': 'https://www.xpaylabs.com/zh/best-crypto-payment-infrastructure',
    },
  },
  openGraph: {
    title: 'Best Crypto Payment Infrastructure — Self-Hosted Multi-Chain Gateway | XPay Labs',
    description: 'Deploy the best crypto payment infrastructure on your own server. Zero fees, non-custodial, 22+ blockchains. Accept USDT, USDC, and more.',
    url: 'https://www.xpaylabs.com/best-crypto-payment-infrastructure',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Crypto Payment Infrastructure — XPay Labs',
    description: 'Deploy the best crypto payment infrastructure. Zero fees, non-custodial, 22+ blockchains.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes the best crypto payment infrastructure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best crypto payment infrastructure combines multi-chain support, non-custodial security, zero transaction fees, self-hosted deployment, multi-tenant architecture, and a clean developer API. XPay Labs delivers all of these in a single Docker deployment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is self-hosted crypto payment infrastructure better than hosted?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Self-hosted infrastructure gives you full control over funds, data, and fees. Hosted gateways charge 0.5–1% per transaction and hold custody of your funds. Self-hosted gateways like XPay Labs charge 0% and keep private keys on your infrastructure. For businesses processing over $10,000/month, self-hosted pays for itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What blockchains does XPay Labs support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs supports TRON (TRC20 USDT), 20+ EVM-compatible chains (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Avalanche, Base), and SUI — all from a single deployment.',
      },
    },
  ],
};

const chainData = [
  { name: 'TRON', tokens: 'USDT (TRC20), USDC, USDD', link: '/solutions/tron-payment-gateway' },
  { name: 'Ethereum', tokens: 'USDT, USDC, any ERC20', link: '/solutions/evm-payment-gateway' },
  { name: 'BNB Chain', tokens: 'USDT, USDC, BEP20', link: '/solutions/evm-payment-gateway' },
  { name: 'Polygon', tokens: 'USDT, USDC, any ERC20', link: '/solutions/evm-payment-gateway' },
  { name: 'Avalanche', tokens: 'USDT, USDC, any ERC20', link: '/solutions/evm-payment-gateway' },
  { name: 'SUI', tokens: 'SUI, USDC', link: '/solutions/sui-payment-gateway' },
];

export default function BestCryptoPaymentInfrastructurePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />

        <main className="relative pt-28 pb-20">

          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-brand-blue opacity-5 blur-[150px] rounded-full pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono mb-6">
                <Shield className="w-3.5 h-3.5" />
                <span>Best Crypto Payment Infrastructure 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
                The Best{' '}
                <span className="text-gradient-purple-blue">Crypto Payment Infrastructure</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl mx-auto">
                Self-hosted, non-custodial, multi-chain. Deploy the best crypto payment infrastructure
                 on your own server — zero fees, unlimited merchants, 22+ blockchains.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(91,140,255,0.3)]"
                >
                  Deploy Now
                </Link>
                <Link
                  href="/solutions/tron-payment-gateway"
                  className="px-8 py-3.5 border border-white/10 text-gray-300 rounded-full text-sm font-bold hover:border-brand-blue/30 hover:text-white transition-all"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Container, value: '11', label: 'Docker Services' },
                { icon: Globe, value: '22+', label: 'Blockchains' },
                { icon: Users, value: 'Unlimited', label: 'Merchants per Instance' },
                { icon: DollarSign, value: '0%', label: 'Transaction Fees' },
              ].map((s) => (
                <div key={s.label} className="glass-panel rounded-2xl p-6 text-center border border-white/5">
                  <s.icon className="w-6 h-6 text-brand-blue mx-auto mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white font-display">{s.value}</div>
                  <div className="text-xs text-gray-500 font-sans mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why This Is The Best */}
          <section className="py-20 bg-[#060816]/60 relative">
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-purple opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                  Why XPay Labs Is the Best
                </h2>
                <p className="text-slate-400 text-base font-sans leading-relaxed">
                  Built for operators who need production-grade crypto payment infrastructure.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: 'Non-Custodial by Design', text: 'Private keys never leave your infrastructure. Funds settle directly to your wallet. No counterparty risk, no withdrawal limits, no KYC.' },
                  { icon: DollarSign, title: 'Zero Transaction Fees', text: 'No per-transaction fees, no monthly minimums, no revenue share. You only pay server hosting and blockchain gas fees.' },
                  { icon: Workflow, title: 'Multi-Tenant Architecture', text: 'Host unlimited merchants on a single deployment. Set your own fee structure and earn from every transaction processed.' },
                  { icon: Globe, title: 'Cross-Chain Support', text: 'TRON, 20+ EVM chains, and SUI from one deployment. Accept USDT, USDC, and native tokens across all major networks.' },
                  { icon: Server, title: 'One-Command Deployment', text: 'Single docker compose up launches 11 containers — scanners, API, dashboard, checkout, database, all auto-orchestrated.' },
                  { icon: Zap, title: 'Real-Time Detection', text: 'Blockchain scanners run every 1–2 seconds across all chains simultaneously. Payments detected and webhooks dispatched in real time.' },
                ].map((f) => (
                  <div key={f.title} className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all">
                    <f.icon className="w-8 h-8 text-brand-blue mb-4" />
                    <h3 className="text-white font-bold mb-2 font-display">{f.title}</h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chain Support */}
          <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                  <Globe className="w-3 h-3" />
                  Supported Blockchains
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                  Multi-Chain by Default
                </h2>
                <p className="text-slate-400 text-base font-sans leading-relaxed">
                  Accept payments on the chains your customers use.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {chainData.map((c) => (
                  <Link
                    key={c.name}
                    href={c.link}
                    className="glass-panel rounded-2xl p-5 border border-white/5 hover:border-brand-blue/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold font-display group-hover:text-brand-blue transition-colors">{c.name}</h3>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-brand-blue transition-colors" />
                    </div>
                    <p className="text-xs text-gray-500 font-sans">{c.tokens}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison Summary */}
          <section className="py-20 bg-[#060816]/60 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    Infrastructure Comparison
                  </h2>
                  <p className="text-slate-400 text-base font-sans leading-relaxed">
                    How XPay Labs compares to hosted and self-hosted alternatives.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-white/5">
                  <table className="w-full text-left text-sm font-sans">
                    <thead>
                      <tr className="bg-[#0b0e25] border-b border-white/8">
                        <th className="p-4 text-gray-400 font-medium">Feature</th>
                        <th className="p-4 text-brand-cyan font-medium">XPay Labs</th>
                        <th className="p-4 text-gray-400 font-medium">BTCPay Server</th>
                        <th className="p-4 text-gray-400 font-medium">Hosted Gateways</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">Fees</td>
                        <td className="p-4 text-green-400">0%</td>
                        <td className="p-4 text-green-400">0%</td>
                        <td className="p-4 text-amber-400">0.5–1%</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">Custody</td>
                        <td className="p-4 text-green-400">Non-custodial</td>
                        <td className="p-4 text-green-400">Non-custodial</td>
                        <td className="p-4 text-amber-400">Custodial</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">Multi-Tenant</td>
                        <td className="p-4 text-green-400">Native</td>
                        <td className="p-4 text-amber-400">Single merchant</td>
                        <td className="p-4 text-amber-400">Single merchant</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">Operator Revenue</td>
                        <td className="p-4 text-green-400">Yes</td>
                        <td className="p-4 text-amber-400">No</td>
                        <td className="p-4 text-amber-400">No</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">Stablecoins</td>
                        <td className="p-4 text-green-400">Native multi-chain</td>
                        <td className="p-4 text-amber-400">None</td>
                        <td className="p-4 text-amber-400">Limited</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">Chains</td>
                        <td className="p-4 text-green-400">TRON + EVM + SUI</td>
                        <td className="p-4 text-amber-400">Bitcoin + Lightning</td>
                        <td className="p-4 text-amber-400">BTC + handful</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/guides/best-self-hosted-crypto-payment-gateway"
                    className="text-brand-blue hover:underline text-sm font-sans"
                  >
                    See full comparison guide →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-transparent to-brand-purple/5 pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                  Deploy the Best Crypto Payment Infrastructure
                </h2>
                <p className="text-slate-400 text-base font-sans leading-relaxed max-w-2xl mx-auto">
                  Self-hosted, non-custodial, zero-fee. Deploy on your own server and start accepting
                  crypto payments across 22+ blockchains in under 30 minutes.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(91,140,255,0.3)]"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/solutions/tron-payment-gateway"
                    className="px-8 py-3.5 border border-white/10 text-gray-300 rounded-full text-sm font-bold hover:border-brand-blue/30 hover:text-white transition-all"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
