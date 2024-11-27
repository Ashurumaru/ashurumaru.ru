import type { Metadata } from 'next';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Ashurumaru',
  'url': 'https://ashurumaru.vercel.app',
  'description':
    'Ashurumaru — профессиональный разработчик программного обеспечения, специализирующийся на создании эффективных цифровых решений. Изучите портфолио, чтобы увидеть мои проекты и достижения.',
  'publisher': {
    '@type': 'Organization',
    'name': 'Ashurumaru',
  },
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://ashurumaru.vercel.app/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const metadata: Metadata = {
  title: 'Ashurumaru',
  description:
    'Ashurumaru — профессиональный разработчик программного обеспечения, специализирующийся на создании эффективных цифровых решений. Изучите портфолио, чтобы увидеть мои проекты и достижения.',
  keywords:
    'Ashurumaru, разработчик, программное обеспечение, портфолио, веб-разработка, full-stack, backend, frontend, Next.js, TailwindCSS, TypeScript, SEO',
  openGraph: {
    title: 'Ashurumaru - Разработчик ПО',
    description:
      'Посетите сайт Ashurumaru, чтобы узнать о последних проектах, навыках и опыте в разработке программного обеспечения.',
    type: 'website',
    url: 'https://ashurumaru.vercel.app',
    siteName: 'Ashurumaru',
    images: [
      {
        url: 'https://ashurumaru.vercel.app/assets/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Ashurumaru - Разработчик ПО',
      },
    ],
  },
};