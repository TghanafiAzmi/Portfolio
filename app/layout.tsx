import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import MainLayout from "../src/component/Pages/Layout/MainLayout";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio – Tghanafi Azmi",
  description: "Web designer & developer portfolio",
  icons: {
    icon: '/assets/Photos/MainLogo.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${sora.variable}
          bg-white
          text-neutral-900
          antialiased
        `}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
