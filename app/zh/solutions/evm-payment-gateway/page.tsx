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
  Layers,
  Wifi,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: 'EVM 支付网关 — 自托管多链加密货币收款 | XPay Labs',
  description:
    '自托管 EVM 支付网关，用于在 Ethereum、BNB Chain、Polygon、Arbitrum、Optimism 和 Base 上接受 USDT、USDC 和 ERC20 代币。非托管、0% 费率、Docker 部署。',
  keywords:
    'EVM 支付网关, Ethereum 支付网关, ERC20 支付处理器, 接受 USDT Ethereum, BNB Chain 支付网关, Polygon 支付网关, Arbitrum 支付网关, Base 支付网关, 多链 EVM 支付, 自托管 ERC20 网关',
  alternates: {
    canonical: 'https://www.xpaylabs.com/solutions/evm-payment-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/solutions/evm-payment-gateway',
      'en-US': 'https://www.xpaylabs.com/solutions/evm-payment-gateway',
      'zh-CN': 'https://www.xpaylabs.com/zh/solutions/evm-payment-gateway',
    },
  },
  openGraph: {
    title: 'EVM 支付网关 — 自托管多链加密货币收款 | XPay Labs',
    description:
      '自托管 EVM 支付网关，支持所有主流 EVM 链。非托管、0% 费率、亚秒级检测。',
    url: 'https://www.xpaylabs.com/zh/solutions/evm-payment-gateway',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVM 支付网关 — 自托管多链加密货币收款 | XPay Labs',
    description:
      '自托管 EVM 支付网关，支持所有主流 EVM 链。非托管、0% 费率、亚秒级检测。',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是 EVM 支付网关？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EVM 支付网关使商户能够在以太坊虚拟机兼容的区块链上接受加密货币支付。这包括 Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Avalanche、Base 等。XPay Labs 提供自托管 EVM 支付网关，扫描这些链上的传入 ERC20 稳定币支付。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 支持哪些 EVM 链？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 原生支持 Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Avalanche 和 Base。通过在节点配置 JSON 中配置 RPC 端点和链 ID，可以添加额外的 EVM 链。',
      },
    },
    {
      '@type': 'Question',
      name: 'EVM 支付网关是非托管的吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 是完全非托管的。私钥从您的助记词确定性生成并存储在您的 Docker 容器中。资金直接进入您的钱包——从不经过中间人。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 对 EVM 支付收取什么费用？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 收取 0% 交易手续费。您只需支付区块链网络 Gas 费，在 Arbitrum、Optimism 和 Base 等 L2 链上通常每笔交易低于 $0.01。',
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
      name: 'EVM 支付网关',
      item: 'https://www.xpaylabs.com/zh/solutions/evm-payment-gateway',
    },
  ],
};
export default function EvmPaymentGatewayPage() {
  return (
    <>
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} /> <JsonLd data={breadcrumbSchema} />
        <Header />
        <main className="relative gradient-bg pt-24 pb-20">
          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider font-mono mb-6">
              <Cpu className="w-3.5 h-3.5" />
              <span>EVM 支付网关</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
              自托管
              <span className="text-gradient-purple-blue">
                EVM 支付网关
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl">
              在每一条主流 EVM 链上接受 USDT、USDC 和 ERC20 代币——
              Ethereum、BNB Chain、Polygon、Arbitrum、Optimism 和 Base。
              <strong className="text-white">非托管、0% 费率</strong>，
              亚秒级交易检测。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
              >
                <Server className="w-4 h-4" />
                <span>部署 EVM 网关</span>
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
                <p className="text-2xl font-bold text-white font-display">7+</p>
                <p className="text-xs text-gray-400 mt-1">
                  支持 EVM 链
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">0%</p>
                <p className="text-xs text-gray-400 mt-1">交易费用</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">
                  &lt; 3 秒
                </p>
                <p className="text-xs text-gray-400 mt-1">检测时间</p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-white font-display">
                  100%
                </p>
                <p className="text-xs text-gray-400 mt-1">非托管</p>
              </div>
            </div>
          </section>
          {/* 支持的链 */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-blue">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-6">
                支持的 EVM 链
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: 'Ethereum',
                    token: 'ETH',
                    stablecoins: 'USDT, USDC, DAI',
                    icon: '⟠',
                  },
                  {
                    name: 'BNB Chain',
                    token: 'BNB',
                    stablecoins: 'USDT, USDC, BUSD',
                    icon: '♦',
                  },
                  {
                    name: 'Polygon',
                    token: 'MATIC',
                    stablecoins: 'USDT, USDC, DAI',
                    icon: '⬡',
                  },
                  {
                    name: 'Arbitrum',
                    token: 'ETH',
                    stablecoins: 'USDT, USDC, DAI',
                    icon: '○',
                  },
                  {
                    name: 'Optimism',
                    token: 'ETH',
                    stablecoins: 'USDT, USDC, DAI',
                    icon: '◉',
                  },
                  {
                    name: 'Avalanche',
                    token: 'AVAX',
                    stablecoins: 'USDT, USDC, DAI',
                    icon: '▲',
                  },
                  {
                    name: 'Base',
                    token: 'ETH',
                    stablecoins: 'USDT, USDC',
                    icon: '◆',
                  },
                  {
                    name: '更多链（通过配置）',
                    token: '',
                    stablecoins: '任意 ERC20',
                    icon: '+',
                  },
                ].map((chain) => (
                  <div
                    key={chain.name}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-blue/20 transition-colors"
                  >
                    <div className="text-xl mb-2">{chain.icon}</div>
                    <h3 className="text-sm font-display font-medium text-white">
                      {chain.name}
                    </h3>
                    {chain.token && (
                      <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                        {chain.token}
                      </p>
                    )}
                    <p className="text-[11px] text-brand-cyan mt-1">
                      {chain.stablecoins}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* 功能特性 */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10 text-center">
              为什么运行自托管 EVM 支付网关？
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  零网关费
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  托管的 EVM 支付处理器每笔交易收取 0.5–1%。使用 XPay Labs，
                  您只需支付网络燃料费——在 Arbitrum 和 Base 等 L2 上，
                  每笔交易不到 0.01 美元。
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Shield className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  非托管安全
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  私钥永远不会离开您的基础设施。没有第三方托管您的资金。
                  结算即时完成——每笔支付直接进入您的链上钱包。
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Layers className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  默认多链
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  单个 XPay Labs 部署即可同时监控所有 EVM 链。
                  无论客户使用哪条链，一个 webhook 端点即可接收标准化的支付通知。
                </p>
              </div>
            </div>
          </section>
          {/* 对比 */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-cyan">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-6 text-center">
                EVM 支付网关对比
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">功能</th>
                      <th className="p-4 text-gray-400 font-medium">
                        托管 EVM 网关
                      </th>
                      <th className="p-4 text-brand-cyan font-medium">
                        XPay Labs
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">费用</td>
                      <td className="p-4 text-gray-400">
                        每笔交易 0.5–1%
                      </td>
                      <td className="p-4 text-green-400">0%（仅燃料费）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">托管</td>
                      <td className="p-4 text-gray-400">
                        托管模式（提供商持有密钥）
                      </td>
                      <td className="p-4 text-green-400">
                        非托管（您持有密钥）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        链覆盖
                      </td>
                      <td className="p-4 text-gray-400">
                        通常 1–2 条链
                      </td>
                      <td className="p-4 text-green-400">
                        同时支持 7+ 条 EVM 链
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        检测速度
                      </td>
                      <td className="p-4 text-gray-400">
                        依赖区块确认
                      </td>
                      <td className="p-4 text-green-400">
                        亚秒级交易池扫描
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        结算
                      </td>
                      <td className="p-4 text-gray-400">
                        定期批量支付
                      </td>
                      <td className="p-4 text-green-400">
                        即时到账您的钱包
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        白标
                      </td>
                      <td className="p-4 text-gray-400">通常受限</td>
                      <td className="p-4 text-green-400">完全白标</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        源代码
                      </td>
                      <td className="p-4 text-gray-400">闭源</td>
                      <td className="p-4 text-green-400">源代码可用</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                部署您的 EVM 支付网关
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                在 7+ 条 EVM 链上接受 USDT 和 USDC，零网关费。
                自托管、非托管，使用 Docker 数分钟即可完成部署。
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" /> <span>立即部署</span>
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
