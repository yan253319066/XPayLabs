import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Server,
  Shield,
  Check,
  X,
  ArrowRight,
  ExternalLink,
  DollarSign,
  Coins,
  Github,
  Cpu,
  Code2,
  Layers,
  Zap,
  Settings,
  Globe,
  Terminal,
  FileCode,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: 'BTCPay Server 替代方案 — 自托管多链支付网关 | XPay Labs',
  description:
    '寻找 BTCPay Server 的替代方案？XPay Labs 支持 TRON、EVM 链和 SUI，0% 手续费，非托管，Docker 部署，开发者友好的 API。',
  keywords: [
    'BTCPay Server 替代方案',
    'BTCPay Server 替代',
    '自托管加密支付',
    '多链支付网关',
    '稳定币支付网关',
    '非托管支付处理',
  ],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/alternatives/btcpayserver',
    languages: {
      'x-default': 'https://www.xpaylabs.com/alternatives/btcpayserver',
      'en-US': 'https://www.xpaylabs.com/alternatives/btcpayserver',
    },
  },
  openGraph: {
    title: 'BTCPay Server 替代方案 — 自托管多链支付网关 | XPay Labs',
    description:
      'BTCPay Server 替代方案，原生支持 TRON、EVM 和 SUI。0% 手续费，非托管，Stripe 风格 API。',
    url: 'https://www.xpaylabs.com/zh/alternatives/btcpayserver',
    type: 'website',
  },
  twitter: {
    title: 'BTCPay Server 替代方案 — 自托管多链支付网关 | XPay Labs',
    description:
      'BTCPay Server 替代方案，原生支持 TRON、EVM 和 SUI。0% 手续费，非托管，Stripe 风格 API。',
    card: 'summary_large_image',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'XPay Labs 与 BTCPay Server 有何不同？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BTCPay Server 是一款自托管支付处理器，主要专注于比特币和闪电网络。XPay Labs 专为多链稳定币支付而设计——TRON（TRC20 USDT）、所有 EVM 链和 SUI。XPay 还提供受 Stripe 启发的 REST API、HMAC 签名 webhook 和更轻量的基础设施要求。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 能替代 BTCPay Server 吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '如果您的支付需求集中在稳定币和现代多链支持上，XPay Labs 是一个强有力的替代方案。如果您主要处理比特币和闪电网络支付，BTCPay Server 仍然是更好的选择。一些商户同时运行两者。',
      },
    },
    {
      '@type': 'Question',
      name: '哪个更容易部署：BTCPay Server 还是 XPay Labs？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 需要较少的基础设施——一台 8GB RAM 和 4 vCPU 的 VPS 就足够了。BTCPay Server 由于其完整的比特币节点需求，通常需要更多资源。XPay Labs 使用单个 docker-compose 文件，而 BTCPay Server 需要多个服务。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 像 BTCPay Server 一样支持比特币吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 专注于 TRON、EVM 兼容链和 SUI。对于比特币原生支付，BTCPay Server 是更强的解决方案。XPay Labs 针对现代区块链网络上的稳定币优先支付工作流进行了优化。',
      },
    },
  ],
};
const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  about: { '@type': 'Thing', name: 'BTCPay Server vs XPay Labs Comparison' },
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
      item: 'https://www.xpaylabs.com/zh/alternatives/btcpayserver',
    },
  ],
};
export default function BTCPayServerAlternativePage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} /> <JsonLd data={comparisonSchema} />
        <JsonLd data={breadcrumbSchema} /> <Header />
        <main className="relative gradient-bg pt-24 pb-20">
          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full text-xs font-bold text-green-400 uppercase tracking-wider font-mono mb-6">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>BTCPay Server 替代方案</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              BTCPay Server 替代方案 —
              <span className="text-gradient-purple-blue">多链</span>和
              稳定币原生
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              BTCPay Server 率先实现了自托管比特币支付。但如果您的企业需要在
              <strong className="text-white">
                TRON、EVM 链和 SUI 上的稳定币支持
              </strong>
              ，XPay Labs 就是现代的替代方案——从第一天起为多链而建。
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
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </section>
          {/* Why Merchants Consider Alternatives */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-blue">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8">
                商户为何寻找 BTCPay Server 替代方案
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    有限的链支持
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BTCPay Server 以比特币优先。虽然通过插件支持一些山寨币，但 TRON、现代 L2 和 SUI 上的原生稳定币支持开箱即用不可用。
                  </p>
                </div>
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    繁重的基础设施
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BTCPay Server 需要完整的比特币节点（约 500GB+ 区块链数据）或第三方服务器。对于不需要比特币节点基础设施的商户来说，这过于复杂。
                  </p>
                </div>
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-medium text-white text-lg">
                    开发者体验
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    BTCPay 的 API 和 greenfield API 虽然全面但很复杂。XPay Labs 提供受 Stripe 启发的 REST API，简化集成模式并配有 HMAC 签名 webhook。
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Comparison Table */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              BTCPay Server vs XPay Labs — 逐项对比
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm font-sans">
                <thead>
                  <tr className="bg-[#0b0e25] border-b border-white/8">
                    <th className="p-4 text-gray-400 font-medium w-1/3">
                      功能
                    </th>
                    <th className="p-4 text-green-400 font-medium w-1/3">
                      BTCPay Server
                    </th>
                    <th className="p-4 text-brand-cyan font-medium w-1/3">
                      XPay Labs
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      主要专注
                    </td>
                    <td className="p-4 text-gray-400">
                      比特币 + 闪电网络
                    </td>
                    <td className="p-4 text-green-400">
                      多链稳定币（TRON、EVM、SUI）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      交易手续费
                    </td>
                    <td className="p-4 text-gray-400">0%（自托管）</td>
                    <td className="p-4 text-green-400">0%（仅燃料费）</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      托管模式
                    </td>
                    <td className="p-4 text-gray-400">非托管</td>
                    <td className="p-4 text-green-400">非托管</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      区块链
                    </td>
                    <td className="p-4 text-gray-400">
                      BTC、LN、通过插件的山寨币
                    </td>
                    <td className="p-4 text-green-400">
                      TRON、EVM（ETH、BNB、Polygon、Arbitrum、Optimism、Base）、SUI
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      稳定币
                    </td>
                    <td className="p-4 text-gray-400">
                      有限（依赖插件）
                    </td>
                    <td className="p-4 text-green-400">
                      一等公民 USDT、USDC、自定义代币
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">API 风格</td>
                    <td className="p-4 text-gray-400">Greenfield API（REST）</td>
                    <td className="p-4 text-green-400">
                      受 Stripe 启发的 REST API
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      Webhook 安全
                    </td>
                    <td className="p-4 text-gray-400">标准 webhook</td>
                    <td className="p-4 text-green-400">
                      HMAC-SHA256 签名负载
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      基础设施
                    </td>
                    <td className="p-4 text-gray-400">
                      完整 BTC 节点或第三方
                    </td>
                    <td className="p-4 text-green-400">
                      轻量 Docker（8GB RAM / 4 vCPU）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      白标
                    </td>
                    <td className="p-4 text-gray-400">完全白标</td>
                    <td className="p-4 text-green-400">
                      完全白标（Vue 3 结账）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">许可证</td>
                    <td className="p-4 text-gray-400">
                      MIT（完全开源）
                    </td>
                    <td className="p-4 text-gray-400">
                      授权免费使用
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      支付检测
                    </td>
                    <td className="p-4 text-gray-400">
                      依赖区块确认
                    </td>
                    <td className="p-4 text-green-400">
                      亚秒级内存池扫描
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      SDK 语言
                    </td>
                    <td className="p-4 text-gray-400">C#、JS、Python、Go</td>
                    <td className="p-4 text-green-400">
                      Node.js、Python、Go、cURL
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* Feature Deep Dive */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10">
              详细功能对比
            </h2>
            <div className="space-y-8">
              {/* Chain Support */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Layers className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      链与资产支持
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BTCPay Server 擅长
                      <strong className="text-gray-300">
                        比特币和闪电网络
                      </strong>
                      支付。它通过插件集成支持山寨币，但每种都需要单独的节点基础设施和配置。稳定币支持不是原生的。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs
                      <strong className="text-green-400">
                        天生多链
                      </strong>
                      。TRON、Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base 和 SUI 均通过单次部署原生支持。USDT 和 USDC 是一等公民货币。自定义代币通过简单的 JSON 配置——无需插件开发。
                    </p>
                  </div>
                </div>
              </article>
              {/* Infrastructure */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Server className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      基础设施要求
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BTCPay Server 需要完整的比特币归档节点（约 500GB+ 磁盘，大量 RAM）或连接到第三方闪电节点提供商。这种基础设施开销对于较小的商户来说可能是难以承受的。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs 可在
                      <strong className="text-green-400">
                        具有 8GB RAM 和 4 vCPU 的标准 VPS
                      </strong>
                      上运行。无需完整的区块链节点——它连接到 RPC 提供者（Trongrid、Infura 等）获取链上数据。部署只需单个
                      <code className="text-brand-cyan text-xs bg-[#04050f] px-1.5 py-0.5 rounded">
                        docker compose up -d
                      </code>
                      命令。
                    </p>
                  </div>
                </div>
              </article>
              {/* Developer Experience */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Code2 className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      开发者体验
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BTCPay 的 Greenfield API 虽然全面，但承载了一个十年历史代码库的复杂性。API 表面庞大，文档导航具有挑战性，webhook 负载需要大量解析。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs 提供
                      <strong className="text-green-400">
                        受 Stripe 启发的 REST API
                      </strong>
                      ——可预测的端点、一致的 JSON 响应和清晰的错误消息。Webhook 使用
                      <strong className="text-gray-300">HMAC-SHA256</strong> 签名以确保安全验证。SDK 示例支持 Node.js、Python、Go 和 cURL。
                    </p>
                  </div>
                </div>
              </article>
              {/* Payment Detection */}
              <article className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-medium text-white">
                      支付检测速度
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      BTCPay Server 依赖区块确认来检测支付。对于比特币，这意味着等待 10 分钟以上才能完成一次确认。闪电网络提供即时支付，但需要通道管理和流动性。
                    </p>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      XPay Labs 使用
                      <strong className="text-green-400">
                        内存池级别扫描
                      </strong>
                      在广播后 1-6 秒内检测支付。在 TRON 上，检测通常不到 2 秒。系统可配置为在触发 webhook 前等待确认（TRON 1 次，EVM 2 次），在速度和最终性之间提供最佳平衡。
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
          {/* Honest Assessment */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              哪种方案适合您的用例？
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-green-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Check className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-display font-medium text-white">
                    选择 XPay Labs 如果……
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您主要接受 TRON、EVM 或 SUI 上的稳定币（USDT、USDC）
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您想要轻量级 Docker 部署，无需运行完整比特币节点
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您需要现代、受 Stripe 启发的 REST API 和 HMAC webhook
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您希望通过内存池扫描实现亚秒级支付检测
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您需要多个 EVM L2（Arbitrum、Optimism、Base）的原生支持
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您想要可审计和可复刻的代码（授权免费使用）
                    </span>
                  </li>
                </ul>
              </div>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-l-4 border-green-500/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Check className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-display font-medium text-white">
                    选择 BTCPay Server 如果……
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      比特币和闪电网络是您的主要支付轨道
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您想要完全 MIT 开源解决方案（宽松许可证）
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>您需要广泛的 BTCPay 插件生态系统</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您有运行完整比特币节点的基础设施
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您需要内置 POS 的开发者友好仪表板
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>
                      您想要更大的社区和更多第三方集成
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
                从 BTCPay Server 迁移到 XPay Labs
              </h2>
              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
                两者都是自托管的，因此迁移就是在新堆栈旁部署新系统。将两者并行运行，直到您对过渡有信心。
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
                      在单独 VPS 上或与您的 BTCPay 实例并行启动 XPay Labs。为您需要的链配置 RPC 端点。请参阅
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
                      配置您的 API 集成
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      更新您的结账集成以指向 XPay Labs API 端点。发票流程类似于 BTCPay：创建发票 → 获取地址 → 监听 webhook。我们的 HMAC 签名 webhook 提供可验证的负载。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      并行运行并对比
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      将一定比例的流量路由到 XPay Labs，同时保持 BTCPay Server 在线。比较结算时间、检测速度和可靠性。大多数商户在 TRON 和 EVM 链上看到更快的检测。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium text-white">
                      重定向并退役
                    </h3>
                    <p className="text-sm text-gray-400 font-sans">
                      确认无误后，将所有流量重定向到 XPay Labs。保留您的 BTCPay Server 节点用于历史数据访问，或导出发票后退役。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                准备好多链支付了吗？
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                将 XPay Labs 部署在您的 BTCPay Server 实例旁并比较性能。免费软件、零交易手续费、原生多链稳定币支持。
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
