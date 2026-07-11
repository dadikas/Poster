import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poster Studio",
  description: "Create bilingual recruitment posters from JSON data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
