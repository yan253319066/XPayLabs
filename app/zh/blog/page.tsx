import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowUpRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: '博客 — 自托管加密货币支付指南 | XPay Labs',
  description: '关于自托管加密货币支付基础设施的深度指南、技术对比和性能分析。了解如何接受 USDT、替代 BitPay、以及部署你自己的非托管支付网关。',
  keywords: ['加密货币支付博客', '自托管支付网关', 'USDT 支付指南', 'BitPay 替代方案', '加密货币支付基础设施', '接受加密货币支付'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/blog',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog',
      'en-US': 'https://www.xpaylabs.com/blog',
      'zh-CN': 'https://www.xpaylabs.com/zh/blog',
    },
  },
  openGraph: {
    title: '博客 — 自托管加密货币支付指南 | XPay Labs',
    description: '来自 XPay Labs 的深度技术文章、成本分析和性能基准测试。',
    url: 'https://www.xpaylabs.com/zh/blog',
    type: 'website',
  },
  twitter: {
    title: '博客 — 自托管加密货币支付指南 | XPay Labs',
    description: '来自 XPay Labs 的深度技术文章、成本分析和性能基准测试。',
    card: 'summary_large_image',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'XPay Labs 博客',
  description: '加密货币支付基础设施的深度技术文章和指南。',
  url: 'https://www.xpaylabs.com/zh/blog',
};

const posts = [
  {
    title: '为什么叫 xpay — XPay Labs 品牌简称背后的故事',
    href: '/zh/blog/why-xpay',
    date: '2026 年 6 月',
    category: '品牌',
    excerpt: '为什么 XPay Labs 通常被称为 xpay？一个简称如何成为我们的品牌别名，以及这对开发者搜索自托管加密支付基础设施的意义。',
  },
  {
    title: '自托管加密货币支付网关的 10 个工程决策',
    href: '/zh/blog/10-engineering-decisions',
    date: '2026 年 5 月',
    category: '工程',
    excerpt: '从 Distroless Java 到 HD 钱包派生 — 让 XPay Labs 更快、更安全、更高效的 10 个架构选择。构建生产级支付基础设施的经验之谈。',
  },
  {
    title: '自托管 vs 托管加密货币支付：真实成本分析（2026）',
    href: '/zh/blog/self-hosted-vs-hosted-cost-analysis',
    date: '2026 年 5 月',
    category: '分析',
    excerpt: '我们在五个交易量级别上进行了详细核算：BitPay、Coinbase Commerce、NowPayments 与自托管的 XPay Labs 的实际成本对比。节省金额会让你惊讶。',
  },
  {
    title: '性能基准测试：在 $5 VPS 上运行多链支付网关',
    href: '/zh/blog/performance-benchmarks-multi-chain-gateway',
    date: '2026 年 5 月',
    category: '工程',
    excerpt: '在 $4.49/月的 Hetzner CX22 上实测：TRON、EVM、SUI 三条链的支付检测延迟、内存占用、CPU 消耗和并发发票处理能力。',
  },
  {
    title: 'XPay Labs（xpay）vs BTCPay Server：自托管加密支付网关对比（2026）',
    href: '/zh/blog/xpay-labs-vs-btcpayserver',
    date: '2026 年 6 月',
    category: '对比',
    excerpt: 'XPay Labs 与 BTCPay Server 的详细对比——链支持、定价、安全、开发者体验等多个维度。哪个自托管支付网关在 2026 年更胜一筹？',
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

export default function ZhBlogIndexPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={postSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="relative gradient-bg pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono mb-6">
                <span>博客</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                博客 — 自托管加密货币支付基础设施
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed max-w-3xl">
                深度技术文章、成本分析和性能基准测试。从部署指南到竞品对比 — 帮助你掌握自己的支付基础设施、
                消除交易费用、运行自己的非托管支付网关所需的一切。
              </p>
            </section>

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
