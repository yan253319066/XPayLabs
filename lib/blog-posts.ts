// 博客文章数据 —— 单一数据源，blog/page.tsx 和 RSS route 共用

export interface BlogPost {
  title: string;
  href: string;
  date: string;
  category: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Best Crypto Payment Infrastructure 2026 — Deploy Your Own Non-Custodial Multi-Chain Gateway',
    href: '/best-crypto-payment-infrastructure',
    date: 'June 2026',
    category: 'Featured',
    excerpt: 'The best crypto payment infrastructure is free, self-hosted, and multi-chain. Compare XPay Labs vs hosted gateways, see real deployment specs (11 Docker services, 22+ chains, unlimited merchants), and deploy in minutes.',
  },
  {
    title: 'Why We Call It xpay — The Story Behind the XPay Labs Brand',
    href: '/blog/why-xpay',
    date: 'June 2026',
    category: 'Brand',
    excerpt: 'The story behind why XPay Labs is commonly called xpay, how a shorthand became our brand alias, and why it matters for developers searching for self-hosted crypto payment infrastructure.',
  },
  {
    title: '10 Engineering Decisions Behind Building a Self-Hosted Crypto Payment Gateway',
    href: '/blog/10-engineering-decisions',
    date: 'May 2026',
    category: 'Engineering',
    excerpt: 'From Distroless Java to HD wallet derivation — the 10 architecture choices that make XPay Labs fast, secure, and resource-efficient. Lessons from building production payment infrastructure.',
  },
  {
    title: 'Self-Hosted vs Hosted Crypto Payments: The Real Cost Analysis (2026)',
    href: '/blog/self-hosted-vs-hosted-cost-analysis',
    date: 'May 2026',
    category: 'Analysis',
    excerpt: 'We crunched the numbers across 5 volume tiers: how much do BitPay, Coinbase Commerce, and NowPayments really cost vs self-hosted XPay Labs? The savings will surprise you.',
  },
  {
    title: 'Performance Benchmarks: Multi-Chain Gateway on a $5 VPS',
    href: '/blog/performance-benchmarks-multi-chain-gateway',
    date: 'May 2026',
    category: 'Engineering',
    excerpt: 'Real benchmarks on a $4.49/month Hetzner CX22 — payment detection latency, memory usage, CPU consumption, and concurrent invoice capacity across TRON, EVM, and SUI chains.',
  },
  {
    title: 'XPay Labs Review 2026: The Honest Take on Self-Hosted Crypto Payments',
    href: '/review',
    date: 'May 2026',
    category: 'Review',
    excerpt: 'An honest, comprehensive review of XPay Labs — features, pricing, pros and cons, security analysis, and competitive positioning. See if the self-hosted crypto payment gateway is right for your business.',
  },
  {
    title: 'Best Self-Hosted Crypto Payment Gateway 2026 — Top Solutions Compared',
    href: '/guides/best-self-hosted-crypto-payment-gateway',
    date: 'May 2026',
    category: 'Guide',
    excerpt: 'The definitive ranking of self-hosted crypto payment gateways in 2026. Compare XPay Labs, BTCPay Server, Coinbase Commerce, and others by fees, security, chain support, and developer experience.',
  },
  {
    title: "How to Accept USDT TRC20 Payments: A Developer's Guide",
    href: '/guides/how-to-accept-crypto-payments',
    date: 'May 2026',
    category: 'Guide',
    excerpt: 'A complete walkthrough for accepting USDT TRC20 payments using a self-hosted, non-custodial gateway. Covers Docker deployment, API integration, webhook handling, and multi-chain support for TRON, EVM, and SUI.',
  },
  {
    title: 'BitPay Alternative: Why Merchants Are Switching to Self-Hosted',
    href: '/alternatives/bitpay',
    date: 'May 2026',
    category: 'Alternative',
    excerpt: 'BitPay pioneered crypto payments, but its custodial model, 1% transaction fees, and limited chain support leave growing businesses wanting more. Here is why merchants are switching to self-hosted alternatives.',
  },
  {
    title: 'Coinbase Commerce Alternative: Take Control of Your Crypto Payments',
    href: '/alternatives/coinbase-commerce',
    date: 'May 2026',
    category: 'Alternative',
    excerpt: 'Coinbase Commerce’s merchant portal became inaccessible after March 31, 2026. Merchants need a self-hosted alternative that puts them in control of private keys, settlement timing, and supported chains.',
  },
  {
    title: 'NowPayments Alternative: Why Merchants Are Switching to Self-Hosted',
    href: '/alternatives/nowpayments',
    date: 'May 2026',
    category: 'Alternative',
    excerpt: 'NowPayments offers a hosted crypto payment gateway, but merchants pay for convenience through fees, custodial risk, and limited customization. Here is why the self-hosted model is gaining traction.',
  },
  {
    title: 'TRON TRC20 Payment Gateway: Self-Hosted USDT Payment Infrastructure',
    href: '/solutions/tron-payment-gateway',
    date: 'May 2026',
    category: 'Solution',
    excerpt: 'A deep dive into building a self-hosted USDT payment gateway on TRON. Covers TRC-20 token support, energy management, TronGrid integration, and HD wallet derivation for merchant payment processing.',
  },
  {
    title: 'XPay Labs (xpay) vs BTCPay Server: Self-Hosted Crypto Payment Gateways Compared (2026)',
    href: '/blog/xpay-labs-vs-btcpayserver',
    date: 'June 2026',
    category: 'Comparison',
    excerpt: 'A detailed head-to-head comparison of XPay Labs and BTCPay Server across chain support, pricing, security, developer experience, and more. Which self-hosted gateway wins in 2026?',
  },
  {
    title: 'BTCPay Server Alternative: Multi-Chain Stablecoin Payments',
    href: '/alternatives/btcpayserver',
    date: 'May 2026',
    category: 'Alternative',
    excerpt: 'BTCPay Server is the gold standard for self-hosted Bitcoin payments. But for merchants who need stablecoin support on TRON, EVM, and SUI, XPay Labs offers a modern multi-chain alternative.',
  },
  {
    title: 'EVM Payment Gateway: Accept USDC and USDT on 7+ Chains',
    href: '/solutions/evm-payment-gateway',
    date: 'May 2026',
    category: 'Solution',
    excerpt: 'How to deploy a self-hosted EVM payment gateway that accepts USDT and USDC on Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Avalanche, and Base — simultaneously, from one Docker container.',
  },
  {
    title: 'SUI Payment Gateway: Accept Crypto on the Sui Network',
    href: '/solutions/sui-payment-gateway',
    date: 'May 2026',
    category: 'Solution',
    excerpt: 'A guide to accepting SUI and USDC payments on the Sui Network using a self-hosted, non-custodial payment gateway. Sub-second finality, near-zero fees, and first-mover advantage.',
  },
];
