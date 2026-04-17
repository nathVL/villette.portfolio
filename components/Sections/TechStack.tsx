import type { Dictionary } from "@/lib/i18n";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function TechStack({ dict }: { dict: Dictionary }) {
    const cats = [
        { key: "data", data: dict.techStack.data },
        { key: "development", data: dict.techStack.development }
    ];

    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-4">
                {dict.sections.techStack}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cats.map((cat) => (
                    <Card key={cat.key} className="flex flex-col gap-4">
                        <h3 className="font-medium text-lg leading-none">{cat.data.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.data.items.map((item) => (
                                <Badge key={item}>{item}</Badge>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
