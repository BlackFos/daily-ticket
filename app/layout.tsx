import type { Metadata, Viewport } from "next";
import { siteConfig } from "./site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  alternates: { canonical: "/" },
  title: "데일리티켓 | 상품권 상담 전문",
  description: "데일리티켓 상품권 상담 안내 페이지입니다.",
  openGraph: {
    title: "데일리티켓",
    description: "상품권 상담은 데일리티켓",
    siteName: "데일리티켓",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
