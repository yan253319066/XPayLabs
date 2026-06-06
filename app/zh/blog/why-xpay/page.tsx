import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Tag, Globe, BookOpen, Shield, Search } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';

export const metadata: Metadata = {
  title: '为什么叫 xpay — XPay Labs 品牌简称背后的故事 | XPay Labs（简称 xpay）',
  description: '为什么 XPay Labs 通常被称为 xpay？一个简称如何成为我们的品牌别名，以及为什么这对开发者搜索自托管加密支付基础设施很重要。',
  keywords: ['xpay', 'XPay Labs', '为什么叫 xpay', 'xpay 含义', 'xpay 品牌故事', 'xpay 简称', 'xpay 加密支付'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/blog/why-xpay',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/why-xpay',
      'en-US': 'https://www.xpaylabs.com/blog/why-xpay',
      'zh-CN': 'https://www.xpaylabs.com/zh/blog/why-xpay',
    },
  },
  openGraph: {
    title: '为什么叫 xpay — XPay Labs 品牌简称背后的故事',
    description: '为什么 XPay Labs 通常被称为 xpay，以及这对开发者意味着什么。',
    url: 'https://www.xpaylabs.com/zh/blog/why-xpay',
    type: 'article',
  },
  twitter: {
    title: '为什么叫 xpay — XPay Labs 品牌简称背后的故事',
    description: '为什么 XPay Labs 通常被称为 xpay，以及这对开发者意味着什么。',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '为什么叫 xpay — XPay Labs 品牌简称背后的故事',
  description: 'XPay Labs 为什么通常被称为 xpay，以及品牌别名策略背后的思考。',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
};

export default function ZhWhyXPayPage() {
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
                href: '/zh/blog/10-engineering-decisions',
                title: '自托管加密货币支付网关的 10 个工程决策',
              }}
              prevLabel="上一篇"
              nextLabel="下一篇"
            />

            <section className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono mb-6">
                <span>品牌</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                为什么叫 xpay — XPay Labs 品牌简称背后的故事
              </h1>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500 font-mono">
                <span>2026 年 6 月 3 日</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>阅读时间 5 分钟</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                如果你在研究自托管加密支付网关，你可能已经看到 <strong className="text-white">xpay</strong> 这个名称与 XPay Labs 混用。以下是这个简称背后的故事——以及我们为什么完全拥抱它。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                &ldquo;xpay&rdquo; 从何而来？
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                XPay Labs 这个名字天生就有个缩写。就像 &ldquo;JavaScript&rdquo; 变成 &ldquo;JS&rdquo;，开发者社区自然而然地就把 XPay Labs 简称为简洁易记的 <strong className="text-white">xpay</strong>。
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                &ldquo;x&rdquo; 来自 <strong className="text-white">X</strong>Pay，&ldquo;pay&rdquo; 就是支付。合起来就是 <strong className="text-white">xpay</strong>——四个字母，一个音节，加密支付领域的人一看就懂。
              </p>
              <div className="glass-panel rounded-2xl p-5 glow-blue mt-6">
                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    <strong className="text-white">官方别名：</strong>XPay Labs，常简称为 <strong className="text-brand-cyan">xpay</strong>。两个名称指向同一个自托管、非托管加密支付基础设施。用哪个都行。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                为什么 &ldquo;xpay&rdquo; 对 SEO 和发现很重要
              </h2>
              <div className="space-y-4">
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Search className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-base font-display font-medium text-white">搜索引擎发现</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    当开发者搜索 &ldquo;xpay&rdquo; 时，他们在找加密支付基础设施。通过在我们网站的 schema.org 
                    <code className="text-brand-cyan bg-white/5 px-1.5 py-0.5 rounded text-xs">alternateName</code>、
                    页面内容和 SEO 元数据中明确声明 xpay 是我们的别名，我们帮助搜索引擎将这个简称与完整产品名称关联起来。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-base font-display font-medium text-white">AI 助手可见性</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    ChatGPT、Perplexity、Claude 等 AI 助手会读取我们的 
                    <code className="text-brand-cyan bg-white/5 px-1.5 py-0.5 rounded text-xs">llms.txt</code> 
                    文件和网站内容来了解 xpay。当有人在 AI 对话中问 &ldquo;What is xpay？&rdquo; 时，我们希望答案引用 XPay Labs——最可靠的方法就是在我们自己的网站上明确标明等价关系。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-base font-display font-medium text-white">品牌一致性</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    无论你叫它 XPay Labs 还是 xpay，你都在说同一个零费率、非托管、多链支付网关。正式文档用全称，日常交流用简称。两者都对，我们官方认可两者。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                我们在网站上如何使用 &ldquo;xpay&rdquo;
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                自 2026 年 6 月起，我们在整个 XPay Labs 营销网站上系统性地添加了 xpay 引用：
              </p>
              <ul className="space-y-2 text-sm text-gray-400 font-sans">
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>页面标题和元描述现在包含 &ldquo;XPay Labs（简称 xpay）&rdquo;</li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>Schema.org 结构化数据声明 <code className="text-brand-cyan bg-white/5 px-1.5 py-0.5 rounded text-xs">alternateName: &quot;xpay&quot;</code></li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>导航栏 Logo 旁显示 &ldquo;xpay&rdquo; 徽标</li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>Hero 区域明确声明 &ldquo;XPay Labs（简称 xpay）&rdquo;</li>
                <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">•</span>FAQ 直接回答 &ldquo;什么是 xpay？&rdquo;</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                更大的图景
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                品牌别名不仅是为了方便——更是为了被发现。在加密领域，开发者常用简称：&ldquo;USDT&rdquo; 代替 &ldquo;Tether&rdquo;，&ldquo;ETH&rdquo; 代替 &ldquo;Ethereum&rdquo;。通过将 xpay 作为官方别名，我们让社区更容易找到、引用和推荐我们的支付基础设施。
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                无论你叫它 XPay Labs 还是 xpay——欢迎。同一个零费率、非托管、多链支付网关都在这里为你服务。
              </p>
            </section>

            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  准备好部署 xpay 了吗？
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  在 30 分钟内开始使用 XPay Labs（xpay）。零交易手续费、非托管安全、多链支持。无需注册、无需 KYC——只要 Docker。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>部署 XPay Labs</span>
                  </Link>
                  <Link
                    href="/zh/blog/xpay-labs-vs-btcpayserver"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>对比：xpay vs BTCPay Server</span>
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
