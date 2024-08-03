import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ashurumaru.vercel.app',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://ashurumaru.vercel.app/en',
                    ru: 'https://ashurumaru.vercel.app/ru',
                },
            },
        },
        {
            url: 'https://ashurumaru.vercel.app/resume',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://ashurumaru.vercel.app/en/resume',
                    ru: 'https://ashurumaru.vercel.app/ru/resume',
                },
            },
        },
        {
            url: 'https://ashurumaru.vercel.app/services',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://ashurumaru.vercel.app/en/services',
                    ru: 'https://ashurumaru.vercel.app/ru/services',
                },
            },
        },
        {
            url: 'https://ashurumaru.vercel.app/work',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://ashurumaru.vercel.app/en/work',
                    ru: 'https://ashurumaru.vercel.app/ru/work',
                },
            },
        },
    ]
}
