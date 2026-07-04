'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Chatwoot SDK 全局类型声明
declare global {
  interface Window {
    $chatwoot?: {
      setLocale: (locale: string) => void;
    };
  }
}

/**
 * 根据路径判断 Chatwoot locale
 */
function getChatwootLocale(pathname: string): string {
  return pathname.startsWith('/zh') ? 'zh_CN' : 'en';
}

/**
 * Chatwoot 在线客服聊天组件
 * 在页面右下角显示客服聊天窗口，自动跟随网站语言切换
 */
export default function ChatwootWidget() {
  const pathname = usePathname();
  const prevLocaleRef = useRef<string | null>(null);

  // SPA 路由切换时动态更新 Chatwoot 语言
  useEffect(() => {
    const newLocale = getChatwootLocale(pathname);
    if (prevLocaleRef.current === newLocale) return;
    prevLocaleRef.current = newLocale;

    const setLocale = () => window.$chatwoot?.setLocale?.(newLocale);

    // SDK 已就绪则直接设置，否则轮询等待（首次导航时可能出现）
    if (window.$chatwoot?.setLocale) {
      setLocale();
    } else {
      const timer = setInterval(() => {
        if (window.$chatwoot?.setLocale) {
          clearInterval(timer);
          setLocale();
        }
      }, 200);
      setTimeout(() => clearInterval(timer), 5000);
    }
  }, [pathname]);

  return (
    <Script
      id="chatwoot-widget"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            var locale = window.location.pathname.startsWith('/zh') ? 'zh_CN' : 'en';
            window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":"", "locale": locale};
            var d=document,t="script";
            var BASE_URL="https://app.chatwoot.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer=true;
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 'xFnwmwSfWeQZiCXgK1s53dDP',
                baseUrl: BASE_URL
              })
            };
            s.parentNode.insertBefore(g,s);
          })();
        `,
      }}
    />
  );
}
