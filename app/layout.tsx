import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";
import { Providers } from './Providers';

export const metadata: Metadata = {
  title: "todo",
  description: "app for improve tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dot-pattern`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html >
  );
}
