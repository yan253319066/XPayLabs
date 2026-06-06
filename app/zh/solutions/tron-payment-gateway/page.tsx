import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Terminal,
  Shield,
  CheckCircle2,
  Zap,
  Lock,
  Server,
  Code2,
  DollarSign,
  Clock,
  Globe,
  Cpu,
  Activity,
  ArrowRight,
} from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';
import CopyButton from './CopyButton';
export const metadata: Metadata = {
  title: 'TRON TRC20 支付网关 — 自托管 USDT 收款基础设施 | XPay Labs',
  description:
    '自托管 TRON 支付网关，用于接受 USDT TRC20 支付。非托管、亚秒级交易检测、白标结账。通过 Docker 部署。',
  keywords:
    'TRON 支付网关, TRC20 支付网关, 接受 USDT TRC20, TRON 加密货币支付, TRC20 USDT 支付处理器, 自托管 TRON 网关, TRON 支付 API, TRON 区块链支付, USDT TRC20 结账, TRON 商户网关',
  alternates: {
    canonical: 'https://www.xpaylabs.com/solutions/tron-payment-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/solutions/tron-payment-gateway',
      'en-US': 'https://www.xpaylabs.com/solutions/tron-payment-gateway',
      'zh-CN': 'https://www.xpaylabs.com/zh/solutions/tron-payment-gateway',
    },
  },
  openGraph: {
    title: 'TRON TRC20 支付网关 — 自托管 USDT 收款基础设施 | XPay Labs',
    description:
      '自托管 TRON 支付网关，用于接受 USDT TRC20 支付。非托管、亚秒级交易检测、白标结账。',
    url: 'https://www.xpaylabs.com/zh/solutions/tron-payment-gateway',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRON TRC20 支付网关 — 自托管 USDT 收款基础设施 | XPay Labs',
    description:
      '自托管 TRON 支付网关，用于接受 USDT TRC20 支付。非托管、亚秒级交易检测、白标结账。',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是 TRON 支付网关？它与 TRC20 USDT 如何工作？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A TRON payment gateway enables merchants to accept TRC20 tokens (primarily USDT) directly on the TRON blockchain. XPay Labs runs a self-hosted scanner that monitors the TRON blockchain via Trongrid and TRON RPC for incoming transactions to merchant-specific derived addresses. When a payment is detected — typically within 2–6 seconds of mempool broadcast — a webhook notifies your server with the transaction ID, amount, and confirmation status.',
      },
    },
    {
      '@type': 'Question',
      name: 'TRC20 支付网关是非托管的吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. XPay Labs is fully non-custodial. Private keys are generated deterministically from your seed phrase and stored locally. Funds go directly to your wallets — never through an intermediary. The gateway only monitors addresses and triggers webhooks; it never holds, moves, or has access to your funds.',
      },
    },
    {
      '@type': 'Question',
      name: 'XPay Labs 对 TRON 支付收取什么费用？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero gateway fees. XPay Labs is source-available software you deploy yourself. The only costs are your server (a $10–$20 VPS or dedicated machine) and TRON network transaction fees (~0.1–1 TRX per USDT transfer for energy/bandwidth). There are no per-transaction fees, monthly minimums, or revenue-share arrangements.',
      },
    },
    {
      '@type': 'Question',
      name: 'TRON 钱包派生如何为商户支付工作？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "XPay Labs uses BIP44/TRIP44 hierarchical deterministic (HD) wallet derivation. For each invoice it derives a unique TRON address from your master seed. This means every customer gets a fresh deposit address with no collision risk and zero address reuse. The derivation is fully offline-capable and follows the m/44' /195' /0' /0/{index} path standard used by TRON wallets.",
      },
    },
    {
      '@type': 'Question',
      name: '我可以接受 USDT 以外的自定义 TRC20 代币吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。XPay Labs 支持任何 TRC20 代币。网关使用 TRC20 ABI 合约接口读取任意代币合约的 balanceOf()。您可以在 YAML 配置中通过指定合约地址、小数位和最小确认阈值来配置接受的代币。这包括 USDC、USDD、TUSD、BTT 和任何社区 TRC20 代币。',
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
      name: '解决方案',
      item: 'https://www.xpaylabs.com/zh/solutions/tron-payment-gateway',
    },
  ],
};
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何设置自托管 TRON TRC20 支付网关',
  description:
    '部署 XPay Labs，在 10 分钟内开始接受 USDT TRC20 支付。',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: '部署 Docker 容器',
      text: '运行 docker compose up 使用 XPay Labs 镜像，在环境变量中设置您的助记词、TRON RPC 端点和 webhook URL。',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '配置 TRON 链设置',
      text: 'Set your TRON network parameters in config.yaml — TRC20 token contracts, confirmation blocks (typically 19 for USDT TRC20), and TronGrid API key.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '生成 API 凭据',
      text: '通过管理面板或 CLI 创建商户 API 密钥。此密钥用于验证来自您后端的支付创建请求。',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '创建支付请求',
      text: '调用 POST /v1/payments 并传入金额、币种（USDT）、链（TRON）、订单 ID 和回调 URL。网关派生唯一的充值地址并返回。',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: '处理 Webhook 通知',
      text: '在您的服务器上实现 webhook 端点以接收支付确认。XPay Labs 发送经过验证的交易数据，包括 txID、区块号和代币金额。',
    },
  ],
};
const featureTable = [
  { feature: '网络', detail: 'TRON 主网 / Shasta 测试网' },
  {
    feature: '代币标准',
    detail: 'TRC20（USDT、USDC、USDD、TUSD、自定义）',
  },
  {
    feature: '检测延迟',
    detail: '2–6 秒（交易池），约 19 个区块最终确认（TRC20）',
  },
  {
    feature: '钱包派生',
    detail: "BIP44/TRIP44 HD 确定性（m/44'/195'/...）",
  },
  {
    feature: 'RPC 端点',
    detail: 'TronGrid、全节点 RPC、Solidity 节点 RPC',
  },
  {
    feature: '确认策略',
    detail: '每个代币可配置区块确认数',
  },
  {
    feature: '费用模式',
    detail: '零平台费，仅 TRX 燃料费（约 0.1–1 TRX/笔）',
  },
  {
    feature: '地址格式',
    detail: 'Base58（T 地址）通过 base58check 编码',
  },
  {
    feature: 'ABI 集成',
    detail: 'TRC20 balanceOf()、decimals()、symbol() 调用',
  },
];
const useCases = [
  {
    title: '电商 USDT 结账',
    description:
      '在结账时用 TRC20 USDT 替代 Stripe/PayPal。客户扫描 T 地址或二维码，发送 USDT，网关在数秒内确认。无拒付风险。',
    advantage:
      '不可逆结算，无支付处理器资金托管，触达全球客户。',
  },
  {
    title: '订阅计费',
    description:
      '通过 webhook 触发的发票生成自动化定期 USDT TRC20 计费。网关检测每笔定期付款并通知您的计费系统。',
    advantage:
      '无重复卡费，无到期顾虑，自动稳定价值计费。',
  },
  {
    title: '捐赠与众筹',
    description:
      '接受基于 TRC20 的可抵扣捐赠，每场活动使用独立派生的地址。实时交易池追踪实现即时捐赠确认。',
    advantage:
      '捐赠零平台费，通过区块浏览器实现完全透明。',
  },
  {
    title: '白标支付页面',
    description:
      '嵌入或跳转到完全可自定义的结账页面。不显示任何 XPay Labs 品牌——您的客户只看到您的品牌、域名和 TRON 地址。',
    advantage: '完全品牌自主，无需第三方信任信号。',
  },
];
const curlCode = `curl -X POST "https://gateway.yourdomain.com/v1/payments" \  -H "Authorization: Bearer xpay_live_8f3a9d7219bc" \  -H "Content-Type: application/json" \  -d '{    "amount": "100.00",    "currency": "USDT",    "chain": "TRON",    "order_id": "order_783120",    "callback_url": "https://api.merchant.com/v1/webhooks/xpay"  }'`;
export default function TronPaymentGatewayPage() {
  return (
    <>
      <JsonLd data={faqSchema} /> <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="relative gradient-bg pt-24 pb-20">
          {/* Hero 区域 */}
          <section className="relative overflow-hidden">
            <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-brand-purple opacity-10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-brand-cyan opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest font-mono">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  TRON 支付基础设施
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight italic">
                  TRON TRC20 支付网关
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple not-italic">
                    自托管 USDT 收款基础设施
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed max-w-2xl mx-auto">
                  部署非托管 TRON 支付网关，在 6 秒内从交易池检测 TRC20
                  交易。接受 USDT TRC20，零网关费，完全白标品牌，
                  并完全掌控您的私钥。
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_25px_rgba(91,140,255,0.3)]"
                  >
                    查看文档
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-3 border border-white/10 text-gray-300 rounded-full text-sm font-bold hover:border-brand-blue/30 hover:text-white transition-all"
                  >
                    了解 XPay Labs
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* 为什么选择 TRON */}
          <section className="py-20 relative">
            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-brand-blue opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                    <Zap className="w-3 h-3" /> 为什么选择 TRON
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    TRON 在生产支付中的优势
                  </h2>
                </div>
                <div className="space-y-6 text-slate-400 font-sans leading-relaxed text-sm sm:text-base">
                  <p>
                    TRON 每日处理超过 1000 万笔交易，并拥有最大的流通 USDT
                    供应量——仅 TRC20 USDT 就超过 500 亿美元。对于接受加密货币支付的商户而言，
                    这意味着深度流动性、
                    <strong className="text-white">
                      低于 1 美分的交易费用
                    </strong>
                    ，以及 15–30 秒内的最终确认（19 个区块，每个约 3 秒）。
                    相比 Ethereum 主网，TRON 上的 USDT 转账成本约为 0.2–1 TRX（0.02–0.10 美元），
                    而 ETH 则为 1–10 美元。对于处理数千笔交易的高频商户来说，
                    这一差异具有变革性。
                  </p>
                  <p>
                    TRC20 是 TRON 上稳定币支付的主导标准。与 ERC-20 不同，TRC20 交易在
                    <strong className="text-white">
                      数秒而非数分钟
                    </strong>
                    内完成结算，这得益于 TRON 的 3 秒出块时间和 500+ msg/s 的吞吐量。
                    TRON 虚拟机（TVM）与 EVM 兼容，意味着 TRC20 ABI 与 ERC-20 保持一致——
                    balanceOf(address)、transfer(address,uint256) 和
                    approve(address,uint256) 的行为完全相同。
                    这使得熟悉 Solidity 和 EVM 工具的团队能够轻松集成。
                  </p>
                  <p>
                    然而，TRON 也有其权衡之处。其委托权益证明（DPoS）共识机制
                    由 27 个超级代表维护，意味着网络的去中心化程度低于 Ethereum 或 Bitcoin。
                    带宽和能量需要合理管理——每笔 TRC20 转账消耗约 65,000 能量单位，
                    可以通过质押或燃烧 TRX 来获取。XPay Labs 通过可配置的能量委托自动处理这些问题，
                    但这是 TRON 生态系统特有的考量，商户在大规模部署前应充分了解。
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* XPay Labs TRON 集成如何工作 */}
          <section className="py-20 bg-[#060816]/60 relative overflow-hidden">
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-purple opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-widest font-mono">
                    <Cpu className="w-3 h-3" /> 架构
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    TRON 集成工作原理
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-cyan/20 transition-all glow-cyan">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 font-display">
                      1. 交易池扫描器
                    </h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">
                      扫描器通过 TronGrid 和 gRPC 连接到 TRON 全节点，
                      监听交易流。它过滤出 TRC20 Transfer 事件中
                      <code className="text-brand-cyan text-xs">to</code>
                      地址匹配已派生商户钱包的交易。
                      检测在交易池层级进行，在交易被包含到区块之前即可完成。
                    </p>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-blue/20 transition-all glow-blue">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 font-display">
                      2. HD 钱包派生
                    </h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">
                      对于每张发票，XPay Labs 使用 BIP44 及 TRON 的币种类型 195
                      派生唯一的 TRON 地址。派生路径
                      <code className="text-brand-blue text-xs">
                        m/44&apos;/195&apos;/0&apos;/0/{'{index}'}
                      </code>
                      从您的助记词中生成确定性地址。地址从不重复使用，
                      且助记词永远不会离开您的服务器。
                    </p>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-purple/20 transition-all glow-purple">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4">
                      <Terminal className="w-6 h-6 text-brand-purple" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 font-display">
                      3. Webhook 调度器
                    </h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">
                      当交易达到配置的确认阈值（TRC20 USDT 默认为 19 个区块）后，
                      网关构建一个经过验证的负载——包含 txID、区块号、
                      发送方/接收方地址、代币金额和确认数——并通过
                      <code className="text-brand-purple text-xs">
                        callback_url
                      </code>
                      使用 HMAC-SHA256 签名以 POST 方式发送到您的服务器。
                    </p>
                  </div>
                </div>
                <div className="mt-8 glass-panel rounded-2xl p-6 border border-white/5">
                  <p className="text-slate-400 text-sm font-sans leading-relaxed">
                    <strong className="text-white">完整流程：</strong>
                    客户选择 USDT TRC20 → 您的后端调用
                    <code className="text-brand-cyan text-xs">
                      POST /v1/payments
                    </code>
                    传入 chain=TRON → 网关派生唯一的 T 地址 →
                    显示地址/二维码 → 客户发送 USDT → 交易池
                    扫描器在约 2–6 秒内检测到交易 → 等待 19 个区块（约 57 秒）→
                    Webhook 触发 → 您的服务器完成订单。从发送到收到确认通知的总时间：
                    不超过 90 秒。
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 功能表 */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest font-mono">
                    <Server className="w-3 h-3" /> 技术规格
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    TRON 支持详情
                  </h2>
                </div>
                <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden glow-blue">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-sans">
                      <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                          <th className="text-left py-4 px-6 text-white font-bold text-xs uppercase tracking-widest">
                            功能
                          </th>
                          <th className="text-left py-4 px-6 text-white font-bold text-xs uppercase tracking-widest">
                            详情
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {featureTable.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                          >
                            <td className="py-4 px-6 text-gray-300 font-medium">
                              {row.feature}
                            </td>
                            <td className="py-4 px-6 text-slate-400">
                              {row.detail}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 代码示例 */}
          <section className="py-20 bg-[#060816]/60 relative">
            <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-blue opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                    <Code2 className="w-3 h-3" /> API
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    创建 TRON 支付
                  </h2>
                </div>
                <div className="bg-gradient-to-b from-brand-blue/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-1">
                  <div className="rounded-[22px] border border-white/10 bg-[#0A0D1F] overflow-hidden shadow-2xl">
                    <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                          curl
                        </span>
                      </div>
                      <CopyButton code={curlCode} />
                    </div>
                    <div className="p-5 sm:p-7 overflow-auto custom-scrollbar select-all bg-[#060816]">
                      <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
                        <span className="text-brand-purple">curl</span>
                        <span className="text-brand-blue">-X</span>
                        <span className="text-brand-cyan">POST</span>
                        <span className="text-teal-400">
                          {'"https://gateway.yourdomain.com/v1/payments"'}
                        </span>
                        \<br /> &nbsp;&nbsp;
                        <span className="text-brand-blue">-H</span>
                        <span className="text-teal-400">
                          {'"Authorization: Bearer xpay_live_8f3a9d7219bc"'}
                        </span>
                        \<br /> &nbsp;&nbsp;
                        <span className="text-brand-blue">-H</span>
                        <span className="text-teal-400">
                          {'"Content-Type: application/json"'}
                        </span>
                        \<br /> &nbsp;&nbsp;
                        <span className="text-brand-blue">-d</span>
                        <span className="text-gray-400">{"'{"}</span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">{'"amount"'}</span>:
                        <span className="text-teal-300">{'"100.00"'}</span>,
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">{'"currency"'}</span>:
                        <span className="text-teal-300">{'"USDT"'}</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">{'"chain"'}</span>:
                        <span className="text-teal-300">{'"TRON"'}</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">{'"order_id"'}</span>:
                        <span className="text-teal-300">
                          {'"order_783120"'}
                        </span>
                        ,<br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">
                          {'"callback_url"'}
                        </span>
                        :
                        <span className="text-teal-300">
                          {'"https://api.merchant.com/v1/webhooks/xpay"'}
                        </span>
                        <br /> &nbsp;&nbsp;
                        <span className="text-gray-400">{"}'"}</span>
                      </code>
                    </div>
                    <div className="bg-[#050716] px-5 py-2.5 border-t border-white/5 flex items-center justify-between text-[10px] uppercase font-mono text-slate-500">
                      <span className="flex items-center space-x-1.5 font-bold">
                        <Lock className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>SSL 加密 · HMAC-SHA256 签名</span>
                      </span>
                      <span className="hidden sm:inline font-bold">
                        TRON TRC20 端点
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 glass-panel rounded-2xl p-5 border border-white/5">
                  <p className="text-slate-400 text-xs sm:text-sm font-sans">
                    <strong className="text-white">响应：</strong>网关返回一个充值地址和发票 ID。
                    该地址是从您的助记词派生的唯一 Base58 TRON 地址，类似
                    <code className="text-brand-cyan text-xs">
                      TYpSq7f8MubE8bK6vG7m8F7WbA9c3DxE1F
                    </code>
                    。以二维码或原始地址形式分享给客户。
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Docker 部署配置 */}
          <section className="py-20 relative">
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-cyan opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest font-mono">
                    <Terminal className="w-3 h-3" /> 部署
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    Docker 部署配置
                  </h2>
                </div>
                <div className="bg-gradient-to-b from-brand-cyan/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-1">
                  <div className="rounded-[22px] border border-white/10 bg-[#0A0D1F] overflow-hidden shadow-2xl">
                    <div className="bg-white/5 px-4 py-3 border-b border-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                          <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                          docker-compose.yml
                        </span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-7 overflow-auto custom-scrollbar select-all bg-[#060816]">
                      <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
                        <span className="text-brand-purple">version</span>:
                        <span className="text-teal-300">"3.9"</span>
                        <br /> <br />
                        <span className="text-brand-purple">services</span>:
                        <br /> &nbsp;&nbsp;
                        <span className="text-brand-cyan">xpay-gateway</span>:
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-purple">image</span>:
                        <span className="text-teal-300">
                          ghcr.io/xpaylabs/gateway:latest
                        </span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-purple">restart</span>:
                        <span className="text-teal-300">unless-stopped</span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-purple">ports</span>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
                        <span className="text-teal-300">"8080:8080"</span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-purple">environment</span>:
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">
                          XPAY_SEED_PHRASE
                        </span>
                        :
                        <span className="text-teal-300">
                          ${'{XPAY_SEED_PHRASE}'}
                        </span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">XPAY_TRON_RPC</span>:
                        <span className="text-teal-300">
                          https://api.trongrid.io
                        </span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">
                          XPAY_TRON_API_KEY
                        </span>
                        :
                        <span className="text-teal-300">
                          ${'{TRONGRID_API_KEY}'}
                        </span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">
                          XPAY_CONFIRMATIONS
                        </span>
                        : <span className="text-purple-400">19</span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">
                          XPAY_WEBHOOK_URL
                        </span>
                        :
                        <span className="text-teal-300">
                          https://api.merchant.com/v1/webhooks/xpay
                        </span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">
                          XPAY_TRON_NETWORK
                        </span>
                        : <span className="text-teal-300">mainnet</span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-purple">volumes</span>:
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
                        <span className="text-teal-300">
                          ./config.yaml:/app/config.yaml
                        </span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-purple">logging</span>:
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-purple">driver</span>:
                        <span className="text-teal-300">"json-file"</span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-purple">options</span>:
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">max-size</span>:
                        <span className="text-teal-300">"10m"</span>
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-brand-cyan">max-file</span>:
                        <span className="text-teal-300">"3"</span>
                      </code>
                    </div>
                    <div className="bg-[#050716] px-5 py-2.5 border-t border-white/5 flex items-center justify-between text-[10px] uppercase font-mono text-slate-500">
                      <span className="flex items-center space-x-1.5 font-bold">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        <span>持久卷已绑定</span>
                      </span>
                      <span className="hidden sm:inline font-bold">
                        DOCKER COMPOSE V3
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 glass-panel rounded-2xl p-5 border border-white/5">
                  <p className="text-slate-400 text-xs sm:text-sm font-sans">
                    <strong className="text-white">
                      环境变量说明：
                    </strong>
                    <code className="text-brand-cyan text-xs">
                      XPAY_SEED_PHRASE
                    </code>
                    是您的 12–24 词助记词（离线保存——切勿放入版本控制）。
                    <code className="text-brand-cyan text-xs">
                      XPAY_TRON_RPC
                    </code>
                    默认为 TronGrid，但可指向您自己的全节点。
                    <code className="text-brand-cyan text-xs">
                      XPAY_CONFIRMATIONS
                    </code>
                    默认为 19 个区块（约 57 秒）以确保最终确认——您可以降低到 1
                    以实现仅交易池检测（
                    <strong className="text-white">风险：孤块风险</strong>
                    ）或提高以获得更高保障。
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 优势 */}
          <section className="py-20 bg-[#060816]/60 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                    <CheckCircle2 className="w-3 h-3" /> 优势
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    为什么选择自托管 TRON 网关
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-emerald-400/20 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center shrink-0">
                        <DollarSign className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 font-display">
                          零网关费
                        </h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed">
                          传统处理器每笔交易收取 1–3% + 0.30 美元。XPay Labs 分文不取。
                          您只需支付 TRON 网络费用（每笔 USDT 转账约 0.02–0.10 美元）。
                          如果每月处理 1,000 笔平均 50 美元的交易，相比 Stripe 或 PayPal
                          每月可节省 1,500 美元以上。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-cyan/20 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                        <Lock className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 font-display">
                          默认非托管
                        </h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed">
                          私钥永远不会离开您的基础设施。网关仅读取链上的 balanceOf() 和 Transfer 事件。
                          没有提现限制，无需 KYC 审核，无交易对手风险。
                          如果您的服务器离线，资金仍然保留在您的钱包中——任何支持 BIP44 的 TRON 钱包均可访问。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-purple/20 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center shrink-0">
                        <Globe className="w-5 h-5 text-brand-purple" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 font-display">
                          白标结账
                        </h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed">
                          整个支付页面可通过 CSS 和 HTML 模板完全自定义。
                          流程中不会出现任何 XPay Labs 或第三方品牌标识。
                          您的客户只看到您的域名、您的品牌和一个 TRON 地址——仅此而已。
                          这有助于建立信任，让用户留在您的网站上。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-brand-blue/20 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1 font-display">
                          亚秒级交易池检测
                        </h3>
                        <p className="text-slate-400 text-sm font-sans leading-relaxed">
                          TRON 扫描器通过 gRPC 通知监听 P2P 交易流。
                          当 TRC20 Transfer 事件到达网络时，
                          XPay Labs 在 2–6 秒内即可在交易池中看到——早于第一个区块确认。
                          这实现了即时用户反馈，将结账摩擦降至接近零。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 应用场景 */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-widest font-mono">
                    <Globe className="w-3 h-3" /> 应用场景
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                    TRON 支付网关应用场景
                  </h2>
                </div>
                <div className="space-y-6">
                  {useCases.map((uc, i) => (
                    <div
                      key={i}
                      className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-white text-lg font-bold font-display">
                            {uc.title}
                          </h3>
                          <p className="text-slate-400 text-sm font-sans leading-relaxed max-w-2xl">
                            {uc.description}
                          </p>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <span className="inline-block px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider font-mono">
                            优势
                          </span>
                          <p className="text-slate-400 text-xs mt-1 max-w-xs sm:text-right">
                            {uc.advantage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* CTA 区域 */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-transparent to-brand-purple/5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest font-mono">
                  <ArrowRight className="w-3 h-3" /> 开始使用
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic">
                  几分钟内部署您的 TRON 支付网关
                </h2>
                <p className="text-slate-400 text-base font-sans leading-relaxed max-w-2xl mx-auto">
                  自托管、非托管、零费用的 TRC20 支付基础设施。
                  下载 Docker 镜像，配置您的 TRON RPC 端点，
                  在一小时内开始接受 USDT TRC20 支付。
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(91,140,255,0.3)]"
                  >
                    阅读文档
                  </Link>
                  <Link
                    href="/"
                    className="px-8 py-3.5 border border-white/10 text-gray-300 rounded-full text-sm font-bold hover:border-brand-blue/30 hover:text-white transition-all"
                  >
                    关于 XPay Labs
                  </Link>
                  <Link
                    href="/alternatives/bitpay"
                    className="px-8 py-3.5 border border-white/5 text-slate-500 rounded-full text-sm font-bold hover:text-slate-300 transition-all"
                  >
                    对比 BitPay
                  </Link>
                </div>
                <p className="text-slate-500 text-xs font-sans mt-4">
                  自托管 · 无需注册 · 无需申请 API 密钥 · 可部署在任何环境
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
