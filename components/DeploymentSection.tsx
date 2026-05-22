'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Server, Cpu, Activity, ShieldAlert, CheckCircle2,
  Lock, ArrowDown, Radio, ExternalLink, HelpCircle
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function DeploymentSection() {
  const t = useTranslations('architecture');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const pipeline = [
    {
      id: 'merchant',
      label: t('flow.merchant'),
      desc: t('flow.merchantDesc'),
      icon: <Server className="w-5 h-5 text-brand-blue" />,
      tag: 'CLIENT_ENDPOINT',
      ip: '10.0.1.12',
      status: 'SECURE',
      accentColor: 'border-brand-blue/30 text-brand-blue bg-brand-blue/5'
    },
    {
      id: 'core',
      label: t('flow.core'),
      desc: t('flow.coreDesc'),
      icon: <Cpu className="w-5 h-5 text-brand-purple" />,
      tag: 'CORE_ENGINE',
      ip: '10.0.4.40',
      status: 'UP',
      accentColor: 'border-brand-purple/30 text-brand-purple bg-brand-purple/5'
    },
    {
      id: 'scanner',
      label: t('flow.scanner'),
      desc: t('flow.scannerDesc'),
      icon: <Activity className="w-5 h-5 text-brand-cyan" />,
      tag: 'CHAIN_INDEXER',
      ip: '10.0.8.55',
      status: 'MONITORING',
      accentColor: 'border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5'
    },
    {
      id: 'wallets',
      label: t('flow.wallets'),
      desc: t('flow.walletsDesc'),
      icon: <Lock className="w-5 h-5 text-indigo-400" />,
      tag: 'HSM_VALUATOR',
      ip: '127.0.0.1 (LOCAL)',
      status: 'ISOLATED',
      accentColor: 'border-indigo-400/30 text-indigo-400 bg-indigo-400/5'
    },
    {
      id: 'webhook',
      label: t('flow.webhook'),
      desc: t('flow.webhookDesc'),
      icon: <Radio className="w-5 h-5 text-emerald-400" />,
      tag: 'DISPATCHER_MQ',
      ip: '10.0.9.102',
      status: 'IDLE',
      accentColor: 'border-emerald-400/30 text-emerald-400 bg-emerald-400/5'
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-[#060816] relative overflow-hidden">
      {/* Background Glow Effects precisely matching theme details */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section headlines */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 text-[#7C4DFF] text-xs font-bold uppercase tracking-widest mb-2 font-mono">
            <span className="w-1.5 h-1.5 bg-[#7C4DFF] rounded-full animate-pulse"></span>
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Visual Pipeline topology column */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical path connector trace line */}
          <div className="absolute left-[29px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-blue via-brand-purple block to-emerald-400 opacity-20 pointer-events-none -translate-x-[1px] md:visible" />

          <div className="space-y-12">
            {pipeline.map((node, index) => (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                  hoveredNode === node.id 
                    ? 'bg-[#0A0D1F] border-brand-blue/30 shadow-[0_0_30px_rgba(91,140,255,0.15)] scale-[1.01]' 
                    : 'bg-[#0A0D1F]/40 border-white/5 backdrop-blur-sm'
                }`}
              >
                {/* Node left side: Icon container and Node naming */}
                <div className="flex items-center space-x-4">
                  {/* Glowing Node anchor circle */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 ${node.accentColor} transition-transform duration-300 ${
                    hoveredNode === node.id ? 'scale-105 shadow-[0_0_15px_rgba(91,140,255,0.1)]' : ''
                  }`}>
                    {node.icon}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2.5">
                      <h3 className="text-white text-base font-bold font-display">
                        {node.label}
                      </h3>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 tracking-wider">
                        {node.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-lg leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>

                {/* Node right side: Network diagnostics metadata */}
                <div className="mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/5 flex items-center justify-between sm:justify-end sm:space-x-8 shrink-0 text-right">
                  <div className="text-left sm:text-right space-y-0.5">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">PORT DATA BOUND</div>
                    <div className="text-[11px] font-mono text-slate-400">{node.ip}</div>
                  </div>
                  <div className="space-y-0.5 font-mono">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 text-right">NODE STATE</div>
                    <div className="text-[11px] text-emerald-400 flex items-center justify-end space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-bold tracking-wide">{node.status}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
