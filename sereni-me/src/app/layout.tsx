import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SereniMe",
  description: "Your portal for Stress Relief",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen w-full bg-gradient-to-b from-[#9389bd] via-[#ccb0be] to-[#9389bd]
		  dark:from-[#70605b] dark:via-[#ab5916] dark:to-[#70605b]"
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
