import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, Check, X, Shield, DollarSign, Server, Zap, Globe, Cpu, BookOpen, ArrowUpRight, ExternalLink } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'XPay Labs (xpay) Review 2026 — Self-Hosted Crypto Payment Gateway Honest Review',
  description: 'Read our honest XPay Labs (xpay) review. Features, pricing, pros and cons, multi-tenant support, and how it compares to BitPay, Coinbase Commerce, NowPayments, and BTCPay Server.',
  keywords: ['XPay Labs review', 'xpay review', 'self-hosted crypto payment gateway review', 'xpay features', 'xpay pricing', 'crypto payment infrastructure review', 'multi-tenant crypto payment gateway', 'xpay multi-tenant'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/review',
  },
  openGraph: {
    title: 'XPay Labs (xpay) Review 2026 — Self-Hosted Crypto Payment Infrastructure',
    description: 'Comprehensive XPay Labs (xpay) review covering features, pricing, pros and cons, and competitive comparisons.',
    url: 'https://www.xpaylabs.com/review',
    type: 'article',
  },
  twitter: {
    title: 'XPay Labs (xpay) Review 2026 — Self-Hosted Crypto Payment Gateway Review',
    description: 'Comprehensive XPay Labs (xpay) review covering features, pricing, pros and cons.',
    card: 'summary_large_image',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is XPay Labs and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is a self-hosted, non-custodial crypto payment gateway that you deploy on your own server via Docker. It generates unique blockchain deposit addresses for each invoice, monitors TRON, EVM, and SUI blockchains for incoming payments, and sends HMAC-signed webhooks to your application when payments are confirmed. Funds settle directly to your wallet with no intermediary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is XPay Labs free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is free software with zero transaction fees and zero monthly subscription costs. You only pay for your server hosting ($10-$20/month for a VPS) and blockchain network gas fees (typically $0.01-$0.50 per transaction depending on chain congestion).',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the pros and cons of XPay Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pros: 0% transaction fees, non-custodial (you hold keys), multi-chain support (TRON, EVM, SUI), sub-second payment detection, white-label checkout, HMAC-signed webhooks, no KYC required, Docker-based deployment. Cons: requires DevOps skills for setup, no Bitcoin/Lightning support, smaller community than BTCPay Server, no built-in fiat conversion.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does XPay Labs compare to Coinbase Commerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is self-hosted and non-custodial with 0% fees, while Coinbase Commerce charges 0.8% + $25/month and is custodial. XPay Labs supports TRON, EVM chains, and SUI, while Coinbase Commerce supports BTC, ETH, USDC, and a few others. XPay Labs offers full white-label customization, while Coinbase Commerce requires Coinbase branding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should use XPay Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs is ideal for developers, e-commerce merchants, SaaS platforms, and enterprises that have basic DevOps capabilities and prioritize control, privacy, and cost savings. It is best suited for businesses processing stablecoin payments (USDT, USDC) on TRON, EVM chains, or SUI who want to eliminate gateway fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is XPay Labs secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is non-custodial — private keys are generated locally in your Docker container and never leave your infrastructure. It uses BIP-39 HD wallet derivation, HMAC-SHA256 signed webhooks, and runs entirely within your own isolated environment. There is no third-party access to funds at any point in the payment lifecycle.',
      },
    },
  ],
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'XPay Labs',
    applicationCategory: 'PaymentProcessing',
    operatingSystem: 'Docker, Linux',
  },
  author: {
    '@type': 'Organization',
    name: 'XPay Labs',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
  },
  datePublished: '2026-05-31',
  description: 'XPay Labs is a self-hosted, non-custodial crypto payment gateway supporting TRON, EVM chains, and SUI with zero transaction fees.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'XPay Labs', item: 'https://www.xpaylabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Review', item: 'https://www.xpaylabs.com/review' },
  ],
};

export default function ReviewPage() {
  return (
    <><JsonLd data={faqSchema} />
      <JsonLd data={reviewSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">

            {/* Hero */}
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider font-mono mb-6">
                <Star className="w-3.5 h-3.5" />
                <span>Product Review 2026</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                XPay Labs Review 2026: The Honest Take on Self-Hosted Crypto Payments
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                A no-nonsense review of XPay Labs — the self-hosted, non-custodial crypto payment gateway.
                We evaluate features, pricing, security, ease of use, and competitive positioning to help
                you decide if it is the right payment infrastructure for your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>View Pricing</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* Rating Summary */}
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 glow-blue">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="text-center shrink-0">
                    <div className="text-5xl font-display font-bold text-white">4.8</div>
                    <div className="flex items-center gap-0.5 mt-2 justify-center">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className={`w-4 h-4 ${i <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`} />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 font-mono">Overall Rating</div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs">Features</div>
                      <div className="text-white font-semibold">5.0 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Pricing</div>
                      <div className="text-white font-semibold">5.0 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Ease of Use</div>
                      <div className="text-white font-semibold">4.0 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Security</div>
                      <div className="text-white font-semibold">5.0 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Chain Support</div>
                      <div className="text-white font-semibold">4.5 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Documentation</div>
                      <div className="text-white font-semibold">4.5 / 5</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pros & Cons */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-6">
                Pros &amp; Cons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-green-500">
                  <h3 className="text-base font-display font-medium text-green-400 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    What We Like
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">Zero fees</strong> — 0% transaction fees, no monthly subscription. Only pay gas fees and server costs.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">Non-custodial</strong> — Private keys stay in your Docker container. No third party can freeze or seize funds.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">Multi-chain</strong> — TRON, EVM (Ethereum, BSC, Polygon, Arbitrum, Base, etc.), and SUI from one deployment.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">Sub-second detection</strong> — Mempool-level scanning detects payments in 1-6 seconds across all chains.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">Stripe-inspired API</strong> — Clean REST API with predictable endpoints, consistent JSON, and clear errors.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">White-label</strong> — Full checkout customization. No third-party branding or iframes.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">HMAC webhooks</strong> — Cryptographically signed payloads with exponential backoff retry queues.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">No KYC</strong> — Self-sovereign deployment. No account approval, business verification, or identity checks.</span></li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-red-500">
                  <h3 className="text-base font-display font-medium text-red-400 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5" />
                    What Could Be Better
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">DevOps required</strong> — Requires Docker, VPS management, and basic command-line knowledge. Not for non-technical users.</span></li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">No Bitcoin/Lightning</strong> — Focused on stablecoins. No BTC, LTC, or Lightning Network support.</span></li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">Early-stage community</strong> — Smaller community and fewer plugins compared to BTCPay Server.</span></li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">No fiat conversion</strong> — Purely on-chain stablecoin settlement. No built-in fiat off-ramp.</span></li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">Resource requirements</strong> — Minimum 8GB RAM / 4 vCPU recommended for production workloads.</span></li>
                    <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span><strong className="text-gray-300">No mobile SDK</strong> — Checkout is web-based via REST API. No native iOS/Android SDK yet.</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What is XPay Labs */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                What Is XPay Labs?
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                XPay Labs is a <strong className="text-white">self-hosted, non-custodial crypto payment gateway</strong> designed for developers and
                businesses that want to accept cryptocurrency payments without paying transaction fees or
                surrendering control of private keys. It deploys via Docker Compose on your own server and
                supports three blockchain ecosystems: <strong className="text-white">TRON (TRC-20)</strong>, all <strong className="text-white">EVM-compatible chains</strong>
                (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Base, and more), and <strong className="text-white">SUI</strong>.
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                Unlike hosted gateways (BitPay, Coinbase Commerce, NowPayments) that charge 0.5-1% per
                transaction and hold custody of funds, XPay Labs charges zero transaction fees and routes
                payments directly to your blockchain wallet. The software is source-available and published
                on GitHub for full auditability.
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                At its core, XPay Labs is a Spring Boot backend with concurrent blockchain indexers,
                a REST API for payment management, and a webhook delivery system. The frontend checkout
                widget is built with Vue 3 and supports full white-label customization.
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Key Features Deep Dive
              </h2>
              <div className="space-y-6">
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">Pricing: 0% Transaction Fees</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    The standout feature of XPay Labs is its pricing model: completely free software with
                    zero per-transaction fees. For a business processing $100,000/month in crypto payments,
                    this means saving $6,000-$12,000/year compared to hosted alternatives. The only costs
                    are your VPS ($10-20/month) and blockchain gas fees (typically negligible on TRON and L2 chains).
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-cyan">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">Security: Non-Custodial Architecture</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Private keys are generated via BIP-39 HD wallet derivation from your seed phrase and
                    stored exclusively in your Docker container&apos;s memory. No private key material ever
                    leaves your infrastructure. The gateway only monitors blockchain addresses — it never
                    holds, moves, or has access to funds. Webhooks are signed with HMAC-SHA256 to prevent
                    forgery, and API keys are scoped with granular permissions.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-purple">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-brand-purple" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">Multi-Chain Support</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    XPay Labs concurrently scans TRON (TRC-20 USDT, USDC), all major EVM chains (Ethereum,
                    BNB Chain, Polygon, Arbitrum, Optimism, Avalanche, Base, and 15+ more), and SUI from a
                    single deployment. The unified event channel normalizes all blockchain events into a
                    standardized webhook format, so your application handles payments identically regardless
                    of which chain the customer uses.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">Sub-Second Payment Detection</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    The blockchain indexers operate at the mempool level, detecting unconfirmed transactions
                    within 1-3 seconds on TRON, 2-6 seconds on EVM chains, and 1-2 seconds on SUI. This
                    near-instant detection enables real-time checkout experiences where customers see their
                    payment status update within seconds of submitting their transaction.
                  </p>
                </div>
              </div>
            </section>

            {/* Pricing Comparison */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Pricing Comparison
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                The most compelling reason to choose XPay Labs is cost. Here is how annual fees stack up
                for a business processing $100,000/month in crypto payments:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Gateway</th>
                      <th className="p-4 text-gray-400 font-medium">Fee Model</th>
                      <th className="p-4 text-gray-400 font-medium">Annual Cost</th>
                      <th className="p-4 text-gray-400 font-medium">Custody</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-semibold">XPay Labs</td>
                      <td className="p-4 text-green-400">0% + gas fees</td>
                      <td className="p-4 text-green-400 font-semibold">~$240</td>
                      <td className="p-4 text-green-400">Non-custodial</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">BitPay</td>
                      <td className="p-4 text-gray-400">1% + $30/mo</td>
                      <td className="p-4 text-gray-400">~$12,360</td>
                      <td className="p-4 text-amber-400">Custodial</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">Coinbase Commerce</td>
                      <td className="p-4 text-gray-400">0.8% + $25/mo</td>
                      <td className="p-4 text-gray-400">~$9,900</td>
                      <td className="p-4 text-amber-400">Custodial</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">NowPayments</td>
                      <td className="p-4 text-gray-400">0.5%</td>
                      <td className="p-4 text-gray-400">~$6,000</td>
                      <td className="p-4 text-amber-400">Custodial</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">BTCPay Server</td>
                      <td className="p-4 text-gray-400">0% (self-hosted)</td>
                      <td className="p-4 text-gray-400">~$240</td>
                      <td className="p-4 text-green-400">Non-custodial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">Savings:</strong> Switching from BitPay to XPay Labs
                saves approximately <strong className="text-green-400">$12,000/year</strong> for every $100k/month
                in processed volume.
              </div>
            </section>

            {/* Who Is It For */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Who Is XPay Labs For?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel rounded-2xl p-5 glow-blue">
                  <h3 className="text-sm font-display font-medium text-green-400 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Ideal For
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span>Developers comfortable with Docker and CLI</li>
                    <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span>Merchants processing high-volume stablecoin payments</li>
                    <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span>Businesses wanting to eliminate gateway fees entirely</li>
                    <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span>Privacy-conscious companies avoiding KYC</li>
                    <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span>SaaS platforms needing customizable checkout</li>
                    <li className="flex items-start gap-2"><span className="text-green-400 mt-1">•</span>Multi-chain merchants on TRON, EVM, and SUI</li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-5 glow-blue">
                  <h3 className="text-sm font-display font-medium text-amber-400 mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" /> Not Ideal For
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">•</span>Non-technical users without DevOps support</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">•</span>Merchants needing Bitcoin or Lightning support</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">•</span>Businesses requiring built-in fiat off-ramp</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">•</span>Merchants wanting a fully managed SaaS solution</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">•</span>Companies needing phone-based customer support</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">•</span>Enterprises requiring SOC2/HIPAA compliance docs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Verdict */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Final Verdict
              </h2>
              <div className="glass-panel rounded-2xl p-8 glow-blue">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-3xl font-display font-bold text-white">4.8</div>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className={`w-4 h-4 ${i <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-mono ml-2">/ 5</span>
                </div>
                <p className="text-sm text-gray-400 font-sans leading-relaxed mb-4">
                  XPay Labs is an excellent choice for developers and businesses that want sovereign,
                  cost-effective crypto payment infrastructure. Its zero-fee model, non-custodial
                  architecture, and multi-chain support make it one of the most compelling self-hosted
                  payment gateways available in 2026.
                </p>
                <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6">
                  The main tradeoff is operational complexity: you need DevOps skills to deploy and
                  maintain the gateway. For teams that have those skills, the savings and control are
                  unmatched. For non-technical users, a hosted gateway like BitPay or Coinbase Commerce
                  may be more practical despite the higher fees.
                </p>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  <strong className="text-white">Bottom line:</strong> If you process stablecoin payments
                  on TRON, EVM chains, or SUI, and you can manage your own Docker infrastructure,
                  XPay Labs is the best self-hosted crypto payment gateway you can deploy today.
                </p>
                <div className="mt-6">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>Deploy XPay Labs</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Common questions about XPay Labs and its position in the crypto payment gateway landscape.
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
                  Ready to Try XPay Labs?
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  Deploy XPay Labs on your own infrastructure in under 30 minutes. Zero transaction fees,
                  non-custodial security, and multi-chain support. No signup, no KYC — just Docker.
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
                    href="/pricing"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>Compare Pricing</span>
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
