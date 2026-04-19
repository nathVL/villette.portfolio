"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export function NavBar() {
    const pathname = usePathname();
    const lang = pathname?.startsWith("/fr") ? "fr" : "en";

    return (
        <header className="sticky top-0 z-50 w-full py-4 px-6 md:px-8 bg-background/80 backdrop-blur-md border-b border-border/10 flex justify-end gap-3">
            <ThemeToggle />
            <div className="flex gap-3 text-sm items-center bg-card border border-border rounded-full px-3 py-1 shadow-sm">
                <Link
                    href="/en"
                    className={`transition-colors ${lang === "en" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground/80"}`}
                >
                    EN
                </Link>
                <span className="w-px h-3 bg-border" />
                <Link
                    href="/fr"
                    className={`transition-colors ${lang === "fr" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground/80"}`}
                >
                    FR
                </Link>
            </div>
        </header>
    );
}
