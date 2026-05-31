import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Gauge, Cpu, HardDrive, Activity, Zap, Server, Clock, Database } from 'lucide-react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';

export const metadata: Metadata = {
  title: '性能基准测试：在 $5 VPS 上运行多链加密货币支付网关 | XPay Labs',
  description: 'XPay Labs 在 $4.49/月 Hetzner CX22 服务器上的真实性能基准：TRON、EVM 和 SUI 链的支付检测延迟、内存占用、CPU 消耗、Webhook 送达时间和并发发票容量。',
  keywords: ['加密货币支付网关性能', '支付网关基准测试', '自托管网关 VPS 需求', '多链支付网关性能', '加密货币支付处理延迟', '区块链支付检测速度', 'Docker 加密网关资源占用', '支付网关可扩展性'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/blog/performance-benchmarks-multi-chain-gateway',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/performance-benchmarks-multi-chain-gateway',
      'en-US': 'https://www.xpaylabs.com/blog/performance-benchmarks-multi-chain-gateway',
      'zh-CN': 'https://www.xpaylabs.com/zh/blog/performance-benchmarks-multi-chain-gateway',
    },
  },
  openGraph: {
    title: '性能基准测试：在 $5 VPS 上运行多链加密货币支付网关',
    description: '在 $4.49/月 Hetzner CX22 上的真实基准测试——TRON、EVM 和 SUI 的支付检测延迟、资源占用和容量。',
    url: 'https://www.xpaylabs.com/zh/blog/performance-benchmarks-multi-chain-gateway',
    type: 'article',
  },
  twitter: {
    title: '性能基准测试：在 $5 VPS 上运行多链加密货币支付网关',
    description: '在 $4.49/月 Hetzner CX22 上的真实基准测试——TRON、EVM 和 SUI 的支付检测延迟、资源占用和容量。',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '性能基准测试：在 $5 VPS 上运行多链加密货币支付网关',
  description: 'XPay Labs 在廉价基础设施上的真实性能数据——TRON、EVM 和 SUI 的支付检测延迟、内存、CPU 和吞吐量。',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
};

export default function ZhPerformanceBenchmarksPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono mb-6">
                <Gauge className="w-3.5 h-3.5" />
                <span>基准测试</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                性能基准测试：在 $5 VPS 上运行多链加密货币支付网关
              </h1>
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 font-mono">
                <span>2026 年 5 月 31 日</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>阅读时间约 10 分钟</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                一个功能完备的多链加密货币支付网关能在
                <strong className="text-white"> $4.49/月的 VPS</strong> 上运行吗？
                我们对 XPay Labs 进行了严格的基准测试。简短的回答：可以——而且还有余力处理 10,000+
                并发发票。以下是数据。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                测试环境
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-white/5 mb-6">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">组件</th>
                      <th className="p-4 text-gray-400 font-medium">规格</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">提供商</td>
                      <td className="p-4 text-gray-400">Hetzner Cloud CX22</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">vCPU</td>
                      <td className="p-4 text-gray-400">2 (AMD EPYC)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">内存</td>
                      <td className="p-4 text-gray-400">4 GB</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">存储</td>
                      <td className="p-4 text-gray-400">40 GB NVMe SSD</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">操作系统</td>
                      <td className="p-4 text-gray-400">Ubuntu 24.04 LTS</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">Docker</td>
                      <td className="p-4 text-gray-400">26.1</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">成本</td>
                      <td className="p-4 text-green-400">$4.49/月</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">扫描的链</td>
                      <td className="p-4 text-gray-400">TRON (TRC-20) + Ethereum + BNB Chain + SUI — 同时扫描</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                关键指标
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="glass-panel rounded-2xl p-6 text-center glow-blue">
                  <Clock className="w-6 h-6 text-brand-blue mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-brand-blue">&lt;500ms</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">支付检测延迟（TRON）</div>
                </div>
                <div className="glass-panel rounded-2xl p-6 text-center glow-cyan">
                  <Database className="w-6 h-6 text-brand-cyan mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-brand-cyan">~120 MB</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">内存占用（全部链）</div>
                </div>
                <div className="glass-panel rounded-2xl p-6 text-center glow-purple">
                  <Activity className="w-6 h-6 text-brand-purple mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-brand-purple">10,000+</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">并发发票容量</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                1. 支付检测延迟
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                这是支付网关最重要的指标：从客户发送交易到网关触发确认 webhook 之间经过多少时间。
                我们在 7 天内用 5,000 笔测试交易测量了所有支持链的延迟。
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5 mb-4">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">链</th>
                      <th className="p-4 text-gray-400 font-medium">p50 延迟</th>
                      <th className="p-4 text-gray-400 font-medium">p95 延迟</th>
                      <th className="p-4 text-gray-400 font-medium">p99 延迟</th>
                      <th className="p-4 text-gray-400 font-medium">区块确认阈值</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-blue font-medium">TRON</td>
                      <td className="p-4 text-gray-400">210ms</td>
                      <td className="p-4 text-gray-400">480ms</td>
                      <td className="p-4 text-gray-400">820ms</td>
                      <td className="p-4 text-gray-400">19 块（约 57s）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-medium">Ethereum</td>
                      <td className="p-4 text-gray-400">340ms</td>
                      <td className="p-4 text-gray-400">890ms</td>
                      <td className="p-4 text-gray-400">1.4s</td>
                      <td className="p-4 text-gray-400">12 块（约 2.5min）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-cyan font-medium">BNB Chain</td>
                      <td className="p-4 text-gray-400">180ms</td>
                      <td className="p-4 text-gray-400">410ms</td>
                      <td className="p-4 text-gray-400">720ms</td>
                      <td className="p-4 text-gray-400">15 块（约 45s）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-brand-purple font-medium">SUI</td>
                      <td className="p-4 text-gray-400">95ms</td>
                      <td className="p-4 text-gray-400">280ms</td>
                      <td className="p-4 text-gray-400">510ms</td>
                      <td className="p-4 text-gray-400">即时（0 块）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                注："检测"测量的是从区块包含到 webhook 分发的时间，而非区块确认时间。
                确认时间（等待 N 个区块）为每条链增加了可预测的延迟，并可在部署时配置。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                2. 资源消耗
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                我们在三种场景下测量了 CPU 和内存：空闲（仅扫描）、峰值负载（1,000 并发支付）、
                突发（包含 50+ 相关交易的区块触发 webhook 分发风暴）。
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5 mb-4">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">场景</th>
                      <th className="p-4 text-gray-400 font-medium">内存</th>
                      <th className="p-4 text-gray-400 font-medium">CPU（每条链）</th>
                      <th className="p-4 text-gray-400 font-medium">Docker 镜像</th>
                      <th className="p-4 text-gray-400 font-medium">磁盘 I/O</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">空闲（4 条链）</td>
                      <td className="p-4 text-gray-400">~120 MB</td>
                      <td className="p-4 text-gray-400">&lt;1% 每条</td>
                      <td className="p-4 text-gray-400">&lt;40 MB</td>
                      <td className="p-4 text-gray-400">可忽略</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">峰值（1,000 笔交易）</td>
                      <td className="p-4 text-gray-400">~280 MB</td>
                      <td className="p-4 text-gray-400">~15% 总计</td>
                      <td className="p-4 text-gray-400">&lt;40 MB</td>
                      <td className="p-4 text-gray-400">~2 MB/s（SQLite 写入）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">突发（webhook 风暴）</td>
                      <td className="p-4 text-gray-400">~350 MB</td>
                      <td className="p-4 text-gray-400">~40% 总计（短暂）</td>
                      <td className="p-4 text-gray-400">&lt;40 MB</td>
                      <td className="p-4 text-gray-400">~8 MB/s（突发）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-xl bg-cyan-400/5 border border-cyan-400/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">关键结论：</strong> 即使在突发负载下，XPay Labs 在廉价 VPS 上的
                内存使用也不超过 400 MB，CPU 使用低于单核的 50%。这为同一台机器上的应用程序、
                数据库和反向代理留下了充足的余量。
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                3. Webhook 交付可靠性
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                Webhook 是支付自动化的核心。如果 webhook 丢失，订单将无法完成。
                我们使用 50,000 次交付测试了 XPay Labs 的 webhook 分发系统。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="glass-panel rounded-2xl p-5 text-center">
                  <div className="text-xl font-display font-bold text-green-400">99.7%</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">交付成功率</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 text-center">
                  <div className="text-xl font-display font-bold text-brand-cyan">&lt;200ms</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">p50 交付时间</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 text-center">
                  <div className="text-xl font-display font-bold text-brand-blue">3</div>
                  <div className="text-xs text-gray-500 font-sans mt-1">重试次数（10s、60s、300s）</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                0.3% 的失败完全来自目标服务器返回非 2xx 状态码（502、503）。
                经过 3 次指数退避重试后，交付成功率达到
                <strong className="text-gray-300"> 99.97%</strong>。建议在端上实现死信队列，
                以应对服务器长时间宕机的罕见情况。
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mt-12 mb-4">
                4. 与托管方案对比
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base mb-4">
                XPay Labs 与托管网关的性能对比如何？虽然我们无法对 BitPay 内部基础设施做基准测试，
                但可以从商户角度比较可观察的指标。
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left text-sm font-sans">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8">
                      <th className="p-4 text-gray-400 font-medium">指标</th>
                      <th className="p-4 text-orange-400 font-medium">BitPay</th>
                      <th className="p-4 text-blue-400 font-medium">Coinbase Commerce</th>
                      <th className="p-4 text-brand-cyan font-medium">XPay Labs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">检测延迟</td>
                      <td className="p-4 text-gray-400">~30s–2min</td>
                      <td className="p-4 text-gray-400">~10s–1min</td>
                      <td className="p-4 text-green-400">&lt;500ms</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">API 响应（p95）</td>
                      <td className="p-4 text-gray-400">~200–500ms</td>
                      <td className="p-4 text-gray-400">~100–300ms</td>
                      <td className="p-4 text-green-400">&lt;50ms（本地网络）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">结算速度</td>
                      <td className="p-4 text-gray-400">T+1 到 T+3 天</td>
                      <td className="p-4 text-gray-400">T+1 天</td>
                      <td className="p-4 text-green-400">即时（链上）</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-gray-300">平台运行时间 SLA</td>
                      <td className="p-4 text-gray-400">99.9%（SaaS）</td>
                      <td className="p-4 text-gray-400">99.9%（SaaS）</td>
                      <td className="p-4 text-green-400">你的运行时间 = 你的控制力</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-16">
              <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-gray-300">方法论：</strong> 所有 XPay Labs 基准测试在 Hetzner CX22
                （2 vCPU, 4 GB RAM, 40 GB NVMe, Ubuntu 24.04, Docker 26.1）上运行。
                支付检测延迟从区块包含时间（通过 RPC 追踪）到 webhook POST 完成测量。
                CPU 通过 docker stats 和 /proc/stat 测量。内存通过 JVM Runtime.totalMemory() - freeMemory() 测量。
                交易量使用网关的负载测试工具模拟，该工具生成 10-1,000 个并发发票创建和测试网上的匹配链上交易。
                完整原始数据可在 <Link href="https://github.com/xpaylabs" className="text-brand-cyan underline underline-offset-2">github.com/xpaylabs</Link> 获取。
              </div>
            </section>

            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-cyan text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  运行你自己的基准测试
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  不要只听我们说。在 $5 VPS 上部署 XPay Labs，自己运行基准测试套件。
                  网关包含内置 Prometheus 指标端点，负载测试工具是开源的。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/docs"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>部署并测试</span>
                  </Link>
                  <Link
                    href="/zh/blog"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>更多文章</span>
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
