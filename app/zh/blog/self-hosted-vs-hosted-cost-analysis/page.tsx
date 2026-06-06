import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, DollarSign, TrendingDown, Server, Coins, Zap, Shield } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';

export const metadata: Metadata = {
  title: '自托管 vs 托管加密货币支付：真实成本分析（2026） | XPay Labs',
  description: '五个交易量级别的详细成本核算：BitPay、Coinbase Commerce、NowPayments 与自托管 XPay Labs 的实际费用对比。节省金额会出乎你的意料。',
  keywords: ['加密货币支付网关成本对比', '自托管 vs 托管加密支付', 'BitPay 费用计算', '加密货币支付处理成本分析', 'Coinbase Commerce 费用', 'NowPayments 费用对比', '商户支付处理加密货币'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/blog/self-hosted-vs-hosted-cost-analysis',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/self-hosted-vs-hosted-cost-analysis',
      'en-US': 'https://www.xpaylabs.com/blog/self-hosted-vs-hosted-cost-analysis',
      'zh-CN': 'https://www.xpaylabs.com/zh/blog/self-hosted-vs-hosted-cost-analysis',
    },
  },
  openGraph: {
    title: '自托管 vs 托管加密货币支付：真实成本分析（2026）',
    description: '五个交易量级别的数据驱动成本对比——从 $10k 到 $500k 月交易量。精确计算商户选择自托管基础设施能节省多少。',
    url: 'https://www.xpaylabs.com/zh/blog/self-hosted-vs-hosted-cost-analysis',
    type: 'article',
  },
  twitter: {
    title: '自托管 vs 托管加密货币支付：真实成本分析（2026）',
    description: '五个交易量级别的数据驱动成本对比。精确计算商户选择自托管基础设施能节省多少。',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '自托管 vs 托管加密货币支付：真实成本分析（2026）',
  description: '五个交易量级别的加密货币支付成本对比，含 BitPay、Coinbase Commerce、NowPayments 和 XPay Labs 的真实费用数据。',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
};

const annualCosts = [
  { tier: '$10k/月', bitpay: '$1,560', coinbase: '$1,260', nowpay: '$900', xpay: '$60' },
  { tier: '$50k/月', bitpay: '$6,360', coinbase: '$5,260', nowpay: '$3,300', xpay: '$120' },
  { tier: '$100k/月', bitpay: '$12,360', coinbase: '$10,260', nowpay: '$6,300', xpay: '$120' },
  { tier: '$250k/月', bitpay: '$30,360', coinbase: '$25,260', nowpay: '$15,300', xpay: '$240' },
  { tier: '$500k/月', bitpay: '$60,360', coinbase: '$50,260', nowpay: '$30,300', xpay: '$240' },
];

export default function ZhCostAnalysisPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono mb-6">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>成本分析</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                自托管 vs 托管加密货币支付：真实成本分析
              </h1>
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 font-mono">
                <span>2026 年 5 月 31 日</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>阅读时间约 8 分钟</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                BitPay 和 Coinbase Commerce 等托管加密货币支付网关宣称"1% 手续费"似乎微不足道。
                对一个月交易量 $100k 的商户来说，那 1% 累积起来就是每年
                <strong className="text-white"> $12,000+</strong>——还没算月费、结算延迟和法币兑换成本。
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                我们构建了一个透明的成本模型，涵盖五个交易量级别，让你清楚看到每个网关的实际收费——
                以及自托管基础设施能节省多少。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                按交易量级别的年度成本对比
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                所有数字包含交易手续费 + 月费。自托管成本包含 VPS 托管费（按级别 $5-$20/月）。
                区块链 Gas 费未计入（所有方案下商户支付的 Gas 费相同）。
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">月交易量</th>
                      <th className="p-4 text-orange-400 font-medium">BitPay</th>
                      <th className="p-4 text-blue-400 font-medium">Coinbase Commerce</th>
                      <th className="p-4 text-purple-400 font-medium">NowPayments</th>
                      <th className="p-4 text-brand-cyan font-medium">XPay Labs（自托管）</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {annualCosts.map((row) => (
                      <tr key={row.tier} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-300 font-medium">{row.tier}</td>
                        <td className="p-4 text-gray-400">{row.bitpay}/年</td>
                        <td className="p-4 text-gray-400">{row.coinbase}/年</td>
                        <td className="p-4 text-gray-400">{row.nowpay}/年</td>
                        <td className="p-4 text-green-400 font-semibold">{row.xpay}/年</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-emerald-400/5 border border-emerald-400/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">假设条件：</strong> BitPay: 1% 交易费 + $30/月 Starter 套餐。
                Coinbase Commerce: 0.8% 交易费 + $25/月套餐。NowPayments: 0.5% 交易费（无月费）。
                XPay Labs: $0 交易费，VPS 费用按 $5/月（$10k 级别）到 $20/月（$500k 级别）估算。
                Gas 费未计入（所有方案下客户或商户支付相同）。
                XPay Labs 可选支持计划 $1,500 起（Docker Setup）或 $3,000/年（Business）— 使用软件无需购买。
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                3 年累计影响
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                支付基础设施是长期决策。以下是月交易量 $100k 的商户 3 年的累计成本：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-panel rounded-2xl p-6 text-center border-l-4 border-orange-500/50">
                  <div className="text-2xl font-display font-bold text-orange-400">$37,080</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">BitPay — 3 年</div>
                  <div className="text-[10px] text-gray-600 font-sans mt-2">$12,360/年 × 3</div>
                </div>
                <div className="glass-panel rounded-2xl p-6 text-center border-l-4 border-purple-500/50">
                  <div className="text-2xl font-display font-bold text-purple-400">$18,900</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">NowPayments — 3 年</div>
                  <div className="text-[10px] text-gray-600 font-sans mt-2">$6,300/年 × 3</div>
                </div>
                <div className="glass-panel rounded-2xl p-6 text-center border-l-4 border-green-500/50">
                  <div className="text-2xl font-display font-bold text-green-400">$360</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">XPay Labs — 3 年</div>
                  <div className="text-[10px] text-gray-600 font-sans mt-2">$120/年 × 3</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
                选择自托管基础设施，3 年可节省 <strong className="text-emerald-400">$36,720</strong>。
                这些资金可用在产品开发、市场营销或扩充团队上。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                大多数商户忽略的隐藏成本
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-6">
                交易费是显性成本。以下是让托管网关实际成本高于表面费率的隐性成本：
              </p>
              <div className="space-y-4">
                <div className="glass-panel rounded-2xl p-5">
                  <h3 className="text-sm font-display font-medium text-white mb-2">1. 延迟结算的资金沉淀损失</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    BitPay 按批次结算——最快每日，最慢每周。如果月交易量 $100k，任何时刻平均有约 $16k
                    的资金在结算途中。按 5% 的回报率（这些资本本可获得的其他收益）计算，这相当于每年
                    <strong className="text-gray-300"> $800 的机会成本</strong>。XPay Labs 即时结算——你的资本立即为你创造价值。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <h3 className="text-sm font-display font-medium text-white mb-2">2. 法币兑换点差</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    BitPay 和 Coinbase Commerce 提供法币结算——但有价差。BitPay 的兑换率通常低于市场价
                    0.5-1%。以月 $100k 计，这就相当于每年 <strong className="text-gray-300">$6,000-$12,000</strong> 的隐藏成本。
                    自托管方案让你自行选择兑换渠道（或直接持有加密货币）。
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <h3 className="text-sm font-display font-medium text-white mb-2">3. 服务商变更条款时的迁移成本</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Coinbase Commerce 正在<a href="/alternatives/coinbase-commerce" className="text-brand-cyan underline underline-offset-2">关闭其托管服务</a>。
                    BitPay 曾多次提价和调整套餐结构。当托管服务商变更条款时，你需要迁移——迁移成本包括
                    工程时间、测试和潜在停机。而自托管基础设施，你掌握升级周期。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                托管方案何时更合理
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                公平地说：托管网关并不总是错误的选择。以下场景中，支付 1% 手续费是值得的：
              </p>
              <div className="glass-panel rounded-2xl p-6">
                <ul className="space-y-3 text-sm text-gray-400 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 shrink-0">•</span>
                    <span><strong className="text-gray-300">月交易量低于 $5k：</strong> 绝对金额差异很小，便利性胜出。$5k × 1% = $50/月。不值得投入 DevOps 时间。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 shrink-0">•</span>
                    <span><strong className="text-gray-300">无技术团队：</strong> 如果无法运行 Docker 容器，在招聘或学习之前，托管方案是唯一选择。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 shrink-0">•</span>
                    <span><strong className="text-gray-300">仅法币商业模式：</strong> 如果银行账户需要美元入账且不能持有加密货币，处理器的内置兑换（尽管有点差）能简化财务工作。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 shrink-0">•</span>
                    <span><strong className="text-gray-300">客户群体以比特币为主：</strong> 如果客户主要使用 BTC/LTC 支付且需要 Lightning 支持，BTCPay Server（自托管比特币）或 OpenNode（托管）比任何稳定币方案更合适。</span>
                  </li>
                </ul>
              </div>
            </section>

            <BlogNavigation
              prev={{
                href: '/zh/blog/10-engineering-decisions',
                title: '自托管加密货币支付网关的 10 个工程决策',
              }}
              next={{
                href: '/zh/blog/performance-benchmarks-multi-chain-gateway',
                title: '性能基准测试：在 $5 VPS 上运行多链加密货币支付网关',
              }}
              prevLabel="上一篇"
              nextLabel="下一篇"
            />
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-emerald text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  计算您的节省
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  如果月加密货币交易量超过 $10k，自托管基础设施每年可为您节省数千美元。
                  在 30 分钟内部署 XPay Labs，保留 100% 的收入。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="https://docs.xpaylabs.com/"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>部署 XPay Labs</span>
                  </Link>
                  <Link
                    href="/guides/how-to-accept-crypto-payments"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>查看安装指南</span>
                    <ArrowUpRight className="w-4 h-4" />
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
