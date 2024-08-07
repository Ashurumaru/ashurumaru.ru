"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { memo } from "react";
import { Locale } from '@/shared/config/i18n';
import { getDictionary } from '@/lib/dictionary';

const MobileNav = async ({ lang }: { lang: Locale }) => {
    const pathname = usePathname();
    const { navigation } = await getDictionary(lang);

    const links = [
        { name: navigation.home, path: `/${lang}/` },
        { name: navigation.services, path: `/${lang}/services` },
        { name: navigation.resume, path: `/${lang}/resume` },
        { name: navigation.work, path: `/${lang}/work` },
    ];

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center" aria-label="Open menu">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center">
                <div className="mt-32 mb-40 text-center">
                    <Link href={`/${lang}`} className="text-4xl font-semibold">
                        Ashurumaru <span className="text-accent">.</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-xl capitalize transition-all ${link.path === pathname ? "text-accent border-b-2 border-accent" : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default memo(MobileNav);
