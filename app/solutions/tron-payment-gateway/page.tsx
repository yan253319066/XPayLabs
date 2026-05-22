import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import { Terminal, Shield, CheckCircle2, Zap, Lock, Server, Code2, DollarSign, Clock, Globe, Cpu, Activity, ArrowRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';
import CopyButton from './CopyButton';
import { translations } from '../../../lib/translations';

export const metadata: Metadata = {
  title: 'TRON TRC20 Payment Gateway — Self-Hosted USDT Payment Infrastructure | XPay Labs',
  description: 'Self-hosted TRON payment gateway for accepting USDT TRC20 payments. Non-custodial, sub-second transaction detection, white-label checkout. Deploy with Docker.',
  keywords: 'TRON payment gateway, TRC20 payment gateway, accept USDT TRC20, TRON crypto payments, TRC20 USDT payment processor, self-hosted TRON gateway, TRON payment API, TRON blockchain payments, USDT TRC20 checkout, TRON merchant gateway',
  alternates: {
    canonical: 'https://www.xpaylabs.com/solutions/tron-payment-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/solutions/tron-payment-gateway',
      'en-US': 'https://www.xpaylabs.com/solutions/tron-payment-gateway',
    },
  },
  openGraph: {
    title: 'TRON TRC20 Payment Gateway — Self-Hosted USDT Payment Infrastructure | XPay Labs',
    description: 'Self-hosted TRON payment gateway for accepting USDT TRC20 payments. Non-custodial, sub-second transaction detection, white-label checkout.',
    url: 'https://www.xpaylabs.com/solutions/tron-payment-gateway',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRON TRC20 Payment Gateway — Self-Hosted USDT Payment Infrastructure | XPay Labs',
    description: 'Self-hosted TRON payment gateway for accepting USDT TRC20 payments. Non-custodial, sub-second transaction detection, white-label checkout.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a TRON payment gateway and how does it work with TRC20 USDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A TRON payment gateway enables merchants to accept TRC20 tokens (primarily USDT) directly on the TRON blockchain. XPay Labs runs a self-hosted scanner that monitors the TRON blockchain via Trongrid and TRON RPC for incoming transactions to merchant-specific derived addresses. When a payment is detected — typically within 2–6 seconds of mempool broadcast — a webhook notifies your server with the transaction ID, amount, and confirmation status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a TRC20 payment gateway non-custodial?',
      acceptedAnswer: {
        '@type': 'Answer',
        'text': 'Yes. XPay Labs is fully non-custodial. Private keys are generated deterministically from your seed phrase and stored locally. Funds go directly to your wallets — never through an intermediary. The gateway only monitors addresses and triggers webhooks; it never holds, moves, or has access to your funds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fees does XPay Labs charge for TRON payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        'text': 'Zero gateway fees. XPay Labs is source-available software you deploy yourself. The only costs are your server (a $10–$20 VPS or dedicated machine) and TRON network transaction fees (~0.1–1 TRX per USDT transfer for energy/bandwidth). There are no per-transaction fees, monthly minimums, or revenue-share arrangements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the TRON wallet derivation work for merchant payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        'text': 'XPay Labs uses BIP44/TRIP44 hierarchical deterministic (HD) wallet derivation. For each invoice it derives a unique TRON address from your master seed. This means every customer gets a fresh deposit address with no collision risk and zero address reuse. The derivation is fully offline-capable and follows the m/44\' /195\' /0\' /0/{index} path standard used by TRON wallets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I accept custom TRC20 tokens beyond USDT?',
      acceptedAnswer: {
        '@type': 'Answer',
        'text': 'Yes. XPay Labs supports any TRC20 token. The gateway uses the TRC20 ABI contract interface to read balanceOf() for arbitrary token contracts. You can configure accepted tokens in the YAML config by specifying the contract address, decimals, and minimum confirmation threshold. This includes USDC, USDD, TUSD, BTT, and any community TRC20 token.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.xpaylabs.com/solutions/tron-payment-gateway' },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Set Up a Self-Hosted TRON TRC20 Payment Gateway',
  description: 'Deploy XPay Labs to start accepting USDT TRC20 payments in under 10 minutes.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Deploy the Docker container',
      text: 'Run docker compose up with the XPay Labs image, setting your seed phrase, TRON RPC endpoint, and webhook URL in environment variables.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Configure TRON chain settings',
      text: 'Set your TRON network parameters in config.yaml — TRC20 token contracts, confirmation blocks (typically 19 for USDT TRC20), and TronGrid API key.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Generate API credentials',
      text: 'Create a merchant API key via the admin panel or CLI. This key authenticates payment creation requests from your backend.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Create a payment request',
      text: 'Call POST /v1/payments with the amount, currency (USDT), chain (TRON), order ID, and callback URL. The gateway derives a unique deposit address and returns it.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Handle webhook notifications',
      text: 'Implement a webhook endpoint on your server to receive payment confirmations. XPay Labs sends verified transaction data including txID, block number, and token amount.',
    },
  ],
};

const featureTable = [
  { feature: 'Network', detail: 'TRON Mainnet / Shasta Testnet' },
  { feature: 'Token Standard', detail: 'TRC20 (USDT, USDC, USDD, TUSD, custom)' },
  { feature: 'Detection Latency', detail: '2–6 seconds (mempool), ~19 blocks finality (TRC20)' },
  { feature: 'Wallet Derivation', detail: 'BIP44/TRIP44 HD deterministic (m/44\'/195\'/...)' },
  { feature: 'RPC Endpoints', detail: 'TronGrid, full node RPC, Solidity node RPC' },
  { feature: 'Confirmation Strategy', detail: 'Configurable block confirmations per token' },
  { feature: 'Fee Model', detail: 'Zero platform fee, only TRX gas (~0.1–1 TRX/tx)' },
  { feature: 'Address Format', detail: 'Base58 (T-addresses) via base58check encoding' },
  { feature: 'ABI Integration', detail: 'TRC20 balanceOf(), decimals(), symbol() calls' },
];

const useCases = [
  {
    title: 'E-Commerce USDT Checkout',
    description: 'Replace Stripe/PayPal with TRC20 USDT at checkout. Customers scan a T-address or QR code, send USDT, and the gateway confirms within seconds. No chargebacks.',
    advantage: 'Irreversible settlements, no payment processor holds, global customer reach.',
  },
  {
    title: 'Subscription Billing',
    description: 'Automate recurring USDT TRC20 billing via webhook-triggered invoice generation. The gateway detects each recurring payment and pings your billing system.',
    advantage: 'No recurring card fees, no expiry concerns, automatic stable-value billing.',
  },
  {
    title: 'Donation & Crowdfunding',
    description: 'Accept tax-deductible TRC20 donations with per-campaign derived addresses. Real-time mempool tracking gives instant donor confirmation.',
    advantage: 'Zero platform fees on donations, full transparency via block explorer.',
  },
  {
    title: 'White-Label Payment Page',
    description: 'Embed or redirect to a fully customizable checkout page. No XPay Labs branding shown — your customers see only your brand, domain, and TRON address.',
    advantage: 'Full brand ownership, no third-party trust signals needed.',
  },
];

const curlCode = `curl -X POST "https://gateway.yourdomain.com/v1/payments" \
  -H "Authorization: Bearer xpay_live_8f3a9d7219bc" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "100.00",
    "currency": "USDT",
    "chain": "TRON",
    "order_id": "order_783120",
    "callback_url": "https://api.merchant.com/v1/webhooks/xpay"
  }'`;

export default function TronPaymentGatewayPage() {

  return (
    <NextIntlClientProvider locale="en" messages={translations.en}>
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="relative gradient-bg pt-24 pb-20">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-brand-purple opacity-10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-brand-cyan opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest font-mono">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  TRON PAYMENT INFRASTRUCTURE
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight italic">
                  TRON TRC20 Payment Gateway<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple not-italic">
                    Self-Hosted USDT Payment Infrastructure
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed max-w-2xl mx-auto">
                  Deploy a non-custodial TRON payment gateway that detects TRC20 transactions from the mempool in under 6 seconds.
                  Accept USDT TRC20 with zero gateway fees, full white-label branding, and complete control over your private keys.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/docs"
                    className="px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_25px_rgba(91,140,255,0.3)]"
                  >
                    View Documentation
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-3 border border-white/10 text-gray-300 rounded-full text-sm font-bold hover:border-brand-blue/30 hover:text-white transition-all"
                  >
                    Explore XPay Labs
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Intro: Why TRON */}
          <section className="py-20 relative">
            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-brand-blue opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                    <Zap className="w-3 h-3" />
                    WHY TRON
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">The Case for TRON in Production Payments</h2>
                </div>
                <div className="space-y-6 text-slate-400 font-sans leading-relaxed text-sm sm:text-base">
                  <p>
                    TRON processes over 10 million daily transactions and hosts the largest circulating supply of USDT — 
                    over $50 billion in TRC20 USDT alone. For merchants accepting crypto payments, this means deep 
                    liquidity, <strong className="text-white">sub-cent transaction fees</strong>, and finality within 15–30 seconds (19 blocks at ~3s/block). 
                    Compared to Ethereum mainnet, a USDT transfer on TRON costs roughly 0.2–1 TRX ($0.02–$0.10) versus 
                    $1–$10 on ETH. For high-volume merchants processing thousands of transactions, this difference is transformative.
                  </p>
                  <p>
                    TRC20 is the dominant standard for stablecoin payments on TRON. Unlike ERC-20, TRC20 transactions 
                    are settled in <strong className="text-white">seconds rather than minutes</strong> due to TRON's 3-second block time and 
                    500+ msgs/s throughput. The TRON Virtual Machine (TVM) is EVM-compatible, meaning the TRC20 ABI 
                    mirrors ERC-20 — balanceOf(address), transfer(address,uint256), and approve(address,uint256) 
                    all behave identically. This makes integration straightforward for teams already familiar with 
                    Solidity and EVM tooling.
                  </p>
                  <p>
                    However, TRON has trade-offs. Its delegated proof-of-stake (DPoS) consensus with 27 super 
                    representatives means the network is less decentralized than Ethereum or Bitcoin. Bandwidth and 
                    energy must be managed — every TRC20 transfer consumes ~65,000 energy units, which can be 
                    staked or burned as TRX. XPay Labs handles this automatically through configurable energy 
                    delegation, but it is a consideration unique to the TRON ecosystem that merchants should 
                    understand before deploying at scale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How XPay Labs TRON Integration Works */}
          <section className="py-20 bg-[#060816]/60 relative overflow-hidden">
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-purple opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-widest font-mono">
                    <Cpu className="w-3 h-3" />
                    ARCHITECTURE
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">How the TRON Integration Works</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-cyan/20 transition-all glow-cyan">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 font-display">1. Mempool Scanner</h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">
                      The scanner connects to TRON full nodes via TronGrid and gRPC to monitor the transaction stream.
                      It filters for TRC20 Transfer events where the <code className="text-brand-cyan text-xs">to</code> address matches a 
                      derived merchant wallet. Detection happens at the mempool level, before the transaction is 
                      included in a block.
                    </p>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-blue/20 transition-all glow-blue">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 font-display">2. HD Wallet Derivation</h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">
                      For each invoice, XPay Labs derives a unique TRON address using BIP44 with TRON's coin type 
                      195. The derivation path <code className="text-brand-blue text-xs">m/44&apos;/195&apos;/0&apos;/0/{'{index}'}</code> 
                      produces deterministic addresses from your seed. No address is ever reused, and the seed 
                      never leaves your server.
                    </p>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-purple/20 transition-all glow-purple">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4">
                      <Terminal className="w-6 h-6 text-brand-purple" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 font-display">3. Webhook Dispatcher</h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">
                      Once the transaction reaches the configured confirmation threshold (default 19 blocks for 
                      TRC20 USDT), the gateway constructs a verified payload — txID, block number, from/to 
                      addresses, token amount, and confirmations — and dispatches it to your 
                      <code className="text-brand-purple text-xs"> callback_url</code> via POST with HMAC-SHA256 signing.
                    </p>
                  </div>
                </div>
                <div className="mt-8 glass-panel rounded-2xl p-6 border border-white/5">
                  <p className="text-slate-400 text-sm font-sans leading-relaxed">
                    <strong className="text-white">End-to-end flow:</strong> Customer selects USDT TRC20 → Your backend calls 
                    <code className="text-brand-cyan text-xs"> POST /v1/payments</code> with chain=TRON → Gateway derives a unique 
                    T-address → Display address/QR code → Customer sends USDT → Mempool scanner detects tx in 
                    ~2–6s → Waits 19 blocks (~57s) → Webhook fires → Your server fulfills the order. 
                    Total time from send to confirmed notification: under 90 seconds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Table */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest font-mono">
                    <Server className="w-3 h-3" />
                    TECHNICAL SPECS
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">TRON Support Details</h2>
                </div>
                <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden glow-blue">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-sans">
                      <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                          <th className="text-left py-4 px-6 text-white font-bold text-xs uppercase tracking-widest">Feature</th>
                          <th className="text-left py-4 px-6 text-white font-bold text-xs uppercase tracking-widest">Detail</th>
                        </tr>
                      </thead>
                      <tbody>
                        {featureTable.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                            <td className="py-4 px-6 text-gray-300 font-medium">{row.feature}</td>
                            <td className="py-4 px-6 text-slate-400">{row.detail}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Example */}
          <section className="py-20 bg-[#060816]/60 relative">
            <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-blue opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                    <Code2 className="w-3 h-3" />
                    API
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">Create a TRON Payment</h2>
                </div>
                <div className="bg-gradient-to-b from-brand-blue/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-1">
                  <div className="rounded-[22px] border border-white/10 bg-[#0A0D1F] overflow-hidden shadow-2xl">
                    <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">curl</span>
                      </div>
                      <CopyButton code={curlCode} />
                    </div>
                    <div className="p-5 sm:p-7 overflow-auto custom-scrollbar select-all bg-[#060816]">
                      <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
                        <span className="text-brand-purple">curl</span> <span className="text-brand-blue">-X</span> <span className="text-brand-cyan">POST</span> <span className="text-teal-400">{'"https://gateway.yourdomain.com/v1/payments"'}</span> \<br />
                        &nbsp;&nbsp;<span className="text-brand-blue">-H</span> <span className="text-teal-400">{'"Authorization: Bearer xpay_live_8f3a9d7219bc"'}</span> \<br />
                        &nbsp;&nbsp;<span className="text-brand-blue">-H</span> <span className="text-teal-400">{'"Content-Type: application/json"'}</span> \<br />
                        &nbsp;&nbsp;<span className="text-brand-blue">-d</span> <span className="text-gray-400">{"'{"}</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{'"amount"'}</span>: <span className="text-teal-300">{'"100.00"'}</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{'"currency"'}</span>: <span className="text-teal-300">{'"USDT"'}</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{'"chain"'}</span>: <span className="text-teal-300">{'"TRON"'}</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{'"order_id"'}</span>: <span className="text-teal-300">{'"order_783120"'}</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{'"callback_url"'}</span>: <span className="text-teal-300">{'"https://api.merchant.com/v1/webhooks/xpay"'}</span><br />
                        &nbsp;&nbsp;<span className="text-gray-400">{"}'"}</span>
                      </code>
                    </div>
                    <div className="bg-[#050716] px-5 py-2.5 border-t border-white/5 flex items-center justify-between text-[10px] uppercase font-mono text-slate-500">
                      <span className="flex items-center space-x-1.5 font-bold">
                        <Lock className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>SSL SECURED HMAC-SHA256 SIGNED</span>
                      </span>
                      <span className="hidden sm:inline font-bold">TRON TRC20 ENDPOINT</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 glass-panel rounded-2xl p-5 border border-white/5">
                  <p className="text-slate-400 text-xs sm:text-sm font-sans">
                    <strong className="text-white">Response:</strong> The gateway returns a deposit address and invoice ID. 
                    The address is a unique Base58 TRON address derived from your seed — something like 
                    <code className="text-brand-cyan text-xs"> TYpSq7f8MubE8bK6vG7m8F7WbA9c3DxE1F</code>. 
                    Share this with the customer as a QR code or raw address.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Docker Deployment Config */}
          <section className="py-20 relative">
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-cyan opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest font-mono">
                    <Terminal className="w-3 h-3" />
                    DEPLOYMENT
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">Docker Deployment Configuration</h2>
                </div>
                <div className="bg-gradient-to-b from-brand-cyan/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-1">
                  <div className="rounded-[22px] border border-white/10 bg-[#0A0D1F] overflow-hidden shadow-2xl">
                    <div className="bg-white/5 px-4 py-3 border-b border-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">docker-compose.yml</span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-7 overflow-auto custom-scrollbar select-all bg-[#060816]">
                      <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
                        <span className="text-brand-purple">version</span>: <span className="text-teal-300">"3.9"</span><br />
                        <br />
                        <span className="text-brand-purple">services</span>:<br />
                        &nbsp;&nbsp;<span className="text-brand-cyan">xpay-gateway</span>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-purple">image</span>: <span className="text-teal-300">ghcr.io/xpay-labs/gateway:latest</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-purple">restart</span>: <span className="text-teal-300">unless-stopped</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-purple">ports</span>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-teal-300">"8080:8080"</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-purple">environment</span>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">XPAY_SEED_PHRASE</span>: <span className="text-teal-300">${"{XPAY_SEED_PHRASE}"}</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">XPAY_TRON_RPC</span>: <span className="text-teal-300">https://api.trongrid.io</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">XPAY_TRON_API_KEY</span>: <span className="text-teal-300">${"{TRONGRID_API_KEY}"}</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">XPAY_CONFIRMATIONS</span>: <span className="text-purple-400">19</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">XPAY_WEBHOOK_URL</span>: <span className="text-teal-300">https://api.merchant.com/v1/webhooks/xpay</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">XPAY_TRON_NETWORK</span>: <span className="text-teal-300">mainnet</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-purple">volumes</span>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-teal-300">./config.yaml:/app/config.yaml</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-purple">logging</span>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-purple">driver</span>: <span className="text-teal-300">"json-file"</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-purple">options</span>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">max-size</span>: <span className="text-teal-300">"10m"</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">max-file</span>: <span className="text-teal-300">"3"</span>
                      </code>
                    </div>
                    <div className="bg-[#050716] px-5 py-2.5 border-t border-white/5 flex items-center justify-between text-[10px] uppercase font-mono text-slate-500">
                      <span className="flex items-center space-x-1.5 font-bold">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        <span>PERSISTENT VOLUME BOUND</span>
                      </span>
                      <span className="hidden sm:inline font-bold">DOCKER COMPOSE V3</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 glass-panel rounded-2xl p-5 border border-white/5">
                  <p className="text-slate-400 text-xs sm:text-sm font-sans">
                    <strong className="text-white">Environment breakdown:</strong> <code className="text-brand-cyan text-xs">XPAY_SEED_PHRASE</code> is your 12–24 word mnemonic 
                    (store it offline — never in version control). <code className="text-brand-cyan text-xs">XPAY_TRON_RPC</code> defaults to TronGrid but can point to your own full node. 
                    <code className="text-brand-cyan text-xs"> XPAY_CONFIRMATIONS</code> defaults to 19 blocks (~57s) for finality — you can lower this to 1 for mempool-only 
                    detection (<strong className="text-white">risk: orphan risk</strong>) or raise it for higher assurance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-[#060816]/60 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    BENEFITS
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">Why Choose a Self-Hosted TRON Gateway</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-emerald-400/20 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center shrink-0">
                        <DollarSign className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 font-display">Zero Gateway Fees</h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed">
                          Traditional processors charge 1–3% + $0.30 per transaction. XPay Labs charges nothing. 
                          You pay only TRON network fees (~$0.02–$0.10 per USDT transfer). At 1,000 transactions/month 
                          of $50 average, that saves you $1,500+/month compared to Stripe or PayPal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-cyan/20 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                        <Lock className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 font-display">Non-Custodial by Default</h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed">
                          Private keys never leave your infrastructure. The gateway only reads balanceOf() and 
                          Transfer events on-chain. There are no withdrawal limits, no KYC checks, and no 
                          counterparty risk. If your server goes offline, funds remain in your wallets — 
                          accessible via any TRON wallet that supports BIP44.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-purple/20 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center shrink-0">
                        <Globe className="w-5 h-5 text-brand-purple" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 font-display">White-Label Checkout</h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed">
                          The entire payment page is customizable via CSS and HTML templates. No XPay Labs or 
                          third-party branding appears anywhere in the flow. Your customers see your domain, 
                          your brand, and a TRON address — nothing else. This builds trust and keeps users 
                          on your site.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-blue/20 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 font-display">Sub-Second Mempool Detection</h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed">
                          The TRON scanner watches the P2P transaction stream via gRPC notifications. When a 
                          TRC20 Transfer event hits the network, XPay Labs sees it in the mempool within 
                          2–6 seconds — before the first block confirmation. This enables instant user feedback 
                          and reduces checkout friction to near-zero.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-widest font-mono">
                    <Globe className="w-3 h-3" />
                    USE CASES
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">TRON Payment Gateway Use Cases</h2>
                </div>
                <div className="space-y-6">
                  {useCases.map((uc, i) => (
                    <div key={i} className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-white text-lg font-bold font-display">{uc.title}</h3>
                          <p className="text-slate-400 text-sm font-sans leading-relaxed max-w-2xl">{uc.description}</p>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <span className="inline-block px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider font-mono">
                            Advantage
                          </span>
                          <p className="text-slate-400 text-xs mt-1 max-w-xs sm:text-right">{uc.advantage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-transparent to-brand-purple/5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                  <ArrowRight className="w-3 h-3" />
                  GET STARTED
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                  Deploy Your TRON Payment Gateway in Minutes
                </h2>
                <p className="text-slate-400 text-base font-sans leading-relaxed max-w-2xl mx-auto">
                  Self-hosted, non-custodial, zero-fee TRC20 payment infrastructure. Download the Docker image, 
                  configure your TRON RPC endpoint, and start accepting USDT TRC20 payments within the hour.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/docs"
                    className="px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(91,140,255,0.3)]"
                  >
                    Read the Docs
                  </Link>
                  <Link
                    href="/"
                    className="px-8 py-3.5 border border-white/10 text-gray-300 rounded-full text-sm font-bold hover:border-brand-blue/30 hover:text-white transition-all"
                  >
                    About XPay Labs
                  </Link>
                  <Link
                    href="/alternatives/bitpay"
                    className="px-8 py-3.5 border border-white/5 text-slate-500 rounded-full text-sm font-bold hover:text-slate-300 transition-all"
                  >
                    vs BitPay
                  </Link>
                </div>
                <p className="text-slate-500 text-xs font-sans mt-4">
                  Self-hosted · No registration required · No API keys to request · Deploy anywhere
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
