import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer, { WebFooter } from "@/componets/footer/Footer";
import Navigation, { WebNavigator } from "../componets/navigation/Navigation";

const poppins = Poppins({
  weight: ['400','500','600','700'],
  preload: false
})

export const metadata: Metadata = {
  title: "NCRS - Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation/>
        <WebNavigator/>
        {children}
        <Footer/>
      <WebFooter/>
        </body>
    </html>
  );
}
