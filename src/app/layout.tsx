import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'], // если нужен кириллический
  weight: ['200', '400', '700'],  // выберите нужные начертания
  variable: '--font-inter',  // переменная для использования в CSS
});

export const metadata: Metadata = {
  title: "Григорьева Дарья",
  description: "Юрист по спорам с застройщиками",
  openGraph: {
    title: "Юридическая компания Григорьева",
    description: "Профессиональные юридические услуги по спорам с застройщиками",
    url: "https://grigoreva-law.ru/",
    siteName: "Григорьева Юридические услуги",
    images: [
      {
        url: "https://grigoreva-law.ru/photo-descript.jpg",
        width: 800,
        height: 1000,
        alt: "Григорьева Дарья",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
