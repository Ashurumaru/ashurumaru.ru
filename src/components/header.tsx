import Link from 'next/link';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/mobile-nav';

import Nav from './nav';

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}`}>
          <h1 className="text-4xl font-semibold">
            Ashurumaru <span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav lang={lang} />
          <Link href="https://t.me/ashurumaru">
            <Button>{navigation.contact}</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav lang={lang} />
        </div>
      </div>
    </header>
  );
}
