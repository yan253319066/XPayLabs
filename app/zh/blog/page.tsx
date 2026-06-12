import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowUpRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: '博客 — 自托管加密货币支付指南 | XPay Labs',
  description: '关于自托管加密货币支付基础设施的深度指南、技术对比和性能分析。了解如何接受 USDT、替代 BitPay、部署多商家网关、以及运行你自己的非托管支付平台。',
  keywords: ['加密货币支付博客', '自托管支付网关', 'USDT 支付指南', 'BitPay 替代方案', '多商家加密支付网关', '加密货币支付基础设施', '接受加密货币支付', '加密支付平台运营'],
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
    title: 'XPay Labs 评测 2026：自托管加密货币支付的客观评价',
    href: '/zh/review',
    date: '2026 年 5 月',
    category: '评测',
    excerpt: '对 XPay Labs 的全面评测——功能、定价、优缺点、安全分析和竞争定位。看看自托管加密货币支付网关是否适合你的业务。',
  },
  {
    title: '2026 年最佳自托管加密货币支付网关——顶级方案对比',
    href: '/zh/guides/best-self-hosted-crypto-payment-gateway',
    date: '2026 年 5 月',
    category: '指南',
    excerpt: '2026 年自托管加密货币支付网关的权威排名。从费用、安全、链支持和开发者体验等维度对比 XPay Labs、BTCPay Server 等方案。',
  },
  {
    title: '如何接受 USDT TRC20 支付：开发者完整指南',
    href: '/zh/guides/how-to-accept-crypto-payments',
    date: '2026 年 5 月',
    category: '指南',
    excerpt: '使用自托管非托管网关接受 USDT TRC20 支付的完整教程。涵盖 Docker 部署、API 集成、Webhook 处理及 TRON、EVM、SUI 多链支持。',
  },
  {
    title: 'BitPay 替代方案：为什么商户正在转向自托管',
    href: '/zh/alternatives/bitpay',
    date: '2026 年 5 月',
    category: '替代方案',
    excerpt: 'BitPay 开创了加密货币支付，但其托管模式、1% 交易费和有限的链支持让企业寻求更好的选择。了解为什么商户正在转向自托管方案。',
  },
  {
    title: 'Coinbase Commerce 替代方案：掌控你的加密支付',
    href: '/zh/alternatives/coinbase-commerce',
    date: '2026 年 5 月',
    category: '替代方案',
    excerpt: 'Coinbase Commerce 正在关闭其托管服务。商户需要一个自托管替代方案，让他们掌握私钥控制权、结算时间和支持的区块链。',
  },
  {
    title: 'NowPayments 替代方案：为什么商户正在转向自托管',
    href: '/zh/alternatives/nowpayments',
    date: '2026 年 5 月',
    category: '替代方案',
    excerpt: 'NowPayments 提供托管加密支付网关，但商户通过费用、托管风险和有限的自定义为便利买单。了解自托管模式为何越来越受欢迎。',
  },
  {
    title: 'TRON TRC20 支付网关：自托管 USDT 支付基础设施',
    href: '/zh/solutions/tron-payment-gateway',
    date: '2026 年 5 月',
    category: '解决方案',
    excerpt: '深入探讨在 TRON 上构建自托管 USDT 支付网关。涵盖 TRC-20 代币支持、能量管理、TronGrid 集成和 HD 钱包派生。',
  },
  {
    title: 'BTCPay Server 替代方案：多链稳定币支付',
    href: '/zh/alternatives/btcpayserver',
    date: '2026 年 5 月',
    category: '替代方案',
    excerpt: 'BTCPay Server 是自托管比特币支付的金标准。但对于需要在 TRON、EVM 和 SUI 上支持稳定币的商户，XPay Labs 提供了现代多链替代方案。',
  },
  {
    title: 'EVM 支付网关：在 7+ 条链上接受 USDC 和 USDT',
    href: '/zh/solutions/evm-payment-gateway',
    date: '2026 年 5 月',
    category: '解决方案',
    excerpt: '如何部署自托管 EVM 支付网关，在以太坊、BNB Chain、Polygon、Arbitrum、Optimism、Avalanche 和 Base 上同时接受 USDT 和 USDC——全部来自一个 Docker 容器。',
  },
  {
    title: 'SUI 支付网关：在 Sui 网络上接受加密货币支付',
    href: '/zh/solutions/sui-payment-gateway',
    date: '2026 年 5 月',
    category: '解决方案',
    excerpt: '使用自托管非托管支付网关在 Sui 网络上接受 SUI 和 USDC 支付的指南。亚秒级最终确认、近乎零费用、先发优势。',
  },
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
