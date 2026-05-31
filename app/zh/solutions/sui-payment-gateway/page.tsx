import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Server,
  Shield,
  CheckCircle2,
  Zap,
  Cpu,
  Globe,
  ArrowRight,
  ExternalLink,
  Code2,
  DollarSign,
  Coins,
  Wifi,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: 'SUI 支付网关 — 自托管加密货币收款基础设施 | XPay Labs',
  description:
    '自托管 SUI 支付网关，用于接受 SUI 原生代币和 Sui Network 上的 USDC。非托管、0% 费率、亚秒级交易检测。Docker 部署。',
  keywords:
    'SUI 支付网关, Sui Network 支付处理器, 接受 SUI 代币, SUI 加密货币支付, 自托管 SUI 网关, Sui 区块链支付, Move 语言支付网关, SUI 商户网关',
  alternates: {
    canonical: 'https://www.xpaylabs.com/solutions/sui-payment-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/solutions/sui-payment-gateway',
      'en-US': 'https://www.xpaylabs.com/solutions/sui-payment-gateway',
      'zh-CN': 'https://www.xpaylabs.com/zh/solutions/sui-payment-gateway',
    },
  },
  openGraph: {
    title: 'SUI 支付网关 — 自托管加密货币收款基础设施 | XPay Labs',
    description:
      '自托管 SUI 支付网关。非托管、0% 费率、Sui Network 上的亚秒级交易检测。',
    url: 'https://www.xpaylabs.com/zh/solutions/sui-payment-gateway',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUI 支付网关 — 自托管加密货币收款基础设施 | XPay Labs',
    description:
      '自托管 SUI 支付网关。非托管、0% 费率、Sui Network 上的亚秒级交易检测。',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是 SUI 支付网关？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SUI 支付网关使商户能够在 Sui Network——一个基于 Move 编程语言构建的高性能 Layer 1 区块链——上接受加密货币支付。XPay Labs 提供自托管 SUI 网关，扫描 Sui 区块链上的传入 SUI 和 USDC 支付。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 是首个 SUI 支付网关吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 是首批原生支持 Sui Network 的自托管、非托管支付网关之一。大多数托管支付处理商尚未支持 SUI，这为 XPay Labs 商户在接受 SUI 和 Sui USDC 支付方面提供了先发优势。',
      },
    },
    {
      '@type': 'Question',
      name: '使用 XPay Labs 可以在 SUI 上接受哪些代币？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 支持原生 SUI 代币和基于 SUI 的 USDC。通过在节点配置中配置合约地址，可以添加额外的 SUI 生态代币。',
      },
    },
    {
      '@type': 'Question',
      name: 'SUI 支付网关是非托管的吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 在所有支持的链上（包括 SUI）都是完全非托管的。私钥从您的助记词确定性生成并存储在您的 Docker 容器中。资金直接进入您的钱包。',
      },
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
      name: 'SUI 支付网关',
      item: 'https://www.xpaylabs.com/zh/solutions/sui-payment-gateway',
    },
  ],
};
export default function SuiPaymentGatewayPage() {
  return (
    <>
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} /> <JsonLd data={breadcrumbSchema} />
        <Header locale="zh" />
        <main className="relative gradient-bg pt-24 pb-20">
          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-[#6D28D9]/10 border border-[#6D28D9]/20 px-3 py-1.5 rounded-full text-xs font-bold text-[#A78BFA] uppercase tracking-wider font-mono mb-6">
              <Cpu className="w-3.5 h-3.5" />
              <span>SUI 支付网关</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              自托管
              <span className="text-gradient-purple-blue">
                SUI 支付网关
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              在 Sui Network——增长最快的 Layer 1 区块链之一——上接受原生 SUI 和 USDC 支付。
              <strong className="text-white">非托管、0% 费率</strong>，
              亚秒级交易检测。首批自托管 SUI 网关解决方案之一。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
              >
                <Server className="w-4 h-4" />
                <span>部署 SUI 网关</span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                <span>查看定价</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
          {/* 统计数据 */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">
                  &lt; 2 秒
                </p>
                <p className="text-xs text-gray-400 mt-1">SUI 检测时间</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">0%</p>
                <p className="text-xs text-gray-400 mt-1">交易费用</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">
                  100%
                </p>
                <p className="text-xs text-gray-400 mt-1">非托管</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">
                  先发
                </p>
                <p className="text-xs text-gray-400 mt-1">市场优势</p>
              </div>
            </div>
          </section>
          {/* 为什么选择 SUI */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-purple">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-6">
                为什么在 Sui Network 上接受支付？
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <Zap className="w-8 h-8 text-[#A78BFA] mb-4" />
                  <h3 className="font-display font-medium text-white text-lg mb-2">
                    亚秒级最终确认
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Sui Network 在 1 秒内即可达成交易最终确认——比任何 EVM 链都快。
                    XPay Labs 在交易提交后 1-2 秒内即可检测到 SUI 支付。
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <Coins className="w-8 h-8 text-[#A78BFA] mb-4" />
                  <h3 className="font-display font-medium text-white text-lg mb-2">
                    低交易成本
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Sui 交易费用仅为几分之一美分。结合 XPay Labs 的 0% 网关费，
                    您每笔 SUI 支付的成本实际上为零。
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <Globe className="w-8 h-8 text-[#A78BFA] mb-4" />
                  <h3 className="font-display font-medium text-white text-lg mb-2">
                    先发优势
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    大多数支付处理器尚不支持 SUI。通过集成 XPay Labs，
                    您将作为 Sui 生态系统的早期采用者脱颖而出。
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 功能特性 */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10 text-center">
              SUI 支付网关功能特性
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <Code2 className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  Move 原生集成
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  专为 Move 编程语言环境构建。XPay Labs 通过 JSON-RPC 连接到 Sui 全节点，
                  监控传入的 SUI 和 USDC 转账。
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Shield className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  默认非托管
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  您的 SUI 私钥从节点助记词生成，并仅存储在您的 Docker 容器中。
                  任何第三方都无法访问或转移您的 SUI 资金。
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Wifi className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  HMAC 签名 Webhook
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  每笔 SUI 支付都会触发经过加密签名的 webhook 负载。
                  验证 HMAC 签名以确保通知来自您的 XPay 节点。
                </p>
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                率先接受 SUI 支付
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                部署首个自托管 SUI 支付网关。零费用、非托管，
                使用 Docker 数分钟内即可就绪。早期采用者将获得竞争优势。
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>部署 SUI 网关</span>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>查看定价</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
