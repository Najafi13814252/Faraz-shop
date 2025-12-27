import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import HeaderTop from "@/components/navbar/HeaderTop";
import Footer from "@/components/Footer";

const BYekan = localFont({
  src: [
    {
      path: './../../public/fonts/FontBartar-BYekan.woff',
    }
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "فراز شاپ",
  description: "خرید و مقایسه تخصصی موبایل و لوازم الکترونیکی"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={BYekan.className}>
      <body>
        <HeaderTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
