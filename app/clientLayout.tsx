"use client";

import type React from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <AnimatePresence mode="wait">
            <main className="flex-1">{children}</main>
          </AnimatePresence>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
