import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: '隐私政策',
  description: 'XPay Labs 自托管加密货币支付基础设施软件的隐私政策。',
  alternates: {
    canonical: 'https://www.xpaylabs.com/zh/privacy',
    languages: {
      'x-default': 'https://www.xpaylabs.com/privacy',
      'en-US': 'https://www.xpaylabs.com/privacy',
      'zh-CN': 'https://www.xpaylabs.com/zh/privacy',
    },
  },
  openGraph: {
    title: 'XPay Labs — 隐私政策',
    url: 'https://www.xpaylabs.com/zh/privacy',
  },
};

export default function ChinesePrivacyPage() {
  return (
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
            隐私政策
          </h1>

          <div className="text-sm text-gray-400 font-sans space-y-6 leading-relaxed">
            <p className="text-gray-500 text-xs font-mono">
              最后更新日期：2026 年 5 月 22 日
            </p>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                一、引言
              </h2>
              <p>
                XPay
                Labs（以下简称"我们"）致力于保护您的隐私。本隐私政策说明了在您访问我们的网站或使用我们的软件时，我们如何收集、使用、披露和保护您的信息。请仔细阅读本政策。使用我们的网站或软件即表示您同意本文所述的做法。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                二、我们收集的信息
              </h2>
              <div className="space-y-2">
                <p className="font-medium text-gray-300">您主动提供的信息：</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>联系信息：</strong>
                    当您通过电子邮件或我们的网站联系我们时，我们可能会收集您的姓名、电子邮件地址以及您选择在信息中包含的任何内容。
                  </li>
                  <li>
                    <strong>通信记录：</strong>我们可能会保留与您的通信记录。
                  </li>
                </ul>
              </div>
              <div className="space-y-2 mt-3">
                <p className="font-medium text-gray-300">自动收集的信息：</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>使用数据：</strong>
                    我们可能会收集您与我们网站互动的方式，包括访问的页面、停留时间和来源
                    URL。
                  </li>
                  <li>
                    <strong>设备数据：</strong>
                    我们可能会收集有关您设备的信息，包括浏览器类型、操作系统和
                    IP 地址。
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                三、我们如何使用您的信息
              </h2>
              <p>我们收集的信息用于以下目的：</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>提供、运营和维护我们的网站和软件。</li>
                <li>回复您的咨询、支持请求或评论。</li>
                <li>改进我们的网站、软件和用户体验。</li>
                <li>检测、预防和解决技术问题或安全漏洞。</li>
                <li>遵守法律义务并执行我们的服务条款。</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                四、我们不会收集的信息
              </h2>
              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-xs space-y-2">
                <div className="font-bold text-white flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-green-400" />
                  <span>重要提示 — 设计使然</span>
                </div>
                <p>
                  由于 XPay Labs
                  是自托管软件，我们永远无法访问：您的加密私钥、助记词、商户钱包地址、交易数据、客户支付信息或您在自托管部署中处理的任何数据。所有敏感数据始终保留在您的基础设施上，绝不会传输至
                  XPay Labs 服务器。
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                五、数据共享与披露
              </h2>
              <p>
                我们不会向第三方出售、交易或以其他方式转让您的个人信息。我们仅在以下情况共享信息：
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>获得您的明确同意。</li>
                <li>遵守适用的法律、法规或法律程序。</li>
                <li>
                  保护我们的权利、财产或安全，以及我们的用户或他人的权利、财产或安全。
                </li>
                <li>
                  与协助我们运营网站的服务提供商（例如托管服务商）共享，并受严格的保密协议约束。
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                六、数据安全
              </h2>
              <p>
                我们采用行业标准的安全措施来保护您的信息，包括传输加密（TLS）和适用情况下的静态加密。然而，没有任何传输或存储方式是
                100% 安全的。我们无法保证您数据的绝对安全。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                七、Cookie 使用
              </h2>
              <p>
                我们的网站可能会使用 Cookie
                和类似的跟踪技术来增强您的浏览体验。您可以通过浏览器设置控制
                Cookie 偏好。禁用 Cookie 可能会影响网站的某些功能。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                八、您的权利
              </h2>
              <p>根据您所在司法管辖区的法律，您可能拥有以下权利：</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>访问我们持有的关于您的个人信息。</li>
                <li>要求更正或删除您的个人信息。</li>
                <li>反对或限制对您个人信息的处理。</li>
                <li>在基于同意的情况下随时撤回同意。</li>
                <li>向数据保护机构提出投诉。</li>
              </ul>
              <p className="mt-2">
                如需行使这些权利，请通过下方电子邮件地址与我们联系。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                九、第三方链接
              </h2>
              <p>
                我们的网站可能包含第三方网站或服务的链接。我们不对这些第三方的隐私实践负责。我们建议您在提供任何信息之前查阅他们的隐私政策。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                十、政策变更
              </h2>
              <p>
                我们可能会不时更新本隐私政策。变更将发布在此页面上，并附有更新的"最后更新日期"。我们建议您定期查阅本政策。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-medium text-white">
                十一、联系我们
              </h2>
              <p>
                如对本隐私政策有任何疑问或顾虑，请通过
                <a
                  href="mailto:privacy@xpaylabs.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  privacy@xpaylabs.com
                </a>
                与我们联系。
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>

  );
}
