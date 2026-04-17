import type { Dictionary } from "@/lib/i18n";

export function Experience({ dict }: { dict: Dictionary }) {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-4">
                {dict.sections.experience}
            </h2>

            <div className="flex flex-col gap-8">
                {dict.experience.map((item) => (
                    <div key={item.id} className="relative pl-6 sm:pl-8">
                        {/* Timeline line */}
                        <div className="absolute left-0 top-1.5 h-full w-px bg-border group-last:h-0" />
                        {/* Timeline dot */}
                        <div className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                                <h3 className="text-lg font-medium leading-none text-foreground">{item.role}</h3>
                                <span className="text-sm text-muted-foreground font-mono bg-muted/30 px-2 py-0.5 rounded-md w-fit border border-border">
                                    {item.period}
                                </span>
                            </div>
                            <div className="text-foreground/80 font-medium">{item.company}</div>
                            <p className="text-muted-foreground mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
