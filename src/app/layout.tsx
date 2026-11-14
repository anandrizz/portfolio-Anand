import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anand Jolly | Full Stack Developer",
  description:
    "Full Stack Developer passionate about building reliable applications, efficient backend systems, and interactive user experiences.",
  keywords: [
    "Anand Jolly",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Next.js",
    "React",
    "Spring Boot",
    "Node.js",
    "AI Applications",
  ],
  authors: [{ name: "Anand Jolly" }],
  creator: "Anand Jolly",
  openGraph: {
    title: "Anand Jolly | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building reliable applications, efficient backend systems, and interactive user experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Jolly | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building reliable applications, efficient backend systems, and interactive user experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-[#f3f4f6] antialiased selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
