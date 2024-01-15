import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Log In",
  description: "Log In Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} flex w-full h-screen justify-center items-center bg-[url('https://i.imgur.com/xViLugU.png')] bg-no-repeat bg-center bg-cover`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
