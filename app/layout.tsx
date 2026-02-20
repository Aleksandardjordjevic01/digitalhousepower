import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
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
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <Script 
          src="//code.tidio.co/b1ggbbem1abnyct8ygmohqzfyyongwfz.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
