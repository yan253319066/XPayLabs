import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, DollarSign, Shield, Key, Server, HardDrive, Terminal, Copy, Check, ArrowRight, ExternalLink, Zap, Cpu, Coins, BookOpen, ArrowUpRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'How to Accept Crypto Payments: Self-Hosted Infrastructure Guide | XPay Labs',
  description: 'Learn how to accept crypto payments with a self-hosted gateway. Step-by-step guide covering Docker deployment, API integration, webhooks, and multi-chain support for USDT, USDC, and more.',
  keywords: ['how to accept crypto payments', 'accept USDT payments', 'accept cryptocurrency payments', 'crypto payment gateway setup', 'self-hosted crypto payments', 'accept cryptocurrency payments online', 'crypto payment API', 'USDT payment gateway', 'USDC payment gateway', 'self-hosted payment gateway', 'crypto merchant account', 'crypto payment processor'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/guides/how-to-accept-crypto-payments',
    languages: {
      'x-default': 'https://www.xpaylabs.com/guides/how-to-accept-crypto-payments',
      'en-US': 'https://www.xpaylabs.com/guides/how-to-accept-crypto-payments',
      'zh-CN': 'https://www.xpaylabs.com/zh/guides/how-to-accept-crypto-payments',
    },
  },
  openGraph: {
    title: 'How to Accept Crypto Payments: A Developer\'s Guide to Self-Hosted Infrastructure | XPay Labs',
    description: 'Step-by-step guide to accepting crypto payments with a self-hosted, non-custodial gateway. Deploy with Docker, integrate via API, and support TRON, EVM, and SUI chains.',
    url: 'https://www.xpaylabs.com/guides/how-to-accept-crypto-payments',
    type: 'article',
  },
  twitter: {
    title: 'How to Accept Crypto Payments: A Developer\'s Guide to Self-Hosted Infrastructure | XPay Labs',
    description: 'Step-by-step guide to accepting crypto payments with a self-hosted, non-custodial gateway. Deploy with Docker, integrate via API, and support TRON, EVM, and SUI chains.',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Accept Crypto Payments: A Developer\'s Guide to Self-Hosted Infrastructure',
  description: 'A comprehensive guide to accepting cryptocurrency payments using a self-hosted, non-custodial gateway. Covers Docker deployment, API integration, webhook handling, and multi-chain support.',
  author: {
    '@type': 'Organization',
    name: 'XPay Labs',
  },
  datePublished: '2026-05-22',
  dateModified: '2026-05-22',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Accept Crypto Payments with a Self-Hosted Gateway',
  description: 'Step-by-step guide to deploying and integrating a self-hosted crypto payment gateway to accept USDT, USDC, and other cryptocurrencies.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Deploy the Core Node',
      text: 'Run Docker Compose with the XPay Labs gateway image, mounting a config volume and exposing port 8080.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Configure Environment Variables',
      text: 'Set your node seed phrase, HMAC secret, RPC provider URLs, and webhook callback URL via environment variables.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Generate API Keys',
      text: 'Use the admin CLI or REST endpoint to generate a merchant API key for authenticating payment requests.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Create Your First Payment',
      text: 'Call POST /v1/payments with amount, currency, chain, order ID, and callback URL to generate a unique deposit address.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Handle Webhook Callbacks',
      text: 'Implement an HMAC-signed webhook endpoint to receive payment confirmation notifications with transaction details.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.xpaylabs.com/guides/how-to-accept-crypto-payments' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I accept crypto payments on my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To accept crypto payments, you need a payment gateway that generates blockchain deposit addresses for each transaction and detects incoming payments. With XPay Labs, you deploy a self-hosted Docker container, configure your supported chains, and integrate via REST API to create invoices and handle webhook callbacks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest way to accept crypto payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest way is a self-hosted, non-custodial gateway like XPay Labs. There are zero transaction fees and no monthly subscription costs — you only pay for server hosting (as low as $10/month) and blockchain network gas fees (fractions of a cent on TRON or L2 chains).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I accept USDT payments without KYC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Self-hosted gateways like XPay Labs require no KYC because you control the private keys and infrastructure. Funds settle directly to your wallet without passing through a third party. This is a key advantage over custodial processors like BitPay or Coinbase Commerce.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to set up a crypto payment gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a Docker-based deployment, you can have a fully functional crypto payment gateway running in under 30 minutes. The process involves deploying the container, configuring environment variables, generating API keys, and integrating the payment endpoint into your checkout flow.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cryptocurrencies can I accept with a self-hosted gateway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs supports TRON (TRC-20 USDT, USDC, USDD), EVM-compatible chains (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Base) for ERC-20 tokens, and SUI. This covers the vast majority of stablecoin and altcoin payment volume across the crypto ecosystem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a self-hosted crypto payment gateway secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Self-hosted gateways are more secure than custodial alternatives because private keys never leave your infrastructure. XPay Labs uses BIP-39 seed phrases for deterministic wallet derivation, HMAC-SHA256 signed webhooks for server-to-server communication, and runs entirely within your own Docker environment with no third-party access to funds.',
      },
    },
  ],
};

const steps = [
  {
    num: '1',
    title: 'Deploy with Docker Compose',
    content: 'The fastest way to start accepting crypto payments is with Docker Compose. Clone the official deployment repository and configure your environment:',
    code: `git clone https://github.com/yan253319066/XPayLabs-docker.git
cd XPayLabs-docker
cp .env.example .env`,
    after: 'Run `docker compose up -d` to start all services. Configure your blockchain RPC endpoints (TRON, EVM, SUI), wallet seed phrase, and merchant settings in the `.env` file. The gateway exposes a REST API on port 180 and begins scanning configured chains for incoming transactions.',
  },
  {
    num: '2',
    title: 'Configure Environment Variables',
    content: 'Configure your blockchain RPC endpoints (TRON, EVM, SUI) and webhook callback URL via environment variables in the `.env` file:',
    after: '',
  },
  {
    num: '3',
    title: 'Generate API Keys',
    content: 'Create your merchant account in the gateway dashboard to get your API key (merchant token) and webhook secret. These are used to authenticate payment requests and verify webhook signatures.',
    after: '',
  },
  {
    num: '4',
    title: 'Create Your First Collection',
    content: 'Now you can create a collection order. Your backend calls this endpoint when a customer reaches checkout:',
    code: `curl -X POST "http://localhost:180/v1/order/createCollection" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sign": "a1b2c3d4e5f6...",
    "timestamp": 1717000000,
    "nonce": "unique_nonce_123",
    "data": {
      "amount": "100.00",
      "symbol": "USDT",
      "chain": "TRON",
      "orderId": "order_12345"
    }
  }'`,
    after: 'Replace TOKEN with your merchant token. See the [authentication guide](https://docs.xpaylabs.com/authentication) for HMAC-SHA256 signing details.',
  },
  {
    num: '5',
    title: 'Handle Webhook Callbacks',
    content: 'XPay Labs sends payment confirmation webhooks to your callback URL via POST with an HMAC-SHA256 signature. Here is how to verify and process the payload in Node.js:',
    code: `import crypto from 'crypto';

// Your webhook secret from the merchant dashboard
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('x-signature');

  // Verify HMAC-SHA256 signature
  const expected = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(body, 'utf8')
    .digest('hex');

  if (signature !== expected) {
    return Response.json({ error: 'invalid signature' }, { status: 401 });
  }

  const payload = JSON.parse(body);

  // payload structure:
  // {
  //   "event": "payment.confirmed",
  //   "payment": {
  //     "id": "pay_9f3b8c2a1d",
  //     "order_id": "order_783120",
  //     "amount": "100.00",
  //     "currency": "USDT",
  //     "chain": "TRON",
  //     "tx_id": "b4f7c3a12d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
  //     "from_address": "TXYZ...",
  //     "to_address": "TABC...",
  //     "confirmations": 32,
  //     "status": "confirmed",
  //     "timestamp": 1715875200
  //   }
  // }

  if (payload.event === 'payment.confirmed') {
    // Fulfill the order
    await fulfillOrder(payload.payment.order_id, payload.payment);
    return Response.json({ received: true });
  }

  return Response.json({ received: true });
}`,
    after: 'Webhooks are sent with exponential backoff retry (3 attempts: 10s, 60s, 300s) until your server returns a 200 OK. Implement idempotency checks using the payment.id to prevent double-fulfillment in case of duplicate webhook deliveries.',
  },
];

export default function HowToAcceptCryptoPaymentsPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">

            {/* Hero */}
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Developer Guide</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                How to Accept Crypto Payments: A Developer&apos;s Guide to Self-Hosted Infrastructure
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                A complete, step-by-step walkthrough for accepting cryptocurrency payments using a self-hosted,
                non-custodial gateway. From Docker deployment to webhook integration — everything you need to
                start accepting USDT, USDC, and other crypto assets with zero transaction fees and full control
                over your private keys.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>View Full Docs</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>About XPay Labs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* Why Accept Crypto Payments */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Why Accept Crypto Payments?
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Cryptocurrency payments have evolved from a niche experiment to a mainstream payment rail
                processing billions of dollars daily. For merchants, accepting crypto is no longer about
                speculation — it is about accessing a faster, cheaper, and more inclusive financial system.
                Here is why businesses are adding crypto checkout to their payment stack:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-3">
                    <Globe className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="text-base font-display font-medium text-white mb-2">Global Reach</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Crypto payments work across borders with no currency conversion, no cross-border fees,
                    and no bank account requirements. Anyone with a wallet can pay you, regardless of their
                    country, banking status, or credit score. This opens your business to the 1.4 billion
                    unbanked adults worldwide and the rapidly growing crypto-native consumer base.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-cyan">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="text-base font-display font-medium text-white mb-2">Low Fees</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Traditional payment processors charge 1.5–3.5% plus a per-transaction fee. A self-hosted
                    crypto gateway charges 0% transaction fees — you only pay network gas fees. On TRON,
                    a USDT transfer costs ~$0.02–$0.10. On an L2 like Arbitrum, it is often under $0.01.
                    For a business processing $100k/month, the savings exceed $20k/year.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-purple">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-brand-purple" />
                  </div>
                  <h3 className="text-base font-display font-medium text-white mb-2">No Chargebacks</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Blockchain transactions are irreversible. Once a payment is confirmed on-chain, it cannot
                    be reversed or charged back. This eliminates the #1 cost for online merchants: payment
                    fraud and dispute fees. For digital goods merchants where chargeback rates can exceed 5%,
                    switching to crypto can dramatically improve bottom-line margins.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-3">
                    <Key className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="text-base font-display font-medium text-white mb-2">Financial Privacy</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    With a self-hosted, non-custodial gateway, you retain complete control over your funds and
                    financial data. No KYC requirements, no payment processor account freezes, and no third
                    party with the power to restrict your access. Your customers&apos; payment data stays between
                    them and the blockchain — no payment processor databses to leak or monetize.
                  </p>
                </div>
              </div>
            </section>

            {/* Self-Hosted vs Third-Party Gateways */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Self-Hosted vs Third-Party Gateways
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Before diving into setup, it is important to understand the tradeoffs between self-hosted
                and hosted (third-party) crypto payment gateways. Each model serves different needs:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Aspect</th>
                      <th className="p-4 text-orange-400 font-medium">Third-Party (Hosted)</th>
                      <th className="p-4 text-brand-cyan font-medium">Self-Hosted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Setup Time</td>
                      <td className="p-4 text-gray-400">Minutes (SaaS signup)</td>
                      <td className="p-4 text-gray-300">30 minutes (Docker deploy)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Transaction Fees</td>
                      <td className="p-4 text-gray-400">1 – 3% per transaction</td>
                      <td className="p-4 text-green-400">0% (gas only)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Monthly Cost</td>
                      <td className="p-4 text-gray-400">Volume-tiered (e.g. BitPay 2%+$0.25 entry)</td>
                      <td className="p-4 text-green-400">$10 – $20 (VPS hosting)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Key Custody</td>
                      <td className="p-4 text-gray-400">Custodial (processor holds keys)</td>
                      <td className="p-4 text-green-400">Non-custodial (you hold keys)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Settlement</td>
                      <td className="p-4 text-gray-400">Delayed (daily/weekly batches)</td>
                      <td className="p-4 text-green-400">Instant (direct to wallet)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">KYC Required</td>
                      <td className="p-4 text-gray-400">Yes (business verification)</td>
                      <td className="p-4 text-green-400">No (self-sovereign)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Account Freeze Risk</td>
                      <td className="p-4 text-gray-400">Yes (processor decides)</td>
                      <td className="p-4 text-green-400">None (you control access)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">White-Label Checkout</td>
                      <td className="p-4 text-gray-400">Processor branding required</td>
                      <td className="p-4 text-green-400">Full white-label (your brand)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Source Access</td>
                      <td className="p-4 text-gray-400">Closed-source</td>
                      <td className="p-4 text-green-400">Fully auditable</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Maintenance</td>
                      <td className="p-4 text-gray-400">None (managed service)</td>
                      <td className="p-4 text-gray-300">You manage updates/monitoring</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-sans leading-relaxed">
                Self-hosted gateways like XPay Labs are ideal for developers and businesses that want
                maximum control, minimal fees, and sovereign infrastructure. Third-party gateways make
                sense for non-technical users who prefer a fully managed solution and are willing to
                pay for convenience.
              </p>
            </section>

            {/* Prerequisites */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Prerequisites
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Before you begin, ensure you have the following:
              </p>
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <ul className="space-y-4 text-sm text-gray-400 font-sans">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">1</div>
                    <div>
                      <strong className="text-white">A VPS or cloud server</strong> — Linux machine with at least 1 GB RAM, 20 GB storage, and a public IP. Providers like Hetzner ($5/month), DigitalOcean ($12/month), or AWS EC2 work well.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">2</div>
                    <div>
                      <strong className="text-white">Docker &amp; Docker Compose</strong> — installed on your server. Most VPS images come with Docker pre-installed, or you can use the official install script.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">3</div>
                    <div>
                      <strong className="text-white">A domain name</strong> — pointed to your server IP for the gateway API and checkout page with SSL via Let&apos;s Encrypt or a reverse proxy like Caddy/Nginx.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">4</div>
                    <div>
                      <strong className="text-white">RPC API keys</strong> — for the blockchains you want to support. TronGrid for TRON, Alchemy or Infura for EVM chains, and a SUI RPC provider. Most have free tiers.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">5</div>
                    <div>
                      <strong className="text-white">Basic DevOps knowledge</strong> — familiarity with the command line, environment variables, and the ability to configure a reverse proxy for TLS termination.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Step 1: Deploy the Core Node */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Step 1: Deploy the Core Node
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[0].content}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{steps[0].code}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                {steps[0].after}
              </p>
            </section>

            {/* Step 2: Configure Environment */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Step 2: Configure Environment
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[1].content}
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5 mb-4">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Variable</th>
                      <th className="p-4 text-gray-400 font-medium">Required</th>
                      <th className="p-4 text-gray-400 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">XPAY_SEED_PHRASE</td>
                      <td className="p-4 text-red-400 text-xs font-mono">Yes</td>
                      <td className="p-4 text-gray-400 text-xs font-sans">BIP-39 mnemonic seed (12–24 words) for HD wallet derivation. Generate offline with &apos;openssl rand -hex 16 | xargs -I{} echo {}&apos; or use a hardware wallet.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">XPAY_HMAC_SECRET</td>
                      <td className="p-4 text-red-400 text-xs font-mono">Yes</td>
                      <td className="p-4 text-gray-400 text-xs font-sans">HMAC key for signing webhook payloads. Use a 64-character hex string. Verify webhooks on your server using this secret.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">XPAY_TRON_RPC</td>
                      <td className="p-4 text-gray-500 text-xs font-mono">Optional</td>
                      <td className="p-4 text-gray-400 text-xs font-sans">TRON full node URL. Defaults to https://api.trongrid.io. For production, use your own TronGrid API key or a dedicated node.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">XPAY_EVM_RPC</td>
                      <td className="p-4 text-gray-500 text-xs font-mono">Optional</td>
                      <td className="p-4 text-gray-400 text-xs font-sans">EVM RPC URL for the chain you want to support. For multi-chain, specify each chain separately (e.g., XPAY_EVM_RPC_ETH, XPAY_EVM_RPC_BNB).</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">XPAY_WEBHOOK_URL</td>
                      <td className="p-4 text-gray-500 text-xs font-mono">Optional</td>
                      <td className="p-4 text-gray-400 text-xs font-sans">Default callback URL for all payments. Can be overridden per invoice. Your server must return 200 OK to confirm receipt.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">XPAY_CONFIRMATIONS</td>
                      <td className="p-4 text-gray-500 text-xs font-mono">Optional</td>
                      <td className="p-4 text-gray-400 text-xs font-sans">Number of block confirmations required before triggering a webhook. Default: 19 for TRON, 12 for EVM chains. Lower for faster but riskier detection.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{`# .env
XPAY_SEED_PHRASE="abandon abandon apple ... twelve words here"
XPAY_HMAC_SECRET="a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1"
XPAY_TRON_RPC=https://api.trongrid.io
XPAY_EVM_RPC_ETH=https://eth-mainnet.g.alchemy.com/v2/your_key
XPAY_EVM_RPC_BNB=https://bsc-dataseed.binance.org
XPAY_WEBHOOK_URL=https://api.yourdomain.com/webhooks/xpay
XPAY_CONFIRMATIONS=19`}</code>
              </pre>
            </section>

            {/* Step 3: Generate API Keys */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Step 3: Generate API Keys
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[2].content}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{steps[2].code}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                {steps[2].after}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto mt-4">
                <code>{`// Example response
{
  "id": "key_7f3d9c2a1b",
  "label": "production-checkout",
  "key": "xpay_live_8f3a9d7219bc4e5f6a7b8c9d0e1f2a3b4c5d6e7f",
  "permissions": ["payments:create", "payments:read"],
  "created_at": "2026-05-22T10:30:00Z"
}`}</code>
              </pre>
            </section>

            {/* Step 4: Create Your First Payment */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Step 4: Create Your First Payment
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[3].content}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{steps[3].code}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                The gateway responds with a unique deposit address derived from your seed, an invoice ID, and
                the current payment status:
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto mt-4">
                <code>{`{
  "id": "pay_9f3b8c2a1d",
  "order_id": "order_783120",
  "amount": "100.00",
  "currency": "USDT",
  "chain": "TRON",
  "deposit_address": "TYpSq7f8MubE8bK6vG7m8F7WbA9c3DxE1F",
  "qr_code": "https://gateway.yourdomain.com/v1/qr/pay_9f3b8c2a1d",
  "status": "pending",
  "expires_at": "2026-05-22T11:00:00Z",
  "created_at": "2026-05-22T10:00:00Z"
}`}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                Display the deposit address and QR code to your customer. The gateway monitors the blockchain
                for incoming transactions to this address. Once detected and confirmed, it sends a webhook
                to your callback URL and updates the invoice status to &quot;confirmed&quot;.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">Key insight:</strong> Each invoice gets a <em>unique</em> deposit address.
                No address reuse means no privacy leaks and no payment collision risks. The same address
                will never be assigned to two different invoices — even for the same customer.
              </div>
            </section>

            {/* Step 5: Handle Webhook Callbacks */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Step 5: Handle Webhook Callbacks
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[4].content}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{steps[4].code}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                {steps[4].after}
              </p>
            </section>

            {/* Supported Chains & Tokens */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Supported Chains &amp; Tokens
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                XPay Labs supports three blockchain ecosystems out of the box, covering the vast majority
                of stablecoin and altcoin payment volume. Each chain has unique characteristics that affect
                transaction speed, cost, and integration approach:
              </p>
              <div className="space-y-8">
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">TRON (TRC-20)</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed mb-3">
                    TRON is the dominant chain for stablecoin payments, hosting over $50 billion in TRC-20
                    USDT — more than any other blockchain. Its 3-second block time and sub-cent transaction
                    fees make it ideal for high-volume merchant payments. TRC-20 USDT accounts for the
                    majority of all on-chain stablecoin transfer volume.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-brand-blue mt-1 shrink-0">•</span><span><strong className="text-gray-300">Block time:</strong> ~3 seconds, finality at 19 blocks (~57s)</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-blue mt-1 shrink-0">•</span><span><strong className="text-gray-300">Fee per USDT transfer:</strong> ~0.2–1 TRX ($0.02–$0.10) with energy management</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-blue mt-1 shrink-0">•</span><span><strong className="text-gray-300">Supported tokens:</strong> USDT, USDC, USDD, TUSD, and any TRC-20 token</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-blue mt-1 shrink-0">•</span><span><strong className="text-gray-300">RPC:</strong> TronGrid API (free tier: 10k requests/day) or your own full node</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-blue mt-1 shrink-0">•</span><span><strong className="text-gray-300">Address format:</strong> Base58 T-addresses (starts with &quot;T&quot;)</span></li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-cyan">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">EVM Chains (ERC-20)</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed mb-3">
                    XPay Labs supports all EVM-compatible chains including Ethereum, BNB Chain, Polygon,
                    Arbitrum, Optimism, and Base. While Ethereum mainnet fees can be high during congestion,
                    L2 networks like Arbitrum and Base offer sub-cent transaction costs with Ethereum-level
                    security guarantees.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1 shrink-0">•</span><span><strong className="text-gray-300">Block time:</strong> 2–15s depending on chain (12s ETH mainnet, 2s Polygon, 0.25s Arbitrum)</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1 shrink-0">•</span><span><strong className="text-gray-300">Fee per USDC transfer:</strong> ~$0.50–$5 (ETH), ~$0.0003 (Polygon), ~$0.01 (Arbitrum)</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1 shrink-0">•</span><span><strong className="text-gray-300">Supported tokens:</strong> USDT, USDC, DAI, and any ERC-20 token per chain</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1 shrink-0">•</span><span><strong className="text-gray-300">RPC:</strong> Alchemy, Infura, public nodes, or your own execution client</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1 shrink-0">•</span><span><strong className="text-gray-300">Address format:</strong> 0x-hex addresses (same across all EVM chains)</span></li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-purple">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                      <Coins className="w-5 h-5 text-brand-purple" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">SUI</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed mb-3">
                    SUI is an emerging Layer 1 blockchain built on the Move language with parallel execution
                    and sub-second finality. While its stablecoin ecosystem is still growing, SUI offers
                    the fastest transaction finality of any supported chain and is gaining traction among
                    crypto-native merchants and users.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-brand-purple mt-1 shrink-0">•</span><span><strong className="text-gray-300">Block time:</strong> ~1 second (immediate finality via Narwhal/Bullshark consensus)</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-purple mt-1 shrink-0">•</span><span><strong className="text-gray-300">Fee per transaction:</strong> ~0.001 SUI (~$0.001) — fractions of a cent</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-purple mt-1 shrink-0">•</span><span><strong className="text-gray-300">Supported tokens:</strong> SUI, USDC (native), and custom Move-based assets</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-purple mt-1 shrink-0">•</span><span><strong className="text-gray-300">RPC:</strong> SUI public endpoints or your own full node</span></li>
                    <li className="flex items-start gap-2"><span className="text-brand-purple mt-1 shrink-0">•</span><span><strong className="text-gray-300">Address format:</strong> 0x-prefixed hex addresses</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-brand-purple/5 border border-brand-purple/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">Multi-chain routing:</strong> If your customer pays on a different chain
                than expected, XPay Labs can detect cross-chain payments by scanning all configured chains
                for the invoice amount. Enable this in the config with <code className="text-brand-purple text-xs">multi_chain_scan: true</code>.
                The gateway normalizes amounts based on token decimals and fires the webhook once any
                configured chain receives the correct payment.
              </div>
            </section>

            {/* Performance Benchmarks */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Performance Benchmarks
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                We benchmarked XPay Labs running on a Hetzner CX22 (2 vCPU, 4 GB RAM, 40 GB NVMe, $4.49/month)
                scanning all three chain families simultaneously. These metrics reflect real production conditions
                — not optimized lab environments — and are updated quarterly.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5 mb-6">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Metric</th>
                      <th className="p-4 text-brand-cyan font-medium">TRON</th>
                      <th className="p-4 text-brand-cyan font-medium">EVM (ETH)</th>
                      <th className="p-4 text-brand-cyan font-medium">SUI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Payment Detection Latency</td>
                      <td className="p-4 text-gray-400">&lt;500ms</td>
                      <td className="p-4 text-gray-400">&lt;1s</td>
                      <td className="p-4 text-gray-400">&lt;300ms</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Block Confirmation Time</td>
                      <td className="p-4 text-gray-400">~57s (19 blocks)</td>
                      <td className="p-4 text-gray-400">~2.5min (12 blocks)</td>
                      <td className="p-4 text-gray-400">~1s (immediate)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Webhook Delivery (p50)</td>
                      <td className="p-4 text-gray-400" colSpan={3}>&lt;200ms from confirmation event</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Peak Concurrent Invoice Scans</td>
                      <td className="p-4 text-gray-400" colSpan={3}>10,000+ active invoices per node</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">Webhook Retry Success Rate</td>
                      <td className="p-4 text-gray-400" colSpan={3}>99.7% (3 attempts: 10s, 60s, 300s backoff)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-brand-cyan">&lt;40MB</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">Docker image size (Distroless)</div>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-brand-cyan">~120MB</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">RAM at idle (all chains)</div>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-brand-cyan">&lt;1% CPU</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">Idle block scanning (per chain)</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">Methodology:</strong> Benchmarks measured using Prometheus metrics
                exported by the gateway on a Hetzner CX22 (2 vCPU, 4 GB RAM) running Ubuntu 24.04 with Docker 26.
                Payment detection latency measured from block inclusion to webhook dispatch. All chains scanned
                simultaneously. Full benchmark script and raw data available in the GitHub repository.
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Next Steps
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                You now have a fully functional self-hosted crypto payment gateway. Here is what to
                explore next to get the most out of your infrastructure:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Server className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">Deployment Guide</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Full documentation covering Docker deployment, environment configuration, CLI reference, and production hardening.
                  </p>
                </Link>
                <Link
                  href="/alternatives/bitpay"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <ArrowRight className="w-5 h-5 text-brand-cyan" />
                    <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-cyan transition-colors">XPay vs BitPay</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Detailed comparison between self-hosted XPay Labs and hosted BitPay — fees, custody models, chain support, and migration guide.
                  </p>
                </Link>
                <Link
                  href="/solutions/tron-payment-gateway"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-brand-purple" />
                    <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-purple transition-colors">TRON Payment Gateway</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Deep dive into TRON-specific configuration: TRC-20 token support, energy management, TronGrid integration, and HD derivation.
                  </p>
                </Link>
                <Link
                  href="/"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-brand-cyan" />
                    <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-cyan transition-colors">XPay Labs Overview</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Learn about the full XPay Labs platform: multi-chain architecture, non-custodial security model, and developer APIs.
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  Ready to Accept Crypto Payments?
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  Deploy XPay Labs on your own infrastructure in under 30 minutes. Zero transaction fees,
                  non-custodial security, and support for TRON, EVM, and SUI chains. No signup required —
                  just Docker.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>Deploy Your Gateway</span>
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

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
