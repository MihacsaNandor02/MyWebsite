import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Future Builds — Agenție Web Design Târgu Mureș",
    template: "%s | Future Builds",
  },
  description: "Agenție web din Târgu Mureș: creare site web, optimizare SEO, redesign website. Site-uri care aduc clienți din Google.",
  metadataBase: new URL("https://futurebuilds.ro"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
