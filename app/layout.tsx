import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

// Load VT323 font
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Kerrick Truong",
  description: "Kerrick Truong Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={vt323.variable}>
      <body className="font-[var(--font-vt323)]">{children}</body>
    </html>
  );
}
