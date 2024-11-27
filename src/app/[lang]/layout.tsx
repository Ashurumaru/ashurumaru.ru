import '@/shared/styles/globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';
import { JetBrains_Mono } from 'next/font/google';
import React, { FC } from 'react';

import { i18n, Locale } from '@/shared/config/i18n';
import { jsonLd } from '@/shared/constants/seo-data';

const Header = dynamic(() => import('@/components/header'), { ssr: false });
const PageTransition = dynamic(() => import('@/components/page-transition'), {
  ssr: false,
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
  display: 'swap',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const RootLayout: FC<{
  children: React.ReactNode;
  params: { lang: Locale };
}> = ({ children, params }) => {
  return (
    <html lang={params.lang}>
      <body className={jetBrainsMono.variable}>
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SpeedInsights />
        <Header lang={params.lang} />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
};

export default RootLayout;
