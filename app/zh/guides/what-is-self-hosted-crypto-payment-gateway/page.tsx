import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Server,
  Shield,
  Globe,
  DollarSign,
  Key,
  Cpu,
  Coins,
  BookOpen,
  ArrowUpRight,
  Zap,
  Monitor,
  Layout,
  Warehouse,
  ShoppingCart,
  Binary,
  Network,
  ExternalLink,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: '什么是自托管加密支付网关？— 完整指南 | XPay Labs',
  description:
    '自托管加密支付网关是您部署在自己服务器上直接接受加密货币支付的软件。了解其工作原理、与托管网关相比的优势以及如何选择合适方案。',
  keywords: [
    '自托管加密支付网关',
    '什么是自托管支付网关',
    '加密支付网关解释',
    '非托管支付网关',
    '加密支付网关如何工作',
    '自托管与托管加密支付',
  ],
  alternates: {
    canonical:
      'https://www.xpaylabs.com/guides/what-is-self-hosted-crypto-payment-gateway',
    languages: {
      'x-default':
        'https://www.xpaylabs.com/guides/what-is-self-hosted-crypto-payment-gateway',
      'en-US':
        'https://www.xpaylabs.com/guides/what-is-self-hosted-crypto-payment-gateway',
      'zh-CN':
        'https://www.xpaylabs.com/zh/guides/what-is-self-hosted-crypto-payment-gateway',
    },
  },
  openGraph: {
    title: '什么是自托管加密支付网关？— 完整指南 | XPay Labs',
    description:
      '自托管加密支付网关是您部署在自己服务器上直接接受加密货币支付的软件。了解其工作原理、与托管网关相比的优势以及如何选择合适方案。',
    url: 'https://www.xpaylabs.com/zh/guides/what-is-self-hosted-crypto-payment-gateway',
    type: 'article',
  },
  twitter: {
    title: '什么是自托管加密支付网关？— 完整指南 | XPay Labs',
    description:
      '自托管加密支付网关是您部署在自己服务器上直接接受加密货币支付的软件。了解其工作原理、与托管网关相比的优势以及如何选择合适方案。',
    card: 'summary_large_image',
  },
};
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '什么是自托管加密支付网关？完整指南',
  description:
    '自托管加密支付网关是您部署在自己服务器上直接接受加密货币支付的软件。了解其工作原理、与托管网关相比的优势以及如何选择合适方案。',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-22',
  dateModified: '2026-05-29',
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
      item: 'https://www.xpaylabs.com/zh/guides/what-is-self-hosted-crypto-payment-gateway',
    },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是自托管加密支付网关？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自托管加密支付网关是您部署在自己的服务器基础设施上以接受加密货币支付的软件。与托管（第三方）网关不同，您控制私钥、结账体验和服务器环境。资金直接结算到您的钱包，没有中间人保管。',
      },
    },
    {
      '@type': 'Question',
      name: '自托管加密支付网关如何工作？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自托管网关为每张发票生成一个唯一的区块链充值地址。客户将加密货币发送到该地址。网关监控区块链交易池并检测传入交易。当达到所需的区块确认数后，它会触发 webhook 通知您的服务器，支付直接结算到您的钱包。',
      },
    },
    {
      '@type': 'Question',
      name: '自托管加密支付网关相比托管网关有哪些优势？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自托管网关提供零交易手续费、非托管模式（您持有密钥）、完全白标品牌、无 KYC 要求、即时结算以及对基础设施的完全控制。托管网关每笔交易收取 1-3% 费用、托管资金、需要企业 KYC，并可自行决定冻结账户。',
      },
    },
    {
      '@type': 'Question',
      name: '自托管加密支付网关安全吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。自托管网关通常比托管方案更安全，因为私钥永远不会离开您的基础设施。没有第三方可以访问您的资金。现代自托管网关使用 BIP-39 种子短语进行确定性钱包派生，使用 HMAC 签名 webhook 进行服务器间通信，并完全在您自己的 Docker 环境中运行。',
      },
    },
    {
      '@type': 'Question',
      name: '谁应该使用自托管加密支付网关？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自托管网关非常适合希望获得最大控制权、最低费用和主权支付基础设施的开发者、电商商家、SaaS 平台和企业。它们最适合具备基础 DevOps 能力的团队，这些团队重视隐私、定制化和长期成本节约，而非全托管服务的便利性。',
      },
    },
  ],
};
const characteristics = [
  {
    icon: Shield,
    title: '非托管',
    description:
      '您控制私钥。资金直接从客户流向您的钱包，没有任何中间人在任何时候保管资金。',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
  {
    icon: Server,
    title: '自行部署',
    description:
      '网关软件在您自己的服务器或云基础设施上运行。您管理部署、更新、监控和扩展。',
    glow: 'glow-cyan',
    iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
    iconColor: 'text-brand-cyan',
  },
  {
    icon: Binary,
    title: '开放可审计',
    description:
      '源代码完全可审计。您可以精确检查密钥如何派生、交易如何检测以及支付如何结算。',
    glow: 'glow-purple',
    iconBg: 'bg-brand-purple/10 border-brand-purple/20',
    iconColor: 'text-brand-purple',
  },
  {
    icon: Cpu,
    title: '多链支持',
    description:
      '现代自托管网关开箱即用支持多条区块链——TRON、EVM 链、SUI 等——全部通过单一部署。',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
];
const howItWorks = [
  {
    num: '1',
    title: '客户发起支付',
    description:
      '在结账时，您的后端调用网关 API 创建发票。网关根据您的 HD 钱包种子生成一个唯一的区块链充值地址。没有两张发票共享同一地址。',
    icon: ShoppingCart,
  },
  {
    num: '2',
    title: '交易池检测',
    description:
      '网关持续扫描区块链交易池，查找发送到发票地址的交易。它在交易确认之前即可检测到待处理的交易，让您可以向客户显示实时支付状态。',
    icon: Network,
  },
  {
    num: '3',
    title: '区块确认与 Webhook',
    description:
      '一旦交易达到配置的区块确认数（例如 TRON 为 19，Ethereum 为 12），网关会向您的回调 URL 发送一个 HMAC-SHA256 签名的 webhook，包含完整的交易详情。',
    icon: Zap,
  },
  {
    num: '4',
    title: '结算',
    description:
      '资金直接结算到从您的种子短语派生的钱包地址。因为您持有密钥，结算是即时且不可逆的。无批量处理、无提现延迟、无中间人持有。',
    icon: DollarSign,
  },
];
const useCases = [
  {
    icon: ShoppingCart,
    title: '电子商务',
    description:
      '在接受加密货币支付时享受零交易手续费。为每笔订单生成唯一地址，通过手动钱包操作处理退款，完全消除拒付风险。',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
  {
    icon: Monitor,
    title: 'SaaS 平台',
    description:
      '通过基于 webhook 的订阅管理集成定期加密账单。使用确定性地址派生将客户映射到地址，而无需存储敏感数据。',
    glow: 'glow-cyan',
    iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
    iconColor: 'text-brand-cyan',
  },
  {
    icon: Globe,
    title: '捐赠系统',
    description:
      '接受匿名、抗审查的捐赠。每次捐赠生成动态地址，或使用静态收款地址配合备注归属实现捐赠者识别。',
    glow: 'glow-purple',
    iconBg: 'bg-brand-purple/10 border-brand-purple/20',
    iconColor: 'text-brand-purple',
  },
  {
    icon: Warehouse,
    title: '企业资金管理',
    description:
      '大规模收款，具备自动对账、多链支持和基于 webhook 的可编程会计集成，可与 QuickBooks 和 Netsuite 等 ERP 系统对接。',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
];
const benefits = [
  {
    icon: DollarSign,
    title: '更低成本',
    description:
      '自托管网关收取 0% 交易手续费，而托管处理商收取 1–3%。对于每月交易 $10 万的企业，这相当于每年节省 $1.2 万–$3.6 万。您只需支付服务器托管费（$10–$20/月）和区块链 Gas 费。',
    glow: 'glow-cyan',
    iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
    iconColor: 'text-brand-cyan',
  },
  {
    icon: Key,
    title: '完全控制',
    description:
      '您拥有私钥、基础设施和结账体验的所有权。没有第三方可以冻结您的账户、更改您的费率、限制您支持的链或规定您的条款。您的支付栈与区块链本身一样具有主权。',
    glow: 'glow-blue',
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    iconColor: 'text-brand-blue',
  },
  {
    icon: Shield,
    title: '财务隐私',
    description:
      '无 KYC、无需企业认证、无需与支付处理商共享财务数据。您的交易历史只有您和区块链知道。这对于在限制性司法管辖区或隐私敏感行业运营的企业尤为重要。',
    glow: 'glow-purple',
    iconBg: 'bg-brand-purple/10 border-brand-purple/20',
    iconColor: 'text-brand-purple',
  },
  {
    icon: Layout,
    title: '完全自定义',
    description:
      '支付流程的每个方面都在您的掌控之下——结账页面设计、邮件通知、确认逻辑、备用链和集成模式。您不受第三方平台功能路线图或设计限制的约束。',
    glow: 'glow-cyan',
    iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
    iconColor: 'text-brand-cyan',
  },
];
export default function WhatIsSelfHostedGatewayPage() {
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
              <div className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-purple uppercase tracking-wider font-mono mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>知识库</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                什么是自托管加密支付网关？
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                自托管加密支付网关是您部署在自己的服务器上直接接受加密货币支付的软件。与托管解决方案不同，您控制私钥、结账体验和整个支付流程——零交易手续费，且第三方不保管您的资金。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>部署您的网关</span>
                </Link>
                <Link
                  href="/guides/how-to-accept-crypto-payments"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>设置指南</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
            {/* What is a Self-Hosted Crypto Payment Gateway? */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                什么是自托管加密支付网关？
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                自托管加密支付网关是一个软件应用程序，您安装并运行在自己的服务器基础设施上，用于接受、检测和结算加密货币支付。它充当客户加密钱包与企业后端系统之间的桥梁——生成区块链充值地址、跨多条链监控交易，并在支付确认后通知您的应用程序。
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-8">
                "自托管"一词将这种方法与托管（第三方）支付网关（如 BitPay、Coinbase Commerce 或 CoinGate）区分开来。使用托管网关，您依赖外部公司检测支付并将资金转交给您——它们保管资金、设定费率并控制结账体验。而使用自托管网关，您自行运行软件、保管私钥，并保持对支付基础设施的完全主权。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {characteristics.map((item) => (
                  <div
                    key={item.title}
                    className={`glass-panel rounded-2xl p-6 ${item.glow}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${item.iconBg} border flex items-center justify-center mb-3`}
                    >
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-base font-display font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                自托管加密支付网关的工作原理
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                无论使用哪种具体软件，所有自托管加密支付网关都遵循相同的基本流程。以下是一笔典型交易如何从客户钱包流转到您的银行账户：
              </p>
              <div className="space-y-0">
                {howItWorks.map((step, idx) => (
                  <div
                    key={step.num}
                    className="relative flex gap-6 pb-10 last:pb-0"
                  >
                    {/* Vertical connector line */}
                    {idx < howItWorks.length - 1 && (
                      <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 to-transparent" />
                    )}
                    <div className="shrink-0">
                      <div className="w-[46px] h-[46px] rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 border border-brand-blue/30 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-brand-blue" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-display font-medium text-white mb-1">
                        <span className="text-brand-blue font-mono mr-2">
                          {step.num}.
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">关键提示：</strong> 从检测到 webhook 的完整流程，在 TRON 等快速链上通常在 60 秒内完成（3 秒区块，19 个确认约 57 秒），在 Arbitrum 等 L2 上则在 30 秒内完成。客户可以实时查看交易在每个阶段的进展状态。
              </div>
            </section>
            {/* Self-Hosted vs Hosted Gateway Comparison */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                自托管 vs 托管网关：对比
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                在自托管和托管（第三方）加密支付网关之间做选择，归结为在控制权、成本、便利性和托管模式之间的权衡。以下是它们在关键决策因素上的对比：
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">方面</th>
                      <th className="p-4 text-orange-400 font-medium">
                        托管（第三方）
                      </th>
                      <th className="p-4 text-brand-cyan font-medium">
                        自托管
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        交易手续费
                      </td>
                      <td className="p-4 text-gray-400">
                        每笔交易 1%–3%
                      </td>
                      <td className="p-4 text-green-400">0%（仅 Gas 费）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">托管方式</td>
                      <td className="p-4 text-gray-400">
                        托管（处理商持有密钥）
                      </td>
                      <td className="p-4 text-green-400">
                        非托管（您持有密钥）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        链支持
                      </td>
                      <td className="p-4 text-gray-400">
                        限于处理商已集成的链
                      </td>
                      <td className="p-4 text-green-400">
                        您配置的任何链（TRON、EVM、SUI 等）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        白标品牌
                      </td>
                      <td className="p-4 text-gray-400">
                        需要显示处理商品牌标识
                      </td>
                      <td className="p-4 text-green-400">
                        完全白标（您的品牌）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        部署方式
                      </td>
                      <td className="p-4 text-gray-400">
                        SaaS 注册（几分钟）
                      </td>
                      <td className="p-4 text-gray-300">
                        Docker 部署（30 分钟）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        需要 KYC
                      </td>
                      <td className="p-4 text-gray-400">
                        是（企业认证）
                      </td>
                      <td className="p-4 text-green-400">否</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        结算速度
                      </td>
                      <td className="p-4 text-gray-400">
                        延迟（每日/每周批量结算）
                      </td>
                      <td className="p-4 text-green-400">
                        即时（直达您的钱包）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        账户冻结风险
                      </td>
                      <td className="p-4 text-gray-400">
                        有（处理商自行决定）
                      </td>
                      <td className="p-4 text-green-400">
                        无（您就是处理商）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        代码可审计性
                      </td>
                      <td className="p-4 text-gray-400">闭源</td>
                      <td className="p-4 text-green-400">完全可审计</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        维护工作
                      </td>
                      <td className="p-4 text-gray-400">
                        无（全托管）
                      </td>
                      <td className="p-4 text-gray-300">
                        自行管理（更新、监控）
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-sans leading-relaxed">
                当控制权、成本和隐私比操作便利性更重要时，自托管网关是正确的选择。托管网关适合偏好全托管服务并接受费用和托管模式权衡的非技术用户。
              </p>
            </section>
            {/* Benefits */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                自托管加密支付网关的优势
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                企业和开发者选择自托管网关主要基于四个原因。每个原因都代表了相对于托管模式的根本性优势：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className={`glass-panel rounded-2xl p-6 ${item.glow}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${item.iconBg} border flex items-center justify-center mb-3`}
                    >
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-base font-display font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            {/* Popular Use Cases */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                常见使用场景
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                自托管加密支付网关服务于广泛的商业模式。以下是最常见的部署场景：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((item) => (
                  <div
                    key={item.title}
                    className={`glass-panel rounded-2xl p-5 ${item.glow}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-9 h-9 rounded-lg ${item.iconBg} border flex items-center justify-center shrink-0`}
                      >
                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <h3 className="text-sm font-display font-medium text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            {/* How to Choose */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                如何选择适合的自托管网关
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                并非所有自托管网关都一样。在评估选项时，请考虑以下决策因素，找到最符合您需求的解决方案：
              </p>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      链兼容性
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      确认网关开箱即用支持哪些区块链和代币。如果您的客户主要使用 TRON USDT，请优先选择具有原生 TRON 支持和 TronGrid 集成的网关。如需多链收款，寻找支持 TRON、EVM 链以及 SUI 等新兴 L1 并可通过单一部署实现的解决方案。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-cyan font-mono mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      部署模式
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      检查网关是以 Docker 镜像、二进制文件还是源代码形式分发。基于 Docker 的网关最易于部署和更新。确认最低系统要求——大多数网关可以在 1 GB 内存 / 20 GB 存储的 VPS 上流畅运行。同时考虑软件是否使用反向代理处理 TLS。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-purple font-mono mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      API 与集成质量
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      评估 API 设计、SDK 可用性和 webhook 可靠性。寻找 HMAC 签名 webhook、幂等性键和清晰的文档。一个好的网关提供用于支付创建、地址生成和交易查询的 REST 端点，并具有定义良好的请求/响应模式。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-blue font-mono mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      安全与密钥管理
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      了解网关如何处理私钥。它是否使用 BIP-39 HD 钱包派生？能否导入现有种子短语？API 密钥是否具有细粒度权限范围？是否支持硬件钱包集成进行冷存储？这些细节决定了支付基础设施的整体安全态势。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 text-sm font-bold text-brand-cyan font-mono mt-0.5">
                    5
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-medium text-white mb-1">
                      社区与支持
                    </h3>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      开源网关依赖于社区贡献。检查 GitHub 仓库的近期活动、问题响应时间和文档质量。活跃的开发和响应迅速的项目维护者是一个长期可靠的网关的有力信号。
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
                关于自托管加密支付网关及其与传统托管解决方案对比的常见问题。
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
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  准备部署您的自托管网关了吗？
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  XPay Labs 是一个现代的、开源的自托管加密支付网关。在您自己的基础设施上使用 Docker 部署，30 分钟内完成。零交易手续费、非托管安全、支持 TRON、EVM 和 SUI 链。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>部署您的网关</span>
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
