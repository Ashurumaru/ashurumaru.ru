/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import React, { FC } from 'react';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const PageTransition = dynamic(() => import('@/components/PageTransition'), { ssr: false });

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jetbrainsMono',
    display: 'swap',  // Оптимизация для шрифтов
});

export const metadata: Metadata = {
    title: 'Ashurumaru',
    description: 'Ashurumaru site.',
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://api.github.com" />
            <link rel="dns-prefetch" href="https://api.github.com" />
            <meta name="description" content="Ashurumaru — профессиональный разработчик программного обеспечения, специализирующийся на создании эффективных цифровых решений. Изучите портфолио, чтобы увидеть мои проекты и достижения." />
            <meta name="keywords" content="Ashurumaru, разработчик, программное обеспечение, портфолио, веб-разработка, full-stack, backend, frontend, Next.js, TailwindCSS, TypeScript, SEO" />
            <meta property="og:title" content="Ashurumaru - Разработчик ПО" />
            <meta property="og:description" content="Посетите сайт Ashurumaru, чтобы узнать о последних проектах, навыках и опыте в разработке программного обеспечения." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ashurumaru.vercel.app" />
            <meta property="og:site_name" content="Ashurumaru" />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "url": "https://ashurumaru.vercel.app",
                    "name": "Ashurumaru",
                    "description": "Ashurumaru — профессиональный разработчик программного обеспечения, специализирующийся на создании эффективных цифровых решений.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Ashurumaru"
                    },
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://ashurumaru.vercel.app/?s={search_term_string}",
                        "query-input": "required name=search_term_string"
                    },
                })}
            </script>
        </Head>

        <body className={jetBrainsMono.variable}>
        <SpeedInsights />
        <Header />
        <PageTransition>
            {children}
        </PageTransition>
        </body>
        </html>
    );
};

export default RootLayout;
