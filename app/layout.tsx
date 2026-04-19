import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavBar } from "@/components/NavBar";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Villette | Data Engineer & AI Enthusiast",
  description: "Portfolio and technical proof of concepts by Nathan Villette.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="7746cbc7-78e6-4bf9-8c83-5eb12ce86810"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent selection:text-accent-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="mx-auto w-full max-w-4xl px-6 md:px-8 py-12 md:py-20 flex-grow flex flex-col gap-16 md:gap-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
