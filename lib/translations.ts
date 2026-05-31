import { en } from './translations/en';
import { zh } from './translations/zh';

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
    product: string;
    compare: string;
    pricing: string;
    blog: string;
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
    advantage: string;
  };
  heroStats: {
    gatewayFees: string;
    mempoolScan: string;
    nonCustodial: string;
  };
  heroDashboard: {
    nodeActive: string;
    copyAddress: string;
    dispatching: string;
    coreSecurity: string;
    nonCustodial: string;
    privateKeys: string;
  };
  openSourceStats: {
    supportedEvmChains: string;
    mempoolDetectionSpeed: string;
    gatewayTransactionFees: string;
    annualSavingsVsBitpay: string;
  };
  featuresLabels: {
    gatewayCore: string;
    infraModuleReady: string;
  };
  apiShowcaseLabels: {
    copied: string;
    copy: string;
    sslSecured: string;
    prodReady: string;
  };
  devXpConsole: {
    consoleHeader: string;
    sandboxSimulator: string;
    generatingSecureSigningNodes: string;
    restartSandbox: string;
    triggerWebhook: string;
    synthesizeVaultFundSweeps: string;
    vaultRootWallet: string;
    dockerSandboxEnvironment: string;
    sandboxSdkDocument: string;
  };
  multiChainLabels: {
    tps: string;
    blockTime: string;
  };
  footerLinks: {
    vsBitpay: string;
    vsCoinbaseCommerce: string;
    vsOpenNode: string;
    vsCoinGate: string;
    vsNowPayments: string;
    vsBtcpayserver: string;
    restApiSpec: string;
    sandbox: string;
    setupGuide: string;
    whatIsSelfHosted: string;
    tronGateway: string;
    pricing: string;
    github: string;
    review: string;
    bestSelfHostedGateway: string;
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
  };
  footer: {
    slogan: string;
    product: string;
    developers: string;
    links: string;
    allRights: string;
    disclaimer: string;
    termsOfService: string;
    privacyPolicy: string;
    resources: string;
  };
}

export const translations: Record<'en' | 'zh', TranslationSet> = {
  en,
  zh,
};
