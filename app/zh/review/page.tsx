import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  Check,
  X,
  Shield,
  DollarSign,
  Server,
  Zap,
  Globe,
  Cpu,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';
export const metadata: Metadata = {
  title: 'XPay Labs（简称 xpay）评测 — 自托管加密支付基础设施 2026',
  description:
    '阅读 XPay Labs（xpay）的真实评测——功能、定价、优缺点及竞品对比。',
  keywords: [
    'XPay Labs 评测',
    'xpay 评测',
    '自托管加密支付网关评测',
    'xpay 功能',
    'xpay 定价',
    'XPay Labs 优缺点',
    'xpay 自托管网关',
  ],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/review',
    languages: {
      'x-default': 'https://www.xpaylabs.com/review',
      'en-US': 'https://www.xpaylabs.com/review',
      zh: 'https://www.xpaylabs.com/zh/review',
    },
  },
  openGraph: {
    title: 'XPay Labs（xpay）评测 2026 — 自托管加密支付基础设施',
    description: 'XPay Labs（xpay）的全面评测——功能、定价、优缺点及竞品对比。',
    url: 'https://www.xpaylabs.com/zh/review',
    type: 'article',
  },
  twitter: {
    title: 'XPay Labs（xpay）评测 2026 — 自托管加密支付网关',
    description: 'XPay Labs（xpay）的全面评测——功能、定价、优缺点。',
    card: 'summary_large_image',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是 XPay Labs？它是如何工作的？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 是一款自托管、非托管的加密支付网关，您通过 Docker 部署在自己的服务器上。它为每张发票生成唯一的区块链充值地址，监控 TRON、EVM 和 SUI 区块链上的传入支付，并在付款确认后向您的应用程序发送 HMAC 签名的 webhook。资金直接结算到您的钱包，无中间环节。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 免费使用吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 是免费软件，零交易手续费，零月度订阅费用。您只需支付服务器托管费用（VPS 每月 $10-$20）和区块链网络 Gas 费（根据网络拥堵情况，通常每笔交易 $0.01-$0.50）。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 的优缺点是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '优点：0% 交易手续费、非托管（您持有密钥）、多链支持（TRON、EVM、SUI）、亚秒级支付检测、白标结账、HMAC 签名 webhook、无需 KYC、基于 Docker 的部署。缺点：需要 DevOps 技能进行设置、不支持 Bitcoin/Lightning、社区规模较 BTCPay Server 小、无内置法币兑换功能。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 与 Coinbase Commerce 相比如何？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 是自托管且非托管的，费率为 0%，而 Coinbase Commerce 收取 0.8% + $25/月且采用托管模式。XPay Labs 支持 TRON、EVM 链和 SUI，而 Coinbase Commerce 支持 BTC、ETH、USDC 等少数币种。XPay Labs 提供完全白标自定义，而 Coinbase Commerce 要求显示 Coinbase 品牌标识。',
      },
    },
    {
      '@type': 'Question',
      name: '谁应该使用 XPay Labs？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 适合具备基本 DevOps 能力并优先考虑控制权、隐私和成本节省的开发者、电商商家、SaaS 平台和企业。它最适合在 TRON、EVM 链或 SUI 上处理稳定币支付（USDT、USDC）并希望消除网关费用的业务。',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 安全吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 是非托管的——私钥在您的 Docker 容器中本地生成，从不会离开您的基础设施。它使用 BIP-39 HD 钱包派生、HMAC-SHA256 签名 webhook，并在您自己隔离的环境中完全运行。在支付生命周期的任何阶段，第三方都无法访问资金。',
      },
    },
  ],
};
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'XPay Labs (xpay)',
    alternateName: 'xpay',
    applicationCategory: 'PaymentProcessing',
    operatingSystem: 'Docker, Linux',
  },
  author: { '@type': 'Organization', name: 'XPay Labs (xpay)' },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
  },
  datePublished: '2026-05-31',
  description: 'XPay Labs（xpay）是一款自托管、非托管的加密支付网关，支持 TRON、EVM 链和 SUI，零交易手续费。',
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
      name: '评测',
      item: 'https://www.xpaylabs.com/zh/review',
    },
  ],
};
export default function ReviewPage() {
  return (
    <><JsonLd data={faqSchema} /> <JsonLd data={reviewSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Hero */}
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider font-mono mb-6">
                <Star className="w-3.5 h-3.5" />
                <span>2026 产品评测</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                XPay Labs 2026 评测：自托管加密支付的真实评价
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                这是一份实事求是的 XPay Labs 评测——这是一款自托管、非托管的加密支付网关。我们从功能特性、
                定价、安全性、易用性和竞争定位等多个维度进行评估，
                帮助您判断它是否适合作为您业务的支付基础设施。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" /> <span>开始使用</span>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>查看定价</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
            {/* Rating Summary */}
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 glow-blue">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="text-center shrink-0">
                    <div className="text-5xl font-display font-bold text-white">
                      4.8
                    </div>
                    <div className="flex items-center gap-0.5 mt-2 justify-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 font-mono">
                      总体评分
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs">功能特性</div>
                      <div className="text-white font-semibold">5.0 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">定价</div>
                      <div className="text-white font-semibold">5.0 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">易用性</div>
                      <div className="text-white font-semibold">4.0 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">安全性</div>
                      <div className="text-white font-semibold">5.0 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">链支持</div>
                      <div className="text-white font-semibold">4.5 / 5</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">文档质量</div>
                      <div className="text-white font-semibold">4.5 / 5</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Pros & Cons */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-6">
                优缺点
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-green-500">
                  <h3 className="text-base font-display font-medium text-green-400 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" /> 优点
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">零费用</strong> —
                        0% 交易手续费，无月订阅费。仅需支付 Gas 费和服务器成本。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">非托管</strong>
                        — 私钥保留在您的 Docker 容器中。任何第三方都无法冻结或扣押资金。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">多链支持</strong> —
                        一次部署即可支持 TRON、EVM（以太坊、BSC、Polygon、Arbitrum、Base
                        等）以及 SUI。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">
                          亚秒级检测
                        </strong>
                        — 内存池级别扫描，跨所有链在 1-6 秒内检测到支付。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">
                          类 Stripe API
                        </strong>
                        — 简洁的 REST API，可预测的端点，一致的 JSON，清晰的错误提示。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">白标</strong> —
                        完全自定义结账页面。无第三方品牌标识或 iframe。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">HMAC webhook</strong>
                        — 加密签名的回调通知，支持指数退避重试队列。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">无需 KYC</strong> —
                        自主部署，无需账户审批、企业验证或身份核验。
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-red-500">
                  <h3 className="text-base font-display font-medium text-red-400 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5" /> 待改进之处
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">
                          需要 DevOps 技能
                        </strong>
                        — 需要 Docker、VPS 管理和基本的命令行知识。不适合非技术人员。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">
                          不支持比特币/闪电网络
                        </strong>
                        — 专注于稳定币，不支持 BTC、LTC 或闪电网络。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">
                          早期社区
                        </strong>
                        — 社区规模较小，插件数量较 BTCPay Server 少。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">
                          无法兑换法币
                        </strong>
                        — 纯链上稳定币结算，无内置法币出金通道。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">
                          资源需求较高
                        </strong>
                        — 生产环境建议最低 8GB 内存 / 4 vCPU。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">无移动端 SDK</strong>
                        — 结账基于 REST API 的 Web 方式，尚无原生 iOS/Android SDK。
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* What is XPay Labs */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                什么是 XPay Labs？
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                XPay Labs 是一款
                <strong className="text-white">
                  自托管、非托管的加密支付网关
                </strong>
                ，专为希望接受加密货币支付而无需支付交易手续费
                或放弃私钥控制权的开发者和企业设计。它通过 Docker
                Compose 部署在您自己的服务器上，支持三大区块链生态系统：
                <strong className="text-white">TRON（TRC-20）</strong>、
                所有
                <strong className="text-white">EVM 兼容链</strong>
                （以太坊、BNB Chain、Polygon、Arbitrum、Optimism、Base
                等）以及 <strong className="text-white">SUI</strong>。
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                与托管式网关（BitPay、Coinbase Commerce、NowPayments）
                每笔交易收取 0.5-1% 手续费并托管资金不同，
                XPay Labs 收取零交易手续费，并将付款直接路由到您的区块链钱包。
                该软件提供源代码并在 GitHub 上公开发布，可供全面审计。
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                在核心层面，XPay Labs 是一个 Spring Boot 后端，配备并发区块链索引器、
                用于支付管理的 REST API 以及 webhook 推送系统。
                前端结账组件基于 React 构建，支持完全的白标自定义。
              </p>
            </section>
            {/* Key Features */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                核心功能深入解析
              </h2>
              <div className="space-y-6">
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      定价：0% 交易手续费
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    XPay Labs 最突出的优势在于其定价模式：完全免费的软件，
                    零单笔交易手续费。对于每月处理 $100,000 加密支付的企业而言，
                    与托管式替代方案相比，每年可节省 $6,000-$12,000。
                    唯一成本仅为您的 VPS（$10-20/月）和区块链 Gas 费
                   （在 TRON 和 L2 链上通常可以忽略不计）。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-cyan">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      安全性：非托管架构
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    私钥通过 BIP-39 HD 钱包派生从您的助记词生成，
                    并仅存储在您的 Docker 容器内存中。私钥材料绝不会离开您的基础设施。
                    该网关仅监控区块链地址——它从不持有、转移或接触资金。
                    Webhook 使用 HMAC-SHA256 签名以防止伪造，
                    API 密钥具有细粒度的权限范围。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-purple">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-brand-purple" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      多链支持
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    XPay Labs 可同时扫描 TRON（TRC-20 USDT、USDC）、
                    所有主流 EVM 链（以太坊、BNB Chain、Polygon、Arbitrum、
                    Optimism、Avalanche、Base 以及 15+ 条其他链）和 SUI，
                    只需一次部署。统一事件通道将所有区块链事件标准化为统一的
                    webhook 格式，因此无论客户使用哪条链，
                    您的应用程序都可以以相同方式处理支付。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      亚秒级支付检测
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    区块链索引器在内存池级别运行，
                    可在 TRON 上 1-3 秒、EVM 链上 2-6 秒、SUI 上 1-2 秒内检测到未确认交易。
                    这种近乎实时的检测能力使结账体验如丝般顺滑——
                    客户在提交交易后几秒钟内即可看到支付状态更新。
                  </p>
                </div>
              </div>
            </section>
            {/* Pricing Comparison */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                定价对比
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                选择 XPay Labs 最令人信服的理由就是成本。
                下面是每月处理 $100,000 加密支付的企业年费对比：
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">网关</th>
                      <th className="p-4 text-gray-400 font-medium">
                        费用模式
                      </th>
                      <th className="p-4 text-gray-400 font-medium">
                        年成本
                      </th>
                      <th className="p-4 text-gray-400 font-medium">托管方式</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-semibold">
                        XPay Labs
                      </td>
                      <td className="p-4 text-green-400">0% + Gas 费</td>
                      <td className="p-4 text-green-400 font-semibold">
                        ~$240
                      </td>
                      <td className="p-4 text-green-400">非托管</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">BitPay</td>
                      <td className="p-4 text-gray-400">1% + $30/月</td>
                      <td className="p-4 text-gray-400">~$12,360</td>
                      <td className="p-4 text-amber-400">托管</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">Coinbase Commerce</td>
                      <td className="p-4 text-gray-400">0.8% + $25/月</td>
                      <td className="p-4 text-gray-400">~$9,900</td>
                      <td className="p-4 text-amber-400">托管</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">NowPayments</td>
                      <td className="p-4 text-gray-400">0.5%</td>
                      <td className="p-4 text-gray-400">~$6,000</td>
                      <td className="p-4 text-amber-400">托管</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">BTCPay Server</td>
                      <td className="p-4 text-gray-400">0%（自托管）</td>
                      <td className="p-4 text-gray-400">~$240</td>
                      <td className="p-4 text-green-400">非托管</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">节省成本：</strong>从 BitPay 切换到 XPay Labs，
                每处理 $100k/月的交易量，
                每年可节省约
                <strong className="text-green-400">$12,000</strong>。
              </div>
            </section>
            {/* Who Is It For */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                XPay Labs 适合谁？
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel rounded-2xl p-5 glow-blue">
                  <h3 className="text-sm font-display font-medium text-green-400 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" /> 适合人群
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-400 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>熟悉 Docker 和命令行的开发者
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>处理高额稳定币支付的商家
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>希望彻底消除网关费用的企业
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>注重隐私、希望避免 KYC 的公司
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>需要可定制结账页面的 SaaS 平台
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>在 TRON、EVM 和 SUI 上运营的多链商户
                    </li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-5 glow-blue">
                  <h3 className="text-sm font-display font-medium text-amber-400 mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" /> 不适合人群
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-400 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      缺乏 DevOps 支持的非技术人员
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>需要比特币或闪电网络支持的商家
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>需要内置法币出金通道的企业
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>希望使用全托管 SaaS 解决方案的商家
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>需要电话客服支持的公司
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>需要 SOC2/HIPAA 合规文档的企业
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Verdict */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                最终结论
              </h2>
              <div className="glass-panel rounded-2xl p-8 glow-blue">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-3xl font-display font-bold text-white">
                    4.8
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/30'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-mono ml-2">
                    / 5
                  </span>
                </div>
                <p className="text-sm text-gray-400 font-sans leading-relaxed mb-4">
                  XPay Labs 是希望拥有自主可控、高性价比加密支付基础设施的开发者和企业的绝佳选择。
                  其零费用模式、非托管架构和多链支持使其成为 2026 年
                  最具吸引力的自托管支付网关之一。
                </p>
                <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6">
                  主要的权衡在于运维复杂性：您需要具备 DevOps 技能来部署和维护网关。
                  对于具备这些技能的团队而言，节省的成本和获得的控制权是无与伦比的。
                  对于非技术用户，尽管费用较高，但像 BitPay 或 Coinbase Commerce
                  这样的托管式网关可能更为实用。
                </p>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  <strong className="text-white">总结：</strong>如果您在 TRON、EVM 链或 SUI
                  上处理稳定币支付，并且能够管理自己的 Docker 基础设施，
                  那么 XPay Labs 是当今您可以部署的最佳自托管加密支付网关。
                </p>
                <div className="mt-6">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>部署 XPay Labs</span>
                  </Link>
                </div>
              </div>
            </section>
            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                常见问题
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                关于 XPay Labs 及其在加密支付网关领域定位的常见问题。
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
                  准备好尝试 XPay Labs 了吗？
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  在您自己的基础设施上部署 XPay Labs，不到 30 分钟即可完成。
                  零交易手续费、非托管安全性以及多链支持。
                  无需注册，无需 KYC——只需 Docker。
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
                    href="/pricing"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>对比定价</span>
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
