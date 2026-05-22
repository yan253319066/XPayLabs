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
    cta: "立即部署网关"
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
    privacyPolicy: "隐私政策"
  }
};
