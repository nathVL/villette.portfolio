import type { Dictionary } from "@/lib/i18n";

export function Hero({ dict }: { dict: Dictionary }) {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    {dict.hero.title}
                </h1>
                <p className="text-xl text-muted-foreground font-mono">
                    {dict.hero.subtitle}
                </p>
            </div>

            <div className="max-w-2xl flex flex-col gap-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                    {dict.hero.description}
                </p>
                <p>
                    {dict.hero.personalInfo}
                </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
                <a
                    href="mailto:nathanvillette77@gmail.com"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                    {dict.hero.contactBtn}
                </a>
                <a
                    href="https://github.com/nathVL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-medium transition-colors hover:bg-card-hover"
                >
                    {dict.hero.githubBtn}
                </a>
                <a
                    href="https://www.linkedin.com/in/nathan-v-2149972b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-medium transition-colors hover:bg-card-hover"
                >
                    {dict.hero.linkedinBtn}
                </a>
            </div>
        </section>
    );
}
