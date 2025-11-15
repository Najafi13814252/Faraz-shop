import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const iranYekan = localFont({
  src: [
    {
      path: './../../public/fonts/IRANYekan.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/IRANYekan-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
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
    <html lang="en" dir="rtl" className={iranYekan.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
