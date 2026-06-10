import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, X, Server, Shield, DollarSign, Globe, Zap, BookOpen } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';

export const metadata: Metadata = {
  title: 'XPay Labs（xpay）vs BTCPay Server：自托管加密支付网关对比（2026）',
  description: 'XPay Labs（xpay）与 BTCPay Server 的详细对比。从链支持、定价、安全、多商家支持、开发者体验等维度全面比较，帮你选择最适合的自托管加密支付网关。',
  keywords: ['XPay Labs vs BTCPay Server', 'xpay vs btcpay', '自托管加密支付网关对比', 'BTCPay Server 替代方案', 'XPay Labs 对比', 'XPay Labs 多商家', 'BTCPay Server 多商户'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/blog/xpay-labs-vs-btcpayserver',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/xpay-labs-vs-btcpayserver',
      'en-US': 'https://www.xpaylabs.com/blog/xpay-labs-vs-btcpayserver',
      'zh-CN': 'https://www.xpaylabs.com/zh/blog/xpay-labs-vs-btcpayserver',
    },
  },
  openGraph: {
    title: 'XPay Labs（xpay）vs BTCPay Server：自托管加密支付网关对比',
    description: '2026 年 XPay Labs 与 BTCPay Server 的全面对比——功能、链支持、定价、安全和开发者体验。',
    url: 'https://www.xpaylabs.com/zh/blog/xpay-labs-vs-btcpayserver',
    type: 'article',
  },
  twitter: {
    title: 'XPay Labs（xpay）vs BTCPay Server：自托管加密支付网关对比',
    description: '2026 年 XPay Labs 与 BTCPay Server 的全面对比。',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'XPay Labs（xpay）vs BTCPay Server：自托管加密支付网关对比（2026）',
  description: 'XPay Labs 与 BTCPay Server 在功能、链支持、定价、安全等方面的详细对比。',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
};

const comparisonRows = [
  {
    feature: '链支持',
    xpay: 'TRON（TRC-20）、EVM（以太坊、BSC、Polygon、Arbitrum、Base 等 15+）、SUI',
    btcpay: 'Bitcoin、Lightning、Liquid、以太坊、BSC、Polygon——需社区插件',
    winner: 'xpay — 更广泛的 EVM + SUI + TRON',
  },
  {
    feature: '稳定币支持',
    xpay: '原生支持——所有链上的 USDT、USDC、DAI 开箱即用',
    btcpay: '通过插件——仅限以太坊/BSC/Polygon 上的 USDT/USDC',
    winner: 'xpay — 原生稳定币架构',
  },
  {
    feature: '交易费用',
    xpay: '0% — 无网关费用，仅网络 Gas 费',
    btcpay: '0% — 无网关费用，仅网络费用',
    winner: '平局',
  },
  {
    feature: '托管模式',
    xpay: '非托管——密钥在 Docker 中，无第三方访问',
    btcpay: '非托管——密钥在你的服务器上',
    winner: '平局',
  },
  {
    feature: '支付检测速度',
    xpay: 'Mempool 级别，全链 1-6 秒',
    btcpay: '区块级别，通常 30 秒-10 分钟不等',
    winner: 'xpay — 全链亚秒级检测',
  },
  {
    feature: '部署方式',
    xpay: '单个 docker-compose.yml 文件',
    btcpay: '多容器架构，包含众多可选服务',
    winner: 'xpay — 部署更简单',
  },
  {
    feature: 'API 设计',
    xpay: 'Stripe 风格 REST API — 简洁、可预测、版本化',
    btcpay: 'Greenfield API — 功能强大但更复杂',
    winner: 'xpay — 开发者优先的体验',
  },
  {
    feature: 'Webhook 系统',
    xpay: 'HMAC-SHA256 签名、可配置重试、投递日志',
    btcpay: '支持 Webhook，HMAC 可选，投递保障较少',
    winner: 'xpay — 默认签名 webhook',
  },
  {
    feature: '白标结账',
    xpay: '完全自定义——CSS 变量、无 iframe、无品牌标记',
    btcpay: '预构建结账页，有一定自定义选项',
    winner: 'xpay — 真正白标',
  },
  {
    feature: '社区与生态',
    xpay: '早期阶段，社区较小，插件较少',
    btcpay: '成熟，社区庞大，插件生态丰富',
    winner: 'BTCPay Server — 成熟的生态系统',
  },
  {
    feature: 'Bitcoin & Lightning',
    xpay: '不支持——稳定币优先架构',
    btcpay: '一流的 Bitcoin 和 Lightning 支持',
    winner: 'BTCPay Server — Bitcoin 原生',
  },
  {
    feature: '法币兑换',
    xpay: '无内置功能——仅链上稳定币结算',
    btcpay: '通过插件——有选择的法币集成选项',
    winner: 'BTCPay Server — 更多出金选项',
  },
  {
    feature: '文档质量',
    xpay: '简洁清晰，Stripe 风格文档，含快速入门',
    btcpay: '社区贡献的完善 Wiki 文档',
    winner: '主观——xpay 更精致，BTCPay 更全面',
  },
  {
    feature: '多商家',
    xpay: '原生支持——一套部署可入驻无限商户，独立 API 凭证和费率结构',
    btcpay: '不支持——每个商户需独立部署',
    winner: 'xpay — 原生多商家架构',
  },
];

export default function ZhXPayVsBTCPayPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="relative gradient-bg pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <BlogNavigation
              prev={{
                href: '/zh/blog/performance-benchmarks-multi-chain-gateway',
                title: '性能基准测试：在 $5 VPS 上运行多链支付网关',
              }}
              next={null}
              prevLabel="上一篇"
              nextLabel="下一篇"
            />

            <section className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono mb-6">
                <span>对比评测</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                XPay Labs（xpay）vs BTCPay Server：2026 年哪个自托管支付网关更胜一筹？
              </h1>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500 font-mono">
                <span>2026 年 6 月 3 日</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>阅读时间 12 分钟</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                XPay Labs 和 BTCPay Server 都是优秀的自托管加密支付网关——但它们满足不同的需求。本文从各个维度进行对比，帮助你选择适合业务的那一个。
              </p>
            </section>

            <section className="mb-12">
              <div className="glass-panel rounded-2xl p-6 glow-blue">
                <h2 className="text-lg font-display font-medium text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand-blue" />
                  快速结论
                </h2>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  如果你需要基于 TRON、EVM 链或 SUI 的稳定币支付基础设施，并且需要亚秒级检测、简洁的 REST API 和真正的白标结账，选择 <strong className="text-brand-blue">XPay Labs（xpay）</strong>。如果你需要 Bitcoin 和 Lightning 支持、成熟的插件生态或服务于 Bitcoin 原生商户，选择 <strong className="text-white">BTCPay Server</strong>。对多链稳定币商户来说，xpay 更合适。对 Bitcoin 优先的商户来说，BTCPay Server 仍然无可匹敌。
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-6">
                功能对比
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">功能</th>
                      <th className="p-4 text-brand-cyan font-medium">XPay Labs（xpay）</th>
                      <th className="p-4 text-gray-400 font-medium">BTCPay Server</th>
                      <th className="p-4 text-gray-400 font-medium">胜者</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-200 font-medium whitespace-nowrap">{row.feature}</td>
                        <td className="p-4 text-gray-300">{row.xpay}</td>
                        <td className="p-4 text-gray-300">{row.btcpay}</td>
                        <td className="p-4 text-xs">
                          {row.winner.startsWith('xpay') ? (
                            <span className="text-brand-cyan font-semibold">{row.winner}</span>
                          ) : row.winner.startsWith('BTCPay') ? (
                            <span className="text-gray-300 font-semibold">{row.winner}</span>
                          ) : (
                            <span className="text-gray-500">{row.winner}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                链支持：最大的区别
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                XPay Labs 和 BTCPay Server 之间最显著的差异在于区块链支持。BTCPay Server 是为 Bitcoin 构建的——它的以太坊和 Polygon 支持是后来通过社区插件加入的。XPay Labs 则从头开始就是作为多链、稳定币优先的网关设计的。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-brand-cyan">
                  <h3 className="text-base font-display font-medium text-brand-cyan mb-3">
                    XPay Labs（xpay）链支持
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> TRON（TRC-20 USDT、USDC）</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> 以太坊及 EVM（20+ 链）</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> BNB Chain、Polygon、Arbitrum、Optimism</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Base、Avalanche、zkSync、Linea、Scroll</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> SUI 原生支持</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✕</span> 不支持 Bitcoin 或 Lightning</li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-gray-500">
                  <h3 className="text-base font-display font-medium text-gray-300 mb-3">
                    BTCPay Server 链支持
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Bitcoin（一级支持）</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Lightning Network（LNURL、LNBits）</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Liquid Network</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> 以太坊、BSC、Polygon（插件）</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✕</span> 不支持 TRON</li>
                    <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✕</span> 不支持 SUI</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-6">
                何时选择哪个网关
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel rounded-2xl p-6 glow-cyan">
                  <h3 className="text-base font-display font-medium text-brand-cyan mb-4 flex items-center gap-2">
                    <Server className="w-5 h-5" />
                    选择 XPay Labs（xpay）如果…
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> 你在 TRON、EVM 链或 SUI 上处理稳定币支付（USDT、USDC）</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> 你需要亚秒级支付检测实现实时结账</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> 你想要 Stripe 品质的 API 和 HMAC 签名 webhook</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> 你需要真正的白标结账，无第三方品牌标记</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> 你倾向于单个 docker-compose.yml 部署</li>
                    <li className="flex items-start gap-2"><span className="text-brand-cyan mt-1">→</span> 你运营服务多个商家的支付平台——XPay Labs 原生支持多商家架构</li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-purple">
                  <h3 className="text-base font-display font-medium text-gray-300 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    选择 BTCPay Server 如果…
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> 你需要 Bitcoin 和 Lightning Network 支持</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> 你想要庞大成熟的插件生态</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> 你需要经过多年生产验证的成熟基础设施</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> 你服务 Bitcoin 原生商户或客户</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">→</span> 你需要通过插件的法币出金选项</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  准备试试 XPay Labs（xpay）了吗？
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  在 30 分钟内部署你自己的自托管加密支付网关。零交易手续费、非托管安全、多链支持。无需注册、无需 KYC——只要 Docker。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>部署 XPay Labs</span>
                  </Link>
                  <Link
                    href="/zh/alternatives/btcpayserver"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>查看 BTCPay Server 替代方案</span>
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
