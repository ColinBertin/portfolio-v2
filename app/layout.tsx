import type { Metadata } from "next";
import { Libre_Franklin, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-franklin",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colin Bertin - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${libreFranklin.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
