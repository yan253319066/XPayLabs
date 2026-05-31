'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Network, Cpu, Check, Zap, 
  HelpCircle, Shield, Sliders
} from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

type NodeChain = 'TRON' | 'ETH' | 'BSC' | 'SUI';

interface ChainCard {
  name: string;
  tag: NodeChain;
  logoText: string;
  tps: string;
  blockTime: string;
  stablecoins: string;
  desc: string;
  highlightColor: string;
}

export default function MultiChainSection() {
  const t = useTranslations('multichain');
  const tL = useTranslations('multiChainLabels');
  const locale = useLocale();
  const [activeChain, setActiveChain] = useState<NodeChain>('TRON');

  const chains: ChainCard[] = [
    {
      name: 'TRON TRC-20',
      tag: 'TRON',
      logoText: 'TRX',
      tps: '2,000 +',
      blockTime: '3 seconds',
      stablecoins: 'USDT (TRC-20), USDC',
      desc: locale === 'zh' 
        ? '全球使用率最高的稳定币传输网络。自研索引扫描器对 TRC-20 划拨做到了极致的低延迟与零丢包。'
        : 'The world most utilized network for stablecoin volume. Optimized scanning guarantees absolute trace validation for TRC-20.',
      highlightColor: 'from-red-500 to-rose-600',
    },
    {
      name: 'Ethereum ERC-20',
      tag: 'ETH',
      logoText: 'ETH',
      tps: '30 + (L1) / 1000+ (L2)',
      blockTime: '12 seconds',
      stablecoins: 'USDT, USDC, FRAX',
      desc: locale === 'zh' 
        ? 'Web3 结算基石。完整集成以太坊主网大额结算能力，支持从二层网络 (Optimism, Arbitrum) 进行支付接收。'
        : 'The foundational settlement ledger of Web3. Fully capture large-value payouts over Ethereum mainnet and L2 scaling rollups.',
      highlightColor: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'BNB Smart Chain',
      tag: 'BSC',
      logoText: 'BNB',
      tps: '150 +',
      blockTime: '3 seconds',
      stablecoins: 'USDT, USDC, FDUSD',
      desc: locale === 'zh' 
        ? '兼顾极致的低交易成本与普遍性。支持最经典的 BEP-20 常规代币支付流与快速资金下发归集。'
        : 'Combines ultra-low transaction overheads with ultimate ubiquity. Perfectly supports all standard BEP-20 payout networks.',
      highlightColor: 'from-amber-400 to-yellow-500',
    },
    {
      name: 'SUI Network',
      tag: 'SUI',
      logoText: 'SUI',
      tps: '120,000 +',
      blockTime: '0.4 seconds',
      stablecoins: 'USDC, USDT, Native SUI',
      desc: locale === 'zh' 
        ? '基于 Move 语言的极速高性能公链。体验接近毫秒级的支付流确认速度。'
        : 'Super-efficient Move-based high performance ledger. Delivers near millisecond payment confirmation frequencies.',
      highlightColor: 'from-cyan-400 to-teal-500',
    }
  ];

  const activeChainData = chains.find(c => c.tag === activeChain) || chains[0];

  return (
    <section id="chains" className="py-20 bg-[#060816] relative overflow-hidden">
      {/* Background Glow Effects precisely matching theme details */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest mb-2 font-mono">
            <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-pulse"></span>
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Interactive layout: left visual diagram, right metrics dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Chain networks physical representation */}
          <div className="lg:col-span-6 flex items-center justify-center py-6">
            <div className="relative w-80 h-80 flex items-center justify-center">
              
              {/* Pulsing ring outer boundary */}
              <div className="absolute w-72 h-72 rounded-full border border-white/5 animate-pulse" />
              <div className="absolute w-52 h-52 rounded-full border border-white/10" />

              {/* Center Core node */}
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-cyan p-[1.5px] z-10 shadow-lg glow-blue">
                <div className="w-full h-full bg-[#0A0D1F] rounded-full flex flex-col items-center justify-center text-center p-2">
                  <Cpu className="w-5 h-5 text-brand-cyan animate-spin-slow mb-1" />
                  <span className="text-[9px] font-mono font-bold text-white tracking-widest leading-none">XPAY</span>
                  <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest">ENGINE</span>
                </div>
              </div>

              {/* Orbits nodes */}
              {/* TRON (top left) */}
              <button 
                onClick={() => setActiveChain('TRON')}
                className={`absolute left-4 top-4 w-14 h-14 rounded-full p-[1px] transition-all hover:scale-110 ${
                  activeChain === 'TRON' ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] scale-105' : 'bg-white/15'
                }`}
              >
                <div className="w-full h-full bg-[#0A0D1F] rounded-full flex flex-col items-center justify-center text-white">
                  <span className="text-[10px] font-bold font-display uppercase tracking-wider text-rose-500">TRX</span>
                  <span className="text-[7px] font-mono text-slate-400">TRC20</span>
                </div>
              </button>

              {/* ETH (top right) */}
              <button 
                onClick={() => setActiveChain('ETH')}
                className={`absolute right-4 top-4 w-14 h-14 rounded-full p-[1px] transition-all hover:scale-110 ${
                  activeChain === 'ETH' ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-105' : 'bg-white/15'
                }`}
              >
                <div className="w-full h-full bg-[#0A0D1F] rounded-full flex flex-col items-center justify-center text-white">
                  <span className="text-[10px] font-bold font-display uppercase tracking-wider text-blue-400">ETH</span>
                  <span className="text-[7px] font-mono text-slate-400">EVM</span>
                </div>
              </button>

              {/* BSC (bottom left) */}
              <button 
                onClick={() => setActiveChain('BSC')}
                className={`absolute left-4 bottom-4 w-14 h-14 rounded-full p-[1px] transition-all hover:scale-110 ${
                  activeChain === 'BSC' ? 'bg-yellow-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105' : 'bg-white/15'
                }`}
              >
                <div className="w-full h-full bg-[#0A0D1F] rounded-full flex flex-col items-center justify-center text-white">
                  <span className="text-[10px] font-bold font-display uppercase tracking-wider text-yellow-500">BSC</span>
                  <span className="text-[7px] font-mono text-slate-400">BEP20</span>
                </div>
              </button>

              {/* SUI (bottom right) */}
              <button 
                onClick={() => setActiveChain('SUI')}
                className={`absolute right-4 bottom-4 w-14 h-14 rounded-full p-[1px] transition-all hover:scale-110 ${
                  activeChain === 'SUI' ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] scale-105' : 'bg-white/15'
                }`}
              >
                <div className="w-full h-full bg-[#0A0D1F] rounded-full flex flex-col items-center justify-center text-white">
                  <span className="text-[10px] font-bold font-display uppercase tracking-wider text-cyan-400">SUI</span>
                  <span className="text-[7px] font-mono text-slate-400">MOVE</span>
                </div>
              </button>

              {/* Interactive Vector lines showing active connection signals */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full stroke-gray-500/10" fill="none">
                  <line x1="56" y1="56" x2="160" y2="160" strokeDasharray={activeChain === 'TRON' ? "4 4" : "none"} strokeWidth={activeChain === 'TRON' ? "2" : "1"} className={activeChain === 'TRON' ? "stroke-rose-500 animate-pulse" : ""} />
                  <line x1="264" y1="56" x2="160" y2="160" strokeDasharray={activeChain === 'ETH' ? "4 4" : "none"} strokeWidth={activeChain === 'ETH' ? "2" : "1"} className={activeChain === 'ETH' ? "stroke-blue-400 animate-pulse" : ""} />
                  <line x1="56" y1="264" x2="160" y2="160" strokeDasharray={activeChain === 'BSC' ? "4 4" : "none"} strokeWidth={activeChain === 'BSC' ? "2" : "1"} className={activeChain === 'BSC' ? "stroke-yellow-500 animate-pulse" : ""} />
                  <line x1="264" y1="264" x2="160" y2="160" strokeDasharray={activeChain === 'SUI' ? "4 4" : "none"} strokeWidth={activeChain === 'SUI' ? "2" : "1"} className={activeChain === 'SUI' ? "stroke-cyan-400 animate-pulse" : ""} />
                </svg>
              </div>

            </div>
          </div>

          {/* Right: Metrics display component */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              
              {/* Double-layered container matching style requirements */}
              <div className="bg-gradient-to-b from-[#5B8CFF]/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-1">
                <div className="p-6 sm:p-8 rounded-[22px] border border-white/10 bg-[#0A0D1F] space-y-6">
                  
                  {/* Active chain specs head */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${activeChainData.highlightColor}`} />
                    <h3 className="text-white text-lg sm:text-xl font-bold font-display tracking-tight">
                      {activeChainData.name}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {activeChainData.desc}
                  </p>

                  {/* Specific network metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[9px] text-slate-400 font-bold font-mono tracking-wider uppercase">{tL('tps')}</span>
                      <p className="text-sm sm:text-base font-bold font-display text-white">{activeChainData.tps}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[9px] text-slate-400 font-bold font-mono tracking-wider uppercase">{tL('blockTime')}</span>
                      <p className="text-sm sm:text-base font-bold font-display text-white">{activeChainData.blockTime}</p>
                    </div>
                  </div>

                  {/* Tracking checklist */}
                  <div className="pt-2 space-y-3">
                    <div className="flex items-start space-x-2.5 text-xs text-slate-400">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t('unification')}</span>
                    </div>
                    <div className="flex items-start space-x-2.5 text-xs text-slate-400">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t('nativeStablecoins')} : <span className="text-brand-cyan font-mono font-semibold">{activeChainData.stablecoins}</span></span>
                    </div>
                    <div className="flex items-start space-x-2.5 text-xs text-slate-400">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t('gasOptimization')}</span>
                    </div>
                    <div className="flex items-start space-x-2.5 text-xs text-slate-400">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t('instantMempool')}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
