import type { Metadata } from "next";
import CursorHighlight from "@/components/custom/CursorHighlight";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-200">
        <CursorHighlight />
        {children}
      </body>
    </html>
  );
}

