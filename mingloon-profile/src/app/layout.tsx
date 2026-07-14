import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gwee Ming Loon | Platform Engineer",
  description:
    "Platform Engineer and DevOps Engineer based in Kuala Lumpur, focused on cloud infrastructure, reliability, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
