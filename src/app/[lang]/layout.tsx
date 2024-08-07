import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/shared/styles/globals.css';
import React, { FC } from 'react';
import { Locale, i18n } from '@/shared/config/i18n';

const Header = dynamic(() => import('@/widgets/Header'), { ssr: false });
const PageTransition = dynamic(() => import('@/widgets/PageTransition'), { ssr: false });

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jetbrainsMono',
    display: 'swap',
});

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ashurumaru',
    url: 'https://ashurumaru.vercel.app',
    description: 'Ashurumaru — профессиональный разработчик программного обеспечения, специализирующийся на создании эффективных цифровых решений. Изучите портфолио, чтобы увидеть мои проекты и достижения.',
    publisher: {
        '@type': 'Organization',
        name: 'Ashurumaru',
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ashurumaru.vercel.app/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
    },
};

export const metadata: Metadata = {
    title: 'Ashurumaru',
    description: 'Ashurumaru — профессиональный разработчик программного обеспечения, специализирующийся на создании эффективных цифровых решений. Изучите портфолио, чтобы увидеть мои проекты и достижения.',
    keywords: 'Ashurumaru, разработчик, программное обеспечение, портфолио, веб-разработка, full-stack, backend, frontend, Next.js, TailwindCSS, TypeScript, SEO',
    openGraph: {
        title: 'Ashurumaru - Разработчик ПО',
        description: 'Посетите сайт Ashurumaru, чтобы узнать о последних проектах, навыках и опыте в разработке программного обеспечения.',
        type: 'website',
        url: 'https://ashurumaru.vercel.app',
        siteName: 'Ashurumaru'
    },
};

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }))
}

const RootLayout: FC<{
    children: React.ReactNode, params: { lang: Locale } }> = ({ children, params }) => {
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
        <PageTransition>
            {children}
        </PageTransition>
        </body>
        </html>
    );
};

export default RootLayout;