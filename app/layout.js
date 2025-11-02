import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zhou Yuhang — Software Engineer",
  description: "Portfolio of Zhou Yuhang. Seeking Summer 2026 SWE internship.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Zhou Yuhang — Software Engineer",
    description:
      "Portfolio of Zhou Yuhang. Projects, experience, and contact information.",
    type: "website",
    url: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
