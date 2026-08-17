import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Trophy, Shield, DollarSign, Server, Zap, Globe, Cpu, Star, Check, BookOpen, ArrowUpRight, ExternalLink, ArrowRight, Coins } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Best Self-Hosted Crypto Payment Gateway 2026 — Top Solutions Compared | XPay Labs',
  description: 'The best crypto payment infrastructure and self-hosted gateways in 2026 compared. XPay Labs, BTCPay Server, and others ranked by features, fees, chain support, and ease of use. Find the right self-hosted solution for your business.',
  keywords: ['best self-hosted crypto payment gateway 2026', 'best crypto payment infrastructure', 'best crypto payment gateway', 'crypto payment processor', 'multi-chain crypto payment gateway', 'self-hosted payment gateway comparison', 'self-hosted payment gateway', 'top crypto payment gateways 2026', 'XPay Labs vs BTCPay Server', 'best non-custodial payment gateway', 'stablecoin payment gateway', 'white label crypto payment gateway', 'crypto payment infrastructure comparison'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/guides/best-self-hosted-crypto-payment-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/guides/best-self-hosted-crypto-payment-gateway',
      'en-US': 'https://www.xpaylabs.com/guides/best-self-hosted-crypto-payment-gateway',
      'zh-CN': 'https://www.xpaylabs.com/zh/guides/best-self-hosted-crypto-payment-gateway',
    },
  },
  openGraph: {
    title: 'Best Self-Hosted Crypto Payment Gateway 2026 — Top Solutions Compared',
  description: 'The definitive ranking of the best crypto payment infrastructure and self-hosted gateways in 2026. Compare XPay Labs, BTCPay Server, and others by fees, security, chain support, and developer experience.',
    url: 'https://www.xpaylabs.com/guides/best-self-hosted-crypto-payment-gateway',
    type: 'article',
  },
  twitter: {
    title: 'Best Self-Hosted Crypto Payment Gateway 2026 — Top Solutions Compared',
    description: 'The definitive ranking of self-hosted crypto payment gateways in 2026.',
    card: 'summary_large_image',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best self-hosted crypto payment gateway in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For stablecoin-focused merchants on TRON, EVM chains, and SUI, XPay Labs is a leading self-hosted crypto payment gateway in 2026 due to its zero fees, non-custodial architecture, sub-second payment detection, and Stripe-inspired developer API. For Bitcoin-focused merchants, BTCPay Server remains the top choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I look for in a self-hosted crypto payment gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key factors include: supported blockchains (match your customers\' preferred chains), fee structure (0% is ideal), custody model (non-custodial is essential), API quality (REST + webhooks), deployment complexity (Docker is easiest), white-label capabilities, and community activity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is XPay Labs better than BTCPay Server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your use case. XPay Labs excels at stablecoin payments on TRON, EVM chains, and SUI with a Stripe-inspired API and zero fees. BTCPay Server excels at Bitcoin and Lightning payments with a larger plugin ecosystem. Choose XPay Labs for multi-chain stablecoin focus, and BTCPay Server for Bitcoin-centric operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are self-hosted crypto payment gateways free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most self-hosted gateways are free software with zero transaction fees. XPay Labs and BTCPay Server both charge 0% per transaction. You pay only for server hosting ($10-20/month for a basic VPS) and blockchain network gas fees. This contrasts with hosted gateways that commonly charge ~0.5–1% (or BitPay’s 2% + $0.25 public entry tier below $500k/mo).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which self-hosted gateway supports the most blockchains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs supports TRON, 20+ EVM-compatible chains (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Base, Avalanche, and more), and SUI from a single deployment. BTCPay Server supports Bitcoin, Lightning, and has plugins for some altcoins. XPay Labs has the strongest multi-chain stablecoin support.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Self-Hosted Crypto Payment Gateway 2026 — Top Solutions Compared',
  description: 'The definitive ranking of self-hosted crypto payment gateways in 2026. Compare XPay Labs, BTCPay Server, and others by fees, security, chain support, and developer experience.',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.xpaylabs.com/guides/best-self-hosted-crypto-payment-gateway' },
  ],
};

const rankData = [
  {
    rank: 1,
    name: 'XPay Labs',
    tagline: 'Best for multi-chain stablecoin payments',
    rating: '4.8',
    bestFor: 'Stablecoin merchants on TRON, EVM, and SUI',
    fees: '0%',
    custody: 'Non-custodial',
    chains: 'TRON, 20+ EVM, SUI',
    deployment: 'Docker Compose',
    api: 'Stripe-inspired REST API + HMAC webhooks',
    openSource: 'MIT License',
    pros: ['Zero fees on all chains', 'Sub-second payment detection', 'Clean Stripe-like API', 'Native TRON + EVM + SUI support', 'Full white-label checkout'],
    cons: ['Requires DevOps skills', 'No Bitcoin/Lightning', 'Smaller community'],
    link: '/',
    linkText: 'Learn More',
  },
  {
    rank: 2,
    name: 'BTCPay Server',
    tagline: 'Best for Bitcoin and Lightning payments',
    rating: '4.5',
    bestFor: 'Bitcoin-focused merchants and enterprises',
    fees: '0%',
    custody: 'Non-custodial',
    chains: 'Bitcoin, Lightning, altcoins via plugins',
    deployment: 'Docker Compose',
    api: 'Greenfield REST API',
    openSource: 'MIT License',
    pros: ['Mature project with large community', 'Excellent Bitcoin/Lightning support', 'Extensive plugin ecosystem', 'Self-sovereign identity (Vault)'],
    cons: ['No native TRON support', 'No native SUI support', 'Limited stablecoin focus', 'Complex setup for non-Bitcoin chains'],
    link: '/alternatives/btcpayserver',
    linkText: 'XPay vs BTCPay',
  },
  {
    rank: 3,
    name: 'Coinbase Commerce',
    tagline: 'Discontinued Mar 31, 2026 (was self-custodial)',
    rating: '3.5',
    bestFor: 'Historical / migration reference; successor: Coinbase Business',
    fees: 'Legacy 1% (was self-custodial)',
    custody: 'Was self-custodial; Business is custodial',
    chains: 'BTC, ETH, USDC, DAI, a few others',
    deployment: 'Hosted (SaaS) — portal inaccessible after Mar 31, 2026',
    api: 'REST API available',
    openSource: 'Closed-source',
    pros: ['Easy to set up (while available)', 'Coinbase brand trust', 'Fiat conversion available'],
    cons: ['Discontinued after Mar 31, 2026', 'Legacy 1% fee', 'Limited chain support', 'Business successor is custodial (~1%, US/SG)'],
    link: '/alternatives/coinbase-commerce',
    linkText: 'XPay vs Coinbase Commerce',
  },
];

export default function BestSelfHostedGatewayPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">

            {/* Hero */}
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider font-mono mb-6">
                <Trophy className="w-3.5 h-3.5" />
                <span>Best of 2026</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                Best Self-Hosted Crypto Payment Gateway 2026
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                Self-hosted crypto payment gateways give you full control over your payment infrastructure
                with zero transaction fees. We evaluated the top solutions based on fees, security, chain
                support, developer experience, and community strength to help you choose the right one
                for your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>Deploy Self-Hosted Gateway</span>
                </Link>
              </div>
            </section>

            {/* Quick Comparison Table */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Quick Comparison
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                At a glance, here is how the top self-hosted crypto payment gateways compare in 2026.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Rank</th>
                      <th className="p-4 text-gray-400 font-medium">Gateway</th>
                      <th className="p-4 text-gray-400 font-medium">Fees</th>
                      <th className="p-4 text-gray-400 font-medium">Custody</th>
                      <th className="p-4 text-gray-400 font-medium">Chains</th>
                      <th className="p-4 text-gray-400 font-medium">Deployment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {rankData.map((item) => (
                      <tr key={item.name} className={`hover:bg-white/[0.02] transition-colors ${item.rank === 1 ? 'bg-amber-400/5' : ''}`}>
                        <td className="p-4">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold font-mono ${
                            item.rank === 1 ? 'bg-amber-400 text-[#040612]' : 'bg-white/10 text-gray-400'
                          }`}>
                            {item.rank}
                          </span>
                        </td>
                        <td className={`p-4 font-semibold ${item.rank === 1 ? 'text-brand-cyan' : 'text-gray-300'}`}>{item.name}</td>
                        <td className={`p-4 ${item.fees === '0%' ? 'text-green-400' : 'text-gray-400'}`}>{item.fees}</td>
                        <td className={`p-4 ${item.custody === 'Non-custodial' ? 'text-green-400' : 'text-amber-400'}`}>{item.custody}</td>
                        <td className="p-4 text-gray-400">{item.chains}</td>
                        <td className="p-4 text-gray-400">{item.deployment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Detailed Rankings */}
            {rankData.map((item) => (
              <section key={item.name} className="mb-16">
                <div className={`glass-panel rounded-2xl p-6 sm:p-8 ${item.rank === 1 ? 'glow-amber border-amber-400/20' : ''} ${item.rank === 1 ? 'border border-amber-400/20' : ''}`}>
                  {item.rank === 1 && (
                    <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider font-mono mb-4">
                      <Trophy className="w-3 h-3" />
                      <span>Top Pick</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-lg font-display font-bold ${item.rank === 1 ? 'text-brand-cyan' : 'text-white'}`}>
                          {item.rank}. {item.name}
                        </span>
                        <div className="flex items-center gap-0.5">
                          {[1,2,3,4,5].map((i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(Number(item.rating)) ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`} />
                          ))}
                          <span className="text-xs text-gray-500 font-mono ml-1">{item.rating}/5</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 font-sans">{item.tagline}</p>
                    </div>
                    <Link
                      href={item.link}
                      className="shrink-0 inline-flex items-center space-x-1.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue/20 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    >
                      <span>{item.linkText}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    <div className="bg-white/[0.03] rounded-xl p-3">
                      <div className="text-xs text-gray-500 font-sans">Best For</div>
                      <div className="text-xs text-white font-semibold mt-0.5">{item.bestFor}</div>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-3">
                      <div className="text-xs text-gray-500 font-sans">Fees</div>
                      <div className={`text-xs font-semibold mt-0.5 ${item.fees === '0%' ? 'text-green-400' : 'text-gray-400'}`}>{item.fees}</div>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-3">
                      <div className="text-xs text-gray-500 font-sans">Custody</div>
                      <div className={`text-xs font-semibold mt-0.5 ${item.custody === 'Non-custodial' ? 'text-green-400' : 'text-amber-400'}`}>{item.custody}</div>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-3">
                      <div className="text-xs text-gray-500 font-sans">API</div>
                      <div className="text-xs text-gray-300 font-semibold mt-0.5 truncate">{item.api}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-green-400 mb-2 flex items-center gap-1.5"><Check className="w-3 h-3" /> Pros</h4>
                      <ul className="space-y-1">
                        {item.pros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-xs text-gray-400 font-sans">
                            <Check className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-red-400 mb-2 flex items-center gap-1.5"><span className="w-3 h-3 flex items-center justify-center text-xs">−</span> Cons</h4>
                      <ul className="space-y-1">
                        {item.cons.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-xs text-gray-400 font-sans">
                            <span className="text-red-400 shrink-0 mt-0.5">−</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {item.rank === 1 && (
                    <div className="bg-brand-cyan/5 border border-brand-cyan/10 rounded-xl p-4 text-xs text-gray-400 font-sans leading-relaxed">
                      <strong className="text-brand-cyan">Why XPay Labs wins:</strong> It is the only self-hosted gateway with
                      native TRON + EVM + SUI support from a single deployment. Combined with zero fees,
                      sub-second payment detection, and a Stripe-inspired developer API, it delivers the
                      best overall value for stablecoin-focused merchants.
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Feature Comparison */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Feature Comparison
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                XPay Labs and BTCPay Server are both excellent self-hosted gateways, but they serve different use cases. Here is how they compare on the features that matter most.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5 mb-6">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Feature</th>
                      <th className="p-4 text-brand-cyan font-medium">XPay Labs</th>
                      <th className="p-4 text-gray-400 font-medium">BTCPay Server</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Multi-Tenant</td>
                      <td className="p-4 text-green-400">Native — unlimited merchants per instance</td>
                      <td className="p-4 text-gray-400">Single merchant</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Operator Revenue</td>
                      <td className="p-4 text-green-400">Set your own fees, earn from every transaction</td>
                      <td className="p-4 text-gray-400">Not available</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Stablecoin Support</td>
                      <td className="p-4 text-green-400">USDT (TRC20/ERC20), USDC — native multi-chain</td>
                      <td className="p-4 text-gray-400">No native stablecoin support</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Blockchains</td>
                      <td className="p-4 text-green-400">TRON + 20+ EVM (ETH, BSC, Polygon, Avalanche) + SUI</td>
                      <td className="p-4 text-gray-400">Bitcoin + Lightning (altcoins via plugins)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Deployment</td>
                      <td className="p-4 text-green-400">Single <code className="text-xs text-brand-cyan">docker compose up -d</code> — 11 containers</td>
                      <td className="p-4 text-gray-400">Docker Compose with manual configuration</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Merchant Dashboard</td>
                      <td className="p-4 text-green-400">Vue 3 + Element Plus — orders, payouts, settlement</td>
                      <td className="p-4 text-gray-400">Basic web interface</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">API Security</td>
                      <td className="p-4 text-green-400">HMAC-SHA256 + RSA encryption</td>
                      <td className="p-4 text-gray-400">API Key</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cost Savings Analysis */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Cost Savings Analysis
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Self-hosted gateways eliminate the per-transaction fees charged by hosted providers
                (commonly ~0.5–1%, or BitPay’s 2% + $0.25 public entry tier below $500k/mo).
                Here is an illustrative cost difference at a 1% hosted rate vs self-hosted:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5 mb-6">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Monthly Volume</th>
                      <th className="p-4 text-gray-400 font-medium">Hosted Gateway (1%)</th>
                      <th className="p-4 text-green-400 font-medium">Self-Hosted (0%)</th>
                      <th className="p-4 text-brand-cyan font-medium">Annual Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">$10,000</td>
                      <td className="p-4 text-gray-400">$100/mo</td>
                      <td className="p-4 text-green-400">$0</td>
                      <td className="p-4 text-brand-cyan font-semibold">$1,200/yr</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">$50,000</td>
                      <td className="p-4 text-gray-400">$500/mo</td>
                      <td className="p-4 text-green-400">$0</td>
                      <td className="p-4 text-brand-cyan font-semibold">$6,000/yr</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">$100,000</td>
                      <td className="p-4 text-gray-400">$1,000/mo</td>
                      <td className="p-4 text-green-400">$0</td>
                      <td className="p-4 text-brand-cyan font-semibold">$12,000/yr</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">$500,000</td>
                      <td className="p-4 text-gray-400">$5,000/mo</td>
                      <td className="p-4 text-green-400">$0</td>
                      <td className="p-4 text-brand-cyan font-semibold">$60,000/yr</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">$1,000,000</td>
                      <td className="p-4 text-gray-400">$10,000/mo</td>
                      <td className="p-4 text-green-400">$0</td>
                      <td className="p-4 text-brand-cyan font-semibold">$120,000/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-green-400">Bottom line:</strong> A business processing $100,000/month in crypto payments saves $12,000 annually — equivalent to hiring a part-time developer — simply by switching from a hosted gateway to XPay Labs' zero-fee self-hosted infrastructure. For a detailed cost breakdown across top providers, see our <Link href="/blog/self-hosted-vs-hosted-cost-analysis" className="text-brand-cyan underline underline-offset-2">Self-Hosted vs Hosted Cost Analysis</Link>.
              </div>
            </section>

            {/* Honorable Mention */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Honorable Mentions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/alternatives/bitpay"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">BitPay</h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">Pioneered crypto merchant payments; public entry tier is 2%+$0.25 (&lt;$500k/mo) and custodial. Best for brand recognition and fiat settlement.</p>
                </Link>
                <Link
                  href="/alternatives/nowpayments"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">NowPayments</h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">Offers 350+ coin support with 0.5% fees, but is custodial with a 0.5% withdrawal fee. Good for broad coin acceptance.</p>
                </Link>
                <Link
                  href="/alternatives/opennode"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">OpenNode</h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">Bitcoin and Lightning-focused, charges 1% fees. Excellent for Bitcoin-native businesses.</p>
                </Link>
                <Link
                  href="/alternatives/coingate"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">CoinGate</h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">Broad coin support and fiat settlement, but custodial with 1% fees. Good alternative for European merchants.</p>
                </Link>
              </div>
            </section>

            {/* How to Choose */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                How to Choose the Right Self-Hosted Gateway
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                When evaluating self-hosted crypto payment gateways, consider these factors to find the
                solution that best matches your requirements:
              </p>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono mt-0.5">1</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">Chain Match</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      The most important factor: which blockchains do your customers use? If they primarily
                      use USDT on TRON, prioritize gateways with native TRON support. For multi-chain
                      acceptance, look for solutions that scan all major chains from a single deployment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-cyan font-mono mt-0.5">2</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">Fee Structure</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      All self-hosted gateways should charge 0% transaction fees. If a &ldquo;self-hosted&rdquo; gateway
                      charges per-transaction fees, it is not truly self-hosted. Verify there are no hidden
                      costs like withdrawal fees, monthly minimums, or revenue share requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-purple font-mono mt-0.5">3</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">Custody Model</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Non-custodial is non-negotiable for self-hosted solutions. Verify that private keys
                      are generated and stored exclusively on your infrastructure, with no third-party
                      access. The gateway should never hold or move your funds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono mt-0.5">4</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">Developer Experience</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Evaluate the API design, webhook reliability, documentation quality, and SDK
                      availability. HMAC-signed webhooks, idempotency keys, and clear documentation are
                      marks of a production-grade gateway. A Stripe-inspired API pattern reduces
                      integration time significantly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Common questions about self-hosted crypto payment gateways and how to choose the right one.
              </p>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((item, idx) => (
                  <div key={idx} className="glass-panel rounded-2xl p-5">
                    <h3 className="text-sm font-display font-medium text-white mb-2">{item.name}</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-amber text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  Deploy the Self-Hosted Gateway
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  XPay Labs — the leading self-hosted crypto payment gateway for stablecoin merchants.
                  Zero fees, non-custodial, multi-chain. Deploy on your own server in under 30 minutes.
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
                    href="/guides/how-to-accept-crypto-payments"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>View Setup Guide</span>
                    <ExternalLink className="w-4 h-4" />
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
