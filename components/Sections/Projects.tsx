import type { Dictionary } from "@/lib/i18n";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function Projects({ dict }: { dict: Dictionary }) {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-4">
                {dict.sections.projects}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dict.projects.map((proj) => (
                    <Card key={proj.id} className="flex flex-col gap-4 justify-between group">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg">{proj.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {proj.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-auto pt-4">
                            <div className="flex flex-wrap gap-2">
                                {proj.tech.map((t) => (
                                    <Badge key={t} className="bg-card-border border-transparent group-hover:bg-card-hover transition-colors">{t}</Badge>
                                ))}
                            </div>

                            <a href={proj.link} target={proj.link !== "#" ? "_blank" : undefined} rel={proj.link !== "#" ? "noopener noreferrer" : undefined} className="inline-flex items-center text-sm font-medium text-foreground hover:text-foreground/70 transition-colors w-fit pt-2">
                                {proj.linkBtn}
                                <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
