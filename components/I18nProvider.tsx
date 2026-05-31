'use client';

import { NextIntlClientProvider } from 'next-intl';
import { usePathname } from 'next/navigation';
import { translations } from '@/lib/translations';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = pathname.startsWith('/zh') ? 'zh' : 'en';
  const messages = locale === 'zh' ? translations.zh : translations.en;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
