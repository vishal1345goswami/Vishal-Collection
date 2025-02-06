"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Space Things - Innovative Tech Solutions for Businesses</title>
        <meta
          name="description"
          content="Space Things는 비콘 기술, BLE, GPS 및 데이터 분석과 같은 첨단 기술 솔루션을 제공하여 비즈니스 환경을 최적화하고 고객 경험을 향상시킵니다."
        />
        <meta name="application-name" content="Space Things" />
        <link
          rel="icon"
          href="https://spacethings.vercel.app/assets/headerlogo2.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://spacethings.vercel.app/assets/headerlogo2.png"
        />
        <meta
          name="keywords"
          content="Space Things, 기술 솔루션, 비콘 기술, BLE, GPS, 데이터 분석, 비즈니스 최적화"
        />

        {/* Open Graph Metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spacethings.co.kr" />
        <meta
          property="og:title"
          content="Space Things - Innovative Tech Solutions for Businesses"
        />
        <meta
          property="og:description"
          content="Space Things의 지능형 기술 솔루션을 통해 자동화를 위한 WATSSUE 및 최적화된 매장 관리를 위한 DEJANGBU를 경험하고 비즈니스 환경에 새로운 패러다임을 제공합니다."
        />
        <meta property="og:site_name" content="Space Things" />
        <meta
          property="og:image"
          content="https://spacethings.vercel.app/assets/sepimage.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Space Things Tech Solutions" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SpaceThings" />
        <meta
          name="twitter:title"
          content="Space Things - Innovative Tech Solutions for Businesses"
        />
        <meta
          name="twitter:description"
          content="Space Things의 지능형 기술 솔루션 WATSSUE 및 DEJANGBU를 통해 비즈니스 환경을 최적화하고 고객 경험을 강화하세요."
        />
        <meta
          name="twitter:image"
          content="https://spacethings.vercel.app/assets/sepimage.png"
        />

        {/* Robots Meta Tags */}
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://spacethings.co.kr" />

        {/* Structured Data with JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Space Things",
              "url": "https://spacethings.co.kr",
              "logo": "https://spacethings.vercel.app/assets/headerlogo2.png",
              "sameAs": [
                "https://twitter.com/SpaceThings",
                "https://linkedin.com/company/spacethings"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@spacethings.co.kr",
                "contactType": "고객 지원"
              },
              "description": "Space Things는 비즈니스 최적화 및 고객 경험 강화를 위해 비콘 기술, GPS, BLE 및 데이터 분석을 활용한 첨단 기술 솔루션을 제공합니다.",
              "image": "https://spacethings.vercel.app/assets/sepimage.png"
            }`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black overflow-x-hidden relative w-full mx-auto`}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
