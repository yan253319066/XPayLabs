'use client';

import React from 'react';
import { Shield, Key, Eye, HelpCircle, HardDrive, Infinity } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function OpenSourceSection() {
  const t = useTranslations('openSource');

  return (
    <section className="py-20 bg-[#060816] border-y border-white/5 relative overflow-hidden">
      {/* Background Glow Effects from the team theme */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-12">
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

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-xl bg-[#0A0D1F]/50 border border-white/5 hover:border-brand-blue/20 transition-all group flex gap-4">
            <div className="mt-1 w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0 border border-brand-blue/10 group-hover:bg-brand-blue/10 transition-colors">
              <Shield className="w-5 h-5 text-brand-blue" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-white text-base font-bold font-display">
                {t('point1Title')}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                {t('point1Text')}
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-xl bg-[#0A0D1F]/50 border border-white/5 hover:border-brand-purple/20 transition-all group flex gap-4">
            <div className="mt-1 w-10 h-10 rounded-lg bg-brand-purple/5 flex items-center justify-center shrink-0 border border-[#7C4DFF]/10 group-hover:bg-brand-purple/10 transition-colors">
              <Eye className="w-5 h-5 text-brand-purple" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-white text-base font-bold font-display">
                {t('point2Title')}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                {t('point2Text')}
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-xl bg-[#0A0D1F]/50 border border-white/5 hover:border-brand-cyan/20 transition-all group flex gap-4">
            <div className="mt-1 w-10 h-10 rounded-lg bg-brand-cyan/5 flex items-center justify-center shrink-0 border border-brand-cyan/10 group-hover:bg-brand-cyan/10 transition-colors">
              <HardDrive className="w-5 h-5 text-brand-cyan" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-white text-base font-bold font-display">
                {t('point3Title')}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                {t('point3Text')}
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-xl bg-[#0A0D1F]/50 border border-white/5 hover:border-emerald-500/20 transition-all group flex gap-4">
            <div className="mt-1 w-10 h-10 rounded-lg bg-emerald-500/5 flex items-center justify-center shrink-0 border border-emerald-500/10 group-hover:bg-emerald-500/10 transition-colors">
              <Infinity className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-white text-base font-bold font-display">
                {t('point4Title')}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                {t('point4Text')}
              </p>
            </div>
          </div>

        </div>

        {/* Statistics Bar */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-[#0A0D1F]/50 border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-cyan font-mono">20+</div>
              <div className="text-xs text-slate-400 mt-1">Supported EVM Chains</div>
            </div>
            <div className="p-5 rounded-xl bg-[#0A0D1F]/50 border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-blue font-mono">1-6s</div>
              <div className="text-xs text-slate-400 mt-1">Mempool Detection Speed</div>
            </div>
            <div className="p-5 rounded-xl bg-[#0A0D1F]/50 border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">0%</div>
              <div className="text-xs text-slate-400 mt-1">Gateway Transaction Fees</div>
            </div>
            <div className="p-5 rounded-xl bg-[#0A0D1F]/50 border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-purple font-mono">$6k+</div>
              <div className="text-xs text-slate-400 mt-1">Annual Savings vs BitPay</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
