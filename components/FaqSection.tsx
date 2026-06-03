'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = t.raw('items') as Array<{ q: string; a: string }>;

  // Structured Organization and FAQ Schema JSON-LD metadata
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "XPay Labs",
    "alternateName": "xpay",
    "url": "https://www.xpaylabs.com",
    "logo": "https://www.xpaylabs.com/logo.png",
    "description": "Self-hosted crypto payment infrastructure for TRON, EVM chains, and SUI."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-[#060816] relative overflow-hidden text-left border-t border-white/5">
      {/* Injecting JSON-LD schema tags securely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative side light glow precisely matching the team theme */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header headings */}
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

        {/* Collapsible Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-white/5 bg-[#0A0D1F]/50 backdrop-blur-sm overflow-hidden transition-all duration-300"
              >
                {/* Trigger head */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left text-white hover:text-[#5B8CFF] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold font-display pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-gray-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#5B8CFF]" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Answer description block */}
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-white/[0.02]">
                    <p className="pt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
