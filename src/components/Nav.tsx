"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
];

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`capitalize font-medium transition-all ${link.path === pathname ? "text-accent border-b-2 border-accent" : ""}`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default memo(Nav);
