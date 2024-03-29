import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTA - Guess the map song",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full h-screen justify-center items-center bg-[url('https://i.imgur.com/xViLugU.png')] bg-no-repeat bg-center bg-cover">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
