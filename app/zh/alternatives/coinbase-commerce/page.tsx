import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  X,
  Shield,
  Cpu,
  Zap,
  Palette,
  Webhook,
  DollarSign,
  Layers,
  Server,
  Code,
  GitBranch,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: 'Coinbase Commerce 替代方案 — 自托管加密支付网关 | XPay Labs',
  description:
    'Coinbase Commerce 门户在 2026 年 3 月 31 日后已不可用。旧 Commerce 为 1% 且自托管。XPay Labs 提供自托管、非托管替代方案，支持 TRON、EVM 链和 SUI，零网关手续费，全白标结账。',
  keywords:
    'Coinbase Commerce 替代方案, Coinbase Commerce 停用, 自托管加密支付, 非托管支付网关, 加密支付提供商',
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/alternatives/coinbase-commerce',
  },
  openGraph: {
    title: 'Coinbase Commerce 替代方案 — 自托管加密支付网关 | XPay Labs',
    description:
      '寻找 Coinbase Commerce 的替代方案？XPay Labs 提供自托管、非托管的加密货币支付网关，支持 TRON、EVM 链和 SUI。',
    url: 'https://www.xpaylabs.com/zh/alternatives/coinbase-commerce',
    type: 'website',
  },
  twitter: {
    title: 'Coinbase Commerce 替代方案 — 自托管加密支付网关 | XPay Labs',
    description:
      '寻找 Coinbase Commerce 的替代方案？XPay Labs 提供自托管、非托管的加密货币支付网关，支持 TRON、EVM 链和 SUI。',
    card: 'summary_large_image',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'XPay Labs 是 Coinbase Commerce 的免费替代方案吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 可在 MIT License 下免费自托管。您支付零交易手续费——仅需网络燃料成本。Coinbase Commerce 在 2026 年 3 月 31 日后已停用（旧 Commerce 为 1%）。Coinbase Business 为托管继任产品，符合条件的美/新商户约 1%。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 比 Coinbase Commerce 支持更多区块链吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 支持 TRON（USDT、USDC）、EVM 兼容链（Ethereum、BSC、Polygon、Arbitrum、Optimism）和 SUI。Coinbase Commerce 支持 Bitcoin、Ethereum、USDC 和少数其他资产。XPay Labs 提供更广泛的以稳定币为中心的链支持，且交易手续费更低。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 如何实现非托管？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 在您的基础设施上自托管。私钥从不离开您的服务器。资金直接结算到您配置的钱包地址。我们在支付生命周期的任何时刻都不持有或控制您的资金。',
      },
    },
    {
      '@type': 'Question',
      name: '我可以将 XPay Labs 白标为我自己的支付网关吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '完全可以。由于 XPay Labs 是自托管的，您可以完全自定义结账页面、品牌、域名和邮件模板。没有平台费或收入分成要求。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 能处理多大的交易量？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 专为生产级规模而设计。它采用基于 Redis 任务队列的容器化微服务架构，可以同时在多条链上处理数千个并发支付验证。',
      },
    },
  ],
};
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'XPay Labs',
  applicationCategory: 'PaymentProcessing',
  operatingSystem: 'Docker, Linux, macOS',
  description:
    '自托管、非托管的加密支付基础设施，支持 TRON、EVM 链和 SUI。Coinbase Commerce 的自托管替代方案。',
  url: 'https://www.xpaylabs.com',
  image: 'https://www.xpaylabs.com/logo.png',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    ratingCount: 1,
    reviewCount: 1,
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'XPay Labs' },
      reviewRating: { '@type': 'Rating', ratingValue: '4.8', bestRating: '5' },
      datePublished: '2026-05-31',
      description: '自托管、非托管的加密支付基础设施，支持 TRON、EVM 链和 SUI。',
    },
  ],
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
      name: '替代方案',
      item: 'https://www.xpaylabs.com/zh/alternatives/coinbase-commerce',
    },
  ],
};
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest font-mono">
      <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full" /> {children}
    </span>
  );
}
function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
function CheckIcon() {
  return <Check className="w-5 h-5 text-green-400 shrink-0" />;
}
function XIcon() {
  return <X className="w-5 h-5 text-red-400 shrink-0" />;
}
export default function CoinbaseCommerceAlternative() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} /> <JsonLd data={productSchema} />
        <JsonLd data={breadcrumbSchema} /> <Header />
        <main>
          {/* HERO */}
          <section className="relative pt-32 pb-20 gradient-bg">
            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#5B8CFF] opacity-5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-pulse" />
                Coinbase Commerce 替代方案
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Coinbase Commerce 替代方案 —
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B8CFF] via-[#00D1FF] to-[#7C4DFF]">
                  掌控您的加密支付
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Coinbase Commerce 已于 2026 年 3 月 31 日停用——门户不再可访问。旧 Commerce 为
                <strong className="text-white">1% 且自托管</strong>
                。商户需要可持续的替代方案。<strong className="text-white">XPay Labs</strong>
                自托管且非托管：零网关手续费，支持 TRON、EVM 链和 SUI，全白标。若对比托管产品，继任方案为 Coinbase
                Business（约 1%、托管、美/新资格限制）。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="px-8 py-3 bg-[#5B8CFF] hover:bg-[#4A7CEE] text-slate-900 font-extrabold rounded-full inline-flex items-center gap-2 shadow-[0_0_20px_rgba(91,140,255,0.4)] hover:shadow-[0_0_30px_rgba(91,140,255,0.6)] transition-all duration-300"
                >
                  <span>免费开始</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3 border border-white/10 text-gray-300 hover:text-white font-medium rounded-full hover:border-white/20 transition-all duration-300"
                >
                  了解 XPay Labs
                </Link>
              </div>
            </div>
          </section>
          {/* WHY MERCHANTS SEEK ALTERNATIVES */}
          <section className="py-20 bg-[#060816] relative">
            <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#00D1FF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex justify-center mb-6">
                <Badge>为何切换</Badge>
              </div>
              <SectionHeading
                title="商户为何寻找 Coinbase Commerce 替代方案"
                subtitle="加密支付格局正在变化。以下是企业探索其他选择的原因。"
              />
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: <Layers className="w-6 h-6 text-[#5B8CFF]" />,
                    title: 'Commerce 已停用',
                    text: 'Coinbase Commerce 门户在 2026 年 3 月 31 日后不可访问。基于 Commerce 的商户必须迁移——托管工具与产品方向转向符合条件账户的 Coinbase Business。',
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-[#00D1FF]" />,
                    title: '托管继任产品取舍',
                    text: '旧 Commerce 为自托管、费率 1%。对比继任产品 Coinbase Business 约为 1%、托管，且受美/新资格限制。自托管可避开托管与地域锁定。',
                  },
                  {
                    icon: <Cpu className="w-6 h-6 text-[#7C4DFF]" />,
                    title: '有限的链支持',
                    text: '旧 Commerce 主要支持 Bitcoin、Ethereum、USDC 和少数资产。若需要 TRON USDT、BSC、Polygon、Arbitrum 或 SUI——需要另一套栈。',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-6 glow-blue"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* TL;DR SUMMARY */}
          <section className="py-16 bg-[#040612]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-[#5B8CFF]/15 bg-gradient-to-br from-[#5B8CFF]/5 to-[#7C4DFF]/5 p-8 glow-blue">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-[#00D1FF]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00D1FF] font-mono">
                    快速总结
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <strong className="text-white">Coinbase Commerce</strong> 已于 2026 年 3 月 31 日停用。旧 Commerce 为
                  <strong className="text-white">1% 且自托管</strong>
                  ——并非 0.8%+$25，也不是托管钱包产品。商户需要替代方案。
                  <strong className="text-white">XPay Labs</strong> 是自托管网关，提供
                  <strong className="text-[#00D1FF]">零交易手续费</strong>、支持
                  <strong className="text-[#00D1FF]">TRON、EVM 链和 SUI</strong>
                  、完全白标自定义以及直接的非托管结算。若对比托管产品，Coinbase Business 约 1%、托管（美/新）。
                </p>
              </div>
            </div>
          </section>
          {/* FEATURE COMPARISON TABLE */}
          <section className="py-20 bg-[#060816]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-6">
                <Badge>功能对比</Badge>
              </div>
              <SectionHeading
                title="Coinbase Commerce vs XPay Labs"
                subtitle="商户最关心功能的逐项对比。"
              />
              <div className="overflow-x-auto mt-12 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left py-4 px-6 text-gray-400 font-medium">
                        功能
                      </th>
                      <th className="text-left py-4 px-6 text-orange-400 font-semibold">
                        Coinbase Commerce
                      </th>
                      <th className="text-left py-4 px-6 text-[#00D1FF] font-semibold">
                        XPay Labs
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      {
                        feature: '状态',
                        coinbase: '门户在 2026-03-31 后不可访问',
                        xpay: '持续维护，自托管',
                      },
                      {
                        feature: '定价',
                        coinbase: '旧版：1%（已停用）；Business 约 1%',
                        xpay: '免费（自托管，零费用）',
                      },
                      {
                        feature: '支持的链',
                        coinbase: 'Bitcoin、Ethereum、USDC、少数其他',
                        xpay: 'TRON、EVM（ETH、BSC、Polygon、Arbitrum、Optimism）、SUI',
                      },
                      {
                        feature: '稳定币支持',
                        coinbase: 'USDC（Commerce/Business 侧重）',
                        xpay: 'USDT、USDC（每条链原生）',
                      },
                      {
                        feature: '托管模式',
                        coinbase: '旧 Commerce：自托管；Business：托管',
                        xpay: '非托管——自托管，直接结算',
                      },
                      {
                        feature: '白标',
                        coinbase: '有限 / Coinbase 品牌结账',
                        xpay: '是——完全自定义',
                      },
                      {
                        feature: 'Webhook',
                        coinbase: '有限的 webhook 事件',
                        xpay: '实时、可配置的 webhook',
                      },
                      {
                        feature: '结算控制',
                        coinbase: 'Commerce：链上直达；Business：托管余额',
                        xpay: '即时结算到您的钱包',
                      },
                      {
                        feature: '自托管',
                        coinbase: '否——仅 SaaS',
                        xpay: '是——Docker 部署',
                      },
                      {
                        feature: '源代码访问',
                        coinbase: '否',
                        xpay: 'MIT License（源码在 GitHub）',
                      },
                      {
                        feature: 'API 优先设计',
                        coinbase: 'REST API 可用',
                        xpay: 'REST API + webhook 模拟',
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="py-4 px-6 text-white font-medium">
                          {row.feature}
                        </td>
                        <td className="py-4 px-6 text-gray-400">
                          {row.coinbase}
                        </td>
                        <td className="py-4 px-6 text-gray-200">{row.xpay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* DETAILED COMPARISON */}
          <section className="py-20 bg-[#040612]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-6">
                <Badge>深度分析</Badge>
              </div>
              <SectionHeading
                title="详细对比"
                subtitle="深入了解 XPay Labs 和 Coinbase Commerce 在关键维度的差异。"
              />
              <div className="space-y-16 mt-12">
                {/* Pricing */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center mb-4">
                      <DollarSign className="w-6 h-6 text-[#5B8CFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      定价
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      旧版
                      <strong className="text-orange-400">Coinbase Commerce 收取 1%</strong>
                      且为自托管——并非 0.8% + $25/月。Commerce 门户在 2026 年 3 月 31 日后不可访问。持续托管定价请对比
                      <strong className="text-white">Coinbase Business</strong>
                      （约 1%、托管、美/新资格）。月处理 10 万美元时约合每月
                      <strong className="text-white">1,000 美元</strong>
                      ——每年约 12,000 美元（不含网络成本）。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs
                      <strong className="text-[#00D1FF]">
                        完全免费
                      </strong>
                      。由于您在自有基础设施上自托管软件，没有每笔交易费用、月平台费或收入分成。您只需支付验证链上交易所需的网络燃料费（在 TRON 或 BSC 上通常不到一分钱）。对于同样的月交易量 10 万美元，您的平台费用实际为零。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-cyan">
                    <h4 className="text-white font-bold mb-4 text-lg">
                      月交易量 10 万美元的成本对比
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-gray-400">
                          旧 Commerce / Business（约 1%）
                        </span>
                        <span className="text-orange-400 font-bold text-lg">
                          1,000 美元/月
                        </span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-gray-400">XPay Labs</span>
                        <span className="text-[#00D1FF] font-bold text-lg">
                          0 美元/月
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-gray-400">
                          使用 XPay Labs 的年度节省
                        </span>
                        <span className="text-green-400 font-bold text-xl">
                          12,000 美元/年
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Supported Blockchains */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="order-2 md:order-1 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                    <div className="space-y-4">
                      {[
                        { chain: 'Ethereum（ERC-20）', cc: true, xp: true },
                        { chain: 'USDC', cc: true, xp: true },
                        { chain: 'Bitcoin（BTC）', cc: true, xp: false },
                        {
                          chain: 'TRON（TRC-20 USDT/USDC）',
                          cc: false,
                          xp: true,
                        },
                        {
                          chain: 'Binance Smart Chain（BEP-20）',
                          cc: false,
                          xp: true,
                        },
                        { chain: 'Polygon', cc: false, xp: true },
                        { chain: 'Arbitrum', cc: false, xp: true },
                        { chain: 'Optimism', cc: false, xp: true },
                        { chain: 'SUI', cc: false, xp: true },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                        >
                          <span className="text-sm text-gray-300">
                            {row.chain}
                          </span>
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5 text-xs text-orange-400 w-16">
                              {row.cc ? <CheckIcon /> : <XIcon />}
                              {row.cc ? '是' : '否'}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-[#00D1FF] w-16">
                              {row.xp ? <CheckIcon /> : <XIcon />}
                              {row.xp ? '是' : '否'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#7C4DFF]/5 border border-[#7C4DFF]/10 flex items-center justify-center mb-4">
                      <Layers className="w-6 h-6 text-[#7C4DFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      支持的区块链
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      Coinbase Commerce 支持 Bitcoin、Ethereum 和有限的 ERC-20 代币。值得注意的是，它
                      <strong className="text-white">不支持 TRON</strong>——
                      这是全球处理大部分稳定币交易的网络。如果您的客户使用 TRC-20 USDT（亚洲、拉丁美洲和新兴市场主导的稳定币）支付，Coinbase Commerce 不是选项。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs 原生支持
                      <strong className="text-[#00D1FF]">TRON（TRC-20）</strong>、
                      所有主要
                      <strong className="text-[#00D1FF]">EVM 链</strong>
                      （Ethereum、BSC、Polygon、Arbitrum、Optimism）和
                      <strong className="text-[#00D1FF]">SUI</strong>。这意味着您的客户可以使用他们已经在使用的稳定币和链支付——无需桥接、无需兑换、无需摩擦。
                    </p>
                  </div>
                </div>
                {/* Security */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00D1FF]/5 border border-[#00D1FF]/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-[#00D1FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      安全模型
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      旧 Coinbase Commerce 为
                      <strong className="text-orange-400">自托管</strong>
                      、费率 1%——资金并不像多数托管网关那样停留在 Coinbase 托管余额中。2026-03-31 截止后，对比托管选项时面临
                      <strong className="text-white">Coinbase Business</strong>
                      ：约 1%、托管，受美/新资格限制并依赖交易对手。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs 是
                      <strong className="text-[#00D1FF]">非托管</strong>的。
                      您在自有服务器上运行软件。私钥保留在您的基础设施上。付款在链上被检测并直接结算到您配置的钱包地址。任何第三方在任何时候都不持有您的资金。您对支付操作拥有完全主权。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-blue">
                    <h4 className="text-white font-bold mb-4 text-lg">
                      安全概览
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <XIcon />
                        <div>
                          <span className="text-orange-400 font-semibold text-sm">
                            旧 Commerce vs Business
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            Commerce（已停用）：自托管、1%。Business：托管约 1%，美/新资格。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckIcon />
                        <div>
                          <span className="text-green-400 font-semibold text-sm">
                            非托管（XPay Labs）
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            您控制私钥。资金即时结算到您的钱包。没有第三方持有资金。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* White-Label & Developer Experience */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="order-2 md:order-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-[#5B8CFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      白标与开发者体验
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      Coinbase Commerce 展示品牌化的结账页面。您无法自定义以匹配您的品牌。API 功能齐全，但与自托管解决方案所能提供的相比有限。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs
                      <strong className="text-white">完全白标</strong>。
                      由于您拥有部署，您可以自定义结账体验的每个方面——颜色、标志、域名、邮件模板和确认页面。API 是 REST 优先的，具有实时 webhook、webhook 模拟器和完整的支付生命周期管理。
                    </p>
                  </div>
                  <div className="order-1 md:order-2 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-cyan">
                    <h4 className="text-white font-bold mb-4 text-lg">
                      开发者功能
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          icon: <Code className="w-4 h-4" />,
                          text: '包含完整支付生命周期的 REST API',
                        },
                        {
                          icon: <Webhook className="w-4 h-4" />,
                          text: '实时 webhook 事件（可配置）',
                        },
                        {
                          icon: <Server className="w-4 h-4" />,
                          text: 'Docker 容器部署',
                        },
                        {
                          icon: <GitBranch className="w-4 h-4" />,
                          text: 'MIT License 源码（GitHub）',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-gray-300"
                        >
                          <span className="w-8 h-8 rounded-lg bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center text-[#5B8CFF] shrink-0">
                            {item.icon}
                          </span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* PRICING SECTION */}
          <section className="py-20 bg-[#060816] relative">
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#00D1FF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex justify-center mb-6">
                <Badge>定价</Badge>
              </div>
              <SectionHeading
                title="透明定价——无隐藏费用"
                subtitle="每个方案您实际支付的费用。"
              />
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-blue">
                  <h3 className="text-lg font-bold text-white mb-1">
                    旧版 Commerce
                  </h3>
                  <p className="text-3xl font-extrabold text-orange-400 mb-4">
                    1%
                  </p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <XIcon /> 门户在 2026-03-31 后不可访问
                    </li>
                    <li className="flex items-start gap-2">
                      <XIcon /> 旧费率为 1%（自托管）
                    </li>
                    <li className="flex items-start gap-2">
                      <XIcon /> 继任：Business 约 1%、托管（美/新）
                    </li>
                    <li className="flex items-start gap-2">
                      <XIcon /> 链与稳定币覆盖有限
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 可用时托管结账较便捷
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#5B8CFF]/20 bg-gradient-to-b from-[#5B8CFF]/5 to-transparent p-8 relative glow-cyan">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#5B8CFF] text-black text-xs font-bold uppercase tracking-wider">
                    推荐
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    XPay Labs
                  </h3>
                  <p className="text-3xl font-extrabold text-[#00D1FF] mb-4">
                    免费
                  </p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 零交易手续费
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 无平台或月费
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 仅网络燃料成本
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 免费 webhook 基础设施
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 无限 API 调用
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                  <h3 className="text-lg font-bold text-white mb-1">
                    年度节省
                  </h3>
                  <p className="text-3xl font-extrabold text-green-400 mb-4">
                    1.2 万+
                  </p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 基于月交易量 10 万美元
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 随您的增长而扩展
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 无交易量上限
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon /> 无突然的费用上涨
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* WHO SHOULD SWITCH / STAY */}
          <section className="py-20 bg-[#040612]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-6">
                <Badge>决策指南</Badge>
              </div>
              <SectionHeading
                title="谁该切换——谁该留下"
                subtitle="帮助您做出决定的诚实评估。"
              />
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="rounded-2xl border border-[#00D1FF]/15 bg-gradient-to-br from-[#00D1FF]/5 to-transparent p-8 glow-cyan">
                  <div className="w-12 h-12 rounded-2xl bg-green-400/5 border border-green-400/10 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    切换到 XPay Labs 如果……
                  </h3>
                  <ul className="space-y-3">
                    {[
                      '您处理高交易量，希望消除 1% 的费用负担',
                      '您的客户主要使用 TRON（TRC-20 USDT）支付——这是最常用的稳定币网络',
                      '您需要多链支持，包括 BSC、Polygon、Arbitrum 和 SUI',
                      '您想要非托管控制——您的密钥、您的资金、您的基础设施',
                      '您需要在自有品牌下实现白标结账体验',
                      '您拥有能够管理基于 Docker 部署的开发团队',
                      '您想要实时 webhook 事件和完整的 API 支付控制',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-orange-400/15 bg-gradient-to-br from-orange-400/5 to-transparent p-8">
                  <div className="w-12 h-12 rounded-2xl bg-orange-400/5 border border-orange-400/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    留在 Coinbase Commerce 如果……
                  </h3>
                  <ul className="space-y-3">
                    {[
                      '您只接受 Bitcoin 和 Ethereum 支付，无需其他链',
                      '您更喜欢完全托管的托管方案，不想管理基础设施',
                      '您的交易量较低，1% 的费用相比便利性可以忽略',
                      '您需要 Coinbase 内置的法币结算，不想自行处理兑换',
                      '您的合规团队要求使用受监管的、位于美国的支付处理器',
                      '您没有技术资源来部署和维护自托管系统',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <Shield className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* MIGRATION GUIDE */}
          <section className="py-20 bg-[#060816] relative">
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex justify-center mb-6">
                <Badge>迁移指南</Badge>
              </div>
              <SectionHeading
                title="如何从 Coinbase Commerce 迁移到 XPay Labs"
                subtitle="迁移过程不到一个下午。以下是操作手册。"
              />
              <div className="mt-12 max-w-3xl mx-auto space-y-6">
                {[
                  {
                    num: '01',
                    title: '部署 XPay Labs',
                    text: '克隆仓库并通过 Docker Compose 在您的 VPS 或云服务器上部署。设置脚本处理数据库初始化、Redis 配置和 webhook 端点设置。完整文档可在仓库中找到。',
                  },
                  {
                    num: '02',
                    title: '配置您的钱包',
                    text: '在 XPay Labs 仪表板中添加您的 TRON、EVM 和 SUI 钱包地址。这些是资金将结算到的地址。您保持对私钥的完全控制。',
                  },
                  {
                    num: '03',
                    title: '生成 API 凭据',
                    text: '从 XPay Labs 管理面板为您的应用程序创建 API 密钥。每个集成获得自己的 API 密钥，具有可配置的权限（读取、写入、webhook）。',
                  },
                  {
                    num: '04',
                    title: '更新您的结账集成',
                    text: '将 Coinbase Commerce 结账按钮替换为 XPay Labs 支付链接或 API 集成。REST API 使其简单直接——创建订单、获取收款地址、监听 webhook 确认。',
                  },
                  {
                    num: '05',
                    title: '配置 Webhook',
                    text: '在 XPay Labs 中设置 webhook 端点以接收实时支付通知。支持的事件包括 payment.pending、payment.confirmed、payment.failed 和 settlement.completed。',
                  },
                  {
                    num: '06',
                    title: '测试并上线',
                    text: '在您支持的每条链上运行几次测试支付。XPay Labs 包含一个 webhook 模拟器用于端到端测试。确认无误后，更新您的 DNS 并上线。',
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="text-[#5B8CFF] font-mono font-bold text-lg shrink-0 w-10">
                      {step.num}
                    </span>
                    <div className="border-l border-white/5 pl-6 pb-6">
                      <h4 className="text-white font-bold text-base mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="py-20 bg-[#040612] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="bg-gradient-to-b from-[#5B8CFF]/10 to-transparent p-[1.5px] rounded-[32px] border border-white/5 backdrop-blur-sm">
                <div className="relative rounded-[30px] border border-white/10 overflow-hidden bg-[#0A0D1F] p-8 sm:p-12 text-center shadow-2xl">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C4DFF]/5 rounded-full blur-[120px] pointer-events-none" />
                  <div className="max-w-2xl mx-auto space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 mx-auto flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#5B8CFF]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
                      准备掌控您的加密支付？
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed max-w-xl mx-auto">
                      几分钟内部署 XPay Labs。零费用、非托管、多链。加入已经从 Coinbase Commerce 切换的商户行列。
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
                      <Link
                        href="https://docs.xpaylabs.com/"
                        className="px-8 py-3 bg-[#5B8CFF] hover:bg-[#4A7CEE] text-slate-900 font-extrabold rounded-full inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(91,140,255,0.4)] hover:shadow-[0_0_30px_rgba(91,140,255,0.6)] transition-all duration-300"
                      >
                        <span>免费开始</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/"
                        className="px-8 py-3 border border-white/10 text-gray-300 hover:text-white font-medium rounded-full hover:border-white/20 transition-all duration-300"
                      >
                        探索 XPay Labs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* INTERNAL LINKS */}
          <section className="py-12 bg-[#060816] border-t border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <span className="text-slate-500">相关对比：</span>
                <Link
                  href="/alternatives/bitpay"
                  className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors"
                >
                  XPay vs BitPay
                </Link>
                <span className="text-slate-600">·</span>
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors"
                >
                  文档
                </Link>
                <span className="text-slate-600">·</span>
                <Link
                  href="/"
                  className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors"
                >
                  XPay Labs 首页
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
}
