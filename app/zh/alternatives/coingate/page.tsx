import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  ArrowRight,
  Check,
  X,
  Server,
  Key,
  Coins,
  Palette,
  Settings,
  DollarSign,
  Code,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: 'CoinGate 替代方案 — 自托管加密支付网关 | XPay Labs',
  description:
    '寻找 CoinGate 的替代方案？XPay Labs 提供自托管、非托管的加密货币支付网关，零交易手续费，多链稳定币支持，白标结账。',
  keywords: [
    'CoinGate 替代方案',
    'CoinGate 替代',
    '自托管加密支付',
    '非托管加密支付',
    '加密支付网关对比',
  ],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/alternatives/coingate',
    languages: {
      'x-default': 'https://www.xpaylabs.com/alternatives/coingate',
      'en-US': 'https://www.xpaylabs.com/alternatives/coingate',
    },
  },
  openGraph: {
    title: 'CoinGate 替代方案 — 自托管加密支付网关 | XPay Labs',
    description:
      'CoinGate 替代方案，提供非托管、自托管加密支付，告别第三方托管风险。',
    url: 'https://www.xpaylabs.com/zh/alternatives/coingate',
    type: 'website',
  },
  twitter: {
    title: 'CoinGate 替代方案 — 自托管加密支付网关 | XPay Labs',
    description:
      'CoinGate 替代方案，提供非托管、自托管加密支付，告别第三方托管风险。',
    card: 'summary_large_image',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'XPay Labs 为何是优秀的 CoinGate 替代方案？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 是一款自托管、非托管的加密货币支付网关。与 CoinGate 不同，您完全掌控私钥，资金实时直接结算到您的钱包，零交易手续费，并在 TRON、EVM 链和 SUI 上提供深度稳定币支持——无托管风险或提现延迟。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 比 CoinGate 更便宜吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 收取 0% 的交易手续费，无月订阅费——您只需支付网络燃料费。CoinGate 对加密到加密结算每笔交易收取 1%，法币兑换费用更高。对于月处理 5 万美元的企业，XPay Labs 每年可节省数千美元。',
      },
    },
    {
      '@type': 'Question',
      name: '我可以从 CoinGate 迁移到 XPay Labs 吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。迁移过程包括在您的服务器上部署 XPay Labs Docker 容器、生成节点种子、以及更新结账集成为 XPay Labs API 端点。两个平台遵循相似的基于发票的架构，因此概念模型可以直接映射。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 支持像 CoinGate 一样多的加密货币吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CoinGate 支持 50 多种加密货币，但区块链深度有限——许多币种仅在单个网络上。XPay Labs 采用链深度优先的方法，专注于 TRON（TRC-20）、所有主要 EVM 兼容链（Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base）和 SUI。这以更好的可靠性和更低的成本覆盖了绝大多数的稳定币和山寨币支付交易量。',
      },
    },
    {
      '@type': 'Question',
      name: '与 CoinGate 相比，XPay Labs 真正非托管吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。CoinGate 是托管式的——他们持有结算资金并按计划付款。您的私钥由 CoinGate 控制。XPay Labs 完全非托管：每张发票生成一个唯一的存款地址，源自您 Docker 容器内的自有 BIP-39 节点种子。资金实时直接结算到您的钱包。没有第三方触碰您的资金。',
      },
    },
  ],
};
const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  about: { '@type': 'Thing', name: 'CoinGate vs XPay Labs Comparison' },
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
      item: 'https://www.xpaylabs.com/zh/alternatives/coingate',
    },
  ],
};
export default function CoinGateAlternativePage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} /> <JsonLd data={comparisonSchema} />
        <JsonLd data={breadcrumbSchema} /> <Header />
        <main className="relative gradient-bg pt-24 pb-20">
          {/* Hero Section */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono mb-6">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>CoinGate 替代方案</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              CoinGate 替代方案 —
              <span className="text-gradient-purple-blue">自托管</span>
              加密货币支付网关
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              CoinGate 提供 50 多种加密货币，但费用为 1%、采用托管模式且区块链深度有限。
              <strong className="text-white"> XPay Labs</strong> 是
              自托管、非托管的替代方案——零交易手续费、深度稳定币链支持、完全掌控您的资金。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://docs.xpaylabs.com/"
                className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
              >
                <Server className="w-4 h-4" />
                <span>查看部署指南</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                <span>XPay Labs 概览</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
          {/* Why Merchants Leave CoinGate */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-blue">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8">
                商户为何寻找 CoinGate 替代方案
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    1% 交易手续费
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    CoinGate 全面收取
                    <strong className="text-gray-300">
                      每笔交易 1%
                    </strong>
                    。对于月加密货币收入 10 万美元的企业，仅手续费每年就是 12,000 美元——且没有降低的选项。
                  </p>
                </div>
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Key className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    托管风险
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    CoinGate 是托管网关。他们持有私钥，结算按他们的计划进行。如果 CoinGate 遇到监管问题或技术故障，您的资金将无法使用，直到他们解决。
                  </p>
                </div>
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    广泛但浅层的链支持
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    CoinGate 支持 50 多种币，但每种通常只在单条链上可用。对于需要在 TRON（TRC-20 USDT）或 L2 网络（如 Arbitrum 和 Base）上深度稳定币流动性的商户，CoinGate 的广度无法弥补其深度的不足。
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Comparison Table */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              CoinGate vs XPay Labs — 逐项对比
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm font-sans">
                <thead>
                  <tr className="bg-[#0b0e25] border-b border-white/8">
                    <th className="p-4 text-gray-400 font-medium w-1/3">
                      功能
                    </th>
                    <th className="p-4 text-orange-400 font-medium w-1/3">
                      CoinGate
                    </th>
                    <th className="p-4 text-brand-cyan font-medium w-1/3">
                      XPay Labs
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      交易手续费
                    </td>
                    <td className="p-4 text-gray-400">每笔交易 1%</td>
                    <td className="p-4 text-green-400">0%（仅燃料费）</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      月计划费用
                    </td>
                    <td className="p-4 text-gray-400">
                      加密货币免费，法币有费用
                    </td>
                    <td className="p-4 text-green-400">0 美元（自托管）</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      托管模式
                    </td>
                    <td className="p-4 text-gray-400">
                      托管——CoinGate 控制密钥
                    </td>
                    <td className="p-4 text-green-400">
                      非托管——您控制密钥
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      结算控制
                    </td>
                    <td className="p-4 text-gray-400">
                      手动提现（托管式）
                    </td>
                    <td className="p-4 text-green-400">
                      即时——资金直达您的钱包
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      加密货币覆盖
                    </td>
                    <td className="p-4 text-gray-400">
                      50+ 币种，每条链单一
                    </td>
                    <td className="p-4 text-green-400">
                      深度多链（TRON、EVM、SUI）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      白标结账
                    </td>
                    <td className="p-4 text-gray-400">
                      显示 CoinGate 品牌
                    </td>
                    <td className="p-4 text-green-400">
                      完全白标（您的品牌）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      源代码访问
                    </td>
                    <td className="p-4 text-gray-400">
                      闭源（专有）
                    </td>
                    <td className="p-4 text-green-400">
                      授权免费使用
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      部署方式
                    </td>
                    <td className="p-4 text-gray-400">云端（SaaS）</td>
                    <td className="p-4 text-green-400">
                      自托管（Docker、VPS、裸金属）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      KYC 要求
                    </td>
                    <td className="p-4 text-gray-400">
                      账户设置需要
                    </td>
                    <td className="p-4 text-green-400">
                      无需（自主主权）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      Webhook / API
                    </td>
                    <td className="p-4 text-gray-400">REST API + 回调</td>
                    <td className="p-4 text-green-400">
                      REST API + HMAC 签名 webhook
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* Feature-by-Feature Deep Dive */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10">
              详细功能对比
            </h2>
            <div className="space-y-8">
              {/* Fees */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <DollarSign className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      定价与费用
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      CoinGate 的费用结构包括每笔加密货币支付的
                      <strong className="text-gray-300">
                        1% 交易手续费
                      </strong>
                      。虽然基础计划对加密到加密结算免费，但法币兑换额外增加 1-2%。对于月加密货币收入 5 万美元的企业，CoinGate 每月
                      <strong className="text-gray-300">
                        交易手续费为 500 美元
                      </strong>
                      ——每年超过
                      <strong className="text-gray-300">6,000 美元</strong>，且随交易量增长无上限。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs 收取
                      <strong className="text-green-400">
                        0% 交易手续费
                      </strong>
                      ，
                      <strong className="text-green-400">
                        月费为 0 美元
                      </strong>
                      。作为自托管解决方案，您的唯一成本是服务器托管（VPS 低至 10 美元/月）和区块链网络燃料费（在 TRON 或 L2 上每笔交易通常不到一分钱）。节省随每笔交易累积。
                    </p>
                  </div>
                </div>
              </article>
              {/* Custody */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      托管与密钥管理
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      CoinGate 采用
                      <strong className="text-gray-300">托管模式</strong>
                      。客户付款时，资金进入 CoinGate 的钱包。然后您需要请求提现到个人钱包，受限于 CoinGate 的处理时间和限额。您从未持有存款地址的私钥，这引入了交易对手风险：如果 CoinGate 面临监管行动、技术问题或账户限制，您的资金将面临风险。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs
                      <strong className="text-green-400">
                        完全非托管
                      </strong>
                      。每张发票生成一个独特的存款地址，源自您自己的节点种子——仅保存在您的 Docker 容器内。资金实时直接结算到您的钱包。没有第三方触碰您的资金，没有提现延迟，没有账户冻结风险。您的密钥，您的币。
                    </p>
                  </div>
                </div>
              </article>
              {/* Chain Support */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Coins className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      链与代币支持
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      CoinGate 的主要卖点是
                      <strong className="text-gray-300">
                        50 多种支持的加密货币
                      </strong>
                      。然而，大多数币种仅在单个区块链网络上可用。这种广度以深度为代价——您不会找到对
                      <strong className="text-gray-300">
                        TRON（TRC-20 USDT）
                      </strong>
                      （交易量最大的稳定币网络）或
                      <strong className="text-gray-300">L2 网络</strong>
                      （如 Arbitrum、Optimism 和 Base）的原生支持。如果您的客户使用 TRON 上的 USDT——大多数人如此——CoinGate 无法直接为他们服务。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs 支持
                      <strong className="text-green-400">TRON</strong>、
                      <strong className="text-green-400">
                        EVM 兼容链
                      </strong>
                      （Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base）
                      和 <strong className="text-green-400">SUI</strong>。这覆盖了绝大多数稳定币和山寨币支付交易量，具有深度链原生支持，而非单链代币列表。社区可通过拉取请求添加新链。
                    </p>
                  </div>
                </div>
              </article>
              {/* White-Label */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Palette className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      白标与品牌控制
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      CoinGate 的结账页面带有 CoinGate 品牌。虽然他们提供一些自定义选项，但标准计划上的"Powered by CoinGate"标识和域名无法完全移除。您的客户看到的是第三方网关，这可能在结账时降低信任。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs
                      <strong className="text-green-400">
                        默认完全白标
                      </strong>
                      。结账页面使用您的品牌颜色、标志和域名。没有"Powered by XPay Labs"徽章。您的客户看到的是无缝、专业的结账体验，强化您的品牌，而非第三方。
                    </p>
                  </div>
                </div>
              </article>
              {/* Settlement Control */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Settings className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      结算与付款控制
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      CoinGate 将您收到的付款汇总到 CoinGate 钱包余额中。要获取资金，您必须手动发起提现到外部钱包，受 CoinGate 的处理时间和最低提现额度的限制。在结算过程的任何时刻，资金都不在您的直接控制之下。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      使用 XPay Labs，结算
                      <strong className="text-green-400">
                        即时且直接
                      </strong>
                      。每张发票的付款直接进入您控制的派生存款地址。您可以按自己的计划归集资金、兑换或持有。无需等待手动提现，无需最低额度，无需中介。
                    </p>
                  </div>
                </div>
              </article>
              {/* Developer Experience */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-5 h-5 text-[#5B8CFF]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5B8CFF] font-mono">
                    开发者
                  </span>
                </div>
                <h3 className="text-xl font-display font-medium text-white">
                  开发者体验
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  CoinGate 的基础设施
                  <strong className="text-gray-300">
                    专有且闭源
                  </strong>
                  。您无法审计代码、在表面级设置之外自定义集成或贡献功能。API 虽有文档，但仅限于 CoinGate 决定提供的内容。
                </p>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  XPay Labs
                  <strong className="text-green-400">授权免费使用</strong>——
                  每一行代码都在 GitHub 上可见。您可以审计安全性、提交拉取请求、分叉项目并根据需要进行扩展。REST API 辅以
                  <strong className="text-gray-300">
                    HMAC 签名 webhook
                  </strong>
                  用于安全的服务器到服务器通知，Docker 部署意味着您可以在几分钟内运行。
                </p>
              </div>
            </div>
          </section>
          {/* Pricing Comparison */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-cyan">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
                价格对比
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">
                      C
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      CoinGate
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        每笔付款 1% 交易手续费
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        法币兑换额外 1-2%
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        手动提现流程（托管式）
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        需要预先 KYC 验证
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    月交易量 5 万美元的预估年成本：
                    <strong className="text-red-400">~6,000+ 美元</strong>
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-brand-cyan/[0.03] border border-brand-cyan/10">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-xs font-bold text-brand-cyan">
                      X
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      XPay Labs
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        0% 交易手续费（仅燃料费）
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        0 美元月费（自托管）
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        即时结算到您的钱包
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        无需 KYC（自主主权）
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    月交易量 5 万美元的预估年成本：
                    <strong className="text-green-400">~120 美元（VPS）</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Honest Assessment */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              谁该切换——谁该留下
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-green-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Check className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-display font-medium text-white">
                    切换到 XPay Labs 如果……
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您月处理超过 1 万美元，希望消除 1% 的交易手续费
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您希望完全控制私钥和即时结算
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您需要在 TRON、EVM L2 或 SUI 上的深度稳定币支持
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您希望使用自有品牌的白标结账
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您具备运行 Docker 容器的 DevOps 能力
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>您想要可审计的自托管基础设施</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您希望避免与托管网关进行 KYC/注册延迟
                    </span>
                  </li>
                </ul>
              </div>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <X className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-display font-medium text-white">
                    留在 CoinGate 如果……
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>
                      您需要接受 50 多种不同的加密货币且设置简单
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>
                      您需要法币结算到银行账户（CoinGate 处理兑换）
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>
                      您更倾向完全托管的 SaaS 方案，无需服务器维护
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>
                      您的合规要求强制使用持牌支付处理器
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>
                      您的客户群主要使用 XPay Labs 未覆盖的小众山寨币
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Migration Guide */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-purple">
              <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-purple uppercase tracking-wider font-mono mb-6">
                <Server className="w-3.5 h-3.5" />
                <span>迁移指南</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-6">
                如何从 CoinGate 迁移到 XPay Labs
              </h2>
              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
                迁移支付基础设施听起来令人生畏，但过程很直接。CoinGate 和 XPay Labs 共享相似的基于发票的架构，因此概念模型可以直接映射。
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      部署 XPay Labs
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      在您的 VPS 或服务器上启动 XPay Labs Docker 容器。配置节点种子、RPC 提供者和 HMAC 密钥的环境变量。完整说明请参阅
                      <Link
                        href="https://docs.xpaylabs.com/"
                        className="text-brand-cyan hover:text-white transition-colors underline underline-offset-2"
                      >
                        部署指南
                      </Link>
                      。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      生成您的节点种子
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      XPay Labs 从您生成的 BIP-39 助记词种子派生唯一的存款地址。安全备份——这是您的主密钥。与 CoinGate 不同，您绝不与任何人分享此种子。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      更新您的结账集成
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      将 CoinGate API 调用替换为 XPay Labs REST API 端点。发票创建流程类似：创建订单、获取收款地址、监听 webhook 确认。我们的 HMAC 签名 webhook 提供比 CoinGate 回调更安全的通知模型。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      重定向您的客户
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      将您的结账流程指向自托管的 XPay Labs 结账页面。由于 XPay Labs 默认白标，您的客户永远不会知道您切换了提供商——他们只会看到更快、更流畅的结账体验。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      监控与优化
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      使用 XPay Labs 的 webhook 日志和发票仪表板监控付款流程。在过渡期间并行运行两个系统以确保零停机。确认无误后，从 CoinGate 提取剩余资金并停用您的账户。
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">专业建议：</strong>将 CoinGate 和 XPay Labs 并行运行 1-2 周。将一定比例的流量路由到 XPay Labs，比较结算时间、费用节省和失败率。您会立即看到差异。
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                准备掌控您的支付基础设施？
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                停止支付每笔交易 1% 的手续费。停止将结算资金托付给第三方。立即部署 XPay Labs，完全掌控您的加密支付栈。
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" /> <span>立即部署</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>了解更多</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
}
