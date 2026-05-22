'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, Terminal, HelpCircle, 
  Settings2, Activity, BellRing, ChevronRight
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FeaturesSection() {
  const t = useTranslations('features');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  // Map corresponding vector icons for each feature
  const icons = [
    <Layers className="w-5 h-5 text-brand-blue" key="l" />,
    <Terminal className="w-5 h-5 text-brand-purple" key="t" />,
    <Settings2 className="w-5 h-5 text-brand-cyan" key="s" />,
    <HelpCircle className="w-5 h-5 text-brand-blue" key="h" />,
    <Activity className="w-5 h-5 text-brand-purple" key="a" />,
    <BellRing className="w-5 h-5 text-emerald-400" key="b" />,
  ];

  return (
    <section id="features" className="py-20 bg-[#060816] relative overflow-hidden">
      {/* Background Glow Effects precisely matching theme details */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title blocks */}
        <div className="text-center max-w-2xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest mb-2 font-mono">
            <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-pulse"></span>
            <span>Gateway Core</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
            {t('title')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
            {t('subtitle')}
          </p>
        </div>

        {/* 6 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-[#0A0D1F]/50 border border-white/5 hover:border-brand-blue/30 backdrop-blur-md glow-purple transition-all duration-300 overflow-hidden"
            >
              {/* Radial gradient background hover reveal */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/0 via-brand-blue/0 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Icon wrapper */}
                <div className="w-11 h-11 rounded-xl bg-[#5B8CFF]/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-white/12 transition-all">
                  {icons[index % icons.length]}
                </div>

                <div className="space-y-2">
                  <h3 className="text-white text-base sm:text-lg font-bold font-display group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 text-[10px] font-mono font-bold text-slate-500 group-hover:text-brand-blue transition-colors flex items-center space-x-1">
                  <span>INFRA MODULE READY</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
