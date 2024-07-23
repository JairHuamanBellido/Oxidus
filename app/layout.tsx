import GoogleAnalytics from "@/src/components/analytics/google-analytics";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import "react-color-palette/css";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oxidus",
  description: "Theme color generator based on Shadcn",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
