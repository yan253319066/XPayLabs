import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import { NextIntlClientProvider } from 'next-intl';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { translations } from '../../../lib/translations';

export const metadata: Metadata = {
  title: 'XPay Labs — 服务条款',
  description: '使用 XPay Labs 自托管加密货币支付基础设施软件的服务条款。',
};

export default function ChineseTermsPage() {
  return (
    <NextIntlClientProvider locale="zh" messages={translations.zh}>
      <div className="relative min-h-screen bg-[#040612] text-gray-200">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 hover:text-white transition-colors pb-4 border-b border-white/5 mb-10">
            <ArrowLeft className="w-4 h-4" />
            <Link href="/zh">返回首页</Link>
          </div>

          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded text-xs font-bold text-blue-400 uppercase tracking-wide font-mono mb-6">
            <FileText className="w-3.5 h-3.5" />
            <span>法律文件 — V1.0</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-none mb-8">
            服务条款
          </h1>

          <div className="text-sm text-gray-400 font-sans space-y-6 leading-relaxed">
            <p className="text-gray-500 text-xs font-mono">最后更新日期：2026 年 5 月 22 日</p>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">一、条款接受</h2>
              <p>
                访问、下载或使用 XPay Labs（以下简称"本软件"）即表示您同意受本服务条款（以下简称"条款"）的约束。如果您不同意本条款的任何内容，请勿安装、访问或使用本软件。XPay Labs 保留随时更新本条款的权利，恕不另行通知。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">二、服务描述</h2>
              <p>
                XPay Labs 是一款开源、自托管的软件基础设施，旨在帮助商户和开发者部署自有非托管加密货币支付网关。本软件以容器化微服务的形式提供，商户需在自有服务器上安装部署。XPay Labs 不代任何用户处理、存储或传输支付款项。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">三、软件许可</h2>
              <p>
                XPay Labs 根据专有许可证分发。您被授予一项非排他性、不可转让、可撤销的许可，仅可将本软件用于合法的商业目的。未经 XPay Labs 明确书面同意，严禁将本软件作为竞争产品进行再分发、转授权或转售。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">四、用户责任</h2>
              <div className="space-y-2">
                <p>作为 XPay Labs 的用户，您确认并同意：</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>您对您的加密密钥、助记词和 API 凭证的安全性、备份和保密性负全部责任。</li>
                  <li>您有责任确保您对本软件的使用符合所有适用的当地、国家和国际法律法规，包括但不限于反洗钱（AML）和了解您的客户（KYC）要求。</li>
                  <li>您承担与加密货币交易相关的所有风险，包括市场波动、网络拥塞和区块链重组。</li>
                  <li>您必须维护服务器基础设施的安全性，包括防火墙、访问控制和操作系统级别的补丁更新。</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">五、非托管免责声明</h2>
              <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 text-xs space-y-2">
                <div className="font-bold text-white flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-orange-400" />
                  <span>重要提示</span>
                </div>
                <p>
                  XPay Labs 是严格意义上的非托管基础设施软件。本软件在任何时候均不持有、控制或访问用户资金。所有私钥均在您的本地基础设施上生成和存储，绝不会传输至 XPay Labs 或任何第三方。XPay Labs 无法逆转交易、恢复丢失的密钥或冻结资金。您对您的资产拥有完全且排他性的控制权。
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">六、责任限制</h2>
              <p>
                在适用法律允许的最大范围内，XPay Labs 及其贡献者不对任何间接、附带、特殊、后果性或惩罚性损害赔偿承担责任，包括但不限于利润损失、数据丢失、使用损失、商誉损失或其他无形损失，这些损失源于 (i) 您使用或无法使用本软件；(ii) 任何未经授权访问或篡改您的数据；(iii) 任何加密密钥或资金的丢失；(iv) 任何区块链网络故障、分叉或攻击。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">七、无担保声明</h2>
              <p>
                本软件按"现状"和"可用"基础提供，不附带任何明示或暗示的担保，包括但不限于适销性、特定用途适用性和非侵权性的担保。XPay Labs 不保证本软件不会中断、没有错误或完全安全。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">八、服务终止</h2>
              <p>
                XPay Labs 保留随时终止或暂停您访问本软件及相关服务的权利，恕不另行通知。如果 XPay Labs 认为您的行为违反了本条款或对其他用户、第三方或 XPay Labs 造成损害。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">九、管辖法律</h2>
              <p>
                本条款受新加坡法律管辖并据其解释，不考虑其法律冲突规定。因本条款产生的任何争议应由新加坡法院裁决。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">十、联系我们</h2>
              <p>
                如对本条款有任何疑问，请通过{' '}
                <a href="mailto:legal@xpaylabs.com" className="text-blue-400 hover:text-blue-300 transition-colors">legal@xpaylabs.com</a> 与我们联系。
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
