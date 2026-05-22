import { TranslationSet } from '../translations';

export const en: TranslationSet = {
  meta: {
    title: "XPay Labs — Self-hosted Crypto Payment Infrastructure",
    description: "Deploy your own private, self-hosted crypto payment gateway. Supporting TRON (TRC20), all EVM networks, stablecoins, and SUI. Secure, non-custodial payment infrastructure for developers.",
    keywords: "crypto payment infrastructure, self-hosted crypto payment system, stablecoin payments, TRC20 payment API, EVM payment infrastructure, SUI payment API, developer payment infrastructure"
  },
  navigation: {
    features: "Features",
    chains: "Multi-Chain",
    architecture: "Architecture",
    api: "API",
    devXp: "Developer Experience",
    faq: "FAQ",
    docs: "Documentation",
    cta: "Deploy Gateways"
  },
  hero: {
    title: "Deploy Your Own Crypto Payment Infrastructure",
    subtitle: "Private, containerized and self-hosted payment infrastructure supporting TRON, all EVM chains, and SUI. Fully non-custodial, white-label merchant gateways engineered for optimal developer power.",
    ctaDeploy: "Deploy Your System",
    ctaDocs: "Contact Us",
    badge: "V1.0 — DEPLOY INSTANTLY"
  },
  dashboardMockup: {
    headline: "LIVE GATEWAY MONITOR",
    merchantWallet: "Merchant Nodes",
    chainSelector: "Network Gateway",
    walletAddress: "Gateway Deposit Address",
    txHistory: "Recent Transaction Mempool",
    apiPreview: "API Response Payload",
    webhookSystem: "Webhook Diagnostics",
    triggerWebhook: "Direct Webhook Simulation",
    webhookListening: "Connection open. Awaiting incoming blockchain transactions...",
    webhookFired: "Webhook trigger dispatched to",
    webhookSuccess: "VERIFIED"
  },
  openSource: {
    badge: "NON-CUSTODIAL MANIFESTO",
    title: "Your Infrastructure. Your Wallets. Your Control.",
    subtitle: "XPay Labs returns cryptographic sovereignty to the merchant. By running a self-hosted checkout cluster, your assets route directly to address structures owned and generated solely by your node.",
    point1Title: "100% Non-Custodial",
    point1Text: "All private keys, mnemonic generation seeds, and transaction signing blocks execute locally within your isolated containers.",
    point2Title: "White-Label Freedom",
    point2Text: "Theme, branding, localized translation sequences, and notification layouts belong completely to your interface.",
    point3Title: "Flexible Unified Deployment",
    point3Text: "Run the JVM core as a secure Docker container, and deploy the entire checkout interface and indexers in one click via Docker Compose.",
    point4Title: "Zero Gateway Fees",
    point4Text: "Eliminate standard 1-2% middleman network fees. Pay strictly on-chain gas costs for network transactions."
  },
  features: {
    title: "Modern payment infrastructure. Built for scale.",
    subtitle: "Engineered for maximum resilience, sub-second mempool responsiveness, and complete non-custodial security.",
    items: [
      {
        title: "Multi-chain Payments",
        description: "Engineered to capture and settle payment signals over TRON (TRC20 USDT), Ethereum (ERC20), BNB Chain, Polygon, and SUI natively."
      },
      {
        title: "Developer APIs",
        description: "Robust JSON-RPC interfaces and highly typed developer REST structures designed with clear Stripe-like developer workflows."
      },
      {
        title: "Self-hosted Settlement",
        description: "Instantaneous batch settlement sweeps or real-time hot-to-cold wallet routing according to customized automation logic."
      },
      {
        title: "White-label Architecture",
        description: "Easily integrate our pre-assembled modern React checkout widgets or brand the absolute entirety of your client payment flows."
      },
      {
        title: "Real-time Monitoring",
        description: "High-performance blockchain indexers track chain blocks concurrently to intercept incoming payments in seconds."
      },
      {
        title: "Webhook Events",
        description: "Fail-proof queue-backed webhooks that retry automatically on endpoint errors, supporting cryptographically HMAC-signed payloads."
      }
    ]
  },
  multichain: {
    badge: "EXPANSIVE INTEROPERABILITY",
    title: "Native Multi-Chain Routing Engine",
    subtitle: "Consolidate TRON, SUI, and EVM ledger scanner processes into a single unified event channel.",
    unification: "Unified Wallet Management",
    nativeStablecoins: "Stablecoin Tracking Suite (USDT, USDC, custom tokens)",
    gasOptimization: "Gas-Optimized Consolidation Sweeps",
    instantMempool: "Reactive Blockchain Indexers"
  },
  architecture: {
    badge: "INFRASTRUCTURE TOPOLOGY",
    title: "Resilient Self-Hosted Flow",
    subtitle: "How request and event signals relay securely across isolated nodes in your private deployment.",
    flow: {
      merchant: "Merchant App/Server",
      merchantDesc: "Initiates payment creation workflows and exposes authenticated web endpoints using private API tokens.",
      core: "XPay Core Container",
      coreDesc: "Coordinates invoice timers, generates unique single-use deposit keys, and validates metadata scopes.",
      scanner: "Blockchain Scanners",
      scannerDesc: "Continuous high-velocity scanning loops looking for exact blockchain transactions matching active invoice amounts.",
      wallets: "Wallet Infrastructure",
      walletsDesc: "Secured local keyring module managing localized on-the-fly ephemeral address trees without key leaks.",
      webhook: "Webhook Service",
      webhookDesc: "Constructs cryptographically HMAC-signed event packages and guarantees deliverability to client servers."
    }
  },
  apiShowcase: {
    badge: "DEVELOPER-FIRST TOOLKIT",
    title: "Pristine Stripe-Inspired API",
    subtitle: "We prioritize developer layout and API ergonomics. Execute standard REST commands to control checkout states seamlessly.",
    tabs: {
      curl: "Create Payment (cURL)",
      json: "Payload Schema",
      node: "SDK Integration (Node.js)"
    }
  },
  devXp: {
    badge: "INTERACTIVE EXPERIENCE PLAYGROUND",
    title: "Full Payment Lifecycle in 60 Seconds",
    subtitle: "Step into the driver's seat. Interact with the system controls below to see how our microservices function in real time.",
    steps: [
      {
        num: "01",
        title: "Initialize Secure Auth",
        desc: "Provision dedicated server API keys used to sign transactional JSON requests securely."
      },
      {
        num: "02",
        title: "Generate Invoice Details",
        desc: "Issue standard create payment payloads containing billing metrics, currency specifications, and callback metadata."
      },
      {
        num: "03",
        title: "Await Webhook Event",
        desc: "Our automated blockchain indexes detect incoming deposits and broadcast certified JSON structures instantly."
      },
      {
        num: "04",
        title: "Consolidate Cold Wallet",
        desc: "The node triggers immediate automated settlement sweeps into cold storage address destinations."
      }
    ],
    generator: {
      title: "API Keys Provisioning",
      btn: "Generate Secret Key",
      activeKey: "Active Secret Key State",
      ready: "Key authenticated. Ready to authorize gateway interactions."
    },
    payment: {
      title: "Create Checkout Session",
      amount: "Checkout Total",
      currency: "Stablecoin Asset",
      selectChain: "Blockchain Channel",
      btn: "Generate Payment Address",
      hash: "Active Invoice Hash"
    },
    webhookSim: {
      title: "Incoming Webhook Dispatcher",
      payload: "Decrypted Webhook Structure",
      received: "Webhook response validated successfully, code 200 returned!"
    },
    settleSim: {
      title: "Sovereign Settlement Engine",
      funds: "Balance Sweep Target",
      dest: "Enterprise Vault Anchor",
      txid: "Sweeper Transaction Hash",
      settled: "Sovereign fund Sweep sequence finalized."
    }
  },
  useCases: {
    badge: "MERCHANT IMPLEMENTATIONS",
    title: "Built for Every Digital Business Scenario",
    subtitle: "Powering frictionless checkouts and sovereign funds custody across various domains.",
    items: [
      {
        title: "Global E-Commerce Storefronts",
        description: "Let clients from every continent pay with TRC20, BEP20 or native ERC20 stablecoins. Experience prompt dispatch triggered by our high-performance mempool scanner.",
        advantage: "Sub-5 second payment confirmation notifications."
      },
      {
        title: "SaaS Platforms & Metered APIs",
        description: "Integrate fully self-hosted crypto payment structures directly alongside recurrent subscription models. Keep billing clean with custom invoice durations & Webhooks.",
        advantage: "Eliminate high gateway middleman cost structures."
      },
      {
        title: "Decentralized Independent Wallets",
        description: "Easily integrate non-custodial address trees to handle global crowdfunding, community projects, or anonymous tipping endpoints without registration walls.",
        advantage: "Preserve customer financial anonymity."
      },
      {
        title: "Custom Crypto Checkout Widget",
        description: "Integrate beautiful UI overlays using customizable pre-themed checkout widgets matching high-end design systems.",
        advantage: "Ready to deploy instantly alongside the main Docker Compose package."
      }
    ]
  },
  faq: {
    badge: "DEEP INTELLIGENCE BASE",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about setting up and running your high-performance self-hosted cryptopayment nodes.",
    items: [
      {
        q: "What is XPay Labs?",
        a: "XPay Labs is an open-source, fully modular, self-hosted crypto payment infrastructure. It enables companies and developers to scan, accept, and settle stablecoin payments natively on TRON, EVM chains, and SUI without relying on a custodial third-party or paying processing commission."
      },
      {
        q: "Which blockchains and tokens are supported?",
        a: "We natively index and scan TRON (TRC20, e.g., USDT), Ethereum and all EVM-compatible chains (BSC, Polygon, Optimism, Arbitrum, Avalanche using ERC20 stablecoins), and SUI. Custom tokens on these networks can easily be tracked by declaring their smart contract addresses in the JSON node configuration."
      },
      {
        q: "Is XPay Labs truly 100% self-hosted and non-custodial?",
        a: "Absolutely. XPay Labs does not store customer keys on multi-tenant cloud storage. The merchant owns the deployment containers. The software generates and accesses deposit address pools fully on your private system memory, ensuring strict non-custodial operation."
      },
      {
        q: "How does the webhook event system guarantee arrival?",
        a: "Our Webhook container uses a robust retry queue mechanism. If your application endpoint returns an error, the queue automatically attempts retries with exponential backoff schedules. Payloads are signed with unique SHA256 HMAC headers so you can verify their sender identity."
      },
      {
        q: "Is there a developer SDK or API?",
        a: "Yes. XPay Labs acts as a local service offering a comprehensive REST style API mirroring standard payment industry designs. Code snippets in modern languages (NodeJS, cURL, Python, Go) are fully written in our core documentation set."
      },
      {
        q: "What are the infrastructure requirements for hosting XPay?",
        a: "Since the backend coordinates multiple core services including multi-chain live indexers, merchant nodes, gateway monitors, secure cryptographic keyrings, and queue-backed webhook systems, the runtime requirements are rigorous for enterprise production stability. To ensure JVM efficiency and uninterrupted throughput, a minimum profile of 8GB RAM / 4 vCPU is highly recommended. For high-concurrency settings or clustered multi-node operations, a recommended specification of 16GB RAM / 8 vCPU (or higher) should be allocated. With our provided Docker Compose templates, you can easily deploy all microservices, databases, indexing components, and the frontend collection in a single, unified command."
      }
    ]
  },
  cta: {
    title: "Own Your Payment Gateway Today",
    subtitle: "Stop bleeding profit to custodial intermediaries. Deploy the secure, private self-hosted crypto payment gateway on your own servers in minutes.",
    btnDeploy: "Deploy on VPS / Docker Core"
  },
  footer: {
    slogan: "Sovereign, private, developer-first crypto payment infrastructure.",
    product: "SYSTEM CORE",
    developers: "DEVELOPERS",
    links: "INTEGRATIONS",
    allRights: "All rights reserved. Protected under XPay Enterprise License.",
    disclaimer: "Non-custodial infrastructure software. Merchant remains strictly responsible for local legislative compliance, key protection, and node security."
  }
};
