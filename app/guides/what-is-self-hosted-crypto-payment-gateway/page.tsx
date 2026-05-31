import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Shield, Globe, DollarSign, Key, Cpu, Coins, BookOpen, ArrowUpRight, Zap, Monitor, Layout, Warehouse, ShoppingCart, Binary, Network, ExternalLink } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'What is a Self-Hosted Crypto Payment Gateway? Complete Guide | XPay Labs',
  description: 'A self-hosted crypto payment gateway is software you deploy on your own server to accept cryptocurrency payments directly. Learn how it works, benefits over hosted gateways, and how to choose the right solution.',
  keywords: ['self-hosted crypto payment gateway', 'what is self-hosted payment gateway', 'crypto payment gateway explained', 'non-custodial payment gateway', 'how crypto payment gateways work', 'self-hosted vs hosted crypto payment'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/guides/what-is-self-hosted-crypto-payment-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/guides/what-is-self-hosted-crypto-payment-gateway',
      'en-US': 'https://www.xpaylabs.com/guides/what-is-self-hosted-crypto-payment-gateway',
    },
  },
  openGraph: {
    title: 'What is a Self-Hosted Crypto Payment Gateway? Complete Guide | XPay Labs',
    description: 'A self-hosted crypto payment gateway is software you deploy on your own server to accept cryptocurrency payments directly. Learn how it works, benefits over hosted gateways, and how to choose the right solution.',
    url: 'https://www.xpaylabs.com/guides/what-is-self-hosted-crypto-payment-gateway',
    type: 'article',
  },
  twitter: {
    title: 'What is a Self-Hosted Crypto Payment Gateway? Complete Guide | XPay Labs',
    description: 'A self-hosted crypto payment gateway is software you deploy on your own server to accept cryptocurrency payments directly. Learn how it works, benefits over hosted gateways, and how to choose the right solution.',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is a Self-Hosted Crypto Payment Gateway? Complete Guide',
  description: 'A self-hosted crypto payment gateway is software you deploy on your own server to accept cryptocurrency payments directly. Learn how it works, benefits over hosted gateways, and how to choose the right solution.',
  author: {
    '@type': 'Organization',
    name: 'XPay Labs',
  },
  datePublished: '2026-05-22',
  dateModified: '2026-05-29',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.xpaylabs.com/guides/what-is-self-hosted-crypto-payment-gateway' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a self-hosted crypto payment gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A self-hosted crypto payment gateway is software that you deploy on your own server infrastructure to accept cryptocurrency payments. Unlike hosted (third-party) gateways, you control the private keys, the checkout experience, and the server environment. Funds settle directly to your wallet with no intermediary holding custody.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a self-hosted crypto payment gateway work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A self-hosted gateway generates a unique blockchain deposit address for each invoice. The customer sends crypto to that address. The gateway monitors the blockchain mempool and detects the incoming transaction. Once the required number of block confirmations is reached, it triggers a webhook to notify your server, and the payment is settled directly to your wallet.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of a self-hosted crypto payment gateway over a hosted one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Self-hosted gateways offer zero transaction fees, non-custodial custody (you hold the keys), full white-label branding, no KYC requirements, instant settlement, and complete control over your infrastructure. Hosted gateways charge 1-3% per transaction, hold custody of funds, require business KYC, and can freeze accounts at their discretion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a self-hosted crypto payment gateway secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A self-hosted gateway is often more secure than hosted alternatives because private keys never leave your infrastructure. There is no third party with access to your funds. Modern self-hosted gateways use BIP-39 seed phrases for deterministic wallet derivation, HMAC-signed webhooks for server-to-server communication, and run entirely within your own Docker environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should use a self-hosted crypto payment gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Self-hosted gateways are ideal for developers, e-commerce merchants, SaaS platforms, and enterprises that want maximum control, minimal fees, and sovereign payment infrastructure. They are best suited for teams with basic DevOps capabilities who value privacy, customization, and long-term cost savings over the convenience of a fully managed service.',
      },
    },
  ],
};

const characteristics = [
  {
    icon: Shield,
    title: 'Non-Custodial',
    description: 'You control the private keys. Funds go directly from the customer to your wallet with no intermediary holding custody at any point.',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
  {
    icon: Server,
    title: 'Self-Deployed',
    description: 'The gateway software runs on your own server or cloud infrastructure. You manage deployment, updates, monitoring, and scaling.',
    glow: 'glow-cyan',
    iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
    iconColor: 'text-brand-cyan',
  },
  {
    icon: Binary,
    title: 'Open & Auditable',
    description: 'The source code is fully auditable. You can inspect exactly how keys are derived, transactions are detected, and payments are settled.',
    glow: 'glow-purple',
    iconBg: 'bg-brand-purple/10 border-brand-purple/20',
    iconColor: 'text-brand-purple',
  },
  {
    icon: Cpu,
    title: 'Multi-Chain',
    description: 'Modern self-hosted gateways support multiple blockchains out of the box — TRON, EVM chains, SUI, and others — from a single deployment.',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
];

const howItWorks = [
  {
    num: '1',
    title: 'Customer Initiates Payment',
    description: 'At checkout, your backend calls the gateway API to create an invoice. The gateway generates a unique blockchain deposit address derived from your HD wallet seed. No two invoices share the same address.',
    icon: ShoppingCart,
  },
  {
    num: '2',
    title: 'Mempool Detection',
    description: 'The gateway continuously scans the blockchain mempool for transactions sent to the invoice address. It detects pending transactions before they are confirmed, allowing you to show real-time payment status to the customer.',
    icon: Network,
  },
  {
    num: '3',
    title: 'Block Confirmation & Webhook',
    description: 'Once the transaction reaches the configured number of block confirmations (e.g., 19 for TRON, 12 for Ethereum), the gateway sends an HMAC-SHA256 signed webhook to your callback URL with the full transaction details.',
    icon: Zap,
  },
  {
    num: '4',
    title: 'Settlement',
    description: 'Funds settle directly to the wallet address derived from your seed phrase. Because you hold the keys, settlement is instant and irreversible. No batch processing, no withdrawal delays, no intermediary holds.',
    icon: DollarSign,
  },
];

const useCases = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Accept crypto payments on your online store with zero transaction fees. Generate unique addresses per order, handle refunds via manual wallet operations, and eliminate chargeback risk entirely.',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
  {
    icon: Monitor,
    title: 'SaaS Platforms',
    description: 'Integrate recurring crypto billing via webhook-based subscription management. Use deterministic address derivation to map customers to addresses without storing sensitive data.',
    glow: 'glow-cyan',
    iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
    iconColor: 'text-brand-cyan',
  },
  {
    icon: Globe,
    title: 'Donation Systems',
    description: 'Accept anonymous, censorship-resistant donations. Generate dynamic addresses per donation or use a static receive address with memo-based attribution for donor recognition.',
    glow: 'glow-purple',
    iconBg: 'bg-brand-purple/10 border-brand-purple/20',
    iconColor: 'text-brand-purple',
  },
  {
    icon: Warehouse,
    title: 'Enterprise Treasury',
    description: 'Large-scale payment collection with automated reconciliation, multi-chain support, and programmable webhook-based accounting integration with ERPs like QuickBooks and Netsuite.',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Lower Costs',
    description: 'Self-hosted gateways charge 0% transaction fees compared to 1–3% for hosted processors. For a business doing $100k/month, that is $12k–$36k in annual savings. You pay only for server hosting ($10–$20/month) and blockchain gas fees.',
    glow: 'glow-cyan',
    iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
    iconColor: 'text-brand-cyan',
  },
  {
    icon: Key,
    title: 'Full Control',
    description: 'You own the private keys, the infrastructure, and the checkout experience. No third party can freeze your account, change your fees, restrict your supported chains, or dictate your terms. Your payment stack is as sovereign as the blockchain itself.',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
  {
    icon: Shield,
    title: 'Financial Privacy',
    description: 'No KYC, no business verification, no sharing of financial data with a payment processor. Your transaction history is known only to you and the blockchain. This is especially valuable for businesses operating in restrictive jurisdictions or privacy-sensitive industries.',
    glow: 'glow-purple',
    iconBg: 'bg-brand-purple/10 border-brand-purple/20',
    iconColor: 'text-brand-purple',
  },
  {
    icon: Layout,
    title: 'Full Customization',
    description: 'Every aspect of the payment flow is under your control — checkout page design, email notifications, confirmation logic, fallback chains, and integration patterns. You are not constrained by a third-party platform\'s feature roadmap or design limitations.',
    glow: 'glow-cyan',
    iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
    iconColor: 'text-brand-cyan',
  },
];

export default function WhatIsSelfHostedGatewayPage() {
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
              <div className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-purple uppercase tracking-wider font-mono mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge Base</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                What is a Self-Hosted Crypto Payment Gateway?
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                A self-hosted crypto payment gateway is software you deploy on your own server to accept
                cryptocurrency payments directly. Unlike hosted solutions, you control the private keys,
                the checkout experience, and the entire payment flow — with zero transaction fees and
                no third-party custody of your funds.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>Deploy Your Gateway</span>
                </Link>
                <Link
                  href="/guides/how-to-accept-crypto-payments"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>Setup Guide</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* What is a Self-Hosted Crypto Payment Gateway? */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                What is a Self-Hosted Crypto Payment Gateway?
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                A self-hosted crypto payment gateway is a software application that you install and run on
                your own server infrastructure to accept, detect, and settle cryptocurrency payments. It acts
                as the bridge between your customer&apos;s crypto wallet and your business&apos;s backend systems —
                generating blockchain deposit addresses, monitoring transactions across multiple chains, and
                notifying your application when payments are confirmed.
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-8">
                The term &quot;self-hosted&quot; distinguishes this approach from hosted (or third-party) payment gateways
                like BitPay, Coinbase Commerce, or CoinGate. With a hosted gateway, you rely on an external
                company to detect payments and forward funds to you — they hold custody, set the fees, and
                control the checkout experience. With a self-hosted gateway, you run the software yourself,
                keep custody of private keys, and maintain full sovereignty over your payment infrastructure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {characteristics.map((item) => (
                  <div key={item.title} className={`glass-panel rounded-2xl p-6 ${item.glow}`}>
                    <div className={`w-10 h-10 rounded-lg ${item.iconBg} border flex items-center justify-center mb-3`}>
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-base font-display font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                How a Self-Hosted Crypto Payment Gateway Works
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Regardless of the specific software, all self-hosted crypto payment gateways follow the same
                fundamental flow. Here is how a typical transaction moves from customer wallet to your bank
                account:
              </p>
              <div className="space-y-0">
                {howItWorks.map((step, idx) => (
                  <div key={step.num} className="relative flex gap-6 pb-10 last:pb-0">
                    {/* Vertical connector line */}
                    {idx < howItWorks.length - 1 && (
                      <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 to-transparent" />
                    )}
                    <div className="shrink-0">
                      <div className="w-[46px] h-[46px] rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 border border-brand-blue/30 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-brand-blue" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-display font-medium text-white mb-1">
                        <span className="text-brand-blue font-mono mr-2">{step.num}.</span>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-sans leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">Key insight:</strong> The entire flow, from detection to
                webhook, typically completes in under 60 seconds on fast chains like TRON (3-second blocks,
                19 confirmations ~57 seconds) or under 30 seconds on L2s like Arbitrum. The customer sees
                real-time status updates as their transaction progresses through each stage.
              </div>
            </section>

            {/* Self-Hosted vs Hosted Gateway Comparison */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Self-Hosted vs Hosted Gateway: Comparison
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                The choice between self-hosted and hosted (third-party) crypto payment gateways comes down
                to tradeoffs in control, cost, convenience, and custody. Here is how they compare across
                the key decision factors:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Aspect</th>
                      <th className="p-4 text-orange-400 font-medium">Hosted (Third-Party)</th>
                      <th className="p-4 text-brand-cyan font-medium">Self-Hosted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Transaction Fees</td>
                      <td className="p-4 text-gray-400">1% – 3% per transaction</td>
                      <td className="p-4 text-green-400">0% (gas fees only)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Custody</td>
                      <td className="p-4 text-gray-400">Custodial (processor holds keys)</td>
                      <td className="p-4 text-green-400">Non-custodial (you hold keys)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Chain Support</td>
                      <td className="p-4 text-gray-400">Limited to processor integrations</td>
                      <td className="p-4 text-green-400">Any chain you configure (TRON, EVM, SUI, etc.)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">White-Label</td>
                      <td className="p-4 text-gray-400">Processor branding required</td>
                      <td className="p-4 text-green-400">Full white-label (your brand)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Deployment</td>
                      <td className="p-4 text-gray-400">SaaS signup (minutes)</td>
                      <td className="p-4 text-gray-300">Docker deploy (30 minutes)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">KYC Required</td>
                      <td className="p-4 text-gray-400">Yes (business verification)</td>
                      <td className="p-4 text-green-400">No</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Settlement Speed</td>
                      <td className="p-4 text-gray-400">Delayed (daily/weekly batches)</td>
                      <td className="p-4 text-green-400">Instant (direct to your wallet)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Account Freeze Risk</td>
                      <td className="p-4 text-gray-400">Yes (processor discretion)</td>
                      <td className="p-4 text-green-400">None (you are the processor)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Code Auditability</td>
                      <td className="p-4 text-gray-400">Closed-source</td>
                      <td className="p-4 text-green-400">Fully auditable</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Maintenance</td>
                      <td className="p-4 text-gray-400">None (fully managed)</td>
                      <td className="p-4 text-gray-300">Self-managed (updates, monitoring)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-sans leading-relaxed">
                Self-hosted gateways are the right choice when control, cost, and privacy matter more than
                operational convenience. Hosted gateways make sense for non-technical users who prefer a
                fully managed service and are comfortable with the tradeoffs in fees and custody.
              </p>
            </section>

            {/* Benefits */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Benefits of a Self-Hosted Crypto Payment Gateway
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Businesses and developers choose self-hosted gateways for four primary reasons. Each
                represents a fundamental advantage over the hosted model:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((item) => (
                  <div key={item.title} className={`glass-panel rounded-2xl p-6 ${item.glow}`}>
                    <div className={`w-10 h-10 rounded-lg ${item.iconBg} border flex items-center justify-center mb-3`}>
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-base font-display font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Use Cases */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Popular Use Cases
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Self-hosted crypto payment gateways serve a wide range of business models. Here are the
                most common deployment scenarios:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((item) => (
                  <div key={item.title} className={`glass-panel rounded-2xl p-5 ${item.glow}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 rounded-lg ${item.iconBg} border flex items-center justify-center shrink-0`}>
                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <h3 className="text-sm font-display font-medium text-white">{item.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Choose */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                How to Choose the Right Self-Hosted Gateway
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Not all self-hosted gateways are created equal. When evaluating options, consider these
                decision factors to find the solution that best fits your needs:
              </p>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono mt-0.5">1</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">Chain Compatibility</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Verify which blockchains and tokens the gateway supports out of the box. If your
                      customers primarily use TRON USDT, prioritize gateways with native TRON support
                      and TronGrid integration. For multi-chain acceptance, look for solutions that
                      support TRON, EVM chains, and emerging L1s like SUI from a single deployment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-cyan font-mono mt-0.5">2</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">Deployment Model</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Check whether the gateway is distributed as a Docker image, a binary, or source code.
                      Docker-based gateways are the easiest to deploy and update. Verify the minimum
                      system requirements — most gateways run comfortably on a 1 GB RAM / 20 GB storage
                      VPS. Also consider whether the software uses a reverse proxy for TLS.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-purple font-mono mt-0.5">3</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">API &amp; Integration Quality</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Evaluate the API design, SDK availability, and webhook reliability. Look for
                      HMAC-signed webhooks, idempotency keys, and clear documentation. A good gateway
                      provides REST endpoints for payment creation, address generation, and transaction
                      querying, with well-defined request/response schemas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono mt-0.5">4</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">Security &amp; Key Management</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Understand how the gateway handles private keys. Does it use BIP-39 HD wallet
                      derivation? Can you import an existing seed phrase? Are API keys scoped with
                      granular permissions? Does it support hardware wallet integration for cold
                      storage? These details determine the overall security posture of your payment
                      infrastructure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-cyan font-mono mt-0.5">5</div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">Community &amp; Support</h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Open-source gateways thrive on community contributions. Check the GitHub repository
                      for recent activity, issue response times, and documentation quality. Active
                      development and a responsive maintainer are strong signals of a gateway you can
                      rely on for the long term.
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
                Common questions about self-hosted crypto payment gateways and how they compare to
                traditional hosted solutions.
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
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  Ready to Deploy Your Self-Hosted Gateway?
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  XPay Labs is a modern, open-source self-hosted crypto payment gateway. Deploy on your
                  own infrastructure with Docker in under 30 minutes. Zero transaction fees, non-custodial
                  security, and multi-chain support for TRON, EVM, and SUI.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/docs"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>Deploy Your Gateway</span>
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
