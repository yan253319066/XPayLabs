import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowUpRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog — Self-Hosted Crypto Payment Guides | XPay Labs',
  description: 'Guides, comparisons, and deep dives on self-hosted crypto payment infrastructure. Learn how to accept USDT, replace BitPay, and deploy your own non-custodial gateway.',
  keywords: ['crypto payment blog', 'self-hosted payment gateway', 'USDT payment guide', 'BitPay alternative', 'Coinbase Commerce alternative', 'crypto payment infrastructure', 'accept crypto payments'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/blog',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog',
      'en-US': 'https://www.xpaylabs.com/blog',
    },
  },
  openGraph: {
    title: 'Blog — Self-Hosted Crypto Payment Guides | XPay Labs',
    description: 'Guides, comparisons, and deep dives on self-hosted crypto payment infrastructure from XPay Labs.',
    url: 'https://www.xpaylabs.com/blog',
    type: 'website',
  },
  twitter: {
    title: 'Blog — Self-Hosted Crypto Payment Guides | XPay Labs',
    description: 'Guides, comparisons, and deep dives on self-hosted crypto payment infrastructure from XPay Labs.',
    card: 'summary_large_image',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'XPay Labs Blog',
  description: 'Guides, comparisons, and deep dives on self-hosted crypto payment infrastructure.',
  url: 'https://www.xpaylabs.com/blog',
};

const posts = [
  {
    title: 'Why We Call It xpay — The Story Behind the XPay Labs Brand',
    href: '/blog/why-xpay',
    date: 'June 2026',
    category: 'Brand',
    excerpt: 'The story behind why XPay Labs is commonly called xpay, how a shorthand became our brand alias, and why it matters for developers searching for self-hosted crypto payment infrastructure.',
  },
  {
    title: '10 Engineering Decisions Behind Building a Self-Hosted Crypto Payment Gateway',
    href: '/blog/10-engineering-decisions',
    date: 'May 2026',
    category: 'Engineering',
    excerpt: 'From Distroless Java to HD wallet derivation — the 10 architecture choices that make XPay Labs fast, secure, and resource-efficient. Lessons from building production payment infrastructure.',
  },
  {
    title: 'Self-Hosted vs Hosted Crypto Payments: The Real Cost Analysis (2026)',
    href: '/blog/self-hosted-vs-hosted-cost-analysis',
    date: 'May 2026',
    category: 'Analysis',
    excerpt: 'We crunched the numbers across 5 volume tiers: how much do BitPay, Coinbase Commerce, and NowPayments really cost vs self-hosted XPay Labs? The savings will surprise you.',
  },
  {
    title: 'Performance Benchmarks: Multi-Chain Gateway on a $5 VPS',
    href: '/blog/performance-benchmarks-multi-chain-gateway',
    date: 'May 2026',
    category: 'Engineering',
    excerpt: 'Real benchmarks on a $4.49/month Hetzner CX22 — payment detection latency, memory usage, CPU consumption, and concurrent invoice capacity across TRON, EVM, and SUI chains.',
  },

  {
    title: 'XPay Labs Review 2026: The Honest Take on Self-Hosted Crypto Payments',
    href: '/review',
    date: 'May 2026',
    category: 'Review',
    excerpt: 'An honest, comprehensive review of XPay Labs — features, pricing, pros and cons, security analysis, and competitive positioning. See if the self-hosted crypto payment gateway is right for your business.',
  },
  {
    title: 'Best Self-Hosted Crypto Payment Gateway 2026 — Top Solutions Compared',
    href: '/guides/best-self-hosted-crypto-payment-gateway',
    date: 'May 2026',
    category: 'Guide',
    excerpt: 'The definitive ranking of self-hosted crypto payment gateways in 2026. Compare XPay Labs, BTCPay Server, Coinbase Commerce, and others by fees, security, chain support, and developer experience.',
  },
  {
    title: 'How to Accept USDT TRC20 Payments: A Developer\'s Guide',
    href: '/guides/how-to-accept-crypto-payments',
    date: 'May 2026',
    category: 'Guide',
    excerpt: 'A complete walkthrough for accepting USDT TRC20 payments using a self-hosted, non-custodial gateway. Covers Docker deployment, API integration, webhook handling, and multi-chain support for TRON, EVM, and SUI.',
  },
  {
    title: 'BitPay Alternative: Why Merchants Are Switching to Self-Hosted',
    href: '/alternatives/bitpay',
    date: 'May 2026',
    category: 'Alternative',
    excerpt: 'BitPay pioneered crypto payments, but its custodial model, 1% transaction fees, and limited chain support leave growing businesses wanting more. Here is why merchants are switching to self-hosted alternatives.',
  },
  {
    title: 'Coinbase Commerce Alternative: Take Control of Your Crypto Payments',
    href: '/alternatives/coinbase-commerce',
    date: 'May 2026',
    category: 'Alternative',
    excerpt: 'Coinbase Commerce is shutting down its custodial service. Merchants need a self-hosted alternative that puts them in control of private keys, settlement timing, and supported chains.',
  },
  {
    title: 'NowPayments Alternative: Why Merchants Are Switching to Self-Hosted',
    href: '/alternatives/nowpayments',
    date: 'May 2026',
    category: 'Alternative',
    excerpt: 'NowPayments offers a hosted crypto payment gateway, but merchants pay for convenience through fees, custodial risk, and limited customization. Here is why the self-hosted model is gaining traction.',
  },
  {
    title: 'TRON TRC20 Payment Gateway: Self-Hosted USDT Payment Infrastructure',
    href: '/solutions/tron-payment-gateway',
    date: 'May 2026',
    category: 'Solution',
    excerpt: 'A deep dive into building a self-hosted USDT payment gateway on TRON. Covers TRC-20 token support, energy management, TronGrid integration, and HD wallet derivation for merchant payment processing.',
  },
  {
    title: 'XPay Labs (xpay) vs BTCPay Server: Self-Hosted Crypto Payment Gateways Compared (2026)',
    href: '/blog/xpay-labs-vs-btcpayserver',
    date: 'June 2026',
    category: 'Comparison',
    excerpt: 'A detailed head-to-head comparison of XPay Labs and BTCPay Server across chain support, pricing, security, developer experience, and more. Which self-hosted gateway wins in 2026?',
  },
  {
    title: 'BTCPay Server Alternative: Multi-Chain Stablecoin Payments',
    href: '/alternatives/btcpayserver',
    date: 'May 2026',
    category: 'Alternative',
    excerpt: 'BTCPay Server is the gold standard for self-hosted Bitcoin payments. But for merchants who need stablecoin support on TRON, EVM, and SUI, XPay Labs offers a modern multi-chain alternative.',
  },
  {
    title: 'EVM Payment Gateway: Accept USDC and USDT on 7+ Chains',
    href: '/solutions/evm-payment-gateway',
    date: 'May 2026',
    category: 'Solution',
    excerpt: 'How to deploy a self-hosted EVM payment gateway that accepts USDT and USDC on Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Avalanche, and Base — simultaneously, from one Docker container.',
  },
  {
    title: 'SUI Payment Gateway: Accept Crypto on the Sui Network',
    href: '/solutions/sui-payment-gateway',
    date: 'May 2026',
    category: 'Solution',
    excerpt: 'A guide to accepting SUI and USDC payments on the Sui Network using a self-hosted, non-custodial payment gateway. Sub-second finality, near-zero fees, and first-mover advantage.',
  },
];

const postSchema = {
  '@context': 'https://schema.org',
  '@graph': posts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: `https://www.xpaylabs.com${post.href}`,
    datePublished: post.date,
    description: post.excerpt,
  })),
};

export default function BlogIndexPage() {
  return (
    <><JsonLd data={blogSchema} />
      <JsonLd data={postSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="relative gradient-bg pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header Section */}
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono mb-6">
                <span>Blog</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                Blog — Self-Hosted Crypto Payment Infrastructure
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed max-w-3xl">
                Guides, comparisons, and deep dives on self-hosted crypto payment infrastructure.
                From deployment walkthroughs to competitive analysis — everything you need to take
                control of your payment stack, eliminate transaction fees, and run your own
                non-custodial gateway.
              </p>
            </section>

            {/* Blog Posts Cards */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="glass-panel rounded-2xl p-6 sm:p-8 block hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-wider font-mono">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-mono">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-display font-medium text-white group-hover:text-brand-blue transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-400 font-sans leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="shrink-0 self-start mt-1">
                      <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-brand-blue transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
