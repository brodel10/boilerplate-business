import type React from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Business Name | Professional Services",
  description:
    "We provide exceptional services to help your business grow and succeed.",
  keywords: ["business", "services", "professional", "solutions"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
