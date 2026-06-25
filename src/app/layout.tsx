import { Footer, Header } from "@/widgets/layout";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default:
      "Наставничество в медицине | ДВГМУ — подготовка медицинских кадров",
    template: "%s | ДВГМУ",
  },
  description:
    "ДВГМУ — обучение наставничеству в медицине. Готовим наставников для медицинских организаций. Повышение квалификации, адаптация молодых специалистов, сопровождение развития медицинских кадров.",
  keywords: [
    "наставничество в медицине",
    "ДВГМУ",
    "подготовка медицинских кадров",
    "обучение наставников",
    "адаптация молодых специалистов",
    "повышение квалификации врачей",
    "медицинский университет Хабаровск",
    "наставничество в здравоохранении",
    "кадры для медицины",
    "сопровождение медицинских кадров",
  ],
  authors: [{ name: "ДВГМУ" }],
  creator: "ДВГМУ",
  publisher: "ДВГМУ",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Наставничество в медицине | ДВГМУ",
    description:
      "ДВГМУ — обучение наставничеству в медицине. Готовим наставников для медицинских организаций. Повышение квалификации, адаптация молодых специалистов.",
    url: "https://mentor.dvgmu.promotion-pal.ru",
    siteName: "ДВГМУ",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Наставничество в медицине | ДВГМУ",
    description:
      "ДВГМУ — обучение наставничеству в медицине. Готовим наставников для медицинских организаций.",
  },
  alternates: {
    canonical: "https://mentor.dvgmu.promotion-pal.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
