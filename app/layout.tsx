import "./globals.css";

import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nextjs-five-beige.vercel.app/"),
  title: {
    template: "%s | コーポレートサイトテスト",
    default: "コーポレートサイト",
  },
  description: "ディスクリプション",
  robots: {
    index: false, // noindexの設定
  },
  openGraph: {
    title: "コーポレートサイト",
    description: "ディスクリプション",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://portfolio-nextjs-five-beige.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
