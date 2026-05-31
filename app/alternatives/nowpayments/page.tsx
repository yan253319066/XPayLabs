import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, Check, X, Shield, DollarSign, Layers, Server,
  Palette, Webhook, Settings, Code, ExternalLink, Cpu
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'NowPayments Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
  description: 'Looking for a NowPayments alternative? XPay Labs is a self-hosted, non-custodial crypto payment gateway with zero fees, support for TRON, EVM chains, and SUI. Full white-label control and instant settlement.',
  keywords: ['NowPayments alternative', 'alternative to NowPayments', 'NowPayments vs self-hosted', 'self-hosted crypto payment gateway', 'non-custodial crypto payments', 'crypto payment processor comparison'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/alternatives/nowpayments',
  },
  openGraph: {
    title: 'NowPayments Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
    description: 'Looking for a NowPayments alternative? XPay Labs is a self-hosted, non-custodial crypto payment gateway with zero fees, support for TRON, EVM chains, and SUI.',
    url: 'https://www.xpaylabs.com/alternatives/nowpayments',
    type: 'website',
  },
  twitter: {
    title: 'NowPayments Alternative — Self-Hosted Crypto Payment Gateway | XPay Labs',
    description: 'Looking for a NowPayments alternative? XPay Labs is a self-hosted, non-custodial crypto payment gateway with zero fees, support for TRON, EVM chains, and SUI.',
    card: 'summary_large_image',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes XPay Labs a good NowPayments alternative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is a self-hosted, non-custodial crypto payment gateway. Unlike NowPayments, you retain full control of private keys, funds settle directly to your wallet, there are zero transaction fees, and you get full white-label customization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is XPay Labs cheaper than NowPayments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs charges 0% transaction fees with no monthly subscription. You only pay network gas fees. NowPayments charges 0.5% per transaction plus a 0.5% hidden fee for withdrawal to external wallets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate from NowPayments to XPay Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Migration involves deploying the XPay Labs Docker container, configuring your wallet addresses, generating API credentials, updating your checkout integration, and configuring webhooks. Full migration documentation is available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does XPay Labs support more blockchains than NowPayments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs supports TRON (TRC-20), EVM-compatible chains (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Base), and SUI. While NowPayments supports a broader set of UTXO-based coins (BTC, LTC, DOGE), XPay Labs focuses on deep stablecoin-native support across the chains where the majority of payment volume occurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is XPay Labs non-custodial compared to NowPayments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is fully non-custodial. Private keys are generated on your own infrastructure and never leave your server. Payments settle directly to your configured wallets. NowPayments is custodial — they hold your funds until you request a withdrawal, and enforce minimum withdrawal thresholds.',
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
    'Self-hosted, non-custodial crypto payment infrastructure supporting TRON, EVM chains, and SUI. Self-hosted alternative to NowPayments with zero transaction fees.',
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
    { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.xpaylabs.com/alternatives/nowpayments' },
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

export default function NowPaymentsAlternativePage() {
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
                NowPayments Alternative
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                NowPayments Alternative —{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B8CFF] via-[#00D1FF] to-[#7C4DFF]">
                  Why Merchants Are Switching to Self-Hosted
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                NowPayments is a popular API-based crypto payment gateway, but merchants increasingly
                face issues with custodial risk, recurring fees around 0.5%, withdrawal thresholds,
                and limited customization. XPay Labs is the self-hosted, non-custodial alternative
                that gives you full control — zero transaction fees, direct settlement, and
                multi-chain by design.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/docs"
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

          {/* TL;DR SUMMARY */}
          <section className="py-16 bg-[#040612]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-[#5B8CFF]/15 bg-gradient-to-br from-[#5B8CFF]/5 to-[#7C4DFF]/5 p-8 glow-blue">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-5 h-5 text-[#00D1FF]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00D1FF] font-mono">TL;DR</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <strong className="text-white">NowPayments</strong> is a popular hosted payment gateway
                  — but it charges ~0.5% per transaction, holds your funds custodially until withdrawal,
                  enforces minimum payout thresholds, and limits checkout branding.{' '}
                  <strong className="text-white">XPay Labs</strong> is a self-hosted payment
                  gateway that gives you <strong className="text-[#00D1FF]">zero transaction fees</strong>,
                  support for <strong className="text-[#00D1FF]">TRON, EVM chains, and SUI</strong>, full
                  non-custodial control, and instant settlement without withdrawal limits. If you process
                  meaningful volume, need TRON USDT support, or want to own your payment stack end-to-end,
                  XPay Labs is the NowPayments alternative you are looking for.
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
                title="NowPayments vs XPay Labs"
                subtitle="A side-by-side comparison of the features that matter most to merchants."
              />
              <div className="overflow-x-auto mt-12 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left py-4 px-6 text-gray-400 font-medium">Feature</th>
                      <th className="text-left py-4 px-6 text-orange-400 font-semibold">NowPayments</th>
                      <th className="text-left py-4 px-6 text-[#00D1FF] font-semibold">XPay Labs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { feature: 'Pricing', np: '~0.5% per transaction', xpay: 'Free (self-hosted, zero fees)' },
                      {
                        feature: 'Supported Chains',
                        np: 'BTC, LTC, ETH, TRON, BSC, MATIC, XRP, XLM, SOL, ADA, DOGE, more',
                        xpay: 'TRON, EVM (ETH, BSC, Polygon, Arbitrum, Optimism, Base), SUI',
                      },
                      {
                        feature: 'Stablecoin Focus',
                        np: 'USDT, USDC, DAI (limited native chain support)',
                        xpay: 'Native USDT/USDC on every supported chain',
                      },
                      {
                        feature: 'Non-Custodial',
                        np: 'No — NowPayments holds funds until withdrawal',
                        xpay: 'Yes — self-hosted, direct wallet settlement',
                      },
                      {
                        feature: 'Minimum Withdrawal',
                        np: 'Yes (e.g., 0.01 BTC equivalent)',
                        xpay: 'None — funds arrive instantly',
                      },
                      {
                        feature: 'White-Label',
                        np: 'Limited (partner plan, additional cost)',
                        xpay: 'Yes — full customization',
                      },
                      {
                        feature: 'Webhooks',
                        np: 'IPN callbacks available',
                        xpay: 'HMAC-signed webhooks, real-time',
                      },
                      {
                        feature: 'Settlement Control',
                        np: 'Manual withdrawal with fees',
                        xpay: 'Instant settlement to your wallets',
                      },
                      {
                        feature: 'Self-Hosted',
                        np: 'No — SaaS only',
                        xpay: 'Yes — Docker deployment',
                      },
                      {
                        feature: 'Source Access',
                        np: 'No',
                        xpay: 'Source-available',
                      },
                      {
                        feature: 'API-First Design',
                        np: 'REST API + IPN',
                        xpay: 'REST API + webhook simulation',
                      },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 text-white font-medium">{row.feature}</td>
                        <td className="py-4 px-6 text-gray-400">{row.np}</td>
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
                title="Detailed Feature Breakdown"
                subtitle="A closer look at how XPay Labs and NowPayments compare across the dimensions that matter."
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
                      NowPayments charges a <strong className="text-orange-400">~0.5% transaction fee</strong> on
                      every payment. On top of that, withdrawing your funds to an external wallet incurs an additional
                      network fee plus a <strong className="text-white">0.5% withdrawal fee</strong>. For a business
                      processing $100,000/month, that is $500 in transaction fees plus withdrawal costs — over{' '}
                      <strong className="text-white">$6,000+/year</strong>.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs is <strong className="text-[#00D1FF]">completely free</strong>. Since you self-host
                      the software, there are zero per-transaction fees, zero platform fees, and zero withdrawal fees.
                      Your only cost is the VPS hosting (as low as $10/month) and network gas fees for on-chain
                      verification (typically fractions of a cent on TRON or L2s). At $100,000/month volume, your
                      annual savings exceed <strong className="text-green-400">$6,000</strong>.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-cyan">
                    <h4 className="text-white font-bold mb-4 text-lg">Cost comparison at $100k/month volume</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-gray-400">NowPayments (0.5% + withdrawal)</span>
                        <span className="text-orange-400 font-bold text-lg">$600+/mo</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-gray-400">XPay Labs</span>
                        <span className="text-[#00D1FF] font-bold text-lg">$0/mo</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-gray-400">Annual savings with XPay Labs</span>
                        <span className="text-green-400 font-bold text-xl">$7,200+/yr</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chain Support */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="order-2 md:order-1 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                    <div className="space-y-4">
                      {[
                        { chain: 'Bitcoin (BTC)', np: true, xp: false },
                        { chain: 'Litecoin (LTC)', np: true, xp: false },
                        { chain: 'Ethereum (ETH / ERC-20)', np: true, xp: true },
                        { chain: 'TRON (TRC-20 USDT/USDC)', np: true, xp: true },
                        { chain: 'BNB Smart Chain (BEP-20)', np: true, xp: true },
                        { chain: 'Polygon', np: true, xp: true },
                        { chain: 'Arbitrum', np: false, xp: true },
                        { chain: 'Optimism', np: false, xp: true },
                        { chain: 'Base', np: false, xp: true },
                        { chain: 'SUI', np: false, xp: true },
                        { chain: 'XRP, SOL, ADA, DOGE, XLM', np: true, xp: false },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                        >
                          <span className="text-sm text-gray-300">{row.chain}</span>
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5 text-xs text-orange-400 w-16">
                              {row.np ? <Check className="w-4 h-4 text-green-400 shrink-0" /> : <X className="w-4 h-4 text-red-400 shrink-0" />}
                              {row.np ? 'Yes' : 'No'}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-[#00D1FF] w-16">
                              {row.xp ? <Check className="w-4 h-4 text-green-400 shrink-0" /> : <X className="w-4 h-4 text-red-400 shrink-0" />}
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
                      This is where the trade-offs become visible. NowPayments supports an impressive breadth of
                      chains — <strong className="text-white">BTC, LTC, ETH, TRON, BSC, XRP, SOL, ADA, DOGE, XLM</strong>,
                      and others. For merchants accepting a wide variety of UTXO-based coins and altcoins, NowPayments
                      has broad coverage.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      However, breadth does not equal depth. NowPayments lacks support for <strong className="text-white">L2 networks</strong>
                      (Arbitrum, Optimism, Base) where transaction costs are lowest, and does not support{' '}
                      <strong className="text-white">SUI</strong>, an emerging chain with growing stablecoin volume.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs focuses on <strong className="text-[#00D1FF]">deep stablecoin-native support</strong>
                      across TRON, all major EVM chains, and SUI. If your customers pay with TRC-20 USDT (the dominant
                      stablecoin in emerging markets), USDC on Arbitrum, or USDT on BSC, XPay Labs provides a smoother,
                      lower-cost experience with direct settlement — no withdrawal requests, no minimums, no delays.
                    </p>
                  </div>
                </div>

                {/* Security & Custody */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00D1FF]/5 border border-[#00D1FF]/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-[#00D1FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Security & Custody Model</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      NowPayments operates a <strong className="text-orange-400">custodial model</strong>. When a
                      customer pays you, the funds go to NowPayments' wallets. To access your money, you must
                      submit a withdrawal request, which incurs a 0.5% fee and a network gas cost. NowPayments
                      also enforces <strong className="text-white">minimum withdrawal thresholds</strong> — typically
                      0.01 BTC equivalent (roughly $500–$1,000 depending on market conditions). Small merchants may
                      find themselves unable to withdraw frequently.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs is <strong className="text-[#00D1FF]">non-custodial</strong>. You run the software on
                      your own infrastructure. Private keys never leave your server. Each invoice generates a unique
                      deposit address derived from your own node seed. Funds settle directly to your configured wallet
                      addresses in real-time. <strong className="text-white">No withdrawal requests, no minimums,
                      no fees, no delays.</strong> Your keys, your coins, your schedule.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-blue">
                    <h4 className="text-white font-bold mb-4 text-lg">Custody comparison</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-orange-400 font-semibold text-sm">Custodial (NowPayments)</span>
                          <p className="text-xs text-gray-500 mt-1">
                            Funds held by NowPayments. Manual withdrawal required. Minimum threshold + 0.5% withdrawal fee applied.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-green-400 font-semibold text-sm">Non-Custodial (XPay Labs)</span>
                          <p className="text-xs text-gray-500 mt-1">
                            You control private keys. Funds settle instantly to your wallets. No third party ever holds your funds.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <p className="text-xs text-red-300 leading-relaxed">
                          <strong>Risk scenario:</strong> If NowPayments experiences a regulatory issue, security
                          incident, or downtime, your funds and payment flow are impacted. With XPay Labs, your
                          operation is fully independent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* White-Label & Customization */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="order-2 md:order-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-[#5B8CFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">White-Label & Customization</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      NowPayments offers white-label options, but they are locked behind their higher-tier
                      <strong className="text-white"> Partner Plan</strong> with custom pricing. The standard checkout
                      page displays NowPayments branding and a hosted URL. You have limited control over the look
                      and feel of the payment experience presented to your customers.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs is <strong className="text-[#00D1FF]">fully white-label by default</strong>. Since
                      you own the deployment, you control every aspect of the checkout — brand colors, logo, custom
                      domain, email templates, and confirmation pages. There is no "Powered by XPay Labs" badge.
                      Your customers see a seamless checkout that reinforces your brand, not a third-party gateway.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-cyan">
                    <h4 className="text-white font-bold mb-4 text-lg">Customization comparison</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-orange-400 font-semibold text-sm">NowPayments</span>
                          <p className="text-xs text-gray-500 mt-1">
                            White-label only on Partner plan (custom pricing). Standard checkout shows third-party branding.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-green-400 font-semibold text-sm">XPay Labs</span>
                          <p className="text-xs text-gray-500 mt-1">
                            Full white-label out of the box. Custom domain, colors, logo, and email templates — no extra cost.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Settlement & Webhooks */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#7C4DFF]/5 border border-[#7C4DFF]/10 flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-[#7C4DFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Settlement & Webhook Integration</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      NowPayments provides IPN (Instant Payment Notification) callbacks and a REST API for
                      payment management. However, settlement is not instant — you must manually withdraw funds
                      from your NowPayments balance, paying the 0.5% withdrawal fee plus network costs each time.
                      This adds operational overhead and eats into margins.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs provides <strong className="text-[#00D1FF]">HMAC-signed webhooks</strong> for secure
                      server-to-server notifications, a <strong className="text-white">webhook simulator</strong> for
                      end-to-end testing, and a comprehensive REST API. Settlement happens in real-time — funds arrive
                      directly in your wallet as soon as the on-chain confirmation threshold is met. No withdrawal
                      step, no fee, no delay.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                    <h4 className="text-white font-bold mb-4 text-lg">Developer features</h4>
                    <div className="space-y-3">
                      {[
                        { icon: <Code className="w-4 h-4" />, text: 'REST API with full payment lifecycle' },
                        { icon: <Webhook className="w-4 h-4" />, text: 'HMAC-signed real-time webhooks' },
                        { icon: <Server className="w-4 h-4" />, text: 'Docker container deployment' },
                        { icon: <Settings className="w-4 h-4" />, text: 'Instant settlement — no withdrawal step' },
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

          {/* PRICING COMPARISON */}
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
                  <h3 className="text-lg font-bold text-white mb-1">NowPayments</h3>
                  <p className="text-3xl font-extrabold text-orange-400 mb-4">0.5%</p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> 0.5% fee on every transaction
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> 0.5% fee on withdrawals
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Minimum withdrawal threshold
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> White-label at extra cost
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Broad altcoin support
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
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Zero transaction fees
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> No platform or monthly fees
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Only network gas costs
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Free webhook infrastructure
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Unlimited API calls
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                  <h3 className="text-lg font-bold text-white mb-1">Annual Savings</h3>
                  <p className="text-3xl font-extrabold text-green-400 mb-4">$7k+</p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> At $100k/month volume
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Scales with your growth
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> No withdrawal fees
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> No surprise fee increases
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* HONEST ASSESSMENT */}
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
                      'You process over $10k/month and want to eliminate the 0.5% fee overhead',
                      'Your customers primarily pay with TRON (TRC-20 USDT) or stablecoins on L2s',
                      'You want instant, direct settlement — no withdrawal requests or minimums',
                      'You need non-custodial control: your keys, your funds, your infrastructure',
                      'You want a fully white-label checkout experience under your own brand',
                      'You run a development team that can manage a Docker-based deployment',
                      'You want auditable, self-hosted infrastructure you can customize',
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
                  <h3 className="text-xl font-bold text-white mb-4">Stay with NowPayments if...</h3>
                  <ul className="space-y-3">
                    {[
                      'You need to accept a wide variety of UTXO-based coins (BTC, LTC, DOGE) and altcoins',
                      'You prefer a fully managed, hosted API solution with no server maintenance',
                      'Your volume is low enough that the 0.5% fee is negligible compared to setup effort',
                      'You do not have the DevOps resources to deploy and maintain a self-hosted system',
                      'Your customers primarily pay with non-EVM coins that XPay Labs does not support',
                      'You rely on NowPayments\' fiat conversion and auto-withdrawal features',
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
                title="How to Migrate from NowPayments to XPay Labs"
                subtitle="The transition is straightforward. Here is the playbook."
              />
              <div className="mt-12 max-w-3xl mx-auto space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Deploy XPay Labs',
                    text: 'Clone the repository and deploy via Docker Compose on your VPS or cloud server. The setup script handles database initialization, Redis configuration, and webhook endpoint registration. Full documentation is available in the repository.',
                  },
                  {
                    num: '02',
                    title: 'Configure Your Wallet Addresses',
                    text: 'Add your TRON, EVM, and SUI wallet addresses to the XPay Labs dashboard. These are the settlement addresses where payments will arrive. You retain full control of the private keys — XPay Labs never holds your funds.',
                  },
                  {
                    num: '03',
                    title: 'Generate API Credentials',
                    text: 'Create API keys for your application from the XPay Labs admin panel. Each integration gets its own key with configurable permissions (read, write, webhook). This replaces your NowPayments API key.',
                  },
                  {
                    num: '04',
                    title: 'Update Your Checkout Integration',
                    text: 'Replace NowPayments API calls with XPay Labs REST API endpoints. The invoice lifecycle is similar — create a charge, receive a payment address, and listen for on-chain confirmation via webhooks. Our HMAC-signed webhooks provide the same reliability as NowPayments IPN.',
                  },
                  {
                    num: '05',
                    title: 'Configure Webhooks & Go Live',
                    text: 'Set up webhook endpoints in XPay Labs to receive payment.pending, payment.confirmed, and payment.failed events. Run test payments on each chain you support. Once confirmed, redirect your production traffic and deactivate your NowPayments API key.',
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
                      <ArrowRight className="w-5 h-5 text-[#5B8CFF]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
                      Ready to Own Your Payment Infrastructure?
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed max-w-xl mx-auto">
                      Stop paying 0.5% per transaction. Stop waiting for withdrawals. Deploy XPay Labs
                      in minutes — zero fees, non-custodial, multi-chain. Join merchants who have already
                      switched from NowPayments.
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
                      <Link
                        href="/docs"
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
                <Link
                  href="/alternatives/coinbase-commerce"
                  className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors"
                >
                  XPay vs Coinbase Commerce
                </Link>
                <span className="text-slate-600">·</span>
                <Link href="/docs" className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors">
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
