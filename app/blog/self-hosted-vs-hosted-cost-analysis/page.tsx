import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, DollarSign, TrendingDown, Server, Coins, Zap, Shield } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Self-Hosted vs Hosted Crypto Payments: The Real Cost Analysis (2026) | XPay Labs',
  description: 'We crunched the numbers: how much do hosted crypto gateways really cost vs self-hosted? Includes BitPay, Coinbase Commerce, NowPayments, and XPay Labs across 5 volume tiers. The savings will surprise you.',
  keywords: ['crypto payment gateway cost comparison', 'self-hosted vs hosted crypto payments', 'BitPay fees calculator', 'crypto payment processing cost analysis', 'how much does crypto payment gateway cost', 'Coinbase Commerce fees', 'NowPayments fees comparison', 'merchant payment processing crypto'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/blog/self-hosted-vs-hosted-cost-analysis',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/self-hosted-vs-hosted-cost-analysis',
      'en-US': 'https://www.xpaylabs.com/blog/self-hosted-vs-hosted-cost-analysis',
    },
  },
  openGraph: {
    title: 'Self-Hosted vs Hosted Crypto Payments: The Real Cost Analysis (2026)',
    description: 'A data-driven cost comparison across 5 volume tiers — from $10k to $500k monthly. See exactly how much merchants save with self-hosted infrastructure.',
    url: 'https://www.xpaylabs.com/blog/self-hosted-vs-hosted-cost-analysis',
    type: 'article',
  },
  twitter: {
    title: 'Self-Hosted vs Hosted Crypto Payments: The Real Cost Analysis (2026)',
    description: 'A data-driven cost comparison across 5 volume tiers. See exactly how much merchants save with self-hosted infrastructure.',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Self-Hosted vs Hosted Crypto Payments: The Real Cost Analysis (2026)',
  description: 'Crypto payment cost comparison across 5 volume tiers with real fee data from BitPay, Coinbase Commerce, NowPayments, and XPay Labs.',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
};

const annualCosts = [
  { tier: '$10k/mo', bitpay: '$1,560', coinbase: '$1,260', nowpay: '$900', xpay: '$60' },
  { tier: '$50k/mo', bitpay: '$6,360', coinbase: '$5,260', nowpay: '$3,300', xpay: '$120' },
  { tier: '$100k/mo', bitpay: '$12,360', coinbase: '$10,260', nowpay: '$6,300', xpay: '$120' },
  { tier: '$250k/mo', bitpay: '$30,360', coinbase: '$25,260', nowpay: '$15,300', xpay: '$240' },
  { tier: '$500k/mo', bitpay: '$60,360', coinbase: '$50,260', nowpay: '$30,300', xpay: '$240' },
];

export default function CostAnalysisPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono mb-6">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Cost Analysis</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                Self-Hosted vs Hosted Crypto Payments: The Real Cost Analysis
              </h1>
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 font-mono">
                <span>May 31, 2026</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>8 min read</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                Hosted crypto payment gateways like BitPay and Coinbase Commerce advertise &ldquo;1% fees&rdquo;
                as if it is negligible. For a business processing $100k/month, that 1% adds up to
                <strong className="text-white"> $12,000+ per year</strong> — before you even factor in
                monthly plan fees, settlement delays, and fiat conversion overhead.
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                We built a transparent cost model across five volume tiers so you can see exactly what
                each gateway charges — and how much self-hosted infrastructure saves.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Annual Cost Comparison by Volume Tier
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                All figures include transaction fees + monthly plan fees. Self-hosted costs include VPS
                hosting at $5–$20/month depending on tier. Blockchain gas fees are excluded (they are
                identical across all solutions since the merchant pays them regardless).
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">Monthly Volume</th>
                      <th className="p-4 text-orange-400 font-medium">BitPay</th>
                      <th className="p-4 text-blue-400 font-medium">Coinbase Commerce</th>
                      <th className="p-4 text-purple-400 font-medium">NowPayments</th>
                      <th className="p-4 text-brand-cyan font-medium">XPay Labs (Self-Hosted)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {annualCosts.map((row) => (
                      <tr key={row.tier} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">{row.tier}</td>
                        <td className="p-4 text-gray-400">{row.bitpay}/yr</td>
                        <td className="p-4 text-gray-400">{row.coinbase}/yr</td>
                        <td className="p-4 text-gray-400">{row.nowpay}/yr</td>
                        <td className="p-4 text-green-400 font-semibold">{row.xpay}/yr</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-emerald-400/5 border border-emerald-400/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">Assumptions:</strong> BitPay: 1% tx fee + $30/mo Starter plan.
                Coinbase Commerce: 0.8% tx fee + $25/mo plan. NowPayments: 0.5% tx fee (no monthly plan).
                XPay Labs: $0 tx fee, VPS cost estimated at $5/mo ($10k tier) to $20/mo ($500k tier).
                Gas fees not included (paid by customer or merchant equally across all solutions).
                Optional XPay Labs support plans from $1,500 (Docker Setup) or $3,000/yr (Business) — not required to use the software.
                Multi-tenant architecture further reduces per-merchant cost: one deployment serves unlimited merchants with isolated credentials. No per-merchant server overhead.
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                The 3-Year Impact
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Payment infrastructure is a long-term decision. Here is what the cumulative cost looks
                like over 3 years for a merchant processing $100k/month:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-panel rounded-2xl p-6 text-center border-l-4 border-orange-500/50">
                  <div className="text-2xl font-display font-bold text-orange-400">$37,080</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">BitPay — 3 years</div>
                  <div className="text-[10px] text-gray-600 font-sans mt-2">$12,360/yr × 3</div>
                </div>
                <div className="glass-panel rounded-2xl p-6 text-center border-l-4 border-purple-500/50">
                  <div className="text-2xl font-display font-bold text-purple-400">$18,900</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">NowPayments — 3 years</div>
                  <div className="text-[10px] text-gray-600 font-sans mt-2">$6,300/yr × 3</div>
                </div>
                <div className="glass-panel rounded-2xl p-6 text-center border-l-4 border-green-500/50">
                  <div className="text-2xl font-display font-bold text-green-400">$360</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">XPay Labs — 3 years</div>
                  <div className="text-[10px] text-gray-600 font-sans mt-2">$120/yr × 3</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
                That is <strong className="text-emerald-400">$36,720 in savings</strong> over 3 years by choosing
                self-hosted infrastructure. Enough to fund a developer for a month, cover a year of server
                costs for an entire microservices architecture, or reinvest into product development.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Hidden Costs Most Merchants Miss
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                Transaction fees are the visible cost. Here are the invisible ones that make hosted
                gateways even more expensive than the percentage suggests:
              </p>
              <div className="space-y-4">
                <div className="glass-panel rounded-2xl p-5">
                  <h3 className="text-sm font-display font-medium text-white mb-2">1. Float Loss from Delayed Settlement</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    BitPay settles in batches — daily at best, weekly at worst. If you process $100k/month,
                    you have an average of ~$16k in un-settled funds at any given time. At a 5% return rate
                    (what that capital could earn elsewhere), that is <strong className="text-gray-300">$800/year in
                    opportunity cost</strong>. XPay Labs settles instantly — your capital works for you immediately.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <h3 className="text-sm font-display font-medium text-white mb-2">2. Fiat Conversion Spread</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    BitPay and Coinbase Commerce offer fiat settlement — but at a spread. BitPay&apos;s conversion
                    rate is typically 0.5-1% below market. On $100k/month, that is an additional
                    <strong className="text-gray-300"> $6,000–$12,000/year</strong> in hidden costs. Self-hosted
                    solutions let you choose your own conversion venue (or hold crypto directly).
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <h3 className="text-sm font-display font-medium text-white mb-2">3. Migration Cost When Processors Change Terms</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Coinbase Commerce is <Link href="/alternatives/coinbase-commerce" className="text-brand-cyan underline underline-offset-2">shutting down its custodial service</Link>.
                    BitPay has raised fees and changed plan structures. When a hosted processor changes terms,
                    you migrate — and migration costs engineering time, testing, and potential downtime. With
                    self-hosted infrastructure, you control the upgrade cycle.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                When Hosted Makes Sense
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                To be fair: hosted gateways are not always the wrong choice. Here are the scenarios where
                paying 1% fees is worth it:
              </p>
              <div className="glass-panel rounded-2xl p-6">
                <ul className="space-y-3 text-sm text-gray-400 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 shrink-0">•</span>
                    <span><strong className="text-gray-300">Under $5k/month volume:</strong> The absolute dollar difference is small enough that convenience wins. $5k × 1% = $50/month. Not worth DevOps time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 shrink-0">•</span>
                    <span><strong className="text-gray-300">No technical team:</strong> If you cannot run a Docker container, a hosted solution is your only option until you hire or learn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 shrink-0">•</span>
                    <span><strong className="text-gray-300">Fiat-only business model:</strong> If you need USD in your bank account and cannot hold crypto, the processor&apos;s built-in conversion (despite the spread) simplifies accounting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 shrink-0">•</span>
                    <span><strong className="text-gray-300">Bitcoin-native customer base:</strong> If your customers primarily pay in BTC/LTC and you need Lightning support, BTCPay Server (self-hosted Bitcoin) or OpenNode (hosted) are better fits than any stablecoin-focused solution.</span>
                  </li>
                </ul>
              </div>
            </section>

            <BlogNavigation
              prev={{
                href: '/blog/10-engineering-decisions',
                title: '10 Engineering Decisions for a Self-Hosted Crypto Payment Gateway',
              }}
              next={{
                href: '/blog/performance-benchmarks-multi-chain-gateway',
                title: 'Performance Benchmarks: Running a Multi-Chain Payment Gateway on a $5 VPS',
              }}
            />
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-emerald text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  Calculate Your Savings
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  If you process $10k+/month in crypto payments, self-hosted infrastructure saves you
                  thousands per year. Deploy XPay Labs in under 30 minutes and keep 100% of your revenue.
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
