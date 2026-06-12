import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, Check, X, Shield, Cpu, Zap, Palette,
  Webhook, DollarSign, Layers, Server, Code, GitBranch
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Coinbase Commerce Alternative — Self-Hosted Crypto Payments | XPay Labs',
  description: 'Looking for a Coinbase Commerce alternative? XPay Labs is a self-hosted, non-custodial crypto payment gateway supporting TRON, EVM chains, and SUI. No 1% fee, full white-label control, and real-time webhooks.',
  keywords: 'Coinbase Commerce alternative, alternative to Coinbase Commerce, self-hosted crypto payments, non-custodial payment gateway, crypto payment provider',
  alternates: {
    canonical: 'https://www.xpaylabs.com/alternatives/coinbase-commerce',
  },
  openGraph: {
    title: 'Coinbase Commerce Alternative — Self-Hosted Crypto Payments | XPay Labs',
    description: 'Looking for a Coinbase Commerce alternative? XPay Labs is a self-hosted, non-custodial crypto payment gateway supporting TRON, EVM chains, and SUI.',
    url: 'https://www.xpaylabs.com/alternatives/coinbase-commerce',
    type: 'website',
  },
  twitter: {
    title: 'Coinbase Commerce Alternative — Self-Hosted Crypto Payments | XPay Labs',
    description: 'Looking for a Coinbase Commerce alternative? XPay Labs is a self-hosted, non-custodial crypto payment gateway supporting TRON, EVM chains, and SUI.',
    card: 'summary_large_image',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is XPay Labs a free alternative to Coinbase Commerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is free to self-host. You pay zero transaction fees — only network gas costs. We do not take a percentage of your payments like Coinbase Commerce does.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does XPay Labs support more blockchains than Coinbase Commerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs supports TRON (USDT, USDC), EVM-compatible chains (Ethereum, BSC, Polygon, Arbitrum, Optimism), and SUI. Coinbase Commerce supports Bitcoin, Ethereum, USDC, and a few other assets. XPay Labs offers broader stablecoin-focused chain support with lower transaction fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is XPay Labs non-custodial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is self-hosted on your infrastructure. Private keys never leave your server. Funds settle directly to your configured wallet addresses. We never hold or control your funds at any point in the payment lifecycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I white-label XPay Labs as my own payment gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Since XPay Labs is self-hosted, you can fully customize the checkout page, branding, domain, and email templates. There are no platform fees or revenue share requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of transaction volume can XPay Labs handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is designed for production-scale use. It uses a containerized microservices architecture with Redis-backed job queues and can handle thousands of concurrent payment verifications across multiple chains simultaneously.',
      },
    },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'XPay Labs',
  applicationCategory: 'PaymentProcessing',
  operatingSystem: 'Docker, Linux, macOS',
  description:
    'Self-hosted, non-custodial crypto payment infrastructure supporting TRON, EVM chains, and SUI. Self-hosted alternative to Coinbase Commerce.',
  url: 'https://www.xpaylabs.com',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.xpaylabs.com/alternatives/coinbase-commerce' },
  ],
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest font-mono">
      <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full" />
      {children}
    </span>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function CheckIcon() {
  return <Check className="w-5 h-5 text-green-400 shrink-0" />;
}

function XIcon() {
  return <X className="w-5 h-5 text-red-400 shrink-0" />;
}

export default function CoinbaseCommerceAlternative() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} />
        <JsonLd data={productSchema} />
        <JsonLd data={breadcrumbSchema} />
        <Header />

        <main>
          {/* HERO */}
          <section className="relative pt-32 pb-20 gradient-bg">
            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#5B8CFF] opacity-5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-pulse" />
                Coinbase Commerce Alternative
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Coinbase Commerce Alternative —{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B8CFF] via-[#00D1FF] to-[#7C4DFF]">
                  Take Control of Your Crypto Payments
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                XPay Labs is the self-hosted, non-custodial alternative to Coinbase Commerce.
                Cut fees to zero, support TRON, EVM chains, and SUI, and keep full control over
                your payment infrastructure. No middlemen. No revenue share. No limitations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="px-8 py-3 bg-[#5B8CFF] hover:bg-[#4A7CEE] text-slate-900 font-extrabold rounded-full inline-flex items-center gap-2 shadow-[0_0_20px_rgba(91,140,255,0.4)] hover:shadow-[0_0_30px_rgba(91,140,255,0.6)] transition-all duration-300"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3 border border-white/10 text-gray-300 hover:text-white font-medium rounded-full hover:border-white/20 transition-all duration-300"
                >
                  Learn About XPay Labs
                </Link>
              </div>
            </div>
          </section>

          {/* WHY MERCHANTS SEEK ALTERNATIVES */}
          <section className="py-20 bg-[#060816] relative">
            <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#00D1FF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex justify-center mb-6">
                <Badge>Why Switch</Badge>
              </div>
              <SectionHeading
                title="Why Merchants Are Looking for Coinbase Commerce Alternatives"
                subtitle="The crypto payments landscape is shifting. Here is why businesses are exploring other options."
              />
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: <Layers className="w-6 h-6 text-[#5B8CFF]" />,
                    title: 'Legacy Version Deprecation',
                    text: 'Coinbase deprecated its original Commerce product in favor of a streamlined on-chain checkout. Merchants on the legacy version were forced to migrate with limited tooling and fewer features than before.',
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-[#00D1FF]" />,
                    title: 'Custodial Risk',
                    text: 'With Coinbase Commerce, Coinbase holds settlement funds until payout. This introduces counterparty risk, delayed settlements, and dependence on Coinbase operational uptime and compliance decisions.',
                  },
                  {
                    icon: <Cpu className="w-6 h-6 text-[#7C4DFF]" />,
                    title: 'Limited Chain Support',
                    text: 'Coinbase Commerce primarily supports Bitcoin, Ethereum, USDC, and a handful of assets. If you want TRON USDT, BSC, Polygon, Arbitrum, or SUI — you are out of luck.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-6 glow-blue"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TL;DR SUMMARY */}
          <section className="py-16 bg-[#040612]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-[#5B8CFF]/15 bg-gradient-to-br from-[#5B8CFF]/5 to-[#7C4DFF]/5 p-8 glow-blue">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-[#00D1FF]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00D1FF] font-mono">TL;DR</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <strong className="text-white">Coinbase Commerce</strong> is a solid hosted solution — but it takes a 1%
                  cut, supports limited chains, and keeps your funds custodial until settlement.{' '}
                  <strong className="text-white">XPay Labs</strong> is a self-hosted payment gateway that
                  gives you <strong className="text-[#00D1FF]">zero transaction fees</strong>, support for{' '}
                  <strong className="text-[#00D1FF]">TRON, EVM chains, and SUI</strong>, full white-label customization,
                  and direct non-custodial settlement. If you process high volume, need TRON USDT, or want to own your
                  payment stack end-to-end, XPay Labs is the Coinbase Commerce alternative you are looking for.
                </p>
              </div>
            </div>
          </section>

          {/* FEATURE COMPARISON TABLE */}
          <section className="py-20 bg-[#060816]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-6">
                <Badge>Feature Comparison</Badge>
              </div>
              <SectionHeading
                title="Coinbase Commerce vs XPay Labs"
                subtitle="A side-by-side comparison of the features that matter most to merchants."
              />
              <div className="overflow-x-auto mt-12 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left py-4 px-6 text-gray-400 font-medium">Feature</th>
                      <th className="text-left py-4 px-6 text-orange-400 font-semibold">Coinbase Commerce</th>
                      <th className="text-left py-4 px-6 text-[#00D1FF] font-semibold">XPay Labs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { feature: 'Pricing', coinbase: '1% transaction fee', xpay: 'Free (self-hosted, zero fees)' },
                      {
                        feature: 'Supported Chains',
                        coinbase: 'Bitcoin, Ethereum, USDC, few others',
                        xpay: 'TRON, EVM (ETH, BSC, Polygon, Arbitrum, Optimism), SUI',
                      },
                      {
                        feature: 'Stablecoin Support',
                        coinbase: 'USDC only',
                        xpay: 'USDT, USDC (native on each chain)',
                      },
                      {
                        feature: 'Non-Custodial',
                        coinbase: 'No — Coinbase holds funds',
                        xpay: 'Yes — self-hosted, direct settlement',
                      },
                      {
                        feature: 'White-Label',
                        coinbase: 'No — branded Coinbase checkout',
                        xpay: 'Yes — full customization',
                      },
                      {
                        feature: 'Webhooks',
                        coinbase: 'Limited webhook events',
                        xpay: 'Real-time, configurable webhooks',
                      },
                      {
                        feature: 'Settlement Control',
                        coinbase: 'Batch payouts on their schedule',
                        xpay: 'Instant settlement to your wallets',
                      },
                      {
                        feature: 'Self-Hosted',
                        coinbase: 'No — SaaS only',
                        xpay: 'Yes — Docker deployment',
                      },
                      {
                        feature: 'Source Access',
                        coinbase: 'No',
                        xpay: 'Free (XPay License)',
                      },
                      {
                        feature: 'API-First Design',
                        coinbase: 'REST API available',
                        xpay: 'REST API + webhook simulation',
                      },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 text-white font-medium">{row.feature}</td>
                        <td className="py-4 px-6 text-gray-400">{row.coinbase}</td>
                        <td className="py-4 px-6 text-gray-200">{row.xpay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* DETAILED COMPARISON */}
          <section className="py-20 bg-[#040612]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-6">
                <Badge>Deep Dive</Badge>
              </div>
              <SectionHeading
                title="Detailed Comparison"
                subtitle="A closer look at how XPay Labs and Coinbase Commerce differ across the dimensions that matter."
              />

              <div className="space-y-16 mt-12">
                {/* Pricing */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center mb-4">
                      <DollarSign className="w-6 h-6 text-[#5B8CFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Pricing</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      Coinbase Commerce charges a <strong className="text-orange-400">1% transaction fee</strong> on
                      every payment you receive. For a business processing $100,000/month in crypto, that is{' '}
                      <strong className="text-white">$1,000/month</strong> in fees — $12,000/year. And that is before any
                      network gas costs.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs is <strong className="text-[#00D1FF]">completely free</strong>. Since you self-host the
                      software on your own infrastructure, there are no per-transaction fees, no monthly platform fees,
                      and no revenue share. You only pay the network gas fee required to verify on-chain transactions
                      (typically a fraction of a cent on TRON or BSC). For the same $100,000/month in volume, your cost
                      is effectively $0 in platform fees.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-cyan">
                    <h4 className="text-white font-bold mb-4 text-lg">Cost comparison at $100k/month volume</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-gray-400">Coinbase Commerce (1%)</span>
                        <span className="text-orange-400 font-bold text-lg">$1,000/mo</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-gray-400">XPay Labs</span>
                        <span className="text-[#00D1FF] font-bold text-lg">$0/mo</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-gray-400">Annual savings with XPay Labs</span>
                        <span className="text-green-400 font-bold text-xl">$12,000/yr</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supported Blockchains */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="order-2 md:order-1 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                    <div className="space-y-4">
                      {[
                        { chain: 'Ethereum (ERC-20)', cc: true, xp: true },
                        { chain: 'USDC', cc: true, xp: true },
                        { chain: 'Bitcoin (BTC)', cc: true, xp: false },
                        { chain: 'TRON (TRC-20 USDT/USDC)', cc: false, xp: true },
                        { chain: 'Binance Smart Chain (BEP-20)', cc: false, xp: true },
                        { chain: 'Polygon', cc: false, xp: true },
                        { chain: 'Arbitrum', cc: false, xp: true },
                        { chain: 'Optimism', cc: false, xp: true },
                        { chain: 'SUI', cc: false, xp: true },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                        >
                          <span className="text-sm text-gray-300">{row.chain}</span>
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5 text-xs text-orange-400 w-16">
                              {row.cc ? <CheckIcon /> : <XIcon />}
                              {row.cc ? 'Yes' : 'No'}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-[#00D1FF] w-16">
                              {row.xp ? <CheckIcon /> : <XIcon />}
                              {row.xp ? 'Yes' : 'No'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#7C4DFF]/5 border border-[#7C4DFF]/10 flex items-center justify-center mb-4">
                      <Layers className="w-6 h-6 text-[#7C4DFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Supported Blockchains</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      Coinbase Commerce supports Bitcoin, Ethereum, and a limited set of ERC-20 tokens. Notably, it does{' '}
                      <strong className="text-white">not support TRON</strong> — the network that processes the majority
                      of stablecoin transactions globally. If your customers pay with TRC-20 USDT (the dominant
                      stablecoin in Asia, Latin America, and emerging markets), Coinbase Commerce is not an option.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs natively supports <strong className="text-[#00D1FF]">TRON (TRC-20)</strong>, all major{' '}
                      <strong className="text-[#00D1FF]">EVM chains</strong> (Ethereum, BSC, Polygon, Arbitrum,
                      Optimism), and <strong className="text-[#00D1FF]">SUI</strong>. This means your customers can pay
                      with the stablecoin and chain they already use — no bridging, no swapping, no friction.
                    </p>
                  </div>
                </div>

                {/* Security */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00D1FF]/5 border border-[#00D1FF]/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-[#00D1FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Security Model</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      Coinbase Commerce is <strong className="text-orange-400">custodial</strong>. When a customer pays
                      you, the funds go to a Coinbase-controlled address. Coinbase holds those funds and pays you out
                      later (daily or weekly batches). This means Coinbase controls your money until settlement —
                      introducing counterparty risk, potential freeze events, and dependency on their compliance
                      infrastructure.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs is <strong className="text-[#00D1FF]">non-custodial</strong>. You run the software on
                      your own server. Private keys remain on your infrastructure. Payments are detected on-chain and
                      settled directly to your configured wallet addresses. At no point does any third party hold your
                      funds. You retain complete sovereignty over your payment operations.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-blue">
                    <h4 className="text-white font-bold mb-4 text-lg">Security at a glance</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <XIcon />
                        <div>
                          <span className="text-orange-400 font-semibold text-sm">Custodial (Coinbase Commerce)</span>
                          <p className="text-xs text-gray-500 mt-1">
                            Coinbase controls settlement wallet. Funds batched and paid out on their schedule.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <div>
                          <span className="text-green-400 font-semibold text-sm">Non-Custodial (XPay Labs)</span>
                          <p className="text-xs text-gray-500 mt-1">
                            You control private keys. Funds settle instantly to your wallets. No third party holds funds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* White-Label & Developer Experience */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="order-2 md:order-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-[#5B8CFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">White-Label & Developer Experience</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      Coinbase Commerce presents a branded checkout page. You cannot customize it to match your brand.
                      The API is functional but limited compared to what a self-hosted solution can offer.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs is <strong className="text-white">fully white-label</strong>. Since you own the
                      deployment, you can customize every aspect of the checkout experience — colors, logo, domain,
                      email templates, and confirmation pages. The API is REST-first with real-time webhooks, a webhook
                      simulator, and full payment lifecycle management.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-cyan">
                    <h4 className="text-white font-bold mb-4 text-lg">Developer features</h4>
                    <div className="space-y-3">
                      {[
                        { icon: <Code className="w-4 h-4" />, text: 'REST API with full payment lifecycle' },
                        { icon: <Webhook className="w-4 h-4" />, text: 'Real-time webhook events (configurable)' },
                        { icon: <Server className="w-4 h-4" />, text: 'Docker container deployment' },
                        { icon: <GitBranch className="w-4 h-4" />, text: 'Free (XPay License) codebase' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <span className="w-8 h-8 rounded-lg bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center text-[#5B8CFF] shrink-0">
                            {item.icon}
                          </span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section className="py-20 bg-[#060816] relative">
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#00D1FF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex justify-center mb-6">
                <Badge>Pricing</Badge>
              </div>
              <SectionHeading
                title="Transparent Pricing — No Hidden Fees"
                subtitle="What you actually pay with each solution."
              />
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-blue">
                  <h3 className="text-lg font-bold text-white mb-1">Coinbase Commerce</h3>
                  <p className="text-3xl font-extrabold text-orange-400 mb-4">1%</p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <XIcon /> 1% fee on every transaction
                    </li>
                    <li className="flex items-start gap-2">
                      <XIcon /> No monthly plan available
                    </li>
                    <li className="flex items-start gap-2">
                      <XIcon /> Network gas costs on top
                    </li>
                    <li className="flex items-start gap-2">
                      <XIcon /> Withdrawal fees to external wallets
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> Hosted and maintained by Coinbase
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#5B8CFF]/20 bg-gradient-to-b from-[#5B8CFF]/5 to-transparent p-8 relative glow-cyan">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#5B8CFF] text-black text-xs font-bold uppercase tracking-wider">
                    Recommended
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">XPay Labs</h3>
                  <p className="text-3xl font-extrabold text-[#00D1FF] mb-4">Free</p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <CheckIcon /> Zero transaction fees
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> No platform or monthly fees
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> Only network gas costs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> Free webhook infrastructure
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> Unlimited API calls
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                  <h3 className="text-lg font-bold text-white mb-1">Annual Savings</h3>
                  <p className="text-3xl font-extrabold text-green-400 mb-4">$12k+</p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <CheckIcon /> At $100k/month volume
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> Scales with your growth
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> No volume caps
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> No surprise fee increases
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* WHO SHOULD SWITCH / STAY */}
          <section className="py-20 bg-[#040612]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-6">
                <Badge>Decision Guide</Badge>
              </div>
              <SectionHeading
                title="Who Should Switch — And Who Should Stay"
                subtitle="An honest assessment to help you decide."
              />
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="rounded-2xl border border-[#00D1FF]/15 bg-gradient-to-br from-[#00D1FF]/5 to-transparent p-8 glow-cyan">
                  <div className="w-12 h-12 rounded-2xl bg-green-400/5 border border-green-400/10 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Switch to XPay Labs if...</h3>
                  <ul className="space-y-3">
                    {[
                      'You process high transaction volume and want to eliminate the 1% fee overhead',
                      'Your customers primarily pay with TRON (TRC-20 USDT) — the most-used stablecoin network',
                      'You need multi-chain support including BSC, Polygon, Arbitrum, and SUI',
                      'You want non-custodial control — your keys, your funds, your infrastructure',
                      'You need to white-label the checkout experience under your own brand',
                      'You run a development team that can manage a Docker-based deployment',
                      'You want real-time webhook events and full API control over payments',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-orange-400/15 bg-gradient-to-br from-orange-400/5 to-transparent p-8">
                  <div className="w-12 h-12 rounded-2xl bg-orange-400/5 border border-orange-400/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Stay with Coinbase Commerce if...</h3>
                  <ul className="space-y-3">
                    {[
                      'You only accept Bitcoin and Ethereum payments and have no need for other chains',
                      'You prefer a fully managed, hosted solution and do not want to manage infrastructure',
                      'Your volume is low enough that the 1% fee is negligible compared to the convenience',
                      'You need Coinbase built-in fiat settlement and do not want to manage conversion yourself',
                      'Your compliance team requires a regulated, US-based payment processor',
                      'You do not have the technical resources to deploy and maintain a self-hosted system',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <Shield className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* MIGRATION GUIDE */}
          <section className="py-20 bg-[#060816] relative">
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex justify-center mb-6">
                <Badge>Migration Guide</Badge>
              </div>
              <SectionHeading
                title="How to Migrate from Coinbase Commerce to XPay Labs"
                subtitle="The transition takes less than an afternoon. Here is the playbook."
              />
              <div className="mt-12 max-w-3xl mx-auto space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Deploy XPay Labs',
                    text: 'Clone the repository and deploy via Docker Compose on your VPS or cloud server. The setup script handles database initialization, Redis configuration, and webhook endpoint setup. Full documentation is available in the repository.',
                  },
                  {
                    num: '02',
                    title: 'Configure Your Wallets',
                    text: 'Add your TRON, EVM, and SUI wallet addresses to the XPay Labs dashboard. These are the addresses where payments will settle. You maintain full control of the private keys.',
                  },
                  {
                    num: '03',
                    title: 'Generate API Credentials',
                    text: 'Create API keys for your application from the XPay Labs admin panel. Each integration gets its own API key with configurable permissions (read, write, webhook).',
                  },
                  {
                    num: '04',
                    title: 'Update Your Checkout Integration',
                    text: 'Replace the Coinbase Commerce checkout button with XPay Labs payment link or API integration. The REST API makes it straightforward — create a charge, get a deposit address, and listen for webhook confirmation.',
                  },
                  {
                    num: '05',
                    title: 'Configure Webhooks',
                    text: 'Set up webhook endpoints in XPay Labs to receive real-time payment notifications. Supported events include payment.pending, payment.confirmed, payment.failed, and settlement.completed.',
                  },
                  {
                    num: '06',
                    title: 'Test and Go Live',
                    text: 'Run a few test payments on each chain you support. XPay Labs includes a webhook simulator for end-to-end testing. Once confirmed, update your DNS and go live.',
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="text-[#5B8CFF] font-mono font-bold text-lg shrink-0 w-10">
                      {step.num}
                    </span>
                    <div className="border-l border-white/5 pl-6 pb-6">
                      <h4 className="text-white font-bold text-base mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-[#040612] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="bg-gradient-to-b from-[#5B8CFF]/10 to-transparent p-[1.5px] rounded-[32px] border border-white/5 backdrop-blur-sm">
                <div className="relative rounded-[30px] border border-white/10 overflow-hidden bg-[#0A0D1F] p-8 sm:p-12 text-center shadow-2xl">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C4DFF]/5 rounded-full blur-[120px] pointer-events-none" />
                  <div className="max-w-2xl mx-auto space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 mx-auto flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#5B8CFF]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
                      Ready to Take Control of Your Crypto Payments?
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed max-w-xl mx-auto">
                      Deploy XPay Labs in minutes. Zero fees, non-custodial, multi-chain. Join merchants who have
                      already switched from Coinbase Commerce.
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
                      <Link
                        href="https://docs.xpaylabs.com/"
                        className="px-8 py-3 bg-[#5B8CFF] hover:bg-[#4A7CEE] text-slate-900 font-extrabold rounded-full inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(91,140,255,0.4)] hover:shadow-[0_0_30px_rgba(91,140,255,0.6)] transition-all duration-300"
                      >
                        <span>Get Started Free</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/"
                        className="px-8 py-3 border border-white/10 text-gray-300 hover:text-white font-medium rounded-full hover:border-white/20 transition-all duration-300"
                      >
                        Explore XPay Labs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INTERNAL LINKS */}
          <section className="py-12 bg-[#060816] border-t border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <span className="text-slate-500">Related comparisons:</span>
                <Link
                  href="/alternatives/bitpay"
                  className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors"
                >
                  XPay vs BitPay
                </Link>
                <span className="text-slate-600">·</span>
                <Link href="https://docs.xpaylabs.com/" className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors">
                  Documentation
                </Link>
                <span className="text-slate-600">·</span>
                <Link href="/" className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors">
                  XPay Labs Home
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
  );
}
