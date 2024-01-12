import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water Monster",
  description: "Control Your Water Flow",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["watermonster", "water", "ماي", "علام الماي", "water sensor"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Abdallah Moubarak" },
    {
      name: "Abdallah Moubarak",
      url: "https://www.linkedin.com/in/abdallah-mobarak/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="max-w-xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
