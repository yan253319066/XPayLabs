'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale() as 'en' | 'zh';
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('');

  const homePath = locale === 'zh' ? '/zh' : '/';
  const isDocsPage = pathname.includes('/docs');

  // Compute language toggle link base
  const getLanguageTogglePath = () => {
    if (pathname === '/docs') return '/zh/docs';
    if (pathname === '/zh/docs') return '/docs';
    if (pathname === '/zh') return '/';
    return '/zh';
  };

  const navItems = [
    { label: t('features'), href: isDocsPage ? `${homePath}#features` : '#features' },
    { label: t('chains'), href: isDocsPage ? `${homePath}#chains` : '#chains' },
    { label: t('architecture'), href: isDocsPage ? `${homePath}#architecture` : '#architecture' },
    { label: t('api'), href: isDocsPage ? `${homePath}#api` : '#api' },
    { label: t('devXp'), href: isDocsPage ? `${homePath}#dev-experience` : '#dev-experience' },
    { label: t('faq'), href: isDocsPage ? `${homePath}#faq` : '#faq' },
    { label: t('docs'), href: locale === 'zh' ? '/zh/docs' : '/docs' },
  ];

  // Scroll spy effect to highlight active sections on home page scroll
  useEffect(() => {
    if (isDocsPage) {
      return;
    }

    const sectionIds = ['features', 'chains', 'architecture', 'api', 'dev-experience', 'faq'];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveHash('');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize asynchronously to avoid synchronous effect state warning
    const initTimer = setTimeout(() => {
      handleHashChange();
      handleScroll();
    }, 0);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initTimer);
    };
  }, [isDocsPage]);

  // Active status helper
  const isActive = (itemHref: string) => {
    if (isDocsPage) {
      return itemHref.includes('/docs');
    }
    if (itemHref.startsWith('#')) {
      return activeHash === itemHref;
    }
    if (itemHref.includes('#')) {
      const parts = itemHref.split('#');
      return activeHash === `#${parts[parts.length - 1]}`;
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={locale === 'zh' ? '/zh' : '/'} className="flex items-center space-x-1.5 group">
              <Image src="/logo.png" alt="XPay Labs" width={64} height={64} className="w-16 h-16 object-contain" />
              <span className="text-white font-display font-black text-xl tracking-tight group-hover:text-brand-cyan transition-colors italic">
                XPay <span className="text-brand-blue not-italic font-bold">Labs</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-1.5 px-0.5 font-sans text-sm font-medium transition-colors cursor-pointer ${
                    active 
                      ? 'text-[#5B8CFF]' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_8px_rgba(91,140,255,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
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
              href={isDocsPage ? `${homePath}#dev-experience` : '#dev-experience'}
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
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                      active 
                        ? 'text-[#5B8CFF] bg-[#5B8CFF]/5 font-semibold' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
               <div className="pt-3 border-t border-white/5 flex flex-col space-y-3 px-3">
                <Link
                  href={isDocsPage ? `${homePath}#dev-experience` : '#dev-experience'}
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
