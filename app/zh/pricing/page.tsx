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
  Zap,
  Coins,
  Lock,
  Code2,
  HelpCircle,
  DollarSign,
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';
import SavingsCalculator from '../../pricing/SavingsCalculator';
export const metadata: Metadata = {
  title: '定价方案 — 自托管加密支付网关 | XPay Labs',
  description:
    'XPay Labs 是免费的自托管加密支付软件。0% 交易手续费。多商家架构 — 一个部署即可服务无限商户。支持计划从 $1,500/年起。与 BitPay、Coinbase Commerce 和托管网关相比，每年可节省 $6k-$12k。',
  keywords: [
    '加密支付网关定价',
    '自托管加密支付成本',
    'BitPay vs XPay Labs 费用对比',
    '加密支付网关手续费比较',
    '免费加密支付网关',
    '非托管支付网关定价',
    '多商家加密支付网关',
    '多商户加密支付平台',
  ],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/pricing',
    languages: {
      'x-default': 'https://www.xpaylabs.com/pricing',
      'en-US': 'https://www.xpaylabs.com/pricing',
      zh: 'https://www.xpaylabs.com/zh/pricing',
    },
  },
  openGraph: {
    title: '定价方案 — 自托管加密支付网关 | XPay Labs',
    description:
      '免费自托管加密支付软件。0% 交易手续费。与 BitPay、Coinbase Commerce 和其他网关进行成本比较。',
    url: 'https://www.xpaylabs.com/zh/pricing',
    type: 'website',
  },
  twitter: {
    title: '定价方案 — 自托管加密支付网关 | XPay Labs',
    description:
      '免费自托管加密支付软件。0% 交易手续费。与 BitPay、Coinbase Commerce 和其他网关进行成本比较。',
    card: 'summary_large_image',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'XPay Labs 真的免费吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 软件免费下载、部署和使用。无许可证费用、无交易手续费、无月费。您只需支付服务器基础设施和区块链网络 Gas 费用。',
      },
    },
    {
      '@type': 'Question',
      name: '运行 XPay Labs 有哪些隐性成本？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '没有隐性成本。您需要一台 VPS 或服务器（Hetzner、DigitalOcean 或 Linode 等提供商低至 $10-20/月）和区块链 RPC 端点访问权限（Trongrid、Infura 或 QuickNode 提供免费套餐）。月度运营总成本：$10-50，取决于您的基础设施选择。',
      },
    },
    {
      '@type': 'Question',
      name: '相比 BitPay 或 Coinbase Commerce 能省多少钱？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '月处理 $10 万加密支付的商家每年向 BitPay（1% + 计划费）支付 $12,000+ 的费用，或向 Coinbase Commerce（0.8% + 计划费）支付 $9,600+。使用 XPay Labs，相同交易量仅需约 $120-240/年的服务器成本加上可忽略的 Gas 费。每年节省 $10,000+。',
      },
    },
    {
      '@type': 'Question',
      name: '支持计划包含哪些内容？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '支持计划提供对 XPay Labs 开发团队的直接访问。Docker 计划（一次性 $1,500）涵盖设置、配置和 30 天支持。企业版计划（$3,000/年）增加 12 个月技术支持、优先错误修复、服务器监控协助和 48 小时 SLA。企业定制计划提供自定义集成、专属入驻服务和 24 小时 SLA。',
      },
    },
    {
      '@type': 'Question',
      name: '使用 XPay Labs 需要支持计划吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不需要。软件无需支持计划即可完全使用。通过 GitHub Issues 和 Discord 提供社区支持。支持计划适用于需要优先协助、部署帮助或自定义集成的商家。',
      },
    },
  ],
};
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'XPay Labs',
  alternateName: 'xpay',
  description: '自托管、非托管的加密支付网关，支持 TRON、EVM 链和 SUI。',
  image: 'https://www.xpaylabs.com/logo.png',
  brand: {
    '@type': 'Brand',
    name: 'XPay Labs',
  },
  applicationCategory: 'PaymentProcessing',
  operatingSystem: 'Docker, Linux',
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
      author: {
        '@type': 'Organization',
        name: 'XPay Labs',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.8',
        bestRating: '5',
      },
      datePublished: '2026-05-31',
      description: 'XPay Labs 是一款自托管、非托管的加密支付网关，支持 TRON、EVM 链和 SUI，零交易手续费。',
    },
  ],
  offers: [
    {
      '@type': 'Offer',
      name: '自托管软件',
      price: '0',
      priceCurrency: 'USD',
      priceValidUntil: '2030-12-31',
      description: '免费自托管加密支付软件。0% 交易手续费。',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
      },
    },
    {
      '@type': 'Offer',
      name: 'Docker 部署',
      price: '1500',
      priceCurrency: 'USD',
      priceValidUntil: '2030-12-31',
      description: '一次性 Docker 部署协助和 30 天设置支持。',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
      },
    },
    {
      '@type': 'Offer',
      name: '商业支持',
      price: '3000',
      priceCurrency: 'USD',
      priceValidUntil: '2030-12-31',
      description: '年度商业支持计划，含优先 SLA 和监控协助。',
      availability: 'https://schema.org/InStock',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
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
      name: '定价',
      item: 'https://www.xpaylabs.com/zh/pricing',
    },
  ],
};
export default function PricingPage() {
  return (
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <JsonLd data={faqSchema} /> <JsonLd data={productSchema} /> <JsonLd data={breadcrumbSchema} />
        <Header />
        <main className="relative gradient-bg pt-24 pb-20">
          {/* Hero */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full text-xs font-bold text-green-400 uppercase tracking-wider font-mono mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>免费软件 — 0% 交易手续费</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
              自托管加密支付。
              <span className="text-gradient-purple-blue">
                零网关手续费。
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl mx-auto">
              XPay Labs 是
              <strong className="text-white">免费的开源软件</strong>。无交易手续费、无收入分成、无月费。部署在您自己的基础设施上，仅需支付服务器托管和区块链 Gas 费用。
            </p>
          </section>
          {/* Cost Comparison Highlight */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-panel rounded-xl p-6 text-center glow-blue">
                <p className="text-3xl font-bold text-white font-display">0%</p>
                <p className="text-sm text-gray-400 mt-1">
                  交易手续费
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  托管网关收取 0.5–1%
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center glow-cyan">
                <p className="text-3xl font-bold text-white font-display">$0</p>
                <p className="text-sm text-gray-400 mt-1">月费</p>
                <p className="text-xs text-gray-500 mt-1">
                  竞品收取 $25–$300+/月
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6 text-center glow-purple">
                <p className="text-3xl font-bold text-white font-display">
                  $10–$50
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  服务器月费
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  仅需便宜的 VPS
                </p>
              </div>
            </div>
          </section>
          {/* Interactive Savings Calculator */} <SavingsCalculator />
          {/* Support Plans */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                支持计划
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
                软件免费。这些计划涵盖
                <strong className="text-white">
                  核心团队的部署协助和技术支持
                </strong>
                。通过 GitHub 和 Discord 的社区支持始终免费。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Docker Setup */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col border border-white/5">
                <div className="flex items-center space-x-2 mb-4">
                  <Server className="w-5 h-5 text-brand-blue" />
                  <h3 className="text-lg font-display font-medium text-white">
                    Docker 部署
                  </h3>
                </div>
                <p className="text-3xl font-bold text-white font-display mb-1">
                  $1,500
                </p>
                <p className="text-xs text-gray-500 font-mono mb-6">
                  一次性部署费用
                </p>
                <ul className="space-y-3 text-sm flex-1">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      Docker 环境搭建与配置
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      区块链 RPC 连接（TRON、EVM、SUI）
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      Webhook 端点集成
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      30 天部署支持
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://t.me/OS_Blockchain"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>联系销售</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Business Plan */}
              <div className="rounded-2xl p-6 sm:p-8 flex flex-col border border-brand-cyan/30 bg-brand-cyan/[0.03] glow-cyan relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-cyan text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  最受欢迎
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-brand-cyan" />
                  <h3 className="text-lg font-display font-medium text-white">
                    企业版
                  </h3>
                </div>
                <p className="text-3xl font-bold text-white font-display mb-1">
                  $3,000
                </p>
                <p className="text-xs text-gray-500 font-mono mb-6">每年</p>
                <ul className="space-y-3 text-sm flex-1">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      包含 Docker 部署全部内容
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      12 个月技术支持与更新
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      优先错误修复与补丁
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      服务器健康监控协助
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">48 小时响应 SLA</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://t.me/OS_Blockchain"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full bg-brand-cyan hover:bg-brand-cyan/90 text-black px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-cyan/20"
                  >
                    <span>获取企业版方案</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Enterprise */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col border border-white/5">
                <div className="flex items-center space-x-2 mb-4">
                  <Lock className="w-5 h-5 text-brand-purple" />
                  <h3 className="text-lg font-display font-medium text-white">
                    企业定制
                  </h3>
                </div>
                <p className="text-3xl font-bold text-white font-display mb-1">
                  定制
                </p>
                <p className="text-xs text-gray-500 font-mono mb-6">
                  按需定价
                </p>
                <ul className="space-y-3 text-sm flex-1">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      定制集成与系统架构
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      白标品牌与自定义域名
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      额外区块链支持
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">
                      专属部署与迁移支持
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">24 小时响应 SLA</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://t.me/OS_Blockchain"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>联系我们</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-500 font-sans leading-relaxed text-center max-w-3xl mx-auto">
              <strong className="text-gray-400">
                所有方案均包含完整软件使用权。
              </strong>
              XPay Labs 软件本身免费——支持计划是可选项，涵盖部署协助和优先技术支持。
            </div>
          </section>
          {/* Custom Development */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="glass-panel rounded-2xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
                定制开发服务
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="overflow-x-auto rounded-xl border border-white/5">
                  <table className="w-full text-left text-sm font-sans">
                    <thead>
                      <tr className="bg-[#0b0e25] border-b border-white/8">
                        <th className="p-4 text-gray-300 font-medium">
                          服务
                        </th>
                        <th className="p-4 text-gray-300 font-medium text-right">
                          价格
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-400">
                          自定义 API / 系统集成
                        </td>
                        <td className="p-4 text-gray-300 text-right font-mono">
                          $100–$150/hr
                        </td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-400">
                          白标品牌定制
                        </td>
                        <td className="p-4 text-gray-300 text-right font-mono">
                          $500–$2,000
                        </td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-400">
                          自定义功能开发
                        </td>
                        <td className="p-4 text-gray-300 text-right font-mono">
                          按范围报价
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* Comparison Table */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-10 text-center">
              与托管网关对比
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-left text-sm font-sans">
                <thead>
                  <tr className="bg-[#0b0e25] border-b border-white/8">
                    <th className="p-4 text-gray-400 font-medium w-1/4">
                      功能
                    </th>
                    <th className="p-4 text-orange-400 font-medium w-[18%]">
                      BitPay
                    </th>
                    <th className="p-4 text-blue-400 font-medium w-[18%]">
                      Coinbase Commerce
                    </th>
                    <th className="p-4 text-gray-400 font-medium w-[18%]">
                      NowPayments
                    </th>
                    <th className="p-4 text-brand-cyan font-medium w-[18%]">
                      XPay Labs
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      交易手续费
                    </td>
                    <td className="p-4 text-gray-400">1%</td>
                    <td className="p-4 text-gray-400">0.8%</td>
                    <td className="p-4 text-gray-400">0.5%</td>
                    <td className="p-4 text-green-400 font-semibold">0%</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      月费
                    </td>
                    <td className="p-4 text-gray-400">$30–$300+</td>
                    <td className="p-4 text-gray-400">$25</td>
                    <td className="p-4 text-gray-400">$0</td>
                    <td className="p-4 text-green-400 font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      托管模式
                    </td>
                    <td className="p-4 text-gray-400">托管</td>
                    <td className="p-4 text-gray-400">托管</td>
                    <td className="p-4 text-gray-400">托管</td>
                    <td className="p-4 text-green-400 font-semibold">
                      非托管
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      结算
                    </td>
                    <td className="p-4 text-gray-400">定期支付</td>
                    <td className="p-4 text-gray-400">定期支付</td>
                    <td className="p-4 text-gray-400">定期支付</td>
                    <td className="p-4 text-green-400 font-semibold">
                      即时到账钱包
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      支持的公链
                    </td>
                    <td className="p-4 text-gray-400">BTC、BCH、ETH、LTC</td>
                    <td className="p-4 text-gray-400">BTC、ETH、Base</td>
                    <td className="p-4 text-gray-400">
                      BTC、ETH、TRON、BNB +12
                    </td>
                    <td className="p-4 text-green-400 font-semibold">
                      TRON、EVM、SUI
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      需要 KYC
                    </td>
                    <td className="p-4 text-gray-400">是</td>
                    <td className="p-4 text-gray-400">是</td>
                    <td className="p-4 text-gray-400">不需要（有限制）</td>
                    <td className="p-4 text-green-400 font-semibold">不需要</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      白标
                    </td>
                    <td className="p-4 text-gray-400">仅企业版</td>
                    <td className="p-4 text-gray-400">否</td>
                    <td className="p-4 text-gray-400">是</td>
                    <td className="p-4 text-green-400 font-semibold">
                      完全白标，无品牌标识
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      源代码
                    </td>
                    <td className="p-4 text-gray-400">闭源</td>
                    <td className="p-4 text-gray-400">闭源</td>
                    <td className="p-4 text-gray-400">闭源</td>
                    <td className="p-4 text-green-400 font-semibold">
                      授权免费使用
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      部署方式
                    </td>
                    <td className="p-4 text-gray-400">SaaS</td>
                    <td className="p-4 text-gray-400">SaaS</td>
                    <td className="p-4 text-gray-400">SaaS</td>
                    <td className="p-4 text-green-400 font-semibold">
                      自托管（Docker）
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 font-medium">
                      年成本（月流水 $10 万）
                    </td>
                    <td className="p-4 text-red-400 font-mono">~$12,360</td>
                    <td className="p-4 text-red-400 font-mono">~$9,900</td>
                    <td className="p-4 text-red-400 font-mono">~$6,000</td>
                    <td className="p-4 text-green-400 font-mono font-semibold">
                      ~$240
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-gray-500 font-sans text-center">
              XPay Labs 年成本仅含 VPS 托管费（约 $20/月）。可选支持计划 $1,500 起（Docker Setup）或 $3,000/年（Business）。
            </div>
          </section>
          {/* Why Self-Hosted */}
          <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              商家选择自托管的原因
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  消除中间商费用
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  托管网关收取每笔交易 0.5–1% 的费用。使用 XPay Labs 自托管完全消除了这一成本——您只需支付区块链 Gas 费用，通常不到一美分。
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Lock className="w-8 h-8 text-brand-cyan mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  完全主权控制
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  私钥永不离开您的基础设施。任何第三方都无法冻结、延迟或限制您的资金。结算即时完成——资金直接到账您的链上钱包。
                </p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <Code2 className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="text-lg font-display font-medium text-white mb-2">
                  可审计基础设施
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  XPay Labs 代码库的每一行代码都在 GitHub 上可见。您可以审计安全性、检查密钥派生、审查交易扫描逻辑，并贡献改进。
                </p>
              </div>
            </div>
          </section>
          {/* FAQ */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-8 text-center">
              定价常见问题
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'XPay Labs 真的免费吗？',
                  a: '是的。软件免费下载、部署和使用。无许可证费用、无交易手续费、无月费。您只需支付服务器和区块链 Gas 费用。',
                },
                {
                  q: '实际成本是多少？',
                  a: '基本 VPS 每月 $10–20（Hetzner、DigitalOcean）。通过 Trongrid 或 Infura 可免费使用区块链 RPC。总计：根据规模每月 $10–50。相比之下，同等交易量在托管网关每月需要支付 $500–1,000+ 的费用。',
                },
                {
                  q: '我需要支持计划吗？',
                  a: '不需要。GitHub 和 Discord 上的社区支持免费且始终可用。支持计划为可选，提供核心开发团队的直接服务，用于部署协助、优先错误修复和定制集成。',
                },
                {
                  q: '相比 BitPay 能省多少钱？',
                  a: '月交易量 $10 万的商家从 BitPay（1% 费用 + 计划费）切换到 XPay Labs，每年可节省 $12,000 以上。上方的节省计算器可根据您的交易量显示精确数字。',
                },
                {
                  q: '提供退款吗？',
                  a: '支持计划不退款，因为它们涉及直接的工程师时间。我们在购买任何计划前提供免费咨询，以确保 XPay Labs 适合您的使用场景。',
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="glass-panel rounded-xl group open:glow-blue"
                >
                  <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none">
                    <span className="text-sm sm:text-base font-display font-medium text-white pr-4">
                      {item.q}
                    </span>
                    <HelpCircle className="w-4 h-4 text-gray-500 shrink-0 group-open:text-brand-cyan transition-colors" />
                  </summary>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <p className="text-sm text-gray-400 font-sans leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>
          {/* CTA */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="glass-panel rounded-2xl p-10 sm:p-14 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight mb-4">
                立即节省支付处理成本
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                立即在您的基础设施上部署 XPay Labs。免费软件、零交易手续费、完全非托管控制。永久包含社区支持。
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="https://docs.xpaylabs.com/"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>部署免费软件</span>
                </Link>
                <a
                  href="https://t.me/OS_Blockchain"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>咨询销售</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

  );
}
