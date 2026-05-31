import { TranslationSet } from '../translations';

export const zh: TranslationSet = {
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
    cta: "立即部署网关",
    product: "产品",
    compare: "对比",
    pricing: "定价"
  },
  hero: {
    title: "部署您专属的加密货币支付基础设施",
    subtitle: "商业级、私有化自托管的加密货币支付系统，完备支持波场 TRON、所有以太坊 EVM 兼容链以及 SUI。完全防托管、白标定制，专为高要求的 Web3 开发者设计。",
    ctaDeploy: "一键部署系统",
    ctaDocs: "联系我们",
    badge: "V1.0 — 企业极速私有化部署"
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
    point3Title: "灵活一键部署",
    point3Text: "底层的 Java Spring Boot 核心网关支持 Docker 容器化运行，您能通过提供的 Docker Compose 一键启动前后端全套服务与轻量索引引擎。",
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
    gasOptimization: "Gas 极速优化合并 sweep技术",
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
        description: "完美的 UI 覆盖框架。无论是轻快风还是深色暗黑风，自适的多链 React 弹窗可完美定制，与高端严谨的前端设计系统完美贴合。",
        advantage: "支持随整站 Docker Compose 镜像一键瞬间渲染。"
      }
    ],
    advantage: "优势："
  },
  heroStats: {
    gatewayFees: "网关手续费",
    mempoolScan: "内存池扫描",
    nonCustodial: "非托管"
  },
  heroDashboard: {
    nodeActive: "节点在线",
    copyAddress: "复制地址",
    dispatching: "正在发送...",
    coreSecurity: "核心安全",
    nonCustodial: "非托管",
    privateKeys: "私钥始终留在您的服务器上。"
  },
  openSourceStats: {
    supportedEvmChains: "支持 EVM 链数量",
    mempoolDetectionSpeed: "内存池检测速度",
    gatewayTransactionFees: "网关交易费用",
    annualSavingsVsBitpay: "相比 BitPay 年节省"
  },
  featuresLabels: {
    gatewayCore: "网关核心",
    infraModuleReady: "基础模块就绪"
  },
  apiShowcaseLabels: {
    copied: "已复制",
    copy: "复制",
    sslSecured: "SSL 安全加密 TLS_AES_256_GCM_SHA384 客户端授权",
    prodReady: "生产就绪 API 客户端"
  },
  devXpConsole: {
    consoleHeader: "XPAY 控制台 V1.0_提示",
    sandboxSimulator: "沙盒模拟器",
    generatingSecureSigningNodes: "正在生成安全签名节点...",
    restartSandbox: "重启交互式体验沙盒",
    triggerWebhook: "模拟顾客支付并触发 Webhook",
    synthesizeVaultFundSweeps: "执行全自动资金归集 sweep",
    vaultRootWallet: "商户离线多签大金库",
    dockerSandboxEnvironment: "Docker 沙盒环境",
    sandboxSdkDocument: "沙盒 SDK 文档"
  },
  multiChainLabels: {
    tps: "处理吞吐 (TPS)",
    blockTime: "区块耗时"
  },
  footerLinks: {
    vsBitpay: "与 BitPay 对比",
    vsCoinbaseCommerce: "与 Coinbase Commerce 对比",
    vsOpenNode: "与 OpenNode 对比",
    vsCoinGate: "与 CoinGate 对比",
    vsNowPayments: "与 NowPayments 对比",
    vsBtcpayserver: "与 BTCPay Server 对比",
    restApiSpec: "REST API 文档",
    sandbox: "沙盒环境",
    setupGuide: "安装指南",
    whatIsSelfHosted: "什么是自托管？",
    tronGateway: "TRON 网关",
    pricing: "定价方案",
    github: "GitHub",
    review: "XPay Labs 评测",
    bestSelfHostedGateway: "最佳自托管网关"
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
        q: "支持哪些区块链网络与加密货币？",
        a: "原生开箱支持 TRON (TRC-20，重点针对 USDT 进行了底层加速)、Ethereum、BNB Chain、Polygon、Arbitrum 等各大以太坊 EVM 兼容链，以及新一代非 EVM 的 SUI。支持主流稳定币 (USDT / USDC)，商户亦可在配置文件中追加任意自定义 ERC-20 代币的合约地址。"
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
        a: "是的。XPay Core 在自托管环境中开启后会开放符合标准 REST 设计规范的 API 路由，其整体语法与现代国际标准支付界面无缝衔接。并且在我们的技术文档中配有完备的多语言一键集成代码示范 (cURL, NodeJS等)。"
      },
      {
        q: "部署 XPay 最低系统资源要求高吗？",
        a: "系统由于包含多链实时索引、商户节点、网关监控、加密签名和 Webhook 消息队列等多个核心后端服务，对运行环境的要求较为严谨。为保障 JVM 容器及全套组件在高负载下的绝对稳定，推荐最低硬件配置为 8GB RAM / 4核 vCPU；在高并发或由多个网关集群联合组成的生产环境下，建议主节点及服务集群分配 16GB RAM / 8核 vCPU 起步。通过我们提供的 Docker Compose 模板，您可以轻松实现全套前后端微服务及静态资源的一键整站打包部署，极速跑通全部服务。"
      },
      {
        q: "如何搭建自托管加密支付网关？",
        a: "部署 XPay Labs 只需不到 30 分钟。首先准备一台至少 8GB RAM、4核 CPU 的 VPS（推荐 Ubuntu 22.04+），安装 Docker 和 Docker Compose，然后克隆仓库并运行 docker compose up -d。配置您的区块链 RPC 端点（TRON、EVM、SUI）并生成节点种子短语。部署完成后，网关在 3010 端口提供 REST API。完整的安装指南请参阅我们的开发文档。"
      },
      {
        q: "XPay Labs 与 BitPay 或 Coinbase Commerce 相比如何？",
        a: "根本区别在于资产托管和费用。BitPay（1% 手续费）和 Coinbase Commerce（0.8% + $25/月）会持有商户密钥并按交易收费。XPay Labs 是自托管且非托管的——密钥保留在您的 Docker 容器中，您只需支付区块链燃料费（通常每笔 $0.01-$0.50）。对于每月处理 $100,000 加密货币支付的企业，每年可节省 $6,000-$12,000 的网关费用。"
      },
      {
        q: "XPay Labs 支持哪些稳定币？",
        a: "除所有支持链上的 USDT 外，XPay Labs 可以通过在节点配置 JSON 中声明合约地址来追踪任何标准 TRC20 或 ERC20 代币，包括 USDC、DAI、BUSD、FRAX 等。扫描器通过监控代币合约的 Transfer 事件日志来识别转账，从索引参数中提取金额、发送方和接收方。"
      },
      {
        q: "支付到账检测需要多长时间？",
        a: "检测速度因链而异。在 TRON 上，内存池扫描器可在广播后 1-3 秒内检测到传入的 USDT 转账。在 EVM 链上，检测通常在 2-6 秒内完成。SUI 交易通常在 1-2 秒内检测到。系统可配置在触发 Webhook 前等待特定数量的区块确认。"
      },
      {
        q: "我可以自定义结账页面的品牌吗？",
        a: "可以。XPay Labs 是完全白标的。结账 UI 使用 React 构建，可以根据您的品牌进行主题定制——颜色、字体、Logo、布局和自定义 CSS。整个前端与网关一起部署在 Docker 中，没有第三方 iframe 或外部品牌要求。开发者也可以使用 REST API 构建完全自定义的结账体验。"
      },
      {
        q: "XPay Labs 能否支持 USDT 收款？",
        a: "可以。XPay Labs 在所有集成的区块链上原生支持 USDT——波场 TRON 上的 TRC20 USDT、以太坊及所有 EVM 链上的 ERC20 USDT、币安智能链上的 BEP20 USDT，同时也支持 USDC。多链扫描器同时监控所有网络，能在数秒内检测到账的稳定币付款。相较于收取 0.5-1% 手续费的托管网关，商家可降低 40-60% 的支付处理成本。"
      },
      {
        q: "XPay Labs 是否支持多链支付？",
        a: "是的。XPay Labs 从底层架构上就是一套多链支付基础设施。它同时支持 TRON (TRC20)、所有 EVM 兼容链（以太坊、BSC、Polygon、Optimism、Arbitrum、Avalanche）以及 SUI。统一事件通道将所有区块链扫描输出合并为单一的 Webhook 数据流，无论顾客使用哪条链，您的应用收到的都是标准化的支付通知。"
      },
      {
        q: "XPay Labs 的 Webhook 是如何工作的？",
        a: "当链上检测到付款时，Webhook 服务会构建一个 HMAC-SHA256 签名的 JSON 负载并发送至您配置的终端 URL。如果您的端点返回非 2xx 状态码，系统将按指数退避策略（1秒、2秒、4秒、8秒，最长间隔5分钟）自动重试，持续最多48小时。每个负载包含交易哈希、金额、币种、链和商户元数据。您可使用共享的 HMAC 密钥验证签名，确保负载来自您的 XPay 节点。"
      },
      {
        q: "XPay Labs 是否开放源代码？",
        a: "XPay Labs 在 XPay 企业许可证下提供源代码。完整核心代码库发布于 GitHub，可供审计和自行部署。商户可精确检查密钥派生、交易扫描和 Webhook 分发的工作方式。社区支持通过 GitHub Issues 和 Discord 提供。商业支持计划起价为每年 $1,500，享有优先 SLA。"
      },
      {
        q: "自托管与非托管有什么区别？",
        a: "自托管意味着您在自有基础设施（VPS、裸金属、Kubernetes）上部署和运行支付网关软件。非托管意味着您保留对私钥的独占控制权——没有任何第三方可以访问或转移您的资金。XPay Labs 两者兼具：您在自有服务器上运行，所有加密密钥材料均在您的 Docker 容器内生成和存储。与托管解决方案（提供商持有密钥并延迟结算给您）不同，XPay Labs 在任何环节都不触碰您的资金。"
      },
      {
        q: "XPay Labs 与 BTCPay Server 有何不同？",
        a: "两者都是自托管方案，但 XPay Labs 专注于现代区块链网络（TRON、EVM、SUI）上的稳定币支付，而 BTCPay Server 主要面向比特币和闪电网络。XPay Labs 提供更注重开发者体验的 REST API（受 Stripe 设计模式启发）、原生多链并发扫描以及带自动重试队列的 HMAC 签名 Webhook。BTCPay Server 拥有更广泛的插件生态，但资源需求更高，且界面主要面向非技术商户。"
      },
      {
        q: "如果我的服务器在支付过程中宕机会怎样？",
        a: "由于 XPay Labs 是非托管的，资金始终直接进入您的区块链钱包——宕机期间不存在资金损失风险。当节点恢复上线后，区块链扫描器会从上次检查点回放区块并检测任何遗漏的交易。Webhook 队列将待处理通知存储在持久化数据库中，待您的端点恢复可达后自动重试投递。"
      },
      {
        q: "是否有用于创建和管理支付的 API？",
        a: "是的。XPay Labs 提供全面的 REST API 用于支付生命周期管理。create-payment 端点接受金额、币种、链和可选元数据，返回唯一的充值地址和结账 URL。其他端点涵盖 Invoice 状态查询、资金归集、Webhook 日志检索和商户钱包管理。API 响应遵循一致的 JSON 结构，字段类型明确。完整 API 文档（含 Node.js、Python、Go 和 cURL 示例）请参阅我们的技术文档。"
      }
    ]
  },
  cta: {
    title: "掌握您的绝对收款主权",
    subtitle: "终止继续向聚合扣除昂贵的手续费和面对未知的冻结。立即在几分钟内，在您自己的安全服务器上，点燃这套私有化自托管防托管多链支付引擎。",
    btnDeploy: "部署至 Docker / 自有主机"
  },
  footer: {
    slogan: "去中心化主权、私有定制、开发者先行的加密货币自托管底层支付网关。",
    product: "系统架构",
    developers: "开发者板块",
    links: "生态兼容性",
    allRights: "保留所有权利。项目由商业级私有化许可证提供授权保护。",
    disclaimer: "非托管基础设施软件。商户应对其自持密钥的离线安全、合规配置及服务器防火墙安全性承担完整、绝对的主体责任限制。",
    termsOfService: "服务条款",
    privacyPolicy: "隐私政策",
    resources: "资源"
  }
};
