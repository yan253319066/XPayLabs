import { TranslationSet } from '../translations';

export const en: TranslationSet = {
  meta: {
    title: "XPay Labs (xpay) — Self-hosted Crypto Payment Infrastructure",
    description: "XPay Labs (xpay) — self-hosted crypto payment infrastructure. Deploy your own private, non-custodial crypto payment gateway. Supporting TRON (TRC20), all EVM networks, stablecoins, and SUI. Multi-tenant — host unlimited merchants and collect fees.",
    keywords: "xpay, XPay Labs, self-hosted crypto payment infrastructure, crypto payment gateway, stablecoin payments, TRC20 payment API, EVM payment infrastructure, developer payment infrastructure"
  },
  navigation: {
    features: "Features",
    chains: "Multi-Chain",
    architecture: "Architecture",
    api: "API",
    devXp: "Developer Experience",
    faq: "FAQ",
    docs: "Documentation",
    cta: "Deploy Gateways",
    product: "Product",
    compare: "Compare",
    pricing: "Pricing",
    blog: "Blog"
  },
  hero: {
    title: "Self-Hosted Crypto Payment\nInfrastructure. Zero Fees.",
    subtitle: "XPay Labs (often called xpay) is a self-hosted crypto payment infrastructure. Private, containerized system supporting TRON, all EVM chains, and SUI. Fully non-custodial, white-label merchant gateways — engineered for optimal developer power. Multi-tenant by design — host unlimited merchants and earn from every transaction.",
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
      },
      {
        title: "x402 Protocol",
        description: "One-line USDC micropayments for AI agents and LLM APIs. No API key management. Pay per LLM call or API request."
      },
      {
        title: "Multi-Tenant Platform",
        description: "Host unlimited merchants on a single deployment. Isolated API credentials, independent configuration, and your own fee structure per merchant."
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
      },
      {
        title: "Payment Platform Operator",
        description: "Run your own crypto payment platform. Onboard multiple merchants, each with isolated wallets and API credentials. Set your own transaction fees and earn from every payment processed.",
        advantage: "Zero infrastructure fees — keep 100% of the revenue you generate."
      }
    ],
    advantage: "Advantage:"
  },
  heroStats: {
    gatewayFees: "Gateway Fees",
    mempoolScan: "Mempool Scan",
    nonCustodial: "Non-Custodial"
  },
  heroDashboard: {
    nodeActive: "NODE_ACTIVE",
    copyAddress: "Copy Address",
    dispatching: "Dispatching...",
    coreSecurity: "Core Security",
    nonCustodial: "Non-Custodial",
    privateKeys: "Private keys stay on your metal."
  },
  openSourceStats: {
    supportedEvmChains: "Supported EVM Chains",
    mempoolDetectionSpeed: "Mempool Detection Speed",
    gatewayTransactionFees: "Gateway Transaction Fees",
    annualSavingsVsBitpay: "Annual Savings vs BitPay"
  },
  featuresLabels: {
    gatewayCore: "Gateway Core",
    infraModuleReady: "INFRA MODULE READY"
  },
  apiShowcaseLabels: {
    copied: "Copied",
    copy: "Copy",
    sslSecured: "SSL SECURED TLS_AES_256_GCM_SHA384 CLIENT AUTHORIZATION",
    prodReady: "PROD READY API CLIENT"
  },
  devXpConsole: {
    consoleHeader: "XPAY CONSOLE V1.0_PROMPT",
    sandboxSimulator: "SANDBOX SIMULATOR",
    generatingSecureSigningNodes: "Generating secure signing nodes...",
    restartSandbox: "Restart Interactive Sandbox",
    triggerWebhook: "Trigger Paid Block Webhook",
    synthesizeVaultFundSweeps: "Synthesize Vault Fund Sweeps",
    vaultRootWallet: "Vault Root Wallet [Secure Multi-sig Anchor]",
    dockerSandboxEnvironment: "Docker Sandbox Environment",
    sandboxSdkDocument: "Sandbox SDK Document"
  },
  multiChainLabels: {
    tps: "LEOPARD TPS",
    blockTime: "BLOCK TIME"
  },
  footerLinks: {
    vsBitpay: "vs BitPay",
    vsCoinbaseCommerce: "vs Coinbase Commerce",
    vsOpenNode: "vs OpenNode",
    vsCoinGate: "vs CoinGate",
    vsNowPayments: "vs NowPayments",
    vsBtcpayserver: "vs BTCPay Server",
    restApiSpec: "REST API Spec",
    sandbox: "Sandbox",
    setupGuide: "Setup Guide",
    whatIsSelfHosted: "What is Self-Hosted?",
    tronGateway: "TRON Gateway",
    pricing: "Pricing",
    github: "GitHub",
    review: "XPay Labs (xpay) Review",
    bestSelfHostedGateway: "Best Self-Hosted Gateway"
  },
  faq: {
    badge: "DEEP INTELLIGENCE BASE",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about setting up and running your high-performance self-hosted cryptopayment nodes.",
    items: [
      {
        q: "What is xpay?",
        a: "xpay is the common shorthand for XPay Labs, a self-hosted, non-custodial crypto payment infrastructure. When people refer to xpay, they are talking about XPay Labs — the same Docker-based gateway that supports TRON, EVM chains, and SUI with zero transaction fees."
      },
      {
        q: "What is XPay Labs (xpay)?",
        a: "XPay Labs (often shortened to xpay) is a fully modular, self-hosted crypto payment infrastructure. It enables companies and developers to scan, accept, and settle stablecoin payments natively on TRON, EVM chains, and SUI without relying on a custodial third-party or paying processing commission."
      },
      {
        q: "Which blockchains and tokens are supported?",
        a: "We natively index and scan TRON (TRC20, e.g., USDT), Ethereum and all EVM-compatible chains (BSC, Polygon, Optimism, Arbitrum, Avalanche using ERC20 stablecoins), and SUI. Custom tokens on these networks can easily be tracked by declaring their smart contract addresses in the JSON node configuration."
      },
      {
        q: "Is XPay Labs truly 100% self-hosted and non-custodial?",
        a: "Absolutely. XPay Labs does not store customer keys on any cloud infrastructure. The merchant owns the deployment containers. The software generates and accesses deposit address pools fully on your private system memory, ensuring strict non-custodial operation."
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
      },
      {
        q: "How do I set up a self-hosted crypto payment gateway?",
        a: "Setting up XPay Labs takes under 30 minutes. First, provision a VPS with at least 8GB RAM and 4 vCPU running Ubuntu 22.04+. Install Docker and Docker Compose, then clone the repository and run docker compose up -d. Configure your blockchain RPC endpoints (TRON, EVM, SUI) and generate your node seed phrase. Once deployed, the gateway exposes a REST API on port 3010. Full setup instructions are available in our documentation with step-by-step commands."
      },
      {
        q: "Can I accept USDT payments with XPay Labs?",
        a: "Yes. XPay Labs natively supports USDT across all integrated blockchains — TRC20 USDT on TRON, ERC20 USDT on Ethereum and all EVM chains, BEP20 USDT on BNB Chain, and USDC as well. The multi-chain scanner monitors all networks concurrently and detects incoming stablecoin payments within seconds. Merchants report a 40-60% reduction in payment processing costs compared to hosted gateways that charge 0.5-1% per transaction."
      },
      {
        q: "How does XPay Labs compare to hosted payment gateways like BitPay or Coinbase Commerce?",
        a: "The fundamental difference is custody and cost. Hosted gateways like BitPay (1% fee) and Coinbase Commerce (0.8% + $25/mo) hold merchant keys on their infrastructure and charge per-transaction fees. XPay Labs is self-hosted and non-custodial — keys stay in your Docker containers, and you pay only blockchain gas fees (typically $0.01-$0.50 per transaction depending on network congestion). For a business processing $100,000/month in crypto payments, this can save $6,000-$12,000 annually in gateway fees."
      },
      {
        q: "Does XPay Labs support multi-chain payments?",
        a: "Yes. XPay Labs is built as a multi-chain payment infrastructure from the ground up. It simultaneously supports TRON (TRC20), all EVM-compatible chains (Ethereum, BSC, Polygon, Optimism, Arbitrum, Avalanche), and SUI. The unified event channel consolidates all blockchain scanner outputs into a single webhook stream, so your application receives standardized payment notifications regardless of which chain the customer used."
      },
      {
        q: "How do XPay Labs webhooks work?",
        a: "When a payment is detected on-chain, the webhook service constructs an HMAC-SHA256 signed JSON payload and sends it to your configured endpoint URL. If your endpoint returns a non-2xx status, the system retries with exponential backoff (1s, 2s, 4s, 8s, up to 5 minutes) for up to 48 hours. Each payload includes the transaction hash, amount, currency, chain, and merchant metadata. You verify the signature using your shared HMAC secret to ensure the payload came from your XPay node."
      },
      {
        q: "Is XPay Labs source-available?",
        a: "XPay Labs is source-available under the XPay Enterprise License. The full core codebase is published on GitHub for audit and self-deployment. Merchants can inspect exactly how key derivation, transaction scanning, and webhook dispatch work. Community support is provided through GitHub Issues and Discord. Commercial support plans start at $1,500/year for priority SLA."
      },
      {
        q: "What is the difference between self-hosted and non-custodial?",
        a: "Self-hosted means you deploy and run the payment gateway software on your own infrastructure (VPS, bare metal, Kubernetes). Non-custodial means you retain exclusive control of private keys — no third party can access or move your funds. XPay Labs is both: you run it on your servers, and all cryptographic key material is generated and stored exclusively within your Docker containers. Unlike custodial solutions where the provider holds keys and settles to you later, XPay Labs never touches your funds at any point."
      },
      {
        q: "Which stablecoins are supported beyond USDT?",
        a: "In addition to USDT on all supported chains, XPay Labs can track any standard-compliant TRC20 or ERC20 token by declaring its smart contract address in the node configuration JSON. This includes USDC, DAI, BUSD, FRAX, and custom tokens. The scanner identifies token transfers by monitoring the contract's Transfer event logs, extracting the amount, sender, and receiver from the indexed parameters."
      },
      {
        q: "How long does it take to detect a payment on-chain?",
        a: "Detection speed varies by chain. On TRON, the mempool scanner detects incoming USDT transfers within 1-3 seconds of broadcast. On EVM chains, detection occurs within 2-6 seconds depending on network congestion and RPC endpoint latency. SUI transactions are typically detected within 1-2 seconds. The system can be configured to wait for a specific number of block confirmations before firing the webhook (default: 1 for TRON, 2 for EVM, 1 for SUI)."
      },
      {
        q: "Can I customize the checkout page branding?",
        a: "Yes. XPay Labs is fully white-label. The checkout UI is built with React and can be themed to match your brand — colors, typography, logo, layouts, and custom CSS. The entire frontend is deployed alongside the gateway in Docker, so there are no third-party iframes or external branding requirements. Developers can also build a completely custom checkout experience using the REST API."
      },
      {
        q: "How is XPay Labs different from BTCPay Server?",
        a: "While both are self-hosted, XPay Labs focuses on stablecoin payments across modern blockchain networks (TRON, EVM, SUI), whereas BTCPay Server primarily targets Bitcoin and Lightning Network. XPay Labs offers a more developer-centric REST API inspired by Stripe's design patterns, native multi-chain concurrent scanning, and HMAC-signed webhooks with automatic retry queues. BTCPay Server has a broader plugin ecosystem but heavier resource requirements and a UI focused on non-technical merchants."
      },
      {
        q: "What happens if my server goes down during a payment?",
        a: "Since XPay Labs is non-custodial, funds always go directly to your blockchain wallet — there is no risk of fund loss during downtime. When the node comes back online, the blockchain scanner replays blocks from the last checkpoint and detects any missed transactions. The webhook queue stores pending notifications in a persistent database and retries delivery once your endpoint is reachable again."
      },
      {
        q: "Is there an API for creating and managing payments?",
        a: "Yes. XPay Labs exposes a comprehensive REST API for payment lifecycle management. The create-payment endpoint accepts amount, currency, chain, and optional metadata, then returns a unique deposit address and checkout URL. Additional endpoints cover invoice status lookup, settlement sweeps, webhook log retrieval, and merchant wallet management. API responses follow a consistent JSON structure with typed fields. Full API documentation with Node.js, Python, Go, and cURL examples is available in our docs."
      },
      {
        q: "Can I host multiple merchants on a single deployment?",
        a: "Yes. XPay Labs is multi-tenant by design. A single Docker Compose deployment can serve unlimited merchants, each with isolated API credentials, separate webhook endpoints, and independent configuration. Merchants never see each other's data or transactions."
      },
      {
        q: "Can I charge transaction fees to my merchants?",
        a: "Absolutely. As the platform operator, you set your own fee structure — percentage-based, flat fee per transaction, or a hybrid model. Since you run the infrastructure yourself, there are no third-party processor fees cutting into your margin. You keep 100% of the revenue you generate."
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
    disclaimer: "Non-custodial infrastructure software. Merchant remains strictly responsible for local legislative compliance, key protection, and node security.",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    resources: "RESOURCES"
  }
};
