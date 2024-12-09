import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Olawole Felix Olatubora | Senior Frontend Developer",
  description:
    "Portfolio of Olawole Felix Olatubora, a senior frontend developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
