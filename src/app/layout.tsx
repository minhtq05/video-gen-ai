import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import { Suspense } from "react";
import Loading from "@/components/loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Video Gen AI",
  description: "Video Gen AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Providers>
              <ClerkLoading>
                <Loading />
              </ClerkLoading>
              <ClerkLoaded>{children}</ClerkLoaded>
            </Providers>
          </Suspense>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
