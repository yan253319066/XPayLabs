'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, RefreshCw, KeyRound, Palette, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function UseCases() {
  const t = useTranslations('useCases');

  // Map icons physically
  const icons = [
    <ShoppingCart className="w-5 h-5 text-brand-blue" key="sc" />,
    <RefreshCw className="w-5 h-5 text-brand-purple" key="rc" />,
    <KeyRound className="w-5 h-5 text-brand-cyan" key="kr" />,
    <Palette className="w-5 h-5 text-emerald-400" key="p" />
  ];

  const items = t.raw('items') as Array<{ title: string; description: string; advantage: string }>;

  return (
    <section className="py-20 bg-[#060816] relative overflow-hidden text-left border-y border-white/5">
      {/* Background Glow Effects precisely matching theme details */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title sections */}
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div 
              key={item.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#0A0D1F]/50 border border-white/5 hover:border-brand-blue/25 backdrop-blur-md glow-purple transition-all duration-300 relative group overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                {/* Header Icon & Title */}
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-bold font-display tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Advantage tag */}
                <div className="pt-3 border-t border-white/5 flex items-center space-x-2 text-xs font-mono font-bold text-brand-cyan">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Advantage: <span className="text-white bg-brand-cyan/10 px-2 py-0.5 rounded-md text-[10px] ml-1">{item.advantage}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
