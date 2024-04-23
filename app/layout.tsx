import type { Metadata } from "next";
import "./globals.css";
import { fontSegoe_UI, fontVT } from "./fonts";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Joystix",
  description: "Revolutionizing Gaming with Layer 2 Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSegoe_UI.variable} ${fontVT.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
