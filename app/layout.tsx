import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "./_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteDental - AI-Driven Marketing for Dental Clinics",
  description: "Boost your dental practice with ByteDental's AI-powered marketing services. Reach more patients with automated, data-driven campaigns designed specifically for dentists.",
  keywords: "Dental Marketing, Marketing for Dentists, AI Marketing, Dental Advertising, Automated Campaigns",
  robots: "index, follow",
  openGraph: {
    title: "ByteDental - AI-Driven Marketing for Dental Clinics",
    description: "Boost your dental practice with ByteDental's AI-powered marketing services.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
