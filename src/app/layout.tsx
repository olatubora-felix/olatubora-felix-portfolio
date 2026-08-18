import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Olawole Felix Olatubora | Senior Software Engineer",
  description:
    "Olawole Felix Olatubora, a Senior Software Engineer with 7+ years across fintech, healthtech, logistics, and e-commerce, specializing in backend architecture and system design with NestJS, Laravel, Next.js, and PostgreSQL.",
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
