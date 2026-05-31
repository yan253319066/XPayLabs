import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Server, Shield, Zap, GitBranch, FileCode, Container, Key, Gauge, Layers } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';

export const metadata: Metadata = {
  title: '10 Engineering Decisions Behind Building a Self-Hosted Crypto Payment Gateway | XPay Labs',
  description: 'The technical decisions that shaped XPay Labs: why we chose Distroless Java over .NET, REST over GraphQL, HMAC webhooks over IPN, and HD wallets over per-merchant addresses. Lessons from building production payment infrastructure.',
  keywords: ['crypto payment gateway engineering', 'payment gateway architecture', 'self-hosted payment infrastructure', 'engineering decisions crypto', 'payment gateway tech stack', 'Distroless Java crypto', 'HD wallet payment gateway', 'HMAC webhook security'],
  alternates: {
    canonical: 'https://www.xpaylabs.com/blog/10-engineering-decisions',
    languages: {
      'x-default': 'https://www.xpaylabs.com/blog/10-engineering-decisions',
      'en-US': 'https://www.xpaylabs.com/blog/10-engineering-decisions',
    },
  },
  openGraph: {
    title: '10 Engineering Decisions Behind Building a Self-Hosted Crypto Payment Gateway',
    description: 'From Distroless Java to HD wallet derivation — the architecture choices that make XPay Labs fast, secure, and resource-efficient.',
    url: 'https://www.xpaylabs.com/blog/10-engineering-decisions',
    type: 'article',
  },
  twitter: {
    title: '10 Engineering Decisions Behind Building a Self-Hosted Crypto Payment Gateway',
    description: 'From Distroless Java to HD wallet derivation — the architecture choices that make XPay Labs fast, secure, and resource-efficient.',
    card: 'summary_large_image',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '10 Engineering Decisions Behind Building a Self-Hosted Crypto Payment Gateway',
  description: 'The technical decisions that shaped XPay Labs — from language runtime to wallet architecture.',
  author: { '@type': 'Organization', name: 'XPay Labs' },
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
};

const decisions = [
  {
    icon: <Container className="w-5 h-5 text-brand-blue" />,
    title: 'Distroless Java Over .NET or Go',
    summary: 'We chose a Distroless Java runtime for the gateway core. The result: a <40 MB Docker image vs ~800 MB for BTCPay Server (.NET) or ~200 MB for a typical Go binary with CGO dependencies.',
    body: 'Java gets a bad reputation for being heavy, but modern Java (21+) with Project Loom, virtual threads, and the Distroless base image flips the script. Our production image is smaller than most Alpine-based Go binaries because we strip everything — no package manager, no shell, no curl. Just the JVM, our bytecode, and the dependencies. The virtual thread model handles 10,000+ concurrent invoice scans without breaking a sweat, and the JIT compiler optimizes hot paths (like transaction signature verification) to near-native speed after warmup. We lose about 100ms on cold start compared to a native binary, but the gateway runs 24/7, so warmup happens once.',
  },
  {
    icon: <Key className="w-5 h-5 text-brand-cyan" />,
    title: 'BIP-39 HD Wallets Over Per-Merchant Address Pools',
    summary: 'Each XPay Labs node generates an unlimited number of deterministic addresses from a single BIP-39 seed. No address reuse, no address pool management, no central database of private keys.',
    body: 'BitPay assigns each merchant a static wallet address. Customers send payments there, and BitPay matches incoming transactions to invoices internally. This creates privacy leaks (everyone sees the same address on-chain) and reconciliation headaches. We chose BIP-39 hierarchical deterministic (HD) wallet derivation: each invoice gets a unique address derived from the master seed + invoice ID. The gateway scans all derived addresses on-chain. No address pool to manage, no private key database to leak, and each customer gets a fresh address they alone know. The derivation is pure computation — zero storage cost per invoice.',
  },
  {
    icon: <Shield className="w-5 h-5 text-brand-purple" />,
    title: 'HMAC-SHA256 Webhooks Over IPN Callbacks',
    summary: 'BitPay uses IPN (Instant Payment Notification) with shared secrets sent in plaintext. We use HMAC-SHA256 signed payloads with per-webhook secrets and a 5-minute timestamp window.',
    body: 'IPN works, but it is a dated pattern: BitPay sends a POST to your callback URL with a transaction ID, and you have to call back to BitPay to verify it. This adds latency and a依赖 on BitPay availability. Our approach: every webhook payload carries an HMAC-SHA256 signature in the X-Signature header. Your server recomputes the HMAC with your secret and compares. If it matches, the payload is authentic — no round-trip verification needed. We also include a Unix timestamp and reject signatures older than 5 minutes (prevents replay attacks). The webhook body contains the full payment context (amount, chain, tx_id, confirmations), so your server can process it immediately without additional API calls.',
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-blue" />,
    title: 'Event-Driven Block Scanning Over Polling',
    summary: 'Instead of polling RPC providers on an interval, the gateway subscribes to real-time events via WebSocket (EVM) and gRPC streams (TRON, SUI). Payment detection drops from seconds to milliseconds.',
    body: 'Polling-based architectures query the blockchain every N seconds. If N=5, detection latency averages 2.5s. If N=30, it averages 15s. We went event-driven: for EVM chains, we subscribe to newHeads via WebSocket and filter logs for our tracked addresses. For TRON, we use the gRPC event streaming endpoint. For SUI, we subscribe to transaction effects. New blocks trigger immediate scanning for relevant transactions. The result: sub-second payment detection on all chains with less CPU usage than polling, because the gateway only wakes when there is actually new data. On a Hetzner CX22, scanning TRON + ETH + BNB + SUI simultaneously uses under 1% CPU at idle.',
  },
  {
    icon: <GitBranch className="w-5 h-5 text-brand-cyan" />,
    title: 'Multi-Chain Normalization Layer',
    summary: 'Every blockchain has a different transaction model, address format, and confirmation rule. We built an abstraction layer that presents a unified payment event regardless of chain.',
    body: 'TRON uses TRC-20 events with 6-decimal precision and 19-block finality. EVM chains use ERC-20 Transfer logs with 18-decimal precision and 12-block finality. SUI uses Move objects with immediate finality. Without normalization, integrations would need chain-specific code. Our abstraction layer maps all three to a unified PaymentEvent: {amount, currency, chain, tx_id, from, to, confirmations, status}. The integration code on your server handles one event structure regardless of which chain the customer used. New chains are added by implementing a ChainScanner interface — typically 200-400 lines of code per chain.',
  },
  {
    icon: <Gauge className="w-5 h-5 text-brand-purple" />,
    title: 'In-Memory Invoice Index Over Database',
    summary: 'Active invoices live in an in-memory B-tree index, not a database. This is why scanning 10,000+ concurrent invoices per node costs virtually zero latency.',
    body: 'A common approach is "store invoice in Postgres, query by address." For a payment gateway scanning thousands of addresses per block, this becomes a bottleneck fast. We keep all active (unexpired, unpaid) invoices in an in-memory B-tree indexed by deposit address. The block scanner does a single in-memory lookup per transaction — O(log n), measured at under 50 microseconds even at 10,000 invoices. Persistence to SQLite happens asynchronously for crash recovery. When the node restarts, it loads pending invoices from SQLite back into memory. This design also means the entire active state fits in ~2 MB of RAM for 10,000 invoices.',
  },
  {
    icon: <FileCode className="w-5 h-5 text-brand-blue" />,
    title: 'RESTful API With Stripe Conventions',
    summary: 'We modeled our payment API after Stripe v2: idempotency keys, cursor-based pagination, expandable objects, and consistent error codes. Developers who know Stripe can integrate XPay Labs in under an hour.',
    body: 'Every payment processor reinvents API design. We chose to emulate Stripe because it is the API every developer already knows. POST /v1/payments creates an invoice. GET /v1/payments/pay_xxx retrieves it. Idempotency-Key headers prevent double charges. Expandable response objects reduce N+1 queries. Cursor-based pagination scales without offset drift. Error responses follow RFC 7807 Problem Details. The result: the average integration takes 45 minutes for a developer who has used Stripe before. Compared to BitPay\'s IPN flow or BTCPay Server\'s Greenfield API, the learning curve is dramatically shorter.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
    title: 'Project Loom Virtual Threads Over Reactive Programming',
    summary: 'Java 21 virtual threads let us write blocking code (RPC calls, DB writes) without thread pool exhaustion. No reactive frameworks, no callback hell, no Mono/Flux learning curve.',
    body: 'Reactive programming (WebFlux, RxJava) is the traditional Java answer to high-concurrency I/O. It works, but it splits your codebase into two worlds: reactive and imperative. Virtual threads eliminate this split. Each incoming webhook, block scan, or API request runs on its own virtual thread. When the thread calls RPC.getBlock() or db.save(), the JVM parks it and resumes another — automatically. The code reads as straight-line synchronous Java. No CompletableFuture chains, no .subscribe() callbacks, no debugging stack traces that span 20 lambdas. For a payment gateway where correctness is critical, readable code is a security feature.',
  },
  {
    icon: <Layers className="w-5 h-5 text-brand-purple" />,
    title: 'Configurable Confirmation Strategy Per Chain',
    summary: 'Each chain has different finality guarantees. Rather than a one-size-fits-all approach, we let operators configure confirmation thresholds per chain — with sane defaults derived from real reorg data.',
    body: 'A confirmed Bitcoin transaction might still be reversed by a deep reorg. TRON and EVM chains rarely reorg beyond a few blocks. SUI has instant finality. We looked at historical reorg data for each chain and set conservative defaults: 19 blocks for TRON (~57 seconds), 12 for EVM chains (~2.5 minutes on ETH, ~24 seconds on Polygon), and immediate for SUI. Operators can override these — lower for faster detection at the cost of reorg risk, higher for bulletproof finality. We also expose a reorg-handling mode: on detecting a block reorganization, the gateway re-scans affected blocks and fires a payment.reorged event so your server can re-verify affected invoices.',
  },
  {
    icon: <Server className="w-5 h-5 text-brand-blue" />,
    title: 'Single Binary Deployment Over Microservices',
    summary: 'XPay Labs ships as one Docker container that handles API serving, block scanning, webhook dispatch, and admin — not a Kubernetes cluster. Deployment is docker compose up.',
    body: 'Microservices are great for organizations with dedicated DevOps teams. For a self-hosted gateway meant to run on a single VPS, they are overhead. We ship everything in one binary: REST API server, block scanner engine, webhook dispatcher, admin CLI, and Prometheus metrics exporter. The process model uses the JVM\'s built-in thread isolation: virtual threads for API and webhook handling, carrier threads for CPU-intensive signature verification. Resource contention is managed by a shared thread pool with configurable limits. If you need to scale, you run multiple containers behind a load balancer. But for 95% of merchants, a single CX22 handles the full workload with resources to spare.',
  },
];

export default function EngineeringDecisionsPage() {
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
                <span>Engineering</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                10 Engineering Decisions Behind Building a Self-Hosted Crypto Payment Gateway
              </h1>
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 font-mono">
                <span>May 31, 2026</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>12 min read</span>
              </div>
              <p className="mt-6 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
                Every engineering decision in XPay Labs was a tradeoff. Here are the 10 choices that most
                affected our architecture — why we made them, what we ruled out, and how they impact your
                deployment. These lessons apply whether you use XPay Labs or build your own payment infrastructure.
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

            <section className="mb-16">
              <div className="glass-panel rounded-2xl p-8 sm:p-12 glow-blue text-center">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">
                  Built Different. Deploy in Minutes.
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mb-8">
                  XPay Labs packs all 10 engineering decisions into a single Docker container.
                  Deploy on your own VPS and see the difference engineering discipline makes.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/docs"
                    className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-brand-blue/20"
                  >
                    <Server className="w-4 h-4" />
                    <span>Deploy Your Gateway</span>
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center space-x-2 glass-panel hover:bg-white/5 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <span>More Articles</span>
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
