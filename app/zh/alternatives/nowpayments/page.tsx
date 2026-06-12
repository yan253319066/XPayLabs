import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  X,
  Shield,
  DollarSign,
  Layers,
  Server,
  Palette,
  Webhook,
  Settings,
  Code,
  ExternalLink,
  Cpu,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: 'NowPayments 替代方案 — 自托管加密支付网关 | XPay Labs',
  description:
    '寻找 NowPayments 的替代方案？XPay Labs 提供自托管、非托管的加密货币支付网关，零交易手续费，支持 TRON、EVM 链和 SUI，全白标结账和即时结算。',
  keywords: [
    'NowPayments 替代方案',
    'NowPayments 替代',
    '自托管加密支付',
    '非托管加密支付',
    '加密支付网关对比',
  ],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/alternatives/nowpayments',
  },
  openGraph: {
    title: 'NowPayments 替代方案 — 自托管加密支付网关 | XPay Labs',
    description:
      '寻找 NowPayments 的替代方案？XPay Labs 提供自托管、非托管的加密货币支付网关，零交易手续费，支持 TRON、EVM 链和 SUI。',
    url: 'https://www.xpaylabs.com/zh/alternatives/nowpayments',
    type: 'website',
  },
  twitter: {
    title: 'NowPayments 替代方案 — 自托管加密支付网关 | XPay Labs',
    description:
      '寻找 NowPayments 的替代方案？XPay Labs 提供自托管、非托管的加密货币支付网关，零交易手续费，支持 TRON、EVM 链和 SUI。',
    card: 'summary_large_image',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'XPay Labs 为何是优秀的 NowPayments 替代方案？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 是一款自托管、非托管的加密货币支付网关。与 NowPayments 不同，您完全掌控私钥，资金直接结算到您的钱包，零交易手续费，并提供完全的白标自定义。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 比 NowPayments 更便宜吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 收取 0% 的交易手续费，无月订阅费。您只需支付网络燃料费。NowPayments 每笔交易收取 0.5%，外加 0.5% 的提现隐藏费用到外部钱包。',
      },
    },
    {
      '@type': 'Question',
      name: '我可以从 NowPayments 迁移到 XPay Labs 吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。迁移过程包括部署 XPay Labs Docker 容器、配置钱包地址、生成 API 凭据、更新结账集成和配置 webhook。提供完整的迁移文档。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 比 NowPayments 支持更多区块链吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 支持 TRON（TRC-20）、EVM 兼容链（Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base）和 SUI。虽然 NowPayments 支持更广泛的 UTXO 类币种（BTC、LTC、DOGE），但 XPay Labs 专注于在支付交易量发生的主要链上提供深度稳定币原生支持。',
      },
    },
    {
      '@type': 'Question',
      name: '与 NowPayments 相比，XPay Labs 是非托管吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 完全非托管。私钥在您自己的基础设施上生成，从不离开您的服务器。付款直接结算到您配置的钱包。NowPayments 是托管式的——他们持有您的资金直到您请求提现，并强制执行最低提现额度。',
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
    '自托管、非托管的加密支付基础设施，支持 TRON、EVM 链和 SUI。NowPayments 的自托管替代方案，零交易手续费。',
  url: 'https://www.xpaylabs.com',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
      item: 'https://www.xpaylabs.com/zh/alternatives/nowpayments',
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
export default function NowPaymentsAlternativePage() {
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
                NowPayments 替代方案
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                NowPayments 替代方案 —
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B8CFF] via-[#00D1FF] to-[#7C4DFF]">
                  商户为何转向自托管
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                NowPayments 是一个流行的基于 API 的加密支付网关，但商户日益面临托管风险、约 0.5% 的经常性费用、提现额度和有限的自定义等问题。XPay Labs 是自托管、非托管的替代方案，为您提供完全控制——零交易手续费、直接结算和天生多链。
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
          {/* TL;DR SUMMARY */}
          <section className="py-16 bg-[#040612]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-[#5B8CFF]/15 bg-gradient-to-br from-[#5B8CFF]/5 to-[#7C4DFF]/5 p-8 glow-blue">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-5 h-5 text-[#00D1FF]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00D1FF] font-mono">
                    快速总结
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <strong className="text-white">NowPayments</strong> 是一个流行的托管支付网关——但它每笔交易收取约 0.5% 的费用、以托管方式持有您的资金直到提现、强制执行最低付款额度并限制结账品牌。<strong className="text-white">XPay Labs</strong> 是一款自托管支付网关，为您提供
                  <strong className="text-[#00D1FF]">
                    零交易手续费
                  </strong>
                  、支持
                  <strong className="text-[#00D1FF]">
                    TRON、EVM 链和 SUI
                  </strong>
                  、完全非托管控制和即时结算，无提现限制。如果您处理可观的交易量、需要 TRON USDT 支持，或希望端到端拥有自己的支付栈，XPay Labs 就是您在寻找的 NowPayments 替代方案。
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
                title="NowPayments vs XPay Labs"
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
                        NowPayments
                      </th>
                      <th className="text-left py-4 px-6 text-[#00D1FF] font-semibold">
                        XPay Labs
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      {
                        feature: '定价',
                        np: '约 0.5% 每笔交易',
                        xpay: '免费（自托管，零费用）',
                      },
                      {
                        feature: '支持的链',
                        np: 'BTC、LTC、ETH、TRON、BSC、MATIC、XRP、XLM、SOL、ADA、DOGE 等',
                        xpay: 'TRON、EVM（ETH、BSC、Polygon、Arbitrum、Optimism、Base）、SUI',
                      },
                      {
                        feature: '稳定币专注度',
                        np: 'USDT、USDC、DAI（有限的原生链支持）',
                        xpay: '每条支持链上的原生 USDT/USDC',
                      },
                      {
                        feature: '非托管',
                        np: '否——NowPayments 在提现前持有资金',
                        xpay: '是——自托管，直接钱包结算',
                      },
                      {
                        feature: '最低提现额度',
                        np: '有（例如 0.01 BTC 等值）',
                        xpay: '无——资金即时到达',
                      },
                      {
                        feature: '白标',
                        np: '有限（合作伙伴计划，额外费用）',
                        xpay: '是——完全自定义',
                      },
                      {
                        feature: 'Webhook',
                        np: 'IPN 回调可用',
                        xpay: 'HMAC 签名 webhook，实时',
                      },
                      {
                        feature: '结算控制',
                        np: '手动提现，有费用',
                        xpay: '即时结算到您的钱包',
                      },
                      {
                        feature: '自托管',
                        np: '否——仅 SaaS',
                        xpay: '是——Docker 部署',
                      },
                      {
                        feature: '源代码访问',
                        np: '否',
                        xpay: '授权免费使用',
                      },
                      {
                        feature: 'API 优先设计',
                        np: 'REST API + IPN',
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
                        <td className="py-4 px-6 text-gray-400">{row.np}</td>
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
                title="详细功能分解"
                subtitle="深入了解 XPay Labs 和 NowPayments 在关键维度的对比。"
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
                      NowPayments 对每笔付款收取
                      <strong className="text-orange-400">
                        约 0.5% 的交易手续费
                      </strong>
                      。此外，将资金提现到外部钱包还需额外支付网络费加
                      <strong className="text-white">
                        0.5% 的提现手续费
                      </strong>
                      。对于月处理 10 万美元的企业，那是 500 美元的交易费加提现成本——每年超过
                      <strong className="text-white">6,000 美元</strong>。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs
                      <strong className="text-[#00D1FF]">
                        完全免费
                      </strong>
                      。由于您自托管软件，零每笔交易费、零平台费、零提现费。您的唯一成本是 VPS 托管（低至 10 美元/月）和链上验证的网络燃料费（在 TRON 或 L2 上通常不到一分钱）。月交易量 10 万美元时，您的年度节省超过
                      <strong className="text-green-400">6,000 美元</strong>。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-cyan">
                    <h4 className="text-white font-bold mb-4 text-lg">
                      月交易量 10 万美元的成本对比
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-gray-400">
                          NowPayments（0.5% + 提现费）
                        </span>
                        <span className="text-orange-400 font-bold text-lg">
                          600+ 美元/月
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
                          7,200+ 美元/年
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chain Support */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="order-2 md:order-1 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                    <div className="space-y-4">
                      {[
                        { chain: 'Bitcoin（BTC）', np: true, xp: false },
                        { chain: 'Litecoin（LTC）', np: true, xp: false },
                        {
                          chain: 'Ethereum（ETH / ERC-20）',
                          np: true,
                          xp: true,
                        },
                        {
                          chain: 'TRON（TRC-20 USDT/USDC）',
                          np: true,
                          xp: true,
                        },
                        {
                          chain: 'BNB Smart Chain（BEP-20）',
                          np: true,
                          xp: true,
                        },
                        { chain: 'Polygon', np: true, xp: true },
                        { chain: 'Arbitrum', np: false, xp: true },
                        { chain: 'Optimism', np: false, xp: true },
                        { chain: 'Base', np: false, xp: true },
                        { chain: 'SUI', np: false, xp: true },
                        {
                          chain: 'XRP、SOL、ADA、DOGE、XLM',
                          np: true,
                          xp: false,
                        },
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
                              {row.np ? (
                                <Check className="w-4 h-4 text-green-400 shrink-0" />
                              ) : (
                                <X className="w-4 h-4 text-red-400 shrink-0" />
                              )}
                              {row.np ? '是' : '否'}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-[#00D1FF] w-16">
                              {row.xp ? (
                                <Check className="w-4 h-4 text-green-400 shrink-0" />
                              ) : (
                                <X className="w-4 h-4 text-red-400 shrink-0" />
                              )}
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
                      这就是权衡变得明显的地方。NowPayments 支持令人印象深刻的广泛链——
                      <strong className="text-white">
                        BTC、LTC、ETH、TRON、BSC、XRP、SOL、ADA、DOGE、XLM
                      </strong>
                      等。对于接受各种 UTXO 类币种和山寨币的商户，NowPayments 覆盖广泛。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      然而，广度不等于深度。NowPayments 缺乏对
                      <strong className="text-white">L2 网络</strong>
                      （Arbitrum、Optimism、Base）的支持——这些网络的交易成本最低——并且不支持
                      <strong className="text-white">SUI</strong>，一个稳定币交易量不断增长的新兴链。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs 专注于在
                      <strong className="text-[#00D1FF]">
                        TRON、所有主要 EVM 链和 SUI
                      </strong>
                      上提供深度稳定币原生支持。如果您的客户使用 TRC-20 USDT（新兴市场主导的稳定币）、Arbitrum 上的 USDC 或 BSC 上的 USDT 支付，XPay Labs 提供更顺畅、更低成本的体验，直接结算——无需提现请求、无最低额、无延迟。
                    </p>
                  </div>
                </div>
                {/* Security & Custody */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00D1FF]/5 border border-[#00D1FF]/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-[#00D1FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      安全与托管模式
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      NowPayments 采用
                      <strong className="text-orange-400">
                        托管模式
                      </strong>
                      。客户付款时，资金进入 NowPayments 的钱包。要获取您的资金，您必须提交提现请求，这会产生 0.5% 的费用和网络燃料成本。NowPayments 还强制执行
                      <strong className="text-white">
                        最低提现额度
                      </strong>
                      ——通常为 0.01 BTC 等值（约 500-1,000 美元，取决于市场状况）。小商户可能发现无法频繁提现。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs
                      <strong className="text-[#00D1FF]">非托管</strong>。
                      您在自有基础设施上运行软件。私钥从不离开您的服务器。每张发票生成一个独特的存款地址，源自您自己的节点种子。资金实时直接结算到您配置的钱包地址。
                      <strong className="text-white">
                        无需提现请求、无最低额、无费用、无延迟。
                      </strong>
                      您的密钥，您的币，您的时间表。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-blue">
                    <h4 className="text-white font-bold mb-4 text-lg">
                      托管对比
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-orange-400 font-semibold text-sm">
                            托管式（NowPayments）
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            资金由 NowPayments 持有。需要手动提现。应用最低额度 + 0.5% 提现费。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-green-400 font-semibold text-sm">
                            非托管（XPay Labs）
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            您控制私钥。资金即时结算到您的钱包。没有第三方持有您的资金。
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <p className="text-xs text-red-300 leading-relaxed">
                          <strong>风险场景：</strong>如果 NowPayments 遇到监管问题、安全事件或停机，您的资金和支付流程将受到影响。使用 XPay Labs，您的运营完全独立。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* White-Label & Customization */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="order-2 md:order-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-[#5B8CFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      白标与自定义
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      NowPayments 提供白标选项，但被锁定在其更高层级的
                      <strong className="text-white">合作伙伴计划</strong>中，需要定制定价。标准结账页面显示 NowPayments 品牌和托管 URL。您对呈现给客户的支付体验的外观和感觉控制有限。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs
                      <strong className="text-[#00D1FF]">
                        默认完全白标
                      </strong>
                      。由于您拥有部署，您控制结账的每个方面——品牌颜色、标志、自定义域名、邮件模板和确认页面。没有"Powered by XPay Labs"徽章。您的客户看到的是强化您品牌的无缝结账体验，而非第三方网关。
                    </p>
                  </div>
                  <div className="order-1 md:order-2 rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-cyan">
                    <h4 className="text-white font-bold mb-4 text-lg">
                      自定义对比
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-orange-400 font-semibold text-sm">
                            NowPayments
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            白标仅在合作伙伴计划中可用（定制定价）。标准结账显示第三方品牌。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-green-400 font-semibold text-sm">
                            XPay Labs
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            开箱即用的完全白标。自定义域名、颜色、标志和邮件模板——无需额外费用。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Settlement & Webhooks */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#7C4DFF]/5 border border-[#7C4DFF]/10 flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-[#7C4DFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      结算与 Webhook 集成
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      NowPayments 提供 IPN（即时支付通知）回调和 REST API 用于支付管理。然而，结算不是即时的——您必须从 NowPayments 余额手动提现，每次支付 0.5% 的提现费加网络成本。这增加了运营开销并侵蚀利润。
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      XPay Labs 提供
                      <strong className="text-[#00D1FF]">
                        HMAC 签名 webhook
                      </strong>
                      用于安全的服务器到服务器通知，一个
                      <strong className="text-white">webhook 模拟器</strong>
                      用于端到端测试，以及全面的 REST API。结算实时发生——一旦达到链上确认阈值，资金直接到达您的钱包。无需提现步骤、无需费用、无需延迟。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
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
                          text: 'HMAC 签名实时 webhook',
                        },
                        {
                          icon: <Server className="w-4 h-4" />,
                          text: 'Docker 容器部署',
                        },
                        {
                          icon: <Settings className="w-4 h-4" />,
                          text: '即时结算——无需提现步骤',
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
          {/* PRICING COMPARISON */}
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
                    NowPayments
                  </h3>
                  <p className="text-3xl font-extrabold text-orange-400 mb-4">
                    0.5%
                  </p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      每笔交易 0.5% 费用
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      提现 0.5% 费用
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      最低提现额度
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      白标额外收费
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      广泛的山寨币支持
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
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      零交易手续费
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      无平台或月费
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      仅网络燃料成本
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      免费 webhook 基础设施
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      无限 API 调用
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/5 bg-[#0A0D1F]/60 backdrop-blur-sm p-8 glow-purple">
                  <h3 className="text-lg font-bold text-white mb-1">
                    年度节省
                  </h3>
                  <p className="text-3xl font-extrabold text-green-400 mb-4">
                    7 千+
                  </p>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      基于月交易量 10 万美元
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      随您的增长而扩展
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      无提现费用
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      无突然的费用上涨
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* HONEST ASSESSMENT */}
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
                      '您月处理超过 1 万美元，希望消除 0.5% 的费用负担',
                      '您的客户主要使用 TRON（TRC-20 USDT）或 L2 上的稳定币支付',
                      '您想要即时、直接结算——无需提现请求或最低额',
                      '您需要非托管控制：您的密钥、您的资金、您的基础设施',
                      '您希望在自有品牌下实现完全白标结账体验',
                      '您拥有能够管理基于 Docker 部署的开发团队',
                      '您想要可审计、可自定义的自托管基础设施',
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
                    留在 NowPayments 如果……
                  </h3>
                  <ul className="space-y-3">
                    {[
                      '您需要接受各种 UTXO 类币种（BTC、LTC、DOGE）和山寨币',
                      '您更喜欢完全托管的托管 API 方案，无需服务器维护',
                      '您的交易量较低，0.5% 的费用相比设置工作量可以忽略',
                      '您没有 DevOps 资源来部署和维护自托管系统',
                      '您的客户主要使用 XPay Labs 不支持的 Non-EVM 币种支付',
                      '您依赖 NowPayments 的法币兑换和自动提现功能',
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
                title="如何从 NowPayments 迁移到 XPay Labs"
                subtitle="过渡过程简单直接。以下是操作手册。"
              />
              <div className="mt-12 max-w-3xl mx-auto space-y-6">
                {[
                  {
                    num: '01',
                    title: '部署 XPay Labs',
                    text: '克隆仓库并通过 Docker Compose 在您的 VPS 或云服务器上部署。设置脚本处理数据库初始化、Redis 配置和 webhook 端点注册。完整文档可在仓库中找到。',
                  },
                  {
                    num: '02',
                    title: '配置您的钱包地址',
                    text: '在 XPay Labs 仪表板中添加您的 TRON、EVM 和 SUI 钱包地址。这些是资金将到达的结算地址。您保留对私钥的完全控制——XPay Labs 从不持有您的资金。',
                  },
                  {
                    num: '03',
                    title: '生成 API 凭据',
                    text: '从 XPay Labs 管理面板为您的应用程序创建 API 密钥。每个集成获得自己的密钥，具有可配置的权限（读取、写入、webhook）。这将替换您的 NowPayments API 密钥。',
                  },
                  {
                    num: '04',
                    title: '更新您的结账集成',
                    text: '将 NowPayments API 调用替换为 XPay Labs REST API 端点。发票生命周期类似——创建订单、获取收款地址、通过 webhook 监听链上确认。我们的 HMAC 签名 webhook 提供与 NowPayments IPN 相同的可靠性。',
                  },
                  {
                    num: '05',
                    title: '配置 Webhook 并上线',
                    text: '在 XPay Labs 中设置 webhook 端点以接收 payment.pending、payment.confirmed 和 payment.failed 事件。在您支持的每条链上运行测试支付。确认无误后，重定向生产流量并停用您的 NowPayments API 密钥。',
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
                      <ArrowRight className="w-5 h-5 text-[#5B8CFF]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
                      准备掌控您的支付基础设施？
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed max-w-xl mx-auto">
                      停止支付每笔交易 0.5% 的费用。停止等待提现。几分钟内部署 XPay Labs——零费用、非托管、多链。加入已经从 NowPayments 切换的商户行列。
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
                  href="/alternatives/coinbase-commerce"
                  className="text-[#5B8CFF] hover:text-[#00D1FF] transition-colors"
                >
                  XPay vs Coinbase Commerce
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
