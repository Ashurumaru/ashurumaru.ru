'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useEffect, useState } from 'react';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';

const Nav = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState({
    home: '',
    services: '',
    resume: '',
    work: '',
  });

  useEffect(() => {
    const fetchNavigation = async () => {
      const dict = await getDictionary(lang);
      setNavigation(dict.navigation);
    };

    fetchNavigation();
  }, [lang]);

  const links = [
    { name: navigation.home, path: `/${lang}/` },
    { name: navigation.services, path: `/${lang}/services` },
    { name: navigation.resume, path: `/${lang}/resume` },
    { name: navigation.work, path: `/${lang}/work` },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`capitalize font-medium transition-all ${link.path === pathname ? 'text-accent border-b-2 border-accent' : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default memo(Nav);
