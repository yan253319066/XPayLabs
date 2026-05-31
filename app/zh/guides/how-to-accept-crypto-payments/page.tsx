import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe,
  DollarSign,
  Shield,
  Key,
  Server,
  HardDrive,
  Terminal,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Zap,
  Cpu,
  Coins,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
export const metadata: Metadata = {
  title: '如何接受加密货币支付 — 自托管加密支付网关指南 | XPay Labs',
  description:
    '了解如何通过自托管网关接受加密货币支付。涵盖 Docker 部署、API 集成、Webhook 和多链支持的逐步指南，支持 USDT、USDC 等。',
  keywords: [
    '如何接受加密货币支付',
    '接受 USDT 支付',
    '加密支付网关设置',
    '自托管加密货币支付',
    '在线接受加密货币支付',
    '加密支付 API',
    'USDT 支付网关',
    '自托管支付网关',
  ],
  alternates: {
    canonical: 'https://www.xpaylabs.com/guides/how-to-accept-crypto-payments',
    languages: {
      'x-default':
        'https://www.xpaylabs.com/guides/how-to-accept-crypto-payments',
      'en-US': 'https://www.xpaylabs.com/guides/how-to-accept-crypto-payments',
      'zh-CN':
        'https://www.xpaylabs.com/zh/guides/how-to-accept-crypto-payments',
    },
  },
  openGraph: {
    title: '如何接受加密货币支付 — 自托管基础设施开发者指南 | XPay Labs',
    description:
      '通过自托管、非托管网关接受加密货币支付的逐步指南。使用 Docker 部署，通过 API 集成，支持 TRON、EVM 和 SUI 链。',
    url: 'https://www.xpaylabs.com/zh/guides/how-to-accept-crypto-payments',
    type: 'article',
  },
  twitter: {
    title: '如何接受加密货币支付 — 自托管基础设施开发者指南 | XPay Labs',
    description:
      '通过自托管、非托管网关接受加密货币支付的逐步指南。使用 Docker 部署，通过 API 集成，支持 TRON、EVM 和 SUI 链。',
    card: 'summary_large_image',
  },
};
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    '如何接受加密货币支付：自托管基础设施开发者指南',
  description:
    '一份全面的指南，介绍如何使用自托管、非托管网关接受加密货币支付。涵盖 Docker 部署、API 集成、Webhook 处理和多链支持。',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-22',
  dateModified: '2026-05-22',
};
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何通过自托管网关接受加密货币支付',
  description:
    '逐步指南，指导您部署和集成自托管加密支付网关以接受 USDT、USDC 和其他加密货币。',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: '部署核心节点',
      text: '使用 XPay Labs 网关镜像运行 Docker Compose，挂载配置卷并暴露 8080 端口。',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '配置环境变量',
      text: '通过环境变量设置您的节点助记词、HMAC 密钥、RPC 提供商 URL 和 webhook 回调 URL。',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '生成 API 密钥',
      text: '使用管理 CLI 或 REST 端点生成商户 API 密钥，用于验证支付请求。',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '创建您的第一笔支付',
      text: '调用 POST /v1/payments 并传入金额、币种、链、订单 ID 和回调 URL，以生成唯一的充值地址。',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: '处理 Webhook 回调',
      text: '实现一个 HMAC 签名的 webhook 端点，用于接收包含交易详情的支付确认通知。',
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
      name: '指南',
      item: 'https://www.xpaylabs.com/zh/guides/how-to-accept-crypto-payments',
    },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '如何在网站上接受加密货币支付？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '要接受加密货币支付，您需要一个支付网关来为每笔交易生成区块链充值地址并检测收到的付款。使用 XPay Labs，您部署一个自托管 Docker 容器，配置支持的链，通过 REST API 集成来创建发票并处理 webhook 回调。',
      },
    },
    {
      '@type': 'Question',
      name: '接受加密货币支付最便宜的方式是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '最便宜的方式是使用像 XPay Labs 这样的自托管、非托管网关。零交易手续费，无月度订阅费用——您只需支付服务器托管费用（低至每月 $10）和区块链网络 Gas 费（在 TRON 或 L2 链上仅需几分钱）。',
      },
    },
    {
      '@type': 'Question',
      name: '我可以在没有 KYC 的情况下接受 USDT 支付吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。像 XPay Labs 这样的自托管网关不需要 KYC，因为您控制着私钥和基础设施。资金直接结算到您的钱包，无需经过第三方。这是相对于 BitPay 或 Coinbase Commerce 等托管处理商的关键优势。',
      },
    },
    {
      '@type': 'Question',
      name: '设置加密支付网关需要多长时间？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '使用基于 Docker 的部署，您可以在 30 分钟内完成一个功能完整的加密支付网关的搭建。过程包括部署容器、配置环境变量、生成 API 密钥以及将支付端点集成到您的结账流程中。',
      },
    },
    {
      '@type': 'Question',
      name: '使用自托管网关可以接受哪些加密货币？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XPay Labs 支持 TRON（TRC-20 的 USDT、USDC、USDD）、EVM 兼容链（Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base）上的 ERC-20 代币，以及 SUI。这覆盖了加密生态系统中绝大多数稳定币和山寨币的支付需求。',
      },
    },
    {
      '@type': 'Question',
      name: '自托管加密支付网关安全吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。自托管网关比托管替代方案更安全，因为私钥永远不会离开您的基础设施。XPay Labs 使用 BIP-39 种子短语进行确定性钱包派生，使用 HMAC-SHA256 签名 webhook 进行服务器间通信，并且完全在您自己的 Docker 环境中运行，第三方无法访问资金。',
      },
    },
  ],
};
const steps = [
  {
    num: '1',
    title: '部署核心节点',
    content:
      '开始接受加密货币支付的最快方式是使用 Docker Compose。在您的 VPS 上创建一个目录，并将以下内容保存为 docker-compose.yml：',
    code: `version: '3.8'services:  xpay-gateway:    image: ghcr.io/xpaylabs/gateway:latest    container_name: xpay_core    restart: unless-stopped    ports:      - "8080:8080"    environment:      - XPAY_SEED_PHRASE=\${XPAY_SEED_PHRASE}      - XPAY_HMAC_SECRET=\${XPAY_HMAC_SECRET}      - XPAY_TRON_RPC=https://api.trongrid.io      - XPAY_EVM_RPC=https://eth-mainnet.g.alchemy.com/v2/\${ALCHEMY_KEY}      - XPAY_WEBHOOK_URL=https://api.yourdomain.com/webhooks/xpay    volumes:      - ./data:/app/data    logging:      driver: "json-file"      options:        max-size: "10m"        max-file: "3"`,
    after:
      '运行 docker compose up -d 启动网关。首次启动时，如果未设置 XPAY_SEED_PHRASE，XPay Labs 会生成一个新的 HD 钱包种子，或者从您现有的种子派生地址。网关在 8080 端口上暴露 REST API，并立即开始扫描已配置链上的传入交易。',
  },
  {
    num: '2',
    title: '配置环境变量',
    content:
      '网关需要几个环境变量才能运行。在与 docker-compose.yml 相同的目录中创建一个 .env 文件：',
    after: '',
  },
  {
    num: '3',
    title: '生成 API 密钥',
    content:
      '在网关运行后，生成一个商户 API 密钥来验证您的支付请求。使用管理端点：',
    code: `curl -X POST "http://localhost:8080/v1/admin/api-keys" \\  -H "Content-Type: application/json" \\  -H "Authorization: Bearer \${XPAY_ADMIN_TOKEN}" \\  -d '{    "label": "production-checkout",    "permissions": ["payments:create", "payments:read"]  }'`,
    after:
      '响应中包含一个以 xpay_live_ 为前缀的 API 密钥。请安全存储此密钥——它将取代所有支付 API 调用的用户名/密码认证。您可以为开发、测试和生产环境生成多个具有不同权限范围的密钥。',
  },
  {
    num: '4',
    title: '创建您的第一笔支付',
    content:
      '现在您可以创建一笔支付发票。当客户到达结账页面时，您的后端调用此端点：',
    code: `curl -X POST "https://gateway.yourdomain.com/v1/payments" \\  -H "Authorization: Bearer xpay_live_8f3a9d7219bc" \\  -H "Content-Type: application/json" \\  -d '{    "amount": "100.00",    "currency": "USDT",    "chain": "TRON",    "order_id": "order_783120",    "callback_url": "https://api.merchant.com/v1/webhooks/xpay",    "customer_email": "customer@example.com",    "metadata": {      "product_id": "prod_456",      "plan": "premium_annual"    }  }'`,
    after: '',
  },
  {
    num: '5',
    title: '处理 Webhook 回调',
    content:
      'XPay Labs 通过 POST 请求向您的 callback_url 发送支付确认 webhook，并在 X-Signature 请求头中附带 HMAC-SHA256 签名。以下是在 Node.js 中验证和处理负载的方法：',
    code: `import crypto from 'crypto';// Your HMAC secret from XPAY_HMAC_SECRETconst HMAC_SECRET = process.env.XPAY_HMAC_SECRET;export async function POST(request: Request) {  const body = await request.text();  const signature = request.headers.get('x-signature');  // Verify HMAC-SHA256 signature  const expected = crypto    .createHmac('sha256', HMAC_SECRET)    .update(body, 'utf8')    .digest('hex');  if (signature !== expected) {    return Response.json({ error: 'invalid signature' }, { status: 401 });  }  const payload = JSON.parse(body);  // payload structure:  // {  //   "event": "payment.confirmed",  //   "payment": {  //     "id": "pay_9f3b8c2a1d",  //     "order_id": "order_783120",  //     "amount": "100.00",  //     "currency": "USDT",  //     "chain": "TRON",  //     "tx_id": "b4f7c3a12d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",  //     "from_address": "TXYZ...",  //     "to_address": "TABC...",  //     "confirmations": 32,  //     "status": "confirmed",  //     "timestamp": 1715875200  //   }  // }  if (payload.event === 'payment.confirmed') {    // Fulfill the order    await fulfillOrder(payload.payment.order_id, payload.payment);    return Response.json({ received: true });  }  return Response.json({ received: true });}`,
    after:
      'Webhook 使用指数退避重试机制发送（3 次尝试：10 秒、60 秒、300 秒），直到您的服务器返回 200 OK。使用 payment.id 实现幂等性检查，以防止在重复 webhook 投递时出现双重履约。',
  },
];
export default function HowToAcceptCryptoPaymentsPage() {
  return (
    <>
      <JsonLd data={articleSchema} /> <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} /> <JsonLd data={breadcrumbSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Hero */}
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>开发者指南</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                如何接受加密货币支付：自托管基础设施开发者指南
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                一份完整的、逐步的操作指南，教您通过自托管、非托管网关接受加密货币支付。从 Docker 部署到 webhook 集成——您所需要的一切，让您以零交易手续费开始接受 USDT、USDC 及其他加密资产，并完全掌控您的私钥。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Server className="w-4 h-4" />
                  <span>查看完整文档</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>关于 XPay Labs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
            {/* Why Accept Crypto Payments */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                为什么接受加密货币支付？
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                加密货币支付已从小众实验发展为主流支付通道，每日处理数十亿美元的交易量。对于商家而言，接受加密支付不再是关于投机——而是关于接入一个更快、更便宜、更具包容性的金融系统。以下是企业将加密结账加入支付栈的原因：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-3">
                    <Globe className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="text-base font-display font-medium text-white mb-2">
                    全球覆盖
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    加密支付无国界，无需货币兑换、无需跨境手续费、无需银行账户。任何拥有钱包的人都可以向您付款，无论他们身在哪个国家、是否有银行账户或信用评分。这将您的业务开放给全球 14 亿无银行账户的成年人和快速增长的加密原生消费群体。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-cyan">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="text-base font-display font-medium text-white mb-2">
                    低费用
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    传统支付处理商收取 1.5–3.5% 加每笔交易固定费用。自托管加密网关收取 0% 交易手续费——您只需支付网络 Gas 费。在 TRON 上，一笔 USDT 转账约需 $0.02–$0.10。在 Arbitrum 等 L2 上，通常低于 $0.01。对于每月处理 $10 万的企业，年节省额超过 $2 万。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-purple">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-brand-purple" />
                  </div>
                  <h3 className="text-base font-display font-medium text-white mb-2">
                    无拒付
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    区块链交易是不可逆的。一旦支付在链上确认，就无法撤销或拒付。这消除了在线商家的第一大成本：支付欺诈和争议费用。对于拒付率可能超过 5% 的数字商品商家而言，改用加密货币可以大幅改善利润空间。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-3">
                    <Key className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="text-base font-display font-medium text-white mb-2">
                    财务隐私
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    通过自托管、非托管网关，您完全保留对资金和财务数据的控制权。无需 KYC 要求，没有支付处理商账户冻结风险，也没有第三方有权限制您的访问。您客户的支付数据仅在他们与区块链之间——没有支付处理商数据库可能泄露或变现。
                  </p>
                </div>
              </div>
            </section>
            {/* Self-Hosted vs Third-Party Gateways */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                自托管 vs 第三方网关
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                在深入了解设置之前，有必要理解自托管和托管（第三方）加密支付网关之间的优劣权衡。每种模式满足不同需求：
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">方面</th>
                      <th className="p-4 text-orange-400 font-medium">
                        第三方（托管）
                      </th>
                      <th className="p-4 text-brand-cyan font-medium">
                        自托管
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        设置时间
                      </td>
                      <td className="p-4 text-gray-400">
                        几分钟（SaaS 注册）
                      </td>
                      <td className="p-4 text-gray-300">
                        30 分钟（Docker 部署）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        交易手续费
                      </td>
                      <td className="p-4 text-gray-400">
                        每笔交易 1–3%
                      </td>
                      <td className="p-4 text-green-400">0%（仅 Gas 费）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        月度费用
                      </td>
                      <td className="p-4 text-gray-400">
                        $30–$300+ 套餐费
                      </td>
                      <td className="p-4 text-green-400">
                        $10–$20（VPS 托管）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        密钥托管
                      </td>
                      <td className="p-4 text-gray-400">
                        托管（处理商持有密钥）
                      </td>
                      <td className="p-4 text-green-400">
                        非托管（您持有密钥）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        结算方式
                      </td>
                      <td className="p-4 text-gray-400">
                        延迟（每日/每周批量结算）
                      </td>
                      <td className="p-4 text-green-400">
                        即时（直达钱包）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        需要 KYC
                      </td>
                      <td className="p-4 text-gray-400">
                        是（企业认证）
                      </td>
                      <td className="p-4 text-green-400">
                        否（自主身份）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        账户冻结风险
                      </td>
                      <td className="p-4 text-gray-400">
                        有（处理商决定）
                      </td>
                      <td className="p-4 text-green-400">
                        无（您控制访问）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        白标结账
                      </td>
                      <td className="p-4 text-gray-400">
                        需要处理商品牌标识
                      </td>
                      <td className="p-4 text-green-400">
                        完全白标（您的品牌）
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        源码访问
                      </td>
                      <td className="p-4 text-gray-400">闭源</td>
                      <td className="p-4 text-green-400">完全可审计</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300 font-medium">
                        维护工作
                      </td>
                      <td className="p-4 text-gray-400">
                        无（托管服务）
                      </td>
                      <td className="p-4 text-gray-300">
                        自行管理更新/监控
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-sans leading-relaxed">
                像 XPay Labs 这样的自托管网关适合希望获得最大控制权、最低费用和主权基础设施的开发者及企业。第三方网关适用于偏好全托管解决方案且愿意为便利付费的非技术用户。
              </p>
            </section>
            {/* Prerequisites */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                前提条件
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                开始之前，请确保您具备以下条件：
              </p>
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <ul className="space-y-4 text-sm text-gray-400 font-sans">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-white">
                        一台 VPS 或云服务器
                      </strong>
                      — Linux 机器，至少 1 GB 内存、20 GB 存储空间和公网 IP。Hetzner（$5/月）、DigitalOcean（$12/月）或 AWS EC2 等提供商均可。
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-white">
                        Docker 和 Docker Compose
                      </strong>
                      — 安装在您的服务器上。大多数 VPS 镜像已预装 Docker，或者您可以使用官方安装脚本。
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-white">一个域名</strong> —
                      指向您的服务器 IP，用于网关 API 和结账页面，通过 Let's Encrypt 或 Caddy/Nginx 等反向代理实现 SSL。
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">
                      4
                    </div>
                    <div>
                      <strong className="text-white">RPC API 密钥</strong> — 用于您想支持的区块链。TRON 使用 TronGrid，EVM 链使用 Alchemy 或 Infura，以及 SUI RPC 提供商。大部分都有免费套餐。
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-xs font-bold text-brand-blue font-mono mt-0.5">
                      5
                    </div>
                    <div>
                      <strong className="text-white">
                        基础 DevOps 知识
                      </strong>
                      — 熟悉命令行、环境变量，以及配置反向代理用于 TLS 终止的能力。
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            {/* Step 1: Deploy the Core Node */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                步骤 1：部署核心节点
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[0].content}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{steps[0].code}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                {steps[0].after}
              </p>
            </section>
            {/* Step 2: Configure Environment */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                步骤 2：配置环境变量
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[1].content}
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5 mb-4">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">
                        变量名
                      </th>
                      <th className="p-4 text-gray-400 font-medium">
                        必填
                      </th>
                      <th className="p-4 text-gray-400 font-medium">
                        说明
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">
                        XPAY_SEED_PHRASE
                      </td>
                      <td className="p-4 text-red-400 text-xs font-mono">
                        是
                      </td>
                      <td className="p-4 text-gray-400 text-xs font-sans">
                        HD 钱包派生的 BIP-39 助记词种子（12–24 个单词）。离线生成，可使用 'openssl rand -hex 16 | xargs -I{} echo {}' 或使用硬件钱包。
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">
                        XPAY_HMAC_SECRET
                      </td>
                      <td className="p-4 text-red-400 text-xs font-mono">
                        是
                      </td>
                      <td className="p-4 text-gray-400 text-xs font-sans">
                        用于签名 webhook 负载的 HMAC 密钥。使用 64 字符十六进制字符串。在您的服务器上使用此密钥验证 webhook。
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">
                        XPAY_TRON_RPC
                      </td>
                      <td className="p-4 text-gray-500 text-xs font-mono">
                        可选
                      </td>
                      <td className="p-4 text-gray-400 text-xs font-sans">
                        TRON 全节点 URL。默认为 https://api.trongrid.io。生产环境请使用您自己的 TronGrid API 密钥或专用节点。
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">
                        XPAY_EVM_RPC
                      </td>
                      <td className="p-4 text-gray-500 text-xs font-mono">
                        可选
                      </td>
                      <td className="p-4 text-gray-400 text-xs font-sans">
                        您要支持的链的 EVM RPC URL。对于多链支持，分别指定每条链（例如 XPAY_EVM_RPC_ETH、XPAY_EVM_RPC_BNB）。
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">
                        XPAY_WEBHOOK_URL
                      </td>
                      <td className="p-4 text-gray-500 text-xs font-mono">
                        可选
                      </td>
                      <td className="p-4 text-gray-400 text-xs font-sans">
                        所有支付的默认回调 URL。可按发票单独覆盖。您的服务器必须返回 200 OK 以确认收到。
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-mono text-xs">
                        XPAY_CONFIRMATIONS
                      </td>
                      <td className="p-4 text-gray-500 text-xs font-mono">
                        可选
                      </td>
                      <td className="p-4 text-gray-400 text-xs font-sans">
                        触发 webhook 前所需的区块确认数。默认值：TRON 为 19，EVM 链为 12。降低可使检测更快但风险更高。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{`# .envXPAY_SEED_PHRASE="abandon abandon apple ... twelve words here"XPAY_HMAC_SECRET="a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1"XPAY_TRON_RPC=https://api.trongrid.ioXPAY_EVM_RPC_ETH=https://eth-mainnet.g.alchemy.com/v2/your_keyXPAY_EVM_RPC_BNB=https://bsc-dataseed.binance.orgXPAY_WEBHOOK_URL=https://api.yourdomain.com/webhooks/xpayXPAY_CONFIRMATIONS=19`}</code>
              </pre>
            </section>
            {/* Step 3: Generate API Keys */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                步骤 3：生成 API 密钥
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[2].content}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{steps[2].code}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                {steps[2].after}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto mt-4">
                <code>{`// Example response{  "id": "key_7f3d9c2a1b",  "label": "production-checkout",  "key": "xpay_live_8f3a9d7219bc4e5f6a7b8c9d0e1f2a3b4c5d6e7f",  "permissions": ["payments:create", "payments:read"],  "created_at": "2026-05-22T10:30:00Z"}`}</code>
              </pre>
            </section>
            {/* Step 4: Create Your First Payment */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                步骤 4：创建您的第一笔支付
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[3].content}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{steps[3].code}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                网关响应包含一个从您的种子派生的唯一充值地址、一个发票 ID 以及当前支付状态：
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto mt-4">
                <code>{`{  "id": "pay_9f3b8c2a1d",  "order_id": "order_783120",  "amount": "100.00",  "currency": "USDT",  "chain": "TRON",  "deposit_address": "TYpSq7f8MubE8bK6vG7m8F7WbA9c3DxE1F",  "qr_code": "https://gateway.yourdomain.com/v1/qr/pay_9f3b8c2a1d",  "status": "pending",  "expires_at": "2026-05-22T11:00:00Z",  "created_at": "2026-05-22T10:00:00Z"}`}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                向您的客户显示充值地址和二维码。网关监控区块链上发往此地址的传入交易。一旦检测到并确认后，它会向您的回调 URL 发送 webhook，并将发票状态更新为"confirmed"。
              </p>
              <div className="mt-6 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">关键提示：</strong> 每张发票获得一个<em>唯一</em>的充值地址。不重复使用地址意味着没有隐私泄露和支付冲突风险。同一地址绝不会分配给两张不同的发票——即使来自同一位客户。
              </div>
            </section>
            {/* Step 5: Handle Webhook Callbacks */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                步骤 5：处理 Webhook 回调
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                {steps[4].content}
              </p>
              <pre className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 overflow-x-auto">
                <code>{steps[4].code}</code>
              </pre>
              <p className="mt-4 text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                {steps[4].after}
              </p>
            </section>
            {/* Supported Chains & Tokens */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                支持的链与代币
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                XPay Labs 开箱即用支持三个区块链生态系统，覆盖绝大多数稳定币和山寨币支付量。每条链都有独特的特点，影响着交易速度、成本和集成方式：
              </p>
              <div className="space-y-8">
                <div className="glass-panel rounded-2xl p-6 glow-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      TRON（TRC-20）
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed mb-3">
                    TRON 是稳定币支付的主导链，托管着超过 $500 亿的 TRC-20 USDT——超过任何其他区块链。其 3 秒出块时间和低于 1 美分的交易费用使其成为高流量商家支付的理想选择。TRC-20 USDT 占所有链上稳定币转账量的大部分。
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-blue mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">出块时间：</strong>
                        ~3 秒，19 个区块确认后终局（约 57 秒）
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-blue mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          每笔 USDT 转账费用：
                        </strong>
                        ~0.2–1 TRX（$0.02–$0.10），配合能量管理
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-blue mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          支持的代币：
                        </strong>
                        USDT、USDC、USDD、TUSD 以及任意 TRC-20 代币
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-blue mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">RPC：</strong>TronGrid
                        API（免费套餐：每日 1 万次请求）或您自己的全节点
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-blue mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          地址格式：
                        </strong>
                        Base58 T 地址（以"T"开头）
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-cyan">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      EVM 链（ERC-20）
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed mb-3">
                    XPay Labs 支持所有 EVM 兼容链，包括 Ethereum、BNB Chain、Polygon、Arbitrum、Optimism 和 Base。虽然 Ethereum 主网在网络拥堵时费用较高，但 Arbitrum 和 Base 等 L2 网络提供低于 1 美分的交易成本，同时拥有 Ethereum 级别的安全保证。
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-cyan mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">出块时间：</strong>
                        2–15 秒，取决于具体链（ETH 主网 12 秒，Polygon 2 秒，Arbitrum 0.25 秒）
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-cyan mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          每笔 USDC 转账费用：
                        </strong>
                        ~$0.50–$5（ETH），~$0.0003（Polygon），~$0.01（Arbitrum）
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-cyan mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          支持的代币：
                        </strong>
                        USDT、USDC、DAI 以及每条链上的任意 ERC-20 代币
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-cyan mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">RPC：</strong>Alchemy、
                        Infura、公共节点或您自己的执行客户端
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-cyan mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          地址格式：
                        </strong>
                        0x 十六进制地址（所有 EVM 链相同）
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="glass-panel rounded-2xl p-6 glow-purple">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                      <Coins className="w-5 h-5 text-brand-purple" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white">
                      SUI
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed mb-3">
                    SUI 是基于 Move 语言构建的新兴 Layer 1 区块链，具备并行执行和亚秒级终局性。虽然其稳定币生态仍在增长，SUI 在所有支持的链中提供了最快的交易终局性，并在加密原生商家和用户中日益受到欢迎。
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-purple mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">出块时间：</strong>
                        ~1 秒（通过 Narwhal/Bullshark 共识实现即时终局）
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-purple mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          每笔交易费用：
                        </strong>
                        ~0.001 SUI（约 $0.001）——不到 1 美分
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-purple mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          支持的代币：
                        </strong>
                        SUI、USDC（原生）以及自定义基于 Move 的资产
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-purple mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">RPC：</strong>SUI
                        公共端点或您自己的全节点
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-purple mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-gray-300">
                          地址格式：
                        </strong>
                        0x 前缀十六进制地址
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-brand-purple/5 border border-brand-purple/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">多链路由：</strong>
                如果您的客户在非预期的链上支付，XPay Labs 可以通过扫描所有已配置链上的发票金额来检测跨链支付。在配置中启用
                <code className="text-brand-purple text-xs">
                  multi_chain_scan: true
                </code>
                。网关根据代币精度归一化金额，一旦任意已配置链收到正确的付款，即触发 webhook。
              </div>
            </section>
            {/* Next Steps */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                后续步骤
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                您现在已拥有一个功能完善的自托管加密支付网关。以下是可以进一步探索的内容，以充分利用您的基础设施：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/docs"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Server className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors">
                      部署指南
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    完整文档，涵盖 Docker 部署、环境配置、CLI 参考和生产环境加固。
                  </p>
                </Link>
                <Link
                  href="/alternatives/bitpay"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <ArrowRight className="w-5 h-5 text-brand-cyan" />
                    <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-cyan transition-colors">
                      XPay vs BitPay
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    自托管 XPay Labs 与托管 BitPay 的详细对比——费用、托管模式、链支持和迁移指南。
                  </p>
                </Link>
                <Link
                  href="/solutions/tron-payment-gateway"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-brand-purple" />
                    <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-purple transition-colors">
                      TRON 支付网关
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    深入 TRON 特有配置：TRC-20 代币支持、能量管理、TronGrid 集成和 HD 派生。
                  </p>
                </Link>
                <Link
                  href="/"
                  className="glass-panel rounded-2xl p-5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-brand-cyan" />
                    <h3 className="text-sm font-display font-medium text-white group-hover:text-brand-cyan transition-colors">
                      XPay Labs 概览
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    了解 XPay Labs 完整平台：多链架构、非托管安全模型和开发者 API。
                  </p>
                </Link>
              </div>
            </section>
            {/* CTA */}
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  准备好接受加密货币支付了吗？
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  在您自己的基础设施上部署 XPay Labs，30 分钟内完成。零交易手续费、非托管安全、支持 TRON、EVM 和 SUI 链。无需注册——只需 Docker。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/docs"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>部署您的网关</span>
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
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
