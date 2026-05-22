'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CtaSection() {
  const t = useTranslations('cta');

  return (
    <section className="py-20 relative overflow-hidden bg-[#060816]">
      {/* Background Glow Effects precisely matching theme details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Double-layered card matching the design theme exactly */}
        <div className="bg-gradient-to-b from-[#5B8CFF]/10 to-transparent p-[1.5px] rounded-[32px] border border-white/5 backdrop-blur-sm">
          <div className="relative rounded-[30px] border border-white/10 overflow-hidden bg-[#0A0D1F] p-8 sm:p-12 text-center shadow-2xl">
            
            {/* Inner mesh decorator glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C4DFF]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-6">
              
              {/* Visual key indicator */}
              <div className="w-12 h-12 rounded-2xl bg-[#5B8CFF]/5 border border-[#5B8CFF]/10 mx-auto flex items-center justify-center">
                <Terminal className="w-5 h-5 text-[#5B8CFF]" />
              </div>

              {/* Slogan headers */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
                {t('title')}
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
                {t('subtitle')}
              </p>

              {/* Launchers split button row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
                <Link
                  href="https://t.me/OS_Blockchain"
                  className="px-8 py-3 bg-[#5B8CFF] hover:bg-[#4A7CEE] text-slate-900 border border-[#8FB3FF] transition-all duration-300 font-extrabold rounded-full inline-flex items-center justify-center shadow-[0_0_20px_rgba(91,140,255,0.4)] hover:shadow-[0_0_30px_rgba(91,140,255,0.6)]"
                >
                  <span>{t('btnDeploy')}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
