import type { Metadata } from "next";
import { Inter, Jomolhari } from "next/font/google";
import "./globals.css";

// components
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const jomol = Jomolhari({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Louis Website",
  description: "Louis's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jomol.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
