'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Cpu, RotateCw, Globe, ArrowRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale() as 'en' | 'zh';
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Compute language toggle link base
  const getLanguageTogglePath = () => {
    if (pathname === '/docs') return '/zh/docs';
    if (pathname === '/zh/docs') return '/docs';
    if (pathname === '/zh') return '/';
    return '/zh';
  };

  const navItems = [
    { label: t('features'), href: '#features' },
    { label: t('chains'), href: '#chains' },
    { label: t('architecture'), href: '#architecture' },
    { label: t('api'), href: '#api' },
    { label: t('devXp'), href: '#dev-experience' },
    { label: t('faq'), href: '#faq' },
    { label: t('docs'), href: pathname.includes('/docs') ? '#' : '/docs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={locale === 'zh' ? '/zh' : '/'} className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-200">
                <span className="font-extrabold text-white text-xs tracking-tighter">XP</span>
              </div>
              <span className="text-white font-display font-black text-xl tracking-tight group-hover:text-brand-cyan transition-colors italic">
                XPay <span className="text-brand-blue not-italic font-bold">Labs</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-white font-sans text-sm font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Lang Swapper */}
            <Link
              href={getLanguageTogglePath()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-brand-blue/30 text-xs font-medium transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-brand-blue" />
              <span>{locale === 'en' ? '中文' : 'English'}</span>
            </Link>

            {/* CTA Button */}
            <Link
              href="#dev-experience"
              className="px-5 py-2 bg-white text-[#060816] rounded-full text-xs font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center tracking-tight"
            >
              {t('cta')}
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href={getLanguageTogglePath()}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-brand-blue/30 text-xs font-medium transition-all"
            >
              <Globe className="w-3 h-3 text-brand-blue" />
              <span>{locale === 'en' ? '中' : 'EN'}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-[#090b1c]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/5 flex flex-col space-y-3 px-3">
                <Link
                  href="#dev-experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold text-sm transition-all"
                >
                  {t('cta')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
