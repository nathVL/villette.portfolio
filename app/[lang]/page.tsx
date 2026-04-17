import { getDictionary } from "@/lib/i18n";
import { Hero } from "@/components/Sections/Hero";
import { TechStack } from "@/components/Sections/TechStack";
import { Experience } from "@/components/Sections/Experience";
import { Projects } from "@/components/Sections/Projects";
import { redirect } from "next/navigation";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;

  // Only allow 'en' and 'fr' as valid language parameters
  if (lang !== 'en' && lang !== 'fr') {
    redirect('/en');
  }

  const dict = getDictionary(lang as any);

  return (
    <>
      <Hero dict={dict} />
      <div className="h-px w-full bg-border/40" />
      <TechStack dict={dict} />
      <Projects dict={dict} />
      <Experience dict={dict} />

      <footer className="mt-8 border-t border-border/40 pt-8 pb-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nathan Villette.
      </footer>
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}
