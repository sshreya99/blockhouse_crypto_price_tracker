import type { Metadata } from "next";
import "./globals.css";
import { CryptoProvider } from '../context/CryptoContext';

export const metadata: Metadata = {
  title: "Crypto Price Tracker",
  description: "Blockhouse Assignment for full stack developer position: App that displays the latest prices of 5 cryptocurrencies. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body>
        <CryptoProvider>{children}</CryptoProvider>
      </body>
    </html>
  );
}
