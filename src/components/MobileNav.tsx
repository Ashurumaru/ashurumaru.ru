"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { memo } from "react";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center" aria-label="Open menu">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center">
                <div className="mt-32 mb-40 text-center">
                    <Link href="/" className="text-4xl font-semibold">
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

