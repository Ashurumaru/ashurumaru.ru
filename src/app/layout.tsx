/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const PageTransition = dynamic(() => import('@/components/PageTransition'), { ssr: false });

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
    title: "Ashurumaru",
    description: "Ashurumaru site.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://api.github.com"/>
            <link rel="dns-prefetch" href="https://api.github.com"/>

            <meta name="description" content="Ashurumaru site description"/>
            <meta property="og:title" content="Ashurumaru"/>
            <meta property="og:description" content="Ashurumaru site."/>
            <meta property="og:type" content="website"/>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Website",
                    "url": "https://yourwebsite.com",
                    "name": "Ashurumaru",
                    "description": "Ashurumaru site description",
                })}
            </script>
        </Head>
        <body className={jetBrainsMono.variable}>
        <Header/>
        <PageTransition>
            {children}
        </PageTransition>
        </body>
        </html>
    );
}
