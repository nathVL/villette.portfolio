import type { Dictionary } from "@/lib/i18n";
import { Card } from "../ui/Card";

export function Certifications({ dict }: { dict: Dictionary }) {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-4">
                {dict.sections.certifications}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dict.certifications.map((cert) => (
                    <Card key={cert.id} className="flex flex-col gap-4 justify-between group">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between gap-4">
                                <h3 className="font-semibold text-lg">{cert.title}</h3>
                                <span className="text-sm font-mono text-accent font-bold">
                                    {cert.score}
                                </span>
                            </div>
                            <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                        </div>

                        <div className="mt-auto pt-2">
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-foreground hover:text-foreground/70 transition-colors w-fit"
                            >
                                {cert.linkText}
                                <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
