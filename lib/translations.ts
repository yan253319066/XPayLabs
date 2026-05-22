export interface TranslationSet {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  navigation: {
    features: string;
    chains: string;
    architecture: string;
    api: string;
    devXp: string;
    faq: string;
    docs: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaDeploy: string;
    ctaDocs: string;
    badge: string;
  };
  dashboardMockup: {
    headline: string;
    merchantWallet: string;
    chainSelector: string;
    walletAddress: string;
    txHistory: string;
    apiPreview: string;
    webhookSystem: string;
    triggerWebhook: string;
    webhookListening: string;
    webhookFired: string;
    webhookSuccess: string;
  };
  openSource: {
    badge: string;
    title: string;
    subtitle: string;
    point1Title: string;
    point1Text: string;
    point2Title: string;
    point2Text: string;
    point3Title: string;
    point3Text: string;
    point4Title: string;
    point4Text: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  multichain: {
    badge: string;
    title: string;
    subtitle: string;
    unification: string;
    nativeStablecoins: string;
    gasOptimization: string;
    instantMempool: string;
  };
  architecture: {
    badge: string;
    title: string;
    subtitle: string;
    flow: {
      merchant: string;
      merchantDesc: string;
      core: string;
      coreDesc: string;
      scanner: string;
      scannerDesc: string;
      wallets: string;
      walletsDesc: string;
      webhook: string;
      webhookDesc: string;
    };
  };
  apiShowcase: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: {
      curl: string;
      json: string;
      node: string;
    };
  };
  devXp: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
    generator: {
      title: string;
      btn: string;
      activeKey: string;
      ready: string;
    };
    payment: {
      title: string;
      amount: string;
      currency: string;
      selectChain: string;
      btn: string;
      hash: string;
    };
    webhookSim: {
      title: string;
      payload: string;
      received: string;
    };
    settleSim: {
      title: string;
      funds: string;
      dest: string;
      txid: string;
      settled: string;
    };
  };
  useCases: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      advantage: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    btnDeploy: string;
    btnDocs: string;
  };
  footer: {
    slogan: string;
    product: string;
    developers: string;
    links: string;
    allRights: string;
    disclaimer: string;
  };
}

export const translations: Record<'en' | 'zh', TranslationSet> = {
  en: {
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
      ctaDocs: "View Documentation",
      badge: "V1.0 ALPHA — DEPLOY INSTANTLY"
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
      point3Title: "Flexible Deployment",
      point3Text: "Run the JVM core as a secure Docker container on any VPS or Kubernetes cluster, while hosting the static React frontend on Vercel or Cloudflare.",
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
          title: "Decentralized Independant Wallets",
          description: "Easily integrate non-custodial address trees to handle global crowdfunding, community projects, or anonymous tipping endpoints without registration walls.",
          advantage: "Preserve customer financial anonymity."
        },
        {
          title: "Custom Crypto Checkout Widget",
          description: "Integrate beautiful UI overlays using customizable pre-themed checkout widgets matching Vercel and stripe brand profiles.",
          advantage: "Configured to deploy on edge servers instantly."
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
          a: "The core system executes as a secure JVM Spring Boot application packaged within lightweight Docker containers (requiring as little as 512MB RAM on a VPS, Kubernetes cluster, or Google Cloud Run). The checkout widgets and dashboard frontends are static Web applications that can be hosted on serverless edges like Cloudflare Pages or Vercel."
        }
      ]
    },
    cta: {
      title: "Own Your Payment Gateway Today",
      subtitle: "Stop bleeding profit to custodial intermediaries. Deploy the secure, private self-hosted crypto payment gateway on your own servers in minutes.",
      btnDeploy: "Deploy on VPS / Docker Core",
      btnDocs: "Explore Architecture Docs"
    },
    footer: {
      slogan: "Sovereign, private, developer-first crypto payment infrastructure.",
      product: "SYSTEM CORE",
      developers: "DEVELOPERS",
      links: "INTEGRATIONS",
      allRights: "All rights reserved. Protected under XPay Enterprise License.",
      disclaimer: "Non-custodial infrastructure software. Merchant remains strictly responsible for local legislative compliance, key protection, and node security."
    }
  },
  zh: {
    meta: {
      title: "XPay Labs — 自托管加密支付基础设施",
      description: "部署您专属的私有、自托管加密货币支付网关。支持波场 TRON (TRC20 USDT)、所有 EVM 网络以及 SUI。专为开发者打造的非托管安全收款架构。",
      keywords: "加密支付基础设施, 私有自托管加密支付系统, 稳定币收款网关, TRC20支付接口API, EVM支持加密网关, SUI区块链支付接口, 开发者支付底层系统"
    },
    navigation: {
      features: "产品特性",
      chains: "多链支持",
      architecture: "系统架构",
      api: "API 演示",
      devXp: "开发者体验",
      faq: "常见问题",
      docs: "技术文档",
      cta: "立即部署网关"
    },
    hero: {
      title: "部署您专属的加密货币支付基础设施",
      subtitle: "商业级、私有化自托管的加密货币支付系统，完备支持波场 TRON、所有以太坊 EVM 兼容链以及 SUI。完全防托管、白标定制，专为高要求的 Web3 开发者设计。",
      ctaDeploy: "一键部署系统",
      ctaDocs: "阅读开发文档",
      badge: "V1.0 ALPHA — 企业极速私有化部署"
    },
    dashboardMockup: {
      headline: "网关监控中心 (实时)",
      merchantWallet: "商家监控节点",
      chainSelector: "区块链通道",
      walletAddress: "网关充值分配地址",
      txHistory: "实时交易内存池 (Mempool)",
      apiPreview: "API 返回格式预览",
      webhookSystem: "Webhook 签名监控",
      triggerWebhook: "模拟发送 Webhook",
      webhookListening: "连接已就绪。正在监听全网实时区块事件...",
      webhookFired: "Webhook 事件已成功发送至终端",
      webhookSuccess: "验证通过"
    },
    openSource: {
      badge: "非托管去中心化宣言",
      title: "您的基础设施、您的钱包、由您掌控",
      subtitle: "XPay Labs 致力于将链上资产的主权交还给商家。通过部署自托管收银集群，所有顾客付款将直接转入由您服务器安全生成的链上私钥地址中，绝无任何中间商抽成或扣押。",
      point1Title: "100% 绝对非托管",
      point1Text: "所有的私钥管理、助记词派生、以及链上签名广播，完全在您的容器隔离内存中执行，资产不经由任何第三方网站。",
      point2Title: "白标商业自由",
      point2Text: "外观主题、LOGO品牌、国际化翻译以及账单邮件完全能够完美嵌入到您自有的产品线，保障用户体验一致性。",
      point3Title: "灵活分离部署",
      point3Text: "底层的 Java Spring Boot 核心网关支持 Docker 容器化打包运行于任意 VPS、云主机或 K8s 集群，商户前台及收银台 widget 可纯静态托管于 Vercel 或 Cloudflare Pages。",
      point4Title: "零网关手续费",
      point4Text: "彻底终结市场上 1%-2% 的支付网关高额抽成，让资金流转只消耗底层的区块链网络 Gas 费。"
    },
    features: {
      title: "现代化的支付系统，为高并发而生",
      subtitle: "高能、轻量、高灵敏度的交易内存池捕获，保障商家在面对数万并发时的结算安全性。",
      items: [
        {
          title: "领先多链支付",
          description: "原生深度跟踪波场 TRON (TRC20 USDT)、以太坊 ERC20、币安智能链 BSC、Polygon 以及 SUI。多链无缝切换。"
        },
        {
          title: "极简开发者 API",
          description: "提供与 Stripe 一脉相承的极简 RESTFUL JSON APIs 以及强类型 RPC 定义，助你在 10 分钟内集成完毕。"
        },
        {
          title: "全自动资金下发",
          description: "支持多种自动化安全逻辑，当顾客充值成功，可实时自动归集或批量分账至您的离线冷钱包存储。"
        },
        {
          title: "完美白标定制",
          description: "开箱即用的 React 收银台组件，允许你一键修改文案、配置 logo 并随心自选各类渐变视觉主题。"
        },
        {
          title: "高并发区块监听",
          description: "自建高性能区块链索引器配合轻节点，无死角监听全网区块脉动，在交易产生 1 秒内即可完成付款确认。"
        },
        {
          title: "可信 Webhook 通知",
          description: "集成可靠的任务消息队列，支持重试、指数退避策略与 HMAC SHA256 签名，保证服务器接收万无一失。"
        }
      ]
    },
    multichain: {
      badge: "纵横互通网络",
      title: "原生多链智能路由分发",
      subtitle: "摒弃繁琐的单链扫描节点，将波场、以太坊和 SUI 链上异构解析合并为统一的标准化事件流。",
      unification: "统一多链账户派生管理",
      nativeStablecoins: "全面支持主流等值稳定币 (USDT, USDC 等)",
      gasOptimization: "Gas 极速优化合并 sweep 技术",
      instantMempool: "反应式极速底层区块链索引器"
    },
    architecture: {
      badge: "部署网络拓扑",
      title: "自托管高安全隔离架构图",
      subtitle: "了解在您专属的隔离容器中，顾客付款请求与监控事件如何高效协同处理。",
      flow: {
        merchant: "商户业务服务器",
        merchantDesc: "通过安全的后台 API 密钥发起订单创建，接收链上成功的 Webhook 通知并执行发货。",
        core: "XPay 核心引擎容器",
        coreDesc: "负责产生支付倒计时订单、派生独有的临时分配地址、并保存支付关联的用户元数据 scope。",
        scanner: "区块链索引扫描模块",
        scannerDesc: "不间断地订阅各链节点 RPC 数据库，检测与活动订单金额相匹配的精确入账流水。",
        wallets: "独立钱包管理服务",
        walletsDesc: "高安全性内存密钥环组件，用于隔离生成私钥、单次签名合并、确保私钥不对公网暴露。",
        webhook: "可靠的 Webhook 服务",
        webhookDesc: "对成功事件生成基于商户秘钥的 HMAC 签名，通过消息重试队列异步投递到商户系统。"
      }
    },
    apiShowcase: {
      badge: "开发者专属",
      title: "如丝般顺滑的 API 设计",
      subtitle: "没有繁冗拖沓的冗长说明，像集成 Stripe 一样简单。执行最规范的标准 REST 调用，完全契合现代开发规范。",
      tabs: {
        curl: "创建支付 (cURL)",
        json: "API 数据定义",
        node: "SDK 代码集成 (Node.js)"
      }
    },
    devXp: {
      badge: "交互式快捷体验厅",
      title: "60 秒体验完整收款闭环",
      subtitle: "无需配置真实服务器，直接在下方交互面板中，点击模拟我们核心微服务容器之间的运转状态。",
      steps: [
        {
          num: "01",
          title: "安全授权鉴权",
          desc: "系统在后端为商户创建唯一的 API 安全令牌，用于后续所有接口调用的加密签名。"
        },
        {
          num: "02",
          title: "实时下发账单",
          desc: "传入支付详情(如 100 USDT, SUI 链)，网关即刻在极简内存中生成唯一临时存款地址。"
        },
        {
          num: "03",
          title: "捕获区块入账",
          desc: "区块链索引扫描器实时监控链上到账，随即向商户服务器安全投递带签名的 Webhook 消息。"
        },
        {
          num: "04",
          title: "资金自动派 sweep",
          desc: "网关检测到充值成功后，可设置规则立即将账单资金归集 sweep 至您离线的企业冷钱包里。"
        }
      ],
      generator: {
        title: "API Keys 生成机制",
        btn: "一键生成商户 Secret Key",
        activeKey: "当前的 Secret Key 状态",
        ready: "API Secret Key 验证通过。已对网关集群授权。"
      },
      payment: {
        title: "创建收银台订单",
        amount: "支付金额总计",
        currency: "支付稳定币资产",
        selectChain: "结算区块链网络",
        btn: "发起并获取充值地址",
        hash: "该订单生成的 Invoice 哈希"
      },
      webhookSim: {
        title: "模拟入账事件 Webhook 广播",
        payload: "商户接收到的 Webhook 数据包",
        received: "接收端服务器响应: 状态码 200 HTTP OK，验签完成！"
      },
      settleSim: {
        title: "非托管归集结算引擎",
        funds: "拟 sweep 提取余额",
        dest: "商户指定的离线企业冷钱包地址",
        txid: "归集结算链上 Transaction 哈希",
        settled: "归集完成。资金已提取至您指定的安全冷钱包中。"
      }
    },
    useCases: {
      badge: "丰富应用场景",
      title: "多品类数字化商业的可靠支撑",
      subtitle: "彻底释放非托管支付底层潜能，保障商户资金实时、无抽成、无冻结退款之忧。",
      items: [
        {
          title: "外贸及全球电商订单结算",
          description: "为世界各地买家提供全主权掌控的 TRC20/BEP20 稳定币收款窗口，利用极速内存池扫描，实现接近零延迟的一秒付款检测与发货。",
          advantage: "全网低于 5 秒的超快收款到账通知。"
        },
        {
          title: "SaaS 订阅系统计费模块",
          description: "直接自建类似 Stripe 的定期订阅支付服务，免受第三方聚合商的随机冻结，利用可信 API 掌控顾客的每次周期扣款。降低数万级中介层手续费支出。",
          advantage: "摆脱昂贵的网关手续费比例抽成。"
        },
        {
          title: "独立钱包与打赏终端",
          description: "快速派生完全没有实名实名注册门槛的多链地址树，用于项目全球众筹、小费赞助或去中心化自由创作，绝无资产卡白名单事件风险。",
          advantage: "最大化地守护消费者交易隐私安全。"
        },
        {
          title: "高定收银台视觉自定义",
          description: "完美的 UI 覆盖框架。无论是轻快风还是深色暗黑风，自适的多链 React 弹窗可完美定制，与 Vercel / Stripe 等级前沿前端完美贴合。",
          advantage: "支持云端即开即用的静态秒级渲染。"
        }
      ]
    },
    faq: {
      badge: "专业知识库",
      title: "常见问题解答 FAQ",
      subtitle: "掌握 XPay Labs 高性能自托管支付网关在日常应用、高并发以及资金保护方面的全套细节政策。",
      items: [
        {
          q: "什么是 XPay Labs？",
          a: "XPay Labs 是一款专为企业级私有化、完全模块化的自托管加密支付网关基础设施。它帮助数字业务及开发者能够直接在自家系统搭建、运行多链稳定币收款系统。覆盖波场 TRON、以太坊等 EVM 兼容链与 SUI。完全自主掌控，无需第三方代收，零网关交易抽成。"
        },
        {
          q: "支持哪些区块链网络与加密貨币？",
          a: "原生开箱支持 TRON (TRC20，重点针对 USDT 进行了底层加速)、Ethereum、BNB Chain、Polygon、Arbitrum 等各大以太坊 EVM 兼容链，以及新一代非 EVM 的 SUI。支持主流稳定币 (USDT / USDC)，商户亦可在配置文件中追加任意自定义 ERC20 代币的合约地址。"
        },
        {
          q: "自托管和非托管具体如何确保我的资金安全？",
          a: "在 XPay Labs 中，所有加密私钥、助记词及派生地址，均在您自己完全隔离的管理容器内存空间中产生与保存，不经过任何多租户第三方。XPay 绝对不在云端收集或存储商户密钥。收款资金全流程由顾客直接划入您的专属私钥钱包，无法被外部冻结。"
        },
        {
          q: "Webhook 事件推送如果不通会如何处理？",
          a: "我们的 Webhook 精巧微服务底层包含了自动重试机制。当您的商户服务器由于网络、过载等异常返回 500 等错误时，网关将按照指数退避自动重试推送。并且，每次 webhook 推送均有基于 SHA256 HMAC 密钥的验签头，确保推送者身份可信。"
        },
        {
          q: "是否有供开发者调用的 SDK、API、或者是技术支持？",
          a: "是的。XPay Core 在自托管环境中开启后会开放标准符合 REST 设计规范的 API 路由，其整体语法与现代国际标准支付界面无缝衔接。并且在我们的技术文档中配有完备的多语言一键集成代码示范 (cURL, NodeJS等)。"
        },
        {
          q: "部署 XPay 最低系统资源要求高吗？",
          a: "系统采用轻量分离架构设计，资源消耗极低。底层的 Java Spring Boot 核心网关高度优化，以安全 Docker 镜像形式打包运行，推荐在最低 512MB RAM / 0.5核 vCPU 的云主机 VPS、容器服务或 Kubernetes 中部署。而商户收银台 React 核心组件等前台静态资产完全不消耗您的服务器算力，可直接免费一键承载在 Vercel 或 Cloudflare Pages 等无服务器边缘平台上。"
        }
      ]
    },
    cta: {
      title: "掌握您的绝对收款主权",
      subtitle: "终止继续向聚合扣除昂贵的手续费和面对未知的冻结。立即在几分钟内，在您自己的安全服务器上，点燃这套私有化自托管防托管多链支付引擎。",
      btnDeploy: "部署至 Docker / 自有主机",
      btnDocs: "了解私有化底层系统架构"
    },
    footer: {
      slogan: "去中心化主权、私有定制、开发者先行的加密货币自托管底层支付网关。",
      product: "系统架构",
      developers: "开发者板块",
      links: "生态兼容性",
      allRights: "保留所有权利。项目由商业级私有化许可证提供授权保护。",
      disclaimer: "非托管基础设施软件。商户应对其自持密钥的离线安全、合规配置及服务器防火墙安全性承担完整、绝对的主体责任限制。"
    }
  }
};
