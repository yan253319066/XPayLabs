import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, Shield, Book, Info, Copy, Check, Server, HardDrive, Key, ArrowLeft, RefreshCw, Layers } from 'lucide-react';
import { NextIntlClientProvider } from 'next-intl';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { translations } from '../../../lib/translations';

export const metadata: Metadata = {
  title: 'XPay Labs — 自托管开发部署技术文档',
  description: '快速将自托管的 XPay Labs 区块链收银网关集群发布至您的服务器之部署教程。涵盖 Docker 编排、环境配置与 API 数据参考说明。',
};

export default function ChineseDocsPage() {
  return (
    <NextIntlClientProvider locale="zh" messages={translations.zh}>
      <div className="relative min-h-screen bg-[#040612] text-gray-200">
        
        {/* Shared Nav Head */}
        <Header />

      {/* Docs Layout spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar Guide Links (col span 3) */}
          <aside className="lg:col-span-3 space-y-6 text-left hidden lg:block">
            <div className="space-y-1.5 p-1">
              <h3 className="text-xs uppercase font-bold tracking-wider text-gray-500 font-mono">
                开始使用
              </h3>
              <ul className="space-y-1 text-sm font-sans">
                <li><a href="#introduction" className="block py-1.5 text-brand-cyan font-semibold border-l-2 border-brand-cyan pl-3">产品简述 Introduction</a></li>
                <li><a href="#architecture" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">非托管物理架构</a></li>
                <li><a href="#quickstart" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">极速起步配置指南</a></li>
              </ul>
            </div>

            <div className="space-y-1.5 p-1">
              <h3 className="text-xs uppercase font-bold tracking-wider text-gray-500 font-mono">
                核心集成
              </h3>
              <ul className="space-y-1 text-sm font-sans">
                <li><a href="#docker" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">Docker 极速部署</a></li>
                <li><a href="#env-vars" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">环境变量参考说明</a></li>
                <li><a href="#webhooks-doc" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">HMAC Webhook 事件验签</a></li>
              </ul>
            </div>
          </aside>

          {/* Main Docs content area (col span 9) */}
          <main className="lg:col-span-9 space-y-10 text-left border-l border-white/5 lg:pl-10">
            
            {/* Quick Back Header */}
            <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 hover:text-white transition-colors pb-4 border-b border-white/5">
              <ArrowLeft className="w-4 h-4" />
              <Link href="/zh">返回商户控制台</Link>
            </div>

            {/* Content: Intro */}
            <section id="introduction" className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 rounded text-xs font-bold text-brand-cyan uppercase tracking-wide font-mono">
                <Book className="w-3.5 h-3.5" />
                <span>技术标准 V1.0</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-none">
                自托管底层部署开发手册
              </h1>
              
              <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                本部署技术文档将指导您在企业自有或隔离服务器集群（如 VPS 虛拟机、Cloudflare Pages、Vercel Serverless 及 Kubernetes 等 Docker 环境）中极速启动 XPay Labs 收钱网关并集成到业务中。
              </p>
            </section>

            {/* Quickstart segment */}
            <section id="quickstart" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white">
                非托管安全与地址派生机制
              </h2>
              <p className="text-[#9ea4c2] text-sm leading-relaxed font-sans">
                XPay Labs 网关层完美基于 HD (Hierarchical Deterministic) 钱包架构。当系统接收到产生收银 Invoice 请求时，网关利用在容器中动态衍生出单次充值公钥。无需向公共云盘备份明文私钥。
              </p>
              <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 text-xs text-gray-400 space-y-1">
                <div className="font-bold text-white flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-orange-400" />
                  <span>核心安全申明</span>
                </div>
                <div>XPay Labs 绝不会将您的助记词、或钱包私钥同步到任何公共远程数据库中。一切密钥运行完全限定在您自营的主机物理沙盒层中。请确保离线保管好备份文件。</div>
              </div>
            </section>

            {/* Docker setups */}
            <section id="docker" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white">
                Docker Compose 极速编排配置
              </h2>
              <p className="text-[#9ea4c2] text-sm font-sans">
                复制以下容器配置文件至您服务器下的工作目录并以此拉起镜像服务：
              </p>

              <div className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 relative">
                <pre>
{`version: '3.8'
services:
  xpay-core:
    image: xpaylabs/core:v1.0.0
    container_name: xpay_core_network
    restart: always
    ports:
      - "3010:3010"
    environment:
      - NODE_ENV=production
      - XPAY_KEY_SEED=您生成的防托管钱包离线助记词短语
      - XPAY_TRON_PROVIDER=https://api.trongrid.io
      - XPAY_EVM_PROVIDER=https://eth-mainnet.g.alchemy.com/v2/您的API密钥
      - XPAY_HMAC_SECRET=您指定的Webhook安全HMAC校验秘钥
    volumes:
      - ./data:/app/db`}
                </pre>
              </div>
            </section>

            {/* Env parameters guide */}
            <section id="env-vars" className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white">
                基础运行环境变量支持参考
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse border border-white/5">
                  <thead>
                    <tr className="bg-[#0b0e25] border-b border-white/8 text-gray-400">
                      <th className="p-3">环境变量字段</th>
                      <th className="p-3">类型</th>
                      <th className="p-3">必须配置</th>
                      <th className="p-3">功能特性及用途描述</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr>
                      <td className="p-3 font-bold text-brand-cyan">XPAY_KEY_SEED</td>
                      <td className="p-3">String</td>
                      <td className="p-3 text-red-400">是 (MANDATORY)</td>
                      <td className="p-3 font-sans">高度安全的 bip39 通用助记词字串，网关依靠其安全派生数以万计不重叠的顾客账单临时付款地址。</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-brand-cyan">XPAY_HMAC_SECRET</td>
                      <td className="p-3">String</td>
                      <td className="p-3 text-red-400">是 (MANDATORY)</td>
                      <td className="p-3 font-sans">用于对发送给您商户服务器的 Webhook 数据包进行 SHA256 HMAC 强加密签名，防止伪造通知。</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-brand-cyan">XPAY_TRON_RPC</td>
                      <td className="p-3">URL</td>
                      <td className="p-3 text-gray-500">非必须</td>
                      <td className="p-3 font-sans">用于波场网络块扫描的节点 RPC 代理。默认回退至波场官方 Trongrid 链路。</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-brand-cyan">XPAY_EVM_RPC</td>
                      <td className="p-3">URL</td>
                      <td className="p-3 text-gray-500">非必须</td>
                      <td className="p-3 font-sans">标准的以太坊或者 L2 系列节点调用 API，用于验证 ERC-20 稳定币到账。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </main>

        </div>
      </div>

        {/* Shared Foot */}
        <Footer />

      </div>
    </NextIntlClientProvider>
  );
}
