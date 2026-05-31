import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Server, Shield, Zap, GitBranch, FileCode, Container, Key, Gauge, Layers } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import JsonLd from '../../../../components/JsonLd';

export const metadata: Metadata = {
  title: '自托管加密货币支付网关的 10 个工程决策 | XPay Labs',
  description: '塑造 XPay Labs 的技术决策：为什么选择 Distroless Java 而非 .NET、REST 而非 GraphQL、HMAC webhook 而非 IPN、HD 钱包而非逐商户地址。构建生产级支付基础设施的经验之谈。',
  keywords: ['加密货币支付网关工程', '支付网关架构', '自托管支付基础设施', '工程决策', '支付网关技术栈', 'Distroless Java', 'HD 钱包支付网关', 'HMAC webhook 安全'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/blog/10-engineering-decisions',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/10-engineering-decisions',
      'en-US': 'https://www.xpaylabs.com/blog/10-engineering-decisions',
      'zh-CN': 'https://www.xpaylabs.com/zh/blog/10-engineering-decisions',
    },
  },
  openGraph: {
    title: '自托管加密货币支付网关的 10 个工程决策',
    description: '从 Distroless Java 到 HD 钱包派生 — 让 XPay Labs 更快、更安全、更高效的架构选择。',
    url: 'https://www.xpaylabs.com/zh/blog/10-engineering-decisions',
    type: 'article',
  },
  twitter: {
    title: '自托管加密货币支付网关的 10 个工程决策',
    description: '从 Distroless Java 到 HD 钱包派生 — 让 XPay Labs 更快、更安全、更高效的架构选择。',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '自托管加密货币支付网关的 10 个工程决策',
  description: '塑造 XPay Labs 的技术决策 — 从运行时到钱包架构。',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
};

const decisions = [
  {
    icon: <Container className="w-5 h-5 text-brand-blue" />,
    title: '选择 Distroless Java 而非 .NET 或 Go',
    summary: '我们为核心网关选择了 Distroless Java 运行时。结果：Docker 镜像 <40 MB，而 BTCPay Server (.NET) 约 800 MB，含 CGO 依赖的典型 Go 二进制文件也需约 200 MB。',
    body: 'Java 常被诟病"太重"，但现代 Java (21+) 结合 Project Loom 虚拟线程和 Distroless 基础镜像完全颠覆了这一刻板印象。我们的生产镜像比大多数基于 Alpine 的 Go 二进制文件还要小，因为我们剥离了一切——没有包管理器、没有 shell、没有 curl。只有 JVM、我们的字节码和依赖项。虚拟线程模型可以轻松处理 10,000+ 并发发票扫描，而 JIT 编译器在预热后将热路径（如交易签名验证）优化到接近原生速度。冷启动相比原生二进制损失约 100ms，但网关 24/7 运行，预热只发生一次。',
  },
  {
    icon: <Key className="w-5 h-5 text-brand-cyan" />,
    title: 'BIP-39 HD 钱包而非逐商户地址池',
    summary: '每个 XPay Labs 节点从单个 BIP-39 种子派生出无限数量的确定性地址。无地址复用、无地址池管理、无私钥集中数据库。',
    body: 'BitPay 为每个商户分配一个静态钱包地址。客户付款至该地址，BitPay 内部匹配入账交易到对应发票。这会造成隐私泄露（所有人都能在链上看到同一个地址）和对账难题。我们选择了 BIP-39 分层确定性 (HD) 钱包派生：每张发票从主种子 + 发票 ID 派生出一个唯一地址。网关在链上扫描所有派生地址。无需管理地址池，无私钥数据库可泄漏，每位客户获得一个只有他们知道的全新地址。派生过程纯计算——每张发票零存储成本。',
  },
  {
    icon: <Shield className="w-5 h-5 text-brand-purple" />,
    title: 'HMAC-SHA256 Webhook 而非 IPN 回调',
    summary: 'BitPay 使用 IPN（即时支付通知）以明文发送共享密钥。我们使用 HMAC-SHA256 签名载荷，每个 webhook 有独立密钥和 5 分钟时间戳窗口。',
    body: 'IPN 模式已显陈旧：BitPay 向你的回调 URL 发送 POST，附带交易 ID，你的服务器需回调 BitPay 验证。这增加了延迟，且依赖 BitPay 可用性。我们的方案：每个 webhook 载荷在 X-Signature 头中携带 HMAC-SHA256 签名。你的服务器用你的密钥重新计算 HMAC 并比对。匹配则载荷可信——无需往返验证。我们还附带 Unix 时间戳，拒绝超过 5 分钟的签名（防止重放攻击）。Webhook 体包含完整支付上下文（金额、链、交易 ID、确认数），你的服务器无需额外 API 调用即可立即处理。',
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-blue" />,
    title: '事件驱动区块扫描而非轮询',
    summary: '网关不按固定间隔轮询 RPC 提供商，而是通过 WebSocket（EVM）和 gRPC 流（TRON、SUI）订阅实时事件。支付检测从秒级降至毫秒级。',
    body: '基于轮询的架构每 N 秒查询一次区块链。若 N=5，检测延迟平均 2.5 秒；若 N=30，平均 15 秒。我们选择了事件驱动：对 EVM 链，通过 WebSocket 订阅 newHeads，过滤我们追踪地址的日志。对 TRON，使用 gRPC 事件流端点。对 SUI，订阅交易效果。新区块触发立即扫描相关交易。结果：所有链的支付检测都在亚秒级完成，且 CPU 消耗低于轮询——因为网关只在有新数据时唤醒。在 Hetzner CX22 上同时扫描 TRON + ETH + BNB + SUI，空闲时 CPU 使用率不到 1%。',
  },
  {
    icon: <GitBranch className="w-5 h-5 text-brand-cyan" />,
    title: '多链标准化抽象层',
    summary: '每条区块链都有不同的交易模型、地址格式和确认规则。我们构建了一个抽象层，无论使用哪条链，都呈现统一的支付事件。',
    body: 'TRON 使用 TRC-20 事件，6 位小数精度，19 块最终性。EVM 链使用 ERC-20 Transfer 日志，18 位小数精度，12 块最终性。SUI 使用立即最终性的 Move 对象。没有标准化，集成就需要针对不同链的特定代码。我们的抽象层将所有三条链映射为统一 PaymentEvent：{amount, currency, chain, tx_id, from, to, confirmations, status}。你服务器上的集成代码处理一种事件结构，不管客户用了哪条链。添加新链只需实现 ChainScanner 接口——每条链约 200-400 行代码。',
  },
  {
    icon: <Gauge className="w-5 h-5 text-brand-purple" />,
    title: '内存发票索引而非数据库',
    summary: '活动发票存放在内存 B 树索引中，而非数据库。这就是每个节点扫描 10,000+ 并发发票成本几乎为零延迟的原因。',
    body: '常见做法是"将发票存入 Postgres，按地址查询"。对每区块扫描数千个地址的支付网关来说，这很快会成为瓶颈。我们将所有活动（未过期、未支付）发票存放在以存款地址为索引的内存 B 树中。区块扫描器每笔交易只需一次内存查找——O(log n)，即使在 10,000 张发票下也仅需不到 50 微秒。持久化到 SQLite 异步进行，用于崩溃恢复。节点重启时，从 SQLite 将待处理发票加载回内存。这个设计还意味着 10,000 张发票的整个活动状态仅占用约 2 MB 内存。',
  },
  {
    icon: <FileCode className="w-5 h-5 text-brand-blue" />,
    title: '遵循 Stripe 惯例的 RESTful API',
    summary: '我们以 Stripe v2 为模型设计支付 API：幂等键、基于游标的分页、可展开对象、一致的错误码。熟悉 Stripe 的开发者可以在 1 小时内完成 XPay Labs 集成。',
    body: '每个支付处理器都重新设计 API。我们选择效仿 Stripe，因为这是每个开发者都已熟悉的 API。POST /v1/payments 创建发票。GET /v1/payments/pay_xxx 查询。Idempotency-Key 头防止重复扣款。可展开响应对象减少 N+1 查询。基于游标的分页无需偏移漂移即可扩展。错误响应遵循 RFC 7807 Problem Details。结果：曾使用过 Stripe 的开发者平均 45 分钟完成集成。相比 BitPay 的 IPN 流程或 BTCPay Server 的 Greenfield API，学习曲线大幅缩短。',
  },
  {
    icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
    title: 'Project Loom 虚拟线程而非响应式编程',
    summary: 'Java 21 虚拟线程让我们可以编写阻塞代码（RPC 调用、数据库写入）而无线程池耗尽之忧。无需响应式框架、无回调地狱、无学习曲线。',
    body: '响应式编程（WebFlux、RxJava）是 Java 应对高并发 I/O 的传统方案。它能工作，但将代码库分裂为两个世界：响应式和命令式。虚拟线程消除了这一分裂。每个传入的 webhook、区块扫描或 API 请求在自己的虚拟线程上运行。当线程调用 RPC.getBlock() 或 db.save() 时，JVM 将其挂起并自动恢复另一个线程。代码以直线式同步 Java 编写。无需 CompletableFuture 链、无需 .subscribe() 回调、无需跨越 20 个 lambda 的调试栈。对正确性至关重要的支付网关来说，可读代码就是安全特性。',
  },
  {
    icon: <Layers className="w-5 h-5 text-brand-purple" />,
    title: '每条链可配置的确认策略',
    summary: '每条链都有不同的最终性保证。我们没有一刀切，而是让运营商可为每条链配置确认阈值——基于真实重组数据提供合理的默认值。',
    body: '已确认的比特币交易仍可能被深度重组反转。TRON 和 EVM 链很少在几个区块后发生重组。SUI 具有即时最终性。我们参考了每条链的历史重组数据，设置了保守默认值：TRON 19 块（约 57 秒），EVM 链 12 块（以太坊约 2.5 分钟，Polygon 约 24 秒），SUI 即时。运营商可以覆盖这些设置——降低阈值可加快检测速度但承担重组风险，提高阈值则获得更可靠的最终性。我们还暴露了重组处理模式：检测到区块重组时，网关重新扫描受影响的块并触发 payment.reorged 事件，以便你的服务器重新验证受影响的发票。',
  },
  {
    icon: <Server className="w-5 h-5 text-brand-blue" />,
    title: '单一二进制部署而非微服务',
    summary: 'XPay Labs 以单个 Docker 容器交付，负责 API 服务、区块扫描、webhook 分发和管理——无需 Kubernetes 集群。部署只需 docker compose up。',
    body: '微服务适合拥有专职 DevOps 团队的组织。对运行在单台 VPS 上的自托管网关来说，微服务是过度设计。我们将所有功能打包到一个二进制文件中：REST API 服务器、区块扫描引擎、webhook 分发器、管理 CLI 和 Prometheus 指标导出器。进程模型利用 JVM 内置的线程隔离：API 和 webhook 处理使用虚拟线程，CPU 密集的签名验证使用载体线程。资源争用通过带可配置限制的共享线程池管理。如需扩展，可在负载均衡器后运行多个容器。但对 95% 的商户来说，单台 CX22 即可轻松处理全部工作负载。',
  },
];

export default function ZhEngineeringDecisionsPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="relative min-h-screen bg-[#040612] text-gray-200 overflow-hidden">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <section className="mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider font-mono mb-6">
                <Cpu className="w-3.5 h-3.5" />
                <span>工程实践</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                自托管加密货币支付网关的 10 个工程决策
              </h1>
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 font-mono">
                <span>2026 年 5 月 31 日</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>阅读时间约 12 分钟</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                XPay Labs 的每个工程决策都是一种权衡。以下是对架构影响最大的 10 个选择——为什么做出这些选择、我们排除了什么、以及它们如何影响你的部署。这些经验适用于使用 XPay Labs 或构建自己的支付基础设施的任何场景。
              </p>
            </section>

            {decisions.map((d, i) => (
              <section key={i} className="mb-12">
                <div className="glass-panel rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/8 flex items-center justify-center shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-600 font-mono tracking-widest">#{i + 1}</span>
                      <h2 className="text-lg font-display font-medium text-white">{d.title}</h2>
                    </div>
                  </div>
                  <div className="mt-3 mb-4 p-3 rounded-lg bg-brand-cyan/5 border border-brand-cyan/10 text-sm text-brand-cyan font-sans leading-relaxed">
                    {d.summary}
                  </div>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed whitespace-pre-line">
                    {d.body}
                  </p>
                </div>
              </section>
            ))}

            <BlogNavigation
              prev={null}
              next={{
                href: '/zh/blog/self-hosted-vs-hosted-cost-analysis',
                title: '自托管 vs 托管加密货币支付：真实成本分析（2026）',
              }}
              prevLabel="上一篇"
              nextLabel="下一篇"
            />
            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  设计不同。数分钟内完成部署。
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  XPay Labs 将全部 10 个工程决策打包进一个 Docker 容器。在你的 VPS 上部署，亲身体验工程纪律带来的差异。
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
