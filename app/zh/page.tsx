import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import OpenSourceSection from '../../components/OpenSourceSection';
import FeaturesSection from '../../components/FeaturesSection';
import MultiChainSection from '../../components/MultiChainSection';
import DeploymentSection from '../../components/DeploymentSection';
import ApiShowcase from '../../components/ApiShowcase';
import DevExperience from '../../components/DevExperience';
import UseCases from '../../components/UseCases';
import FaqSection from '../../components/FaqSection';
import CtaSection from '../../components/CtaSection';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'XPay Labs — 自托管加密支付基础设施' },
  description: '部署您专属的私有、自托管加密货币支付网关。支持波场 TRON (TRC20 USDT)、所有 EVM 网络以及 SUI。专为开发者打造的非托管安全收款架构。',
  keywords: '加密支付基础设施, 私有自托管加密支付系统, 稳定币收款网关, TRC20支付接口API, EVM支持加密网关, SUI区块链支付接口, 开发者支付底层系统',
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh',
    languages: {
      'x-default': 'https://www.xpaylabs.com/',
      'en-US': 'https://www.xpaylabs.com/',
      'zh-CN': 'https://www.xpaylabs.com/zh',
    },
  },
  openGraph: {
    title: 'XPay Labs — 自托管加密支付基础设施',
    description: '部署您专属的私有、自托管加密货币支付网关。支持波场 TRON (TRC20 USDT)、所有 EVM 网络以及 SUI。专为开发者打造的非托管安全收款架构。',
    url: 'https://www.xpaylabs.com/zh',
  },
  twitter: {
    title: 'XPay Labs — 自托管加密支付基础设施',
    description: '部署您专属的私有、自托管加密货币支付网关。支持波场 TRON (TRC20 USDT)、所有 EVM 网络以及 SUI。专为开发者打造的非托管安全收款架构。',
  },
};

export default function ChineseHomePage() {
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
