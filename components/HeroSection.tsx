'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Cpu, Terminal, 
  Layers, CheckCircle2, ChevronRight, Play,
  RefreshCw, Check, Copy, Wifi
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { DEPOSIT_ADDRESSES } from '@/lib/constants';

type ChainType = 'TRON' | 'ETH' | 'BSC' | 'SUI';

interface TxItem {
  id: string;
  amount: string;
  token: string;
  sender: string;
  status: 'confirmed' | 'pending';
  age: string;
}

export default function HeroSection() {
  const t = useTranslations();
  const [selectedChain, setSelectedChain] = useState<ChainType>('TRON');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [webhookLogs, setWebhookLogs] = useState<string[]>([]);
  const [isFiringWebhook, setIsFiringWebhook] = useState(false);

  // Seed addresses based on chain
  const addresses = DEPOSIT_ADDRESSES;

  const tokenLabel: Record<ChainType, string> = {
    TRON: 'USDT (TRC-20)',
    ETH: 'USDT (ERC-20)',
    BSC: 'USDC (BEP-20)',
    SUI: 'SUI (Native)'
  };

  // Seed transaction database matching selected chain
  const txHistoryData: Record<ChainType, TxItem[]> = {
    TRON: [
      { id: 'tx_tron_281', amount: '250.00', token: 'USDT', sender: 'TMu8d...7Fda2', status: 'confirmed', age: '12s' },
      { id: 'tx_tron_280', amount: '85.50', token: 'USDT', sender: 'TKh2a...88Hqb', status: 'confirmed', age: '1m' },
      { id: 'tx_tron_279', amount: '1205.00', token: 'USDT', sender: 'TVb9s...33XyZ', status: 'confirmed', age: '3m' }
    ],
    ETH: [
      { id: 'tx_eth_1049', amount: '1500.00', token: 'USDT', sender: '0x3fA...eB92', status: 'confirmed', age: '4s' },
      { id: 'tx_eth_1048', amount: '350.00', token: 'USDC', sender: '0x81C...92Fd', status: 'confirmed', age: '32s' },
      { id: 'tx_eth_1047', amount: '100.00', token: 'USDT', sender: '0xeeF...33Ba', status: 'confirmed', age: '2m' }
    ],
    BSC: [
      { id: 'tx_bsc_551', amount: '45.00', token: 'USDC', sender: '0x711...4Fa2', status: 'confirmed', age: '18s' },
      { id: 'tx_bsc_550', amount: '1350.00', token: 'USDT', sender: '0x992...bb8D', status: 'confirmed', age: '45s' },
      { id: 'tx_bsc_549', amount: '80.00', token: 'USDC', sender: '0xe23...Fe1A', status: 'confirmed', age: '5m' }
    ],
    SUI: [
      { id: 'tx_sui_992', amount: '350.00', token: 'SUI', sender: '0x3fc...88a2', status: 'confirmed', age: '2s' },
      { id: 'tx_sui_991', amount: '1500.00', token: 'USDC', sender: '0xb23...ddf1', status: 'confirmed', age: '1m' },
      { id: 'tx_sui_990', amount: '45.20', token: 'SUI', sender: '0x19a...ff43', status: 'confirmed', age: '4m' }
    ]
  };

  // Dynamic interactive log queue initialized empty
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleFireWebhook = () => {
    if (isFiringWebhook) return;
    setIsFiringWebhook(true);

    const txIdMsg = `xpay_evt_${Math.random().toString(36).substring(2, 10)}`;
    const newLogs = [
      `[${new Date().toLocaleTimeString()}] DISPATCH: Webhook triggered from local client actions.`,
      `[${new Date().toLocaleTimeString()}] EVENT: invoice.payment_received [${txIdMsg}]`,
      `[${new Date().toLocaleTimeString()}] HTTP POST: Sending signed HMAC payload to configured endpoint...`,
    ];

    setWebhookLogs(prev => [...prev, ...newLogs].slice(-8));

    setTimeout(() => {
      const successLogs = [
        `[${new Date().toLocaleTimeString()}] RECEIVE: HTTP/1.1 200 OK | Payload verified matching SHA256 SHA-HMAC root.`,
        `[${new Date().toLocaleTimeString()}] PROCESS: Invoice successfully marked as [PAID_SETTLED_SUCCESS]`
      ];
      setWebhookLogs(prev => [...prev, ...successLogs].slice(-8));
      setIsFiringWebhook(false);
    }, 1500);
  };

  // Generate pretty JSON preview matching selected chain
  const getJsonPreview = () => {
    const activeAddress = addresses[selectedChain];
    const activeLabel = tokenLabel[selectedChain];
    return `{
  "id": "inv_8fa3kdfj9322",
  "status": "paid",
  "amount": "250.00",
  "asset": "${selectedChain === 'SUI' ? 'SUI' : 'USDT'}",
  "chain": "${selectedChain}",
  "deposit_address": "${activeAddress.slice(0, 10)}...${activeAddress.slice(-8)}",
  "metadata": {
    "merchant_order_ref": "invoice_10332",
    "customer": "user_9fa3b"
  }
}`;
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#060816]">
      {/* Background Glow Effects matching Professional Polish theme precisely */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#5B8CFF] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Core Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Texts */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest mb-2 font-mono">
              <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-pulse"></span>
              {t('hero.badge')}
            </div>

            {/* Display Headline with gradient, italic formatting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic">
              {t('hero.title')}
            </h1>

            {/* Body copy */}
            <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#dev-experience"
                className="px-8 py-4 bg-[#5B8CFF] rounded-lg font-bold text-white shadow-[0_0_30px_rgba(91,140,255,0.3)] hover:shadow-[0_0_40px_rgba(91,140,255,0.4)] transition-all flex items-center justify-center gap-2 italic text-sm"
              >
                <span>{t('hero.ctaDeploy')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://t.me/OS_Blockchain"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur border border-white/10 rounded-lg font-bold text-white hover:bg-slate-800 transition-all flex items-center justify-center text-sm"
              >
                <span>{t('hero.ctaDocs')}</span>
              </a>
            </div>

            {/* Highlighting direct benefits as secure developer metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 max-w-md">
              <div>
                <p className="text-white text-xl sm:text-2xl font-bold font-display">0%</p>
                <p className="text-gray-500 text-xs mt-0.5 uppercase tracking-wider font-semibold">{t('heroStats.gatewayFees')}</p>
              </div>
              <div>
                <p className="text-white text-xl sm:text-2xl font-bold font-display">&lt; 1s</p>
                <p className="text-gray-500 text-xs mt-0.5 uppercase tracking-wider font-semibold">{t('heroStats.mempoolScan')}</p>
              </div>
              <div>
                <p className="text-white text-xl sm:text-2xl font-bold font-display">100%</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 uppercase tracking-wider font-semibold whitespace-nowrap">{t('heroStats.nonCustodial')}</p>
              </div>
            </div>
          </div>

          {/* Right Dashboard Console Mockup */}
          <div className="lg:col-span-6 w-full relative">
            
            {/* Outer mesh design element from Professional Polish theme */}
            <div className="bg-gradient-to-b from-[#5B8CFF]/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-1">
              
              {/* Inner container block */}
              <div className="relative w-full h-full bg-[#0A0D1F] rounded-[22px] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Header Tab line */}
                <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-gray-500 font-mono tracking-wider ml-2 uppercase">
                    {t('dashboardMockup.headline')}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-wide uppercase">
                    {t('heroDashboard.nodeActive')}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-4">
                
                {/* Chain Selection Tabs */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block font-mono">
                    {t('dashboardMockup.chainSelector')}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['TRON', 'ETH', 'BSC', 'SUI'] as ChainType[]).map((chain) => (
                      <button
                        key={chain}
                        onClick={() => setSelectedChain(chain)}
                        className={`py-2 px-1 text-xs font-bold font-display rounded-lg transition-all border ${
                          selectedChain === chain
                            ? 'bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border-brand-blue text-white shadow-md'
                            : 'bg-[#080a1d] border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/12'
                        }`}
                      >
                        {chain}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gateway Specific Address Block */}
                <div className="bg-[#04050f] p-3 rounded-xl border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 font-mono">
                      {t('dashboardMockup.walletAddress')}
                    </span>
                    <span className="text-[10px] text-brand-cyan bg-brand-cyan/10 font-mono font-semibold px-2 py-0.5 rounded-full">
                      {tokenLabel[selectedChain]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs sm:text-sm font-mono text-white tracking-tight break-all select-all font-semibold">
                      {addresses[selectedChain]}
                    </span>
                    <button
                      onClick={() => copyToClipboard(addresses[selectedChain])}
                      className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors ml-2 shrink-0"
                      title={t('heroDashboard.copyAddress')}
                    >
                      {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Split Panel: Transactions vs Code Response */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  
                  {/* Left component: Last Transactions */}
                  <div className="md:col-span-6 space-y-2">
                    <h3 className="text-[10px] uppercase font-bold tracking-wider text-gray-500 font-mono block">
                      {t('dashboardMockup.txHistory')}
                    </h3>
                    <div className="space-y-2">
                      {txHistoryData[selectedChain].map((tx) => (
                        <div key={tx.id} className="p-2.5 rounded-lg bg-[#07091c]/70 border border-white/5 flex items-center justify-between text-[11px] font-mono">
                          <div className="space-y-0.5">
                            <div className="text-white font-bold">{tx.sender}</div>
                            <div className="text-gray-500 text-[10px]">{tx.id} • {tx.age} ago</div>
                          </div>
                          <div className="text-right space-y-0.5">
                            <div className="text-emerald-400 font-bold">+{tx.amount} {tx.token}</div>
                            <div className="text-[9px] text-emerald-500/80 uppercase font-semibold tracking-wider flex items-center justify-end space-x-1">
                              <span className="w-1 h-1 rounded-full bg-emerald-400" />
                              <span>{t('dashboardMockup.webhookSuccess')}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Component: API JSON Payload block */}
                  <div className="md:col-span-6 space-y-2">
                    <h3 className="text-[10px] uppercase font-bold tracking-wider text-gray-500 font-mono block">
                      {t('dashboardMockup.apiPreview')}
                    </h3>
                    <div className="p-3 rounded-lg bg-[#04050f] border border-white/5 text-[10px] font-mono text-gray-300 leading-normal max-h-[162px] overflow-hidden relative">
                      <pre className="text-brand-cyan/80">
                        {getJsonPreview()}
                      </pre>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#04050f] to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Bottom Webhook Diagnostics with Interactive Trigger */}
                <div className="space-y-2.5 pt-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 font-mono flex items-center space-x-1.5">
                      <Wifi className="w-3 h-3 text-brand-purple" />
                      <span>{t('dashboardMockup.webhookSystem')}</span>
                    </label>
                    <button
                      onClick={handleFireWebhook}
                      disabled={isFiringWebhook}
                      className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-white/5 hover:bg-brand-blue hover:text-white text-gray-300 border border-white/10 hover:border-brand-blue disabled:opacity-50 transition-all flex items-center space-x-1 text-right"
                    >
                      {isFiringWebhook ? (
                        <>
                          <RefreshCw className="w-3 h-3 animate-spin" />
                          <span>{t('heroDashboard.dispatching')}</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-2.5 h-2.5" />
                          <span>{t('dashboardMockup.triggerWebhook')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Webhook terminal box */}
                  <div className="bg-[#03040c] p-3 rounded-lg border border-white/8 text-[9.5px] font-mono text-gray-300 space-y-1 h-[140px] max-h-[140px] overflow-y-auto overflow-x-hidden scrollbar-thin">
                    <div className="text-gray-500">[10:00:00 Z] INFO: Blockchain node socket listener started successfully.</div>
                    <div className="text-gray-400">[10:00:02 Z] INFO: {selectedChain} Indexer scanning blocks at height #9,382,410...</div>
                    <AnimatePresence mode="popLayout">
                      {webhookLogs.map((log, index) => (
                        <motion.div
                          key={log + index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.15 }}
                          className={`${
                            log.includes('VERIFIED') || log.includes('200')
                              ? 'text-emerald-400 font-semibold'
                              : log.includes('EVENT') || log.includes('DISPATCH')
                              ? 'text-brand-purple'
                              : 'text-gray-400'
                          } leading-normal`}
                        >
                          {log}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Non-custodial Overlay Badge Precisely Matching Theme */}
          <div className="absolute -bottom-4 -left-6 bg-[#7C4DFF] p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/20 transform -rotate-2 hidden md:block z-20">
            <div className="text-[10px] text-purple-200 uppercase font-black tracking-widest mb-1 italic">{t('heroDashboard.coreSecurity')}</div>
            <div className="text-2xl font-bold italic text-white leading-none">{t('heroDashboard.nonCustodial')}</div>
            <div className="text-xs text-purple-200/90 mt-1">{t('heroDashboard.privateKeys')}</div>
          </div>

        </div>

      </div>
    </div>
  </section>
  );
}
