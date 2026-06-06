import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Trophy,
  Shield,
  DollarSign,
  Server,
  Zap,
  Globe,
  Cpu,
  Star,
  Check,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
  ArrowRight,
  Coins,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: '最佳自托管加密支付网关 — 2025 年对比评测 | XPay Labs',
  description:
    '2025 年最佳自托管加密支付网关对比。XPay Labs、BTCPay Server 及其他方案在功能、费率、链支持和易用性方面的排名。为您的业务找到合适的自托管解决方案。',
  keywords: [
    '最佳自托管加密支付网关 2025',
    '最佳加密支付网关',
    '自托管支付网关对比',
    '顶级加密支付网关 2025',
    'XPay Labs vs BTCPay Server',
    '最佳非托管支付网关',
    '加密支付基础设施对比',
  ],
  alternates: {
    canonical:
      'https://www.xpaylabs.com/guides/best-self-hosted-crypto-payment-gateway',
    languages: {
      'x-default':
        'https://www.xpaylabs.com/guides/best-self-hosted-crypto-payment-gateway',
      'en-US':
        'https://www.xpaylabs.com/guides/best-self-hosted-crypto-payment-gateway',
      'zh-CN':
        'https://www.xpaylabs.com/zh/guides/best-self-hosted-crypto-payment-gateway',
    },
  },
  openGraph: {
    title: '最佳自托管加密支付网关 — 2025 年对比评测',
    description:
      '2025 年自托管加密支付网关权威排名。按费率、安全性、链支持和开发者体验对比 XPay Labs、BTCPay Server 等方案。',
    url: 'https://www.xpaylabs.com/zh/guides/best-self-hosted-crypto-payment-gateway',
    type: 'article',
  },
  twitter: {
    title: '最佳自托管加密支付网关 — 2025 年对比评测',
    description: '2025 年自托管加密支付网关权威排名。',
    card: 'summary_large_image',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '2026 年最佳自托管加密支付网关是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '对于在 TRON、EVM 链和 SUI 上使用稳定币的商家而言，XPay Labs 是 2026 年最佳自托管加密支付网关，原因在于其零费率、非托管架构、亚秒级支付检测和 Stripe 风格的开发者 API。对于以 Bitcoin 为主的商家，BTCPay Server 仍然是最佳选择。',
      },
    },
    {
      '@type': 'Question',
      name: '选择自托管加密支付网关时应注意哪些方面？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '关键因素包括：支持的区块链（匹配您客户偏好的链）、费率结构（0% 最为理想）、托管模式（非托管至关重要）、API 质量（REST + webhook）、部署复杂度（Docker 最简便）、白标能力以及社区活跃度。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 比 BTCPay Server 更好吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '这取决于您的使用场景。XPay Labs 在 TRON、EVM 链和 SUI 上的稳定币支付方面表现出色，拥有 Stripe 风格的 API 和零费率。BTCPay Server 在 Bitcoin 和 Lightning 支付方面表现出色，拥有丰富的插件生态。如果您以多链稳定币为重点，选择 XPay Labs；如果以 Bitcoin 为核心业务，选择 BTCPay Server。',
      },
    },
    {
      '@type': 'Question',
      name: '自托管加密支付网关是否免费？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '大多数自托管网关是免费软件，且不收取交易手续费。XPay Labs 和 BTCPay Server 均对每笔交易收取 0% 费用。您只需要支付服务器托管费用（基础 VPS 每月 $10–20 美元）和区块链网络 Gas 费。这与托管网关收取 0.5–1% 交易费的模式形成鲜明对比。',
      },
    },
    {
      '@type': 'Question',
      name: '哪种自托管网关支持的区块链最多？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 支持 TRON、20+ 条 EVM 兼容链（Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base、Avalanche 等）以及 SUI，全部通过单一部署完成。BTCPay Server 支持 Bitcoin、Lightning 以及一些山寨币的插件。XPay Labs 拥有最强的多链稳定币支持能力。',
      },
    },
  ],
};
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    '2026 年最佳自托管加密支付网关——顶级方案对比',
  description:
    '2026 年自托管加密支付网关的权威排名。按费率、安全性、链支持和开发者体验对比 XPay Labs、BTCPay Server 等方案。',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'XPay Labs',
      item: 'https://www.xpaylabs.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '指南',
      item: 'https://www.xpaylabs.com/zh/guides/best-self-hosted-crypto-payment-gateway',
    },
  ],
};
const rankData = [
  {
    rank: 1,
    name: 'XPay Labs',
    tagline: '最佳多链稳定币支付方案',
    rating: '4.8',
    bestFor: '使用 TRON、EVM 和 SUI 稳定币的商家',
    fees: '0%',
    custody: '非托管',
    chains: 'TRON, 20+ EVM, SUI',
    deployment: 'Docker Compose',
    api: 'Stripe 风格 REST API + HMAC webhook',
    openSource: '授权免费使用',
    pros: [
      '所有链上零费率',
      '亚秒级支付检测',
      '简洁的 Stripe 风格 API',
      '原生 TRON + EVM + SUI 支持',
      '完整白标结账页面',
    ],
    cons: [
      '需要 DevOps 技能',
      '不支持 Bitcoin/Lightning',
      '社区规模较小',
    ],
    link: '/',
    linkText: '了解更多',
  },
  {
    rank: 2,
    name: 'BTCPay Server',
    tagline: '最佳 Bitcoin 和 Lightning 支付方案',
    rating: '4.5',
    bestFor: '以 Bitcoin 为主的商家和企业',
    fees: '0%',
    custody: '非托管',
    chains: 'Bitcoin, Lightning, 通过插件支持山寨币',
    deployment: 'Docker Compose',
    api: 'Greenfield REST API',
    openSource: 'MIT 许可证',
    pros: [
      '成熟项目，社区庞大',
      '出色的 Bitcoin/Lightning 支持',
      '丰富的插件生态系统',
      '自主身份 (Vault)',
    ],
    cons: [
      '不支持原生 TRON',
      '不支持原生 SUI',
      '稳定币支持有限',
      '非 Bitcoin 链设置复杂',
    ],
    link: '/alternatives/btcpayserver',
    linkText: 'XPay 对比 BTCPay',
  },
  {
    rank: 3,
    name: 'Coinbase Commerce',
    tagline: '最知名的托管方案（非自托管）',
    rating: '3.5',
    bestFor: '简单的托管式加密结账',
    fees: '0.8% + $25/月',
    custody: '托管',
    chains: 'BTC, ETH, USDC, DAI 及其他少数币种',
    deployment: '托管 (SaaS)',
    api: '提供 REST API',
    openSource: '闭源',
    pros: [
      '易于设置',
      'Coinbase 品牌信任度',
      '支持法币兑换',
    ],
    cons: [
      '0.8% + $25/月 费用',
      '托管模式（Coinbase 持有密钥）',
      '需要 KYC',
      '支持的链有限',
    ],
    link: '/alternatives/coinbase-commerce',
    linkText: 'XPay 对比 Coinbase Commerce',
  },
];
export default function BestSelfHostedGatewayPage() {
  return (
    <>
      <JsonLd data={articleSchema} /> <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Hero */}
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider font-mono mb-6">
                <Trophy className="w-3.5 h-3.5" />
                <span>2026 年最佳选择</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                2026 年最佳自托管加密支付网关
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                自托管加密支付网关让您完全掌控支付基础设施，且零交易手续费。我们根据费率、安全性、链支持、开发者体验和社区实力对顶级方案进行了评估，帮助您为业务选择最合适的方案。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>部署排名第一的网关</span>
                </Link>
              </div>
            </section>
            {/* Quick Comparison Table */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                快速对比
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                以下一览 2026 年顶级自托管加密支付网关的对比情况。
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">排名</th>
                      <th className="p-4 text-gray-400 font-medium">网关</th>
                      <th className="p-4 text-gray-400 font-medium">费用</th>
                      <th className="p-4 text-gray-400 font-medium">托管方式</th>
                      <th className="p-4 text-gray-400 font-medium">支持的链</th>
                      <th className="p-4 text-gray-400 font-medium">部署方式</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {rankData.map((item) => (
                      <tr
                        key={item.name}
                        className={`hover:bg-white/[0.02] transition-colors ${item.rank === 1 ? 'bg-amber-400/5' : ''}`}
                      >
                        <td className="p-4">
                          <span
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold font-mono ${item.rank === 1 ? 'bg-amber-400 text-[#040612]' : 'bg-white/10 text-gray-400'}`}
                          >
                            {item.rank}
                          </span>
                        </td>
                        <td
                          className={`p-4 font-semibold ${item.rank === 1 ? 'text-brand-cyan' : 'text-gray-300'}`}
                        >
                          {item.name}
                        </td>
                        <td
                          className={`p-4 ${item.fees === '0%' ? 'text-green-400' : 'text-gray-400'}`}
                        >
                          {item.fees}
                        </td>
                        <td
                          className={`p-4 ${item.custody === 'Non-custodial' ? 'text-green-400' : 'text-amber-400'}`}
                        >
                          {item.custody}
                        </td>
                        <td className="p-4 text-gray-400">{item.chains}</td>
                        <td className="p-4 text-gray-400">{item.deployment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            {/* Detailed Rankings */}
            {rankData.map((item) => (
              <section key={item.name} className="mb-16">
                <div
                  className={`glass-panel rounded-2xl p-6 sm:p-8 ${item.rank === 1 ? 'glow-amber border-amber-400/20' : ''} ${item.rank === 1 ? 'border border-amber-400/20' : ''}`}
                >
                  {item.rank === 1 && (
                    <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider font-mono mb-4">
                      <Trophy className="w-3 h-3" /> <span>#1 首选</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className={`text-lg font-display font-bold ${item.rank === 1 ? 'text-brand-cyan' : 'text-white'}`}
                        >
                          {item.rank}. {item.name}
                        </span>
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${i <= Math.floor(Number(item.rating)) ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`}
                            />
                          ))}
                          <span className="text-xs text-gray-500 font-mono ml-1">
                            {item.rating}/5
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 font-sans">
                        {item.tagline}
                      </p>
                    </div>
                    <Link
                      href={item.link}
                      className="shrink-0 inline-flex items-center space-x-1.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue/20 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    >
                      <span>{item.linkText}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    <div className="bg-white/[0.03] rounded-xl p-3">
                      <div className="text-xs text-gray-500 font-sans">
                        适用场景
                      </div>
                      <div className="text-xs text-white font-semibold mt-0.5">
                        {item.bestFor}
                      </div>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-3">
                      <div className="text-xs text-gray-500 font-sans">
                        费用
                      </div>
                      <div
                        className={`text-xs font-semibold mt-0.5 ${item.fees === '0%' ? 'text-green-400' : 'text-gray-400'}`}
                      >
                        {item.fees}
                      </div>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-3">
                      <div className="text-xs text-gray-500 font-sans">
                        托管方式
                      </div>
                      <div
                        className={`text-xs font-semibold mt-0.5 ${item.custody === 'Non-custodial' ? 'text-green-400' : 'text-amber-400'}`}
                      >
                        {item.custody}
                      </div>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-3">
                      <div className="text-xs text-gray-500 font-sans">API</div>
                      <div className="text-xs text-gray-300 font-semibold mt-0.5 truncate">
                        {item.api}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-green-400 mb-2 flex items-center gap-1.5">
                        <Check className="w-3 h-3" /> 优点
                      </h4>
                      <ul className="space-y-1">
                        {item.pros.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-xs text-gray-400 font-sans"
                          >
                            <Check className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-red-400 mb-2 flex items-center gap-1.5">
                        <span className="w-3 h-3 flex items-center justify-center text-xs">
                          &#8722;
                        </span>
                        缺点
                      </h4>
                      <ul className="space-y-1">
                        {item.cons.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2 text-xs text-gray-400 font-sans"
                          >
                            <span className="text-red-400 shrink-0 mt-0.5">
                              &#8722;
                            </span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {item.rank === 1 && (
                    <div className="bg-brand-cyan/5 border border-brand-cyan/10 rounded-xl p-4 text-xs text-gray-400 font-sans leading-relaxed">
                      <strong className="text-brand-cyan">
                        XPay Labs 胜出原因：
                      </strong>
                      它是唯一通过单一部署即可原生支持 TRON + EVM + SUI 的自托管网关。结合零费率、亚秒级支付检测和 Stripe 风格的开发者 API，为专注于稳定币的商家提供了最佳整体价值。
                    </div>
                  )}
                </div>
              </section>
            ))}
            {/* Honorable Mention */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                其他推荐
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/alternatives/bitpay"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">
                    BitPay
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    开创了加密商家支付，但收取 1% 费用且采用托管模式。适合看重其品牌知名度和法币结算选项的用户。
                  </p>
                </Link>
                <Link
                  href="/alternatives/nowpayments"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">
                    NowPayments
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    支持 350+ 种币种，费率为 0.5%，但采用托管模式且收取 0.5% 提现费。适合需要广泛币种接受的场景。
                  </p>
                </Link>
                <Link
                  href="/alternatives/opennode"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">
                    OpenNode
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    专注于 Bitcoin 和 Lightning，收取 1% 费用。非常适合原生 Bitcoin 企业。
                  </p>
                </Link>
                <Link
                  href="/alternatives/coingate"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">
                    CoinGate
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    支持多种币种和法币结算，但采用托管模式，费率为 1%。适合欧洲商家的良好选择。
                  </p>
                </Link>
              </div>
            </section>
            {/* How to Choose */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                如何选择适合的自托管网关
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                在评估自托管加密支付网关时，请考虑以下因素，以找到最符合您需求的解决方案：
              </p>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      链匹配
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      最重要的因素：您的客户使用哪些区块链？如果他们主要使用 TRON 上的 USDT，请优先选择原生支持 TRON 的网关。如需支持多链收款，寻找能够从单一部署扫描所有主要链的解决方案。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-cyan font-mono mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      费率结构
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      所有自托管网关应该收取 0% 交易手续费。如果某个"自托管"网关收取按交易计费的费用，那它并不是真正的自托管。请确认没有隐藏成本，如提现费、月度最低收费或收入分成要求。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-purple font-mono mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      托管模式
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      对于自托管解决方案，非托管是必要条件。请确认私钥仅在您的基础设施上生成和存储，第三方无法访问。网关绝不应持有或移动您的资金。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      开发者体验
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      评估 API 设计、webhook 可靠性、文档质量和 SDK 可用性。HMAC 签名 webhook、幂等性键和清晰的文档是生产级网关的标志。Stripe 风格的 API 模式可显著减少集成时间。
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                常见问题
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                关于自托管加密支付网关及如何选择合适方案的常见问题。
              </p>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((item, idx) => (
                  <div key={idx} className="glass-panel rounded-2xl p-5">
                    <h3 className="text-sm font-display font-medium text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {item.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            {/* CTA */}
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-amber text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  部署排名第一的自托管网关
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  XPay Labs — 稳定币商家的最佳自托管加密支付网关。零费率、非托管、多链。在您自己的服务器上部署，30 分钟内完成。
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
                    href="/guides/how-to-accept-crypto-payments"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>查看设置指南</span>
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
