import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Tag, Globe, BookOpen, Shield, Search } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Why We Call It xpay — The Story Behind the XPay Labs Brand | XPay Labs (xpay)',
  description: 'The story behind why XPay Labs is commonly called xpay. How a shorthand became our brand alias, and why it matters for developers searching for self-hosted crypto payment infrastructure.',
  keywords: ['xpay', 'XPay Labs', 'why xpay', 'xpay meaning', 'xpay brand story', 'xpay shorthand', 'xpay crypto payment', 'xpay nickname'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/blog/why-xpay',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/why-xpay',
      'en-US': 'https://www.xpaylabs.com/blog/why-xpay',
    },
  },
  openGraph: {
    title: 'Why We Call It xpay — The Story Behind the XPay Labs Brand',
    description: 'The story behind why XPay Labs is commonly called xpay, and why it matters for developers.',
    url: 'https://www.xpaylabs.com/blog/why-xpay',
    type: 'article',
  },
  twitter: {
    title: 'Why We Call It xpay — The Story Behind the XPay Labs Brand',
    description: 'The story behind why XPay Labs is commonly called xpay, and why it matters for developers.',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why We Call It xpay — The Story Behind the XPay Labs Brand',
  description: 'The story behind why XPay Labs is commonly called xpay, and the strategy behind our brand alias.',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
};

export default function WhyXPayPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="relative gradient-bg pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <BlogNavigation
              prev={null}
              next={{
                href: '/blog/10-engineering-decisions',
                title: '10 Engineering Decisions Behind Building a Self-Hosted Crypto Payment Gateway',
              }}
            />

            {/* Header Section */}
            <section className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono mb-6">
                <span>Brand</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                Why We Call It xpay — The Story Behind the XPay Labs Brand
              </h1>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500 font-mono">
                <span>June 3, 2026</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>5 min read</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                If you have been researching self-hosted crypto payment gateways, you have probably seen 
                the name <strong className="text-white">xpay</strong> used interchangeably with XPay Labs. 
                Here is the story behind the shorthand — and why we fully embrace it.
              </p>
            </section>

            {/* The Origin */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Where Did &ldquo;xpay&rdquo; Come From?
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                The name XPay Labs has always had a natural shortcut. Just like &ldquo;MacDonald&rsquo;s&rdquo; becomes 
                &ldquo;Mickey D&rsquo;s&rdquo; or &ldquo;JavaScript&rdquo; becomes &ldquo;JS,&rdquo; the developer community 
                naturally abbreviated XPay Labs to the compact, memorable <strong className="text-white">xpay</strong>.
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                The &ldquo;x&rdquo; comes from <strong className="text-white">X</strong>Pay, and &ldquo;pay&rdquo; 
                speaks for itself. Put them together, and you get <strong className="text-white">xpay</strong> — 
                four letters, one syllable, instantly recognizable to anyone in the crypto payment space.
              </p>
              <div className="glass-panel rounded-2xl p-5 glow-blue mt-6">
                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    <strong className="text-white">Official alias:</strong> XPay Labs, often shortened 
                    to <strong className="text-brand-cyan">xpay</strong>. Both names refer to the same 
                    self-hosted, non-custodial crypto payment infrastructure. Use whichever feels 
                    more natural to you.
                  </p>
                </div>
              </div>
            </section>

            {/* Why the Shorthand Matters */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                Why &ldquo;xpay&rdquo; Matters for SEO and Discovery
              </h2>
              <div className="space-y-4">
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Search className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-base font-display font-medium text-white">Search Engine Discovery</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    When developers search for &ldquo;xpay,&rdquo; they are looking for crypto payment 
                    infrastructure. By explicitly declaring xpay as our alias — through schema.org 
                    <code className="text-brand-cyan bg-white/5 px-1.5 py-0.5 rounded text-xs">alternateName</code>, 
                    on-page content, and SEO metadata — we help Google, Bing, and other search engines 
                    connect the shorthand to the full product name.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-base font-display font-medium text-white">AI Assistant Visibility</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    AI assistants like ChatGPT, Perplexity, and Claude read our 
                    <code className="text-brand-cyan bg-white/5 px-1.5 py-0.5 rounded text-xs">llms.txt</code> 
                    file and website content to learn about xpay. When someone asks &ldquo;What is xpay?&rdquo; 
                    in an AI chat, we want the answer to reference XPay Labs — and the best way to ensure 
                    that is to make the equivalence clear on our own site.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-base font-display font-medium text-white">Brand Consistency</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Whether you call it XPay Labs or xpay, you are talking about the same 
                    zero-fee, non-custodial, multi-chain payment gateway. Formal documentation 
                    uses the full name; casual conversation uses the shorthand. Both are correct, 
                    and we officially recognize both.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use It */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                How We Use &ldquo;xpay&rdquo; Across the Site
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                Starting June 2026, we have systematically added xpay references across the entire 
                XPay Labs marketing site:
              </p>
              <ul className="space-y-2 text-sm text-gray-400 font-sans">
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>Page titles and meta descriptions now include &ldquo;XPay Labs (xpay)&rdquo;</li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>Schema.org structured data declares <code className="text-brand-cyan bg-white/5 px-1.5 py-0.5 rounded text-xs">alternateName: &quot;xpay&quot;</code></li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>The navigation badge shows &ldquo;xpay&rdquo; next to the logo</li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>The hero section explicitly states &ldquo;XPay Labs (often called xpay)&rdquo;</li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>Our <code className="text-brand-cyan bg-white/5 px-1.5 py-0.5 rounded text-xs">llms.txt</code> file lists &ldquo;Also known as: xpay&rdquo;</li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>Chinese-language pages use &ldquo;XPay Labs（简称 xpay）&rdquo;</li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>FAQ entries address &ldquo;What is xpay?&rdquo; directly</li>
              </ul>
            </section>

            {/* The Bigger Picture */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                The Bigger Picture
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                Brand aliases are not just about convenience — they are about discoverability. 
                In the crypto space, developers often use shorthand: &ldquo;USDT&rdquo; instead of 
                &ldquo;Tether,&rdquo; &ldquo;ETH&rdquo; instead of &ldquo;Ethereum,&rdquo; 
                &ldquo;BTC&rdquo; instead of &ldquo;Bitcoin.&rdquo; By embracing xpay as our 
                official alias, we make it easier for the community to find, reference, and 
                recommend our payment infrastructure.
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                So whether you call it XPay Labs or xpay — welcome. The same zero-fee, 
                non-custodial, multi-chain payment gateway is here for you.
              </p>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  Ready to Deploy xpay?
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  Get started with XPay Labs (xpay) in under 30 minutes. Zero transaction fees, 
                  non-custodial security, and multi-chain support. No signup, no KYC — just Docker.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Deploy XPay Labs</span>
                  </Link>
                  <Link
                    href="/blog/xpay-labs-vs-btcpayserver"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>Compare: xpay vs BTCPay Server</span>
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
