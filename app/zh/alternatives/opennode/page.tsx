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
  title: 'OpenNode 替代方案 — 自托管加密支付网关 | XPay Labs',
  description:
    '寻找 OpenNode 的替代方案？XPay Labs 提供多链、非托管的加密货币支付网关，告别仅支持比特币、1% 手续费和托管风险。',
  keywords: [
    'OpenNode 替代方案',
    'OpenNode 替代',
    '自托管加密支付',
    '比特币支付处理器替代方案',
  ],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/alternatives/opennode',
    languages: {
      'x-default': 'https://www.xpaylabs.com/alternatives/opennode',
      'en-US': 'https://www.xpaylabs.com/alternatives/opennode',
    },
  },
  openGraph: {
    title: 'OpenNode 替代方案 — 自托管加密支付网关 | XPay Labs',
    description:
      'OpenNode 替代方案，提供非托管、多链加密支付，告别 1% 手续费的困扰。',
    url: 'https://www.xpaylabs.com/zh/alternatives/opennode',
    type: 'website',
  },
  twitter: {
    title: 'OpenNode 替代方案 — 自托管加密支付网关 | XPay Labs',
    description:
      'OpenNode 替代方案，提供非托管、多链加密支付，告别 1% 手续费的困扰。',
    card: 'summary_large_image',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'XPay Labs 为何是优秀的 OpenNode 替代方案？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 是一款自托管、非托管的加密货币支付网关，支持多链。与 OpenNode（仅比特币、托管式、收取约 1% 费用）不同，XPay Labs 为您提供私钥完全控制、0% 交易手续费，以及支持 TRON、EVM 链和 SUI 的 USDT 和 USDC 等稳定币。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 比 OpenNode 更便宜吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。OpenNode 每笔交易收取约 1% 的费用，无月费。XPay Labs 收取 0% 交易手续费——您只需支付区块链网络燃料费，在 TRON 或 L2 网络上通常不到一分钱。对于月处理 10 万美元的企业，OpenNode 每年费用为 12,000 美元，而 XPay Labs 接近零。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 像 OpenNode 一样支持比特币和闪电网络吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 专注于 TRON、EVM 兼容链（Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base）和 SUI 上的稳定币支付。如果您特别需要原生比特币和闪电网络支持，OpenNode 是更好的选择。XPay Labs 专为优先稳定币结算和多链覆盖的商户设计。',
      },
    },
    {
      '@type': 'Question',
      name: '我可以在不放弃资金托管权的情况下使用 XPay Labs 吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 完全非托管。每张发票生成一个独特的存款地址，源自您自己的节点种子——保存在您的 Docker 容器内。资金实时直接结算到您的钱包。相比之下，OpenNode 是托管式的——他们持有私钥并按计划付款。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 支持哪些 OpenNode 不支持的链？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpenNode 仅支持比特币链上和闪电网络。XPay Labs 支持 TRON（TRC-20 USDT/USDC）、EVM 兼容链（Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base）和 SUI。这覆盖了 OpenNode 无法处理的绝大多数稳定币支付交易量。',
      },
    },
  ],
};
const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  about: { '@type': 'Product', name: 'OpenNode vs XPay Labs Comparison' },
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
      item: 'https://www.xpaylabs.com/zh/alternatives/opennode',
    },
  ],
};
export default function OpenNodeAlternativePage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} /> <JsonLd data={comparisonSchema} />
        <JsonLd data={breadcrumbSchema} /> <Header />
        <main className="relative gradient-bg pt-24 pb-20">
          {/* Hero Section */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono mb-6">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>OpenNode 替代方案</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              OpenNode 替代方案 —
              <span className="text-gradient-purple-blue">多链</span>
              自托管支付网关
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              OpenNode 让比特币和闪电支付变得简单，但其仅比特币的专注、托管模式和约 1% 的费用让需要稳定币和多链选项的商户束手无策。
              <strong className="text-white">XPay Labs</strong> 是
              自托管、非托管的替代方案——天生多链、零费用、完全控制。
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
          {/* Why Merchants Leave OpenNode */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-blue">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8">
                商户为何寻找 OpenNode 替代方案
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    高昂费用
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    OpenNode 收取
                    <strong className="text-gray-300">
                      约每笔交易 1%
                    </strong>
                    无月费，但每处理 10 万美元仍需支付 1,000 美元的费用。对于成长中的企业，这些成本迅速累积——尤其是与几乎零成本的自托管解决方案相比。
                  </p>
                </div>
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    仅比特币
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    OpenNode 严格仅限比特币——链上和闪电网络。不支持稳定币（USDT、USDC）、TRON、EVM 链或 SUI。如果您的客户想用 BTC 以外的任何方式支付，OpenNode 无法处理。
                  </p>
                </div>
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Key className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    托管模式
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    OpenNode 是托管式的——他们控制私钥并持有结算资金。付款按 OpenNode 的计划进行，而非您的。如果 OpenNode 面临监管压力或运营问题，您对资金的访问可能会被延迟或限制。
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Comparison Table */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              OpenNode vs XPay Labs — 逐项对比
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm font-sans">
                <thead>
                  <tr className="bg-[#0b0e25] border-b border-white/8">
                    <th className="p-4 text-gray-400 font-medium w-1/3">
                      功能
                    </th>
                    <th className="p-4 text-orange-400 font-medium w-1/3">
                      OpenNode
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
                    <td className="p-4 text-gray-400">约每笔交易 1%</td>
                    <td className="p-4 text-green-400">0%（仅燃料费）</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      月计划费用
                    </td>
                    <td className="p-4 text-gray-400">0 美元（按使用付费）</td>
                    <td className="p-4 text-green-400">0 美元（自托管）</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      托管模式
                    </td>
                    <td className="p-4 text-gray-400">
                      托管——OpenNode 控制密钥
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
                      定期付款（手动/定时）
                    </td>
                    <td className="p-4 text-green-400">
                      即时——资金直达您的钱包
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      支持的链
                    </td>
                    <td className="p-4 text-gray-400">
                      比特币（链上 + 闪电网络）
                    </td>
                    <td className="p-4 text-green-400">
                      TRON、EVM（ETH、BNB、Polygon、Arbitrum、Optimism、Base）、SUI
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      支持的资产
                    </td>
                    <td className="p-4 text-gray-400">仅 BTC</td>
                    <td className="p-4 text-green-400">
                      USDT、USDC、ETH、BNB、MATIC、原生币
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      白标结账
                    </td>
                    <td className="p-4 text-gray-400">
                      显示 OpenNode 品牌
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
                      需要（企业认证）
                    </td>
                    <td className="p-4 text-green-400">
                      无需（自主主权）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      Webhook / API
                    </td>
                    <td className="p-4 text-gray-400">REST API + webhook</td>
                    <td className="p-4 text-green-400">
                      REST API + HMAC 签名 webhook
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      闪电网络
                    </td>
                    <td className="p-4 text-green-400">原生支持</td>
                    <td className="p-4 text-gray-400">
                      不支持（稳定币优先）
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
                      OpenNode 收取
                      <strong className="text-gray-300">
                        约 1% 的交易手续费
                      </strong>
                      无月订阅费。虽然没有固定月费比一些竞争对手好，但每笔交易 1% 的费用仍然显著累积。对于月比特币收入
                      <strong className="text-gray-300">10 万美元</strong>的企业，OpenNode 每年费用为
                      <strong className="text-gray-300">12,000 美元</strong>。
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
                      。您的唯一成本是服务器托管（VPS 低至 10 美元/月）和区块链燃料费——在 TRON 或 L2 上通常不到一分钱。月交易量 10 万美元时，XPay Labs 每年为您节省超过 11,500 美元。
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
                      OpenNode 采用
                      <strong className="text-gray-300">托管模式</strong>
                      。客户通过 OpenNode 付款时，资金首先进入 OpenNode 的钱包。然后 OpenNode 按计划结算到您的银行账户或比特币钱包。您从未持有私钥。这引入了交易对手风险：如果 OpenNode 面临监管行动、技术问题或账户限制，您的资金将面临风险。
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
                      链与资产支持
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      OpenNode 仅限比特币：链上 BTC 和闪电网络。如果您的客户都持有比特币，那很好，但它排除了庞大且不断增长的稳定币支付生态系统。
                      <strong className="text-gray-300">
                        TRON（TRC-20 USDT）
                      </strong>
                      单日处理交易量就超过比特币。Arbitrum 和 Base 等 L2 网络托管着数十亿的 DeFi 流动性。SUI 正作为快速、低成本的替代方案崛起。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs 支持
                      <strong className="text-green-400">TRON</strong>、
                      <strong className="text-green-400">
                        EVM 兼容链
                      </strong>
                      （Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base）
                      和 <strong className="text-green-400">SUI</strong>——支持
                      <strong className="text-green-400">
                        USDT、USDC、ETH、BNB、MATIC
                      </strong>
                      和原生燃料币。这覆盖了全球绝大多数非比特币加密支付交易量。
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
                      OpenNode 的托管结账页面包含 OpenNode 品牌。虽然简洁且功能齐全，但它将第三方存在引入您的支付流程。希望获得完全品牌化体验的商户——尤其是那些运行白标或自定义店铺的商户——会发现这有限制。
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
                      OpenNode 汇总交易并按计划付款——每日自动付款到您的比特币钱包或银行账户。您无法实时访问单笔付款，结算速度取决于 OpenNode 的批量处理。法币兑换为美元可用，但增加了另一层延迟和成本。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      使用 XPay Labs，结算
                      <strong className="text-green-400">
                        即时且直接
                      </strong>
                      。每张发票的付款直接进入您控制的派生存款地址。您可以按自己的计划归集资金、兑换或持有。无需等待批量付款，无需结算窗口，无需中介。
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
                  OpenNode 提供简洁的 REST API 和 webhook 通知，但核心基础设施
                  <strong className="text-gray-300">
                    闭源且专有
                  </strong>
                  。您无法审计代码、自定义集成或贡献功能。API 文档完善，但仅限于 OpenNode 决定支持的内容。
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
                      O
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      OpenNode
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        约每笔付款 1% 交易手续费
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        仅比特币——无稳定币支持
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        托管式——资金由 OpenNode 持有
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        结算延迟（每日批量）
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    月交易量 10 万美元的预估年成本：
                    <strong className="text-red-400">~12,000 美元</strong>
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
                        多链（TRON、EVM、SUI）+ 稳定币
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        非托管——您控制密钥
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-400">
                        即时结算到您的钱包
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    月交易量 10 万美元的预估年成本：
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
                      您希望接受稳定币（USDT/USDC）作为比特币的补充或替代
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
                      您月处理超过 5 万美元，希望消除 1% 的费用拖累
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您需要为客户提供 TRON（USDT）、SUI 或 L2 支持
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您希望使用自有品牌和域名的白标结账
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
                    <span>
                      您想要可审计的自托管支付基础设施
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>您希望避免 KYC 和注册延迟</span>
                  </li>
                </ul>
              </div>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <X className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-display font-medium text-white">
                    留在 OpenNode 如果……
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>
                      您只接受比特币（链上和闪电网络），不需要稳定币
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-400">•</span>
                    <span>
                      您依赖闪电网络进行即时、低成本的比特币小额支付
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
                      您需要法币结算到银行账户（OpenNode 处理兑换）
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
                      您不想管理自己的 Docker 部署和服务器
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
                如何从 OpenNode 迁移到 XPay Labs
              </h2>
              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
                从 OpenNode 迁移到 XPay Labs 意味着将您的支付能力从比特币扩展到多链稳定币支持。基于发票的架构在概念上相似，使过渡变得顺畅。
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
                      XPay Labs 从您生成的 BIP-39 助记词种子派生唯一的存款地址。安全备份——这是您的主密钥。与 OpenNode 不同，您绝不与任何人分享此种子。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      配置您支持的链
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      启用您想要接受付款的链——TRON、Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base、SUI 或全部。为每条链配置 RPC 端点。这是您立即超越 OpenNode 仅比特币限制的地方。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      更新您的结账集成
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      将 OpenNode API 调用替换为 XPay Labs REST API 端点。发票创建流程类似：创建发票、获取支付地址、监听 webhook 确认。我们的 HMAC 签名 webhook 提供可靠的服务器到服务器通知。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      上线并监控
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      将您的结账流程指向自托管的 XPay Labs 页面。由于 XPay Labs 默认白标，您的客户将看到您的品牌——而非第三方标志。在过渡期间并行运行两个系统以确保零停机。
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">专业建议：</strong>将 OpenNode 和 XPay Labs 并行运行 1-2 周。将一定比例的流量路由到 XPay Labs，比较结算时间、费用节省和支付成功率。您很快就会看到稳定币和多链支持的好处。
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                准备超越比特币？
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                停止支付每笔交易 1% 的手续费。停止被限制在仅比特币。停止将结算资金托付给第三方。立即部署 XPay Labs，按您自己的方式接受多链稳定币支付。
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
