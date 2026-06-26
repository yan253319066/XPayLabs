import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Shield, CheckCircle2, Zap, Cpu, Globe, ArrowRight, ExternalLink, Code2, DollarSign, Layers, Wifi } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'EVM Payment Gateway — Accept USDT/USDC on Ethereum, BNB, Polygon, Arbitrum, Base | XPay Labs',
  description: 'Self-hosted EVM payment gateway for accepting USDT, USDC, and ERC20 tokens on Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, and Base. Non-custodial, 0% fees, Docker deployment.',
  keywords: 'EVM payment gateway, Ethereum payment gateway, best crypto payment infrastructure, crypto payment processor, ERC20 payment processor, accept USDT Ethereum, BNB Chain payment gateway, Polygon payment gateway, Arbitrum payment gateway, Base payment gateway, multi-chain EVM payments, self-hosted ERC20 gateway, USDC payment gateway, stablecoin payment gateway, white label crypto payment gateway',
  alternates: {
    canonical: 'https://www.xpaylabs.com/solutions/evm-payment-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/solutions/evm-payment-gateway',
      'en-US': 'https://www.xpaylabs.com/solutions/evm-payment-gateway',
      'zh-CN': 'https://www.xpaylabs.com/zh/solutions/evm-payment-gateway',
    },
  },
  openGraph: {
    title: 'EVM Payment Gateway — Accept USDT/USDC on Ethereum, BNB, Polygon, Arbitrum, Base | XPay Labs',
    description: 'Self-hosted EVM payment gateway for all major EVM chains. Non-custodial, 0% fees, sub-second detection.',
    url: 'https://www.xpaylabs.com/solutions/evm-payment-gateway',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVM Payment Gateway — Accept USDT/USDC on Ethereum, BNB, Polygon, Arbitrum, Base | XPay Labs',
    description: 'Self-hosted EVM payment gateway for all major EVM chains. Non-custodial, 0% fees, sub-second detection.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an EVM payment gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An EVM payment gateway enables merchants to accept cryptocurrency payments on Ethereum Virtual Machine-compatible blockchains. This includes Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Avalanche, Base, and others. XPay Labs provides a self-hosted EVM payment gateway that scans these chains for incoming ERC20 stablecoin payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which EVM chains does XPay Labs support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs natively supports Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Avalanche, and Base. Additional EVM chains can be added by configuring the RPC endpoint and chain ID in the node configuration JSON.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the EVM payment gateway non-custodial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is fully non-custodial. Private keys are generated deterministically from your seed phrase and stored locally within your Docker container. Funds go directly to your wallets — never through an intermediary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fees does XPay Labs charge for EVM payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs charges 0% transaction fees. You only pay blockchain network gas fees, which on L2 chains like Arbitrum, Optimism, and Base are typically under $0.01 per transaction.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'EVM Payment Gateway', item: 'https://www.xpaylabs.com/solutions/evm-payment-gateway' },
  ],
};

export default function EvmPaymentGatewayPage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} />
        <JsonLd data={breadcrumbSchema} />
        <Header />

        <main className="relative gradient-bg pt-24 pb-20">

          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider font-mono mb-6">
              <Cpu className="w-3.5 h-3.5" />
              <span>EVM Payment Gateway</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              Self-Hosted{' '}
              <span className="text-gradient-purple-blue">EVM Payment Gateway</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              Accept USDT, USDC, and ERC20 tokens on every major EVM chain — Ethereum, BNB Chain, Polygon,
              Arbitrum, Optimism, and Base. <strong className="text-white">Non-custodial, 0% fees</strong>,
              and sub-second transaction detection.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://docs.xpaylabs.com/"
                className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
              >
                <Server className="w-4 h-4" />
                <span>Deploy EVM Gateway</span>
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
                <p className="text-2xl font-bold text-white font-display">7+</p>
                <p className="text-xs text-gray-400 mt-1">EVM Chains Supported</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">0%</p>
                <p className="text-xs text-gray-400 mt-1">Transaction Fees</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">&lt; 3s</p>
                <p className="text-xs text-gray-400 mt-1">Detection Time</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">100%</p>
                <p className="text-xs text-gray-400 mt-1">Non-Custodial</p>
              </div>
            </div>
          </section>

          {/* Supported Chains */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-blue">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-6">
                Supported EVM Chains
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Ethereum', token: 'ETH', stablecoins: 'USDT, USDC, DAI', icon: '⟠' },
                  { name: 'BNB Chain', token: 'BNB', stablecoins: 'USDT, USDC, BUSD', icon: '♦' },
                  { name: 'Polygon', token: 'MATIC', stablecoins: 'USDT, USDC, DAI', icon: '⬡' },
                  { name: 'Arbitrum', token: 'ETH', stablecoins: 'USDT, USDC, DAI', icon: '○' },
                  { name: 'Optimism', token: 'ETH', stablecoins: 'USDT, USDC, DAI', icon: '◉' },
                  { name: 'Avalanche', token: 'AVAX', stablecoins: 'USDT, USDC, DAI', icon: '▲' },
                  { name: 'Base', token: 'ETH', stablecoins: 'USDT, USDC', icon: '◆' },
                  { name: 'More via config', token: '', stablecoins: 'Any ERC20', icon: '+' },
                ].map((chain) => (
                  <div key={chain.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-blue/20 transition-colors">
                    <div className="text-xl mb-2">{chain.icon}</div>
                    <h3 className="text-sm font-display font-medium text-white">{chain.name}</h3>
                    {chain.token && <p className="text-[10px] text-gray-500 font-mono mt-0.5">{chain.token}</p>}
                    <p className="text-[11px] text-brand-cyan mt-1">{chain.stablecoins}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10 text-center">
              Why Run a Self-Hosted EVM Payment Gateway?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">Zero Gateway Fees</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Hosted EVM payment processors charge 0.5–1% per transaction. With XPay Labs, you pay only
                  network gas fees — on L2s like Arbitrum and Base, that&apos;s under $0.01 per tx.
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Shield className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">Non-Custodial Security</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  Private keys never leave your infrastructure. No third party holds your funds. Settlement
                  is instant — every payment goes directly to your wallet on-chain.
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Layers className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">Multi-Chain by Default</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  A single XPay Labs deployment monitors all EVM chains simultaneously. One webhook endpoint
                  receives standardized payment notifications regardless of which chain the customer uses.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-cyan">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-6 text-center">
                EVM Payment Gateway Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Feature</th>
                      <th className="p-4 text-gray-400 font-medium">Hosted EVM Gateways</th>
                      <th className="p-4 text-brand-cyan font-medium">XPay Labs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Fees</td>
                      <td className="p-4 text-gray-400">0.5–1% per transaction</td>
                      <td className="p-4 text-green-400">0% (gas only)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Custody</td>
                      <td className="p-4 text-gray-400">Custodial (provider holds keys)</td>
                      <td className="p-4 text-green-400">Non-custodial (your keys)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Chain Coverage</td>
                      <td className="p-4 text-gray-400">1–2 chains typically</td>
                      <td className="p-4 text-green-400">7+ EVM chains simultaneously</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Detection Speed</td>
                      <td className="p-4 text-gray-400">Block confirmation dependent</td>
                      <td className="p-4 text-green-400">Sub-second mempool scan</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Settlement</td>
                      <td className="p-4 text-gray-400">Scheduled batch payouts</td>
                      <td className="p-4 text-green-400">Instant to your wallet</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">White-Label</td>
                      <td className="p-4 text-gray-400">Often restricted</td>
                      <td className="p-4 text-green-400">Full white-label</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Source Code</td>
                      <td className="p-4 text-gray-400">Closed-source</td>
                      <td className="p-4 text-green-400">Free (XPay License)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                Deploy Your EVM Payment Gateway
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                Accept USDT and USDC on 7+ EVM chains with zero gateway fees. Self-hosted, non-custodial,
                and deployable in minutes with Docker.
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
