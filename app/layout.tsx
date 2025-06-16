import GoogleAnalytics from "@/src/components/analytics/google-analytics";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import "react-color-palette/css";
import { Toaster } from "@/src/components/shadcn/toaster";
import { ThemeProvider } from "@/src/components/provider/theme-provider";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oxidus",
  description: "Theme color generator for shadcn components",
  openGraph: {
    url: "https://oxidus.vercel.app/",
    type: "website",
    title: "Oxidus",
    description:
      "Create and customize color palettes based on a single color with dark and light theme support, HSL export, color locking, and WCAG contrast checking for accessibility",
    images: "https://oxidus.vercel.app/meta-image.png",
  },
  twitter: {
    title: "Oxidus",
    images: "https://oxidus.vercel.app/meta-image.png",
    card: "summary_large_image",
    description:
      "Create and customize color palettes based on a single color with dark and light theme support, HSL export, color locking, and WCAG contrast checking for accessibility",
    site: "https://oxidus.vercel.app/",
  },
  keywords: ["color", "generator", "shadcn"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
