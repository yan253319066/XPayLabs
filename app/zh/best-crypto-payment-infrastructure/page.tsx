import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, DollarSign, Globe, Server, Zap, Workflow, Container, Users, ArrowRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: '最佳加密支付基础设施 — 自托管多链支付网关 | XPay Labs',
  description: '最佳加密支付基础设施，支持 USDT、USDC 等加密货币收款。自托管、非托管、多链（TRON、EVM、SUI）。Docker 一键部署，分钟级上线。',
  keywords: ['最佳加密支付基础设施', '加密支付网关', '加密货币支付平台', '加密货币支付系统', '加密支付系统', '数字货币支付网关', '数字货币收款', 'USDT 收款接口', 'USDT 支付接口', '白标支付网关', '代收 USDT', '多链加密支付网关', '自托管加密支付', '非托管支付网关', 'USDT 支付网关', 'USDC 支付网关', 'TRON 支付网关', 'EVM 支付网关', 'SUI 支付网关', '开源加密支付'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/best-crypto-payment-infrastructure',
    languages: {
      'x-default': 'https://www.xpaylabs.com/best-crypto-payment-infrastructure',
      'en-US': 'https://www.xpaylabs.com/best-crypto-payment-infrastructure',
      'zh-CN': 'https://www.xpaylabs.com/zh/best-crypto-payment-infrastructure',
    },
  },
  openGraph: {
    title: '最佳加密支付基础设施 — 自托管多链支付网关 | XPay Labs',
    description: '在您自己的服务器上部署最佳加密支付基础设施。零费率、非托管、支持 22+ 条区块链。接受 USDT、USDC 等。',
    url: 'https://www.xpaylabs.com/zh/best-crypto-payment-infrastructure',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '最佳加密支付基础设施 — XPay Labs',
    description: '部署最佳加密支付基础设施。零费率、非托管、支持 22+ 条区块链。',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是最佳加密支付基础设施？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最佳加密支付基础设施应具备多链支持、非托管安全、零交易手续费、自托管部署、多商户架构和简洁的开发者 API。XPay Labs 通过单一的 Docker 部署提供所有这些能力。',
      },
    },
    {
      '@type': 'Question',
      name: '自托管加密支付基础设施比托管方案更好吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自托管基础设施让您完全掌控资金、数据和费用。托管网关收取 0.5–1% 每笔交易手续费并托管您的资金。XPay Labs 等自托管网关收取 0% 费用，私钥保留在您的基础设施上。月交易量超过 $10,000 的企业，自托管方案可快速收回成本。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 支持哪些区块链？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 支持 TRON（TRC20 USDT）、20+ 条 EVM 兼容链（Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Avalanche、Base）和 SUI——全部通过单一部署完成。',
      },
    },
  ],
};

const chainData = [
  { name: 'TRON', tokens: 'USDT (TRC20), USDC, USDD', link: '/zh/solutions/tron-payment-gateway' },
  { name: 'Ethereum', tokens: 'USDT, USDC, 任意 ERC20', link: '/zh/solutions/evm-payment-gateway' },
  { name: 'BNB Chain', tokens: 'USDT, USDC, BEP20', link: '/zh/solutions/evm-payment-gateway' },
  { name: 'Polygon', tokens: 'USDT, USDC, 任意 ERC20', link: '/zh/solutions/evm-payment-gateway' },
  { name: 'Avalanche', tokens: 'USDT, USDC, 任意 ERC20', link: '/zh/solutions/evm-payment-gateway' },
  { name: 'SUI', tokens: 'SUI, USDC', link: '/zh/solutions/sui-payment-gateway' },
];

export default function BestCryptoPaymentInfrastructurePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />

        <main className="relative pt-28 pb-20">

          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-brand-blue opacity-5 blur-[150px] rounded-full pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono mb-6">
                <Shield className="w-3.5 h-3.5" />
                <span>2026 年最佳加密支付基础设施</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
                最佳{' '}
                <span className="text-gradient-purple-blue">加密支付基础设施</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl mx-auto">
                自托管、非托管、多链。在您自己的服务器上部署最佳加密支付基础设施——零费率、无限商户、22+ 条区块链。
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(91,140,255,0.3)]"
                >
                  立即部署
                </Link>
                <Link
                  href="/zh/solutions/tron-payment-gateway"
                  className="px-8 py-3.5 border border-white/10 text-gray-300 rounded-full text-sm font-bold hover:border-brand-blue/30 hover:text-white transition-all"
                >
                  查看解决方案
                </Link>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Container, value: '11', label: 'Docker 服务' },
                { icon: Globe, value: '22+', label: '区块链' },
                { icon: Users, value: '无限', label: '单实例商户数' },
                { icon: DollarSign, value: '0%', label: '交易手续费' },
              ].map((s) => (
                <div key={s.label} className="glass-panel rounded-2xl p-6 text-center border border-white/5">
                  <s.icon className="w-6 h-6 text-brand-blue mx-auto mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white font-display">{s.value}</div>
                  <div className="text-xs text-gray-500 font-sans mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why This Is The Best */}
          <section className="py-20 bg-[#060816]/60 relative">
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-purple opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                  XPay Labs 为何是最佳选择
                </h2>
                <p className="text-slate-400 text-base font-sans leading-relaxed">
                  为需要生产级加密支付基础设施的运营商而建。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: '非托管设计', text: '私钥永不离开您的基础设施。资金直接结算到您的钱包。无对手方风险、无提现限制、无需 KYC。' },
                  { icon: DollarSign, title: '零交易手续费', text: '无每笔交易费用、无月度最低收费、无收入分成。您只需支付服务器托管和区块链 Gas 费。' },
                  { icon: Workflow, title: '多商户架构', text: '单个部署托管无限商户。自主设置费率，从每笔交易中赚取收入。' },
                  { icon: Globe, title: '跨链支持', text: 'TRON、20+ EVM 链和 SUI，全部通过单一部署完成。接受 USDT、USDC 及各大网络的原生代币。' },
                  { icon: Server, title: '一键部署', text: '一条 docker compose up 命令启动 11 个容器——扫描器、API、管理后台、收银台、数据库，全部自动编排。' },
                  { icon: Zap, title: '实时检测', text: '区块链扫描器每 1–2 秒同时扫描所有链。交易检测和 webhook 推送实时完成。' },
                ].map((f) => (
                  <div key={f.title} className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all">
                    <f.icon className="w-8 h-8 text-brand-blue mb-4" />
                    <h3 className="text-white font-bold mb-2 font-display">{f.title}</h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chain Support */}
          <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                  <Globe className="w-3 h-3" />
                  支持的区块链
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                  默认多链
                </h2>
                <p className="text-slate-400 text-base font-sans leading-relaxed">
                  在您的客户使用的链上接受付款。
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {chainData.map((c) => (
                  <Link
                    key={c.name}
                    href={c.link}
                    className="glass-panel rounded-2xl p-5 border border-white/5 hover:border-brand-blue/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold font-display group-hover:text-brand-blue transition-colors">{c.name}</h3>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-brand-blue transition-colors" />
                    </div>
                    <p className="text-xs text-gray-500 font-sans">{c.tokens}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison Summary */}
          <section className="py-20 bg-[#060816]/60 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    基础设施对比
                  </h2>
                  <p className="text-slate-400 text-base font-sans leading-relaxed">
                    XPay Labs 与托管和自托管替代方案的对比。
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-white/5">
                  <table className="w-full text-left text-sm font-sans">
                    <thead>
                      <tr className="bg-[#0b0e25] border-b border-white/8">
                        <th className="p-4 text-gray-400 font-medium">特性</th>
                        <th className="p-4 text-brand-cyan font-medium">XPay Labs</th>
                        <th className="p-4 text-gray-400 font-medium">BTCPay Server</th>
                        <th className="p-4 text-gray-400 font-medium">托管网关</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">费用</td>
                        <td className="p-4 text-green-400">0%</td>
                        <td className="p-4 text-green-400">0%</td>
                        <td className="p-4 text-amber-400">0.5–1%</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">托管方式</td>
                        <td className="p-4 text-green-400">非托管</td>
                        <td className="p-4 text-green-400">非托管</td>
                        <td className="p-4 text-amber-400">托管</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">多商户</td>
                        <td className="p-4 text-green-400">原生支持</td>
                        <td className="p-4 text-amber-400">单商户</td>
                        <td className="p-4 text-amber-400">单商户</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">运营商收入</td>
                        <td className="p-4 text-green-400">支持</td>
                        <td className="p-4 text-amber-400">不支持</td>
                        <td className="p-4 text-amber-400">不支持</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">稳定币</td>
                        <td className="p-4 text-green-400">原生多链</td>
                        <td className="p-4 text-amber-400">无</td>
                        <td className="p-4 text-amber-400">有限</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">支持的链</td>
                        <td className="p-4 text-green-400">TRON + EVM + SUI</td>
                        <td className="p-4 text-amber-400">Bitcoin + Lightning</td>
                        <td className="p-4 text-amber-400">BTC 等少数</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/zh/guides/best-self-hosted-crypto-payment-gateway"
                    className="text-brand-blue hover:underline text-sm font-sans"
                  >
                    查看完整对比指南 →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-transparent to-brand-purple/5 pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                  部署最佳加密支付基础设施
                </h2>
                <p className="text-slate-400 text-base font-sans leading-relaxed max-w-2xl mx-auto">
                  自托管、非托管、零费率。在您自己的服务器上部署，30 分钟内开始接受 22+ 条区块链的加密货币支付。
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(91,140,255,0.3)]"
                  >
                    开始使用
                  </Link>
                  <Link
                    href="/zh/solutions/tron-payment-gateway"
                    className="px-8 py-3.5 border border-white/10 text-gray-300 rounded-full text-sm font-bold hover:border-brand-blue/30 hover:text-white transition-all"
                  >
                    探索解决方案
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
