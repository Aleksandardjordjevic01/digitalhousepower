import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { LanguageProvider } from "@/lib/language-context";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DigitalHousePower",
  description: "DigitalHousePower website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
