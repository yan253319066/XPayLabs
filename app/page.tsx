import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OpenSourceSection from '../components/OpenSourceSection';
import FeaturesSection from '../components/FeaturesSection';
import MultiChainSection from '../components/MultiChainSection';
import DeploymentSection from '../components/DeploymentSection';
import ApiShowcase from '../components/ApiShowcase';
import DevExperience from '../components/DevExperience';
import UseCases from '../components/UseCases';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'XPay Labs (xpay) — Self-hosted Crypto Payment Infrastructure' },
  description: 'xpay — self-hosted crypto payment infrastructure. Deploy your own private, non-custodial crypto payment gateway. Supporting TRON (TRC20), all EVM networks, stablecoins, and SUI.',
  keywords: 'xpay, XPay Labs, self-hosted crypto payment infrastructure, crypto payment gateway, stablecoin payment gateway, USDT payment gateway, TRC20 payment gateway, EVM payment gateway, self-hosted BitPay alternative, non-custodial crypto payments, white-label crypto checkout',
  alternates: {
    canonical: 'https://www.xpaylabs.com/',
    languages: {
      'x-default': 'https://www.xpaylabs.com/',
      'en-US': 'https://www.xpaylabs.com/',
      'zh-CN': 'https://www.xpaylabs.com/zh',
    }
  },
  openGraph: {
    title: 'XPay Labs (xpay) — Self-hosted Crypto Payment Infrastructure',
    description: 'xpay — self-hosted crypto payment infrastructure. Deploy your own private, non-custodial crypto payment gateway.',
    url: 'https://www.xpaylabs.com/',
  },
  twitter: {
    title: 'XPay Labs (xpay) — Self-hosted Crypto Payment Infrastructure',
    description: 'xpay — self-hosted crypto payment infrastructure. Deploy your own private, non-custodial crypto payment gateway.',
  }
};

export default function EnglishHomePage() {
  return (
      <div className="relative overflow-hidden selection:bg-brand-blue/30 text-gray-200">
        
        {/* Dynamic Header */}
        <Header />

        {/* Main Structural Layout items */}
        <main className="min-h-screen relative gradient-bg pt-16">
          
          {/* Core Hero Landing segment containing mockup */}
          <HeroSection />

          {/* Cryptographic sovereignty positioning */}
          <OpenSourceSection />

          {/* 6 responsive features grid layout */}
          <FeaturesSection />

          {/* Multi-chain visual layout networks */}
          <MultiChainSection />

          {/* Topology nodes structure workflows */}
          <DeploymentSection />

          {/* API Sandbox curl block snippets */}
          <ApiShowcase />

          {/* Sandbox workspace game panel */}
          <DevExperience />

          {/* Business cases overview cards */}
          <UseCases />

          {/* Client collapsible questions & Answers */}
          <FaqSection />

          {/* High converting final call block */}
          <CtaSection />

        </main>

        {/* Corporate compliant metadata foot layout */}
        <Footer />

      </div>
  );
}
