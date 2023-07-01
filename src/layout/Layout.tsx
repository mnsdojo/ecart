import React, { FC } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

interface ILayout {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout: FC<ILayout> = ({ children }) => (
  <div className={` ${inter.variable} font-sans min-h-screen flex flex-col`}>
    <Meta />
    <Header />
    <main className="flex-1 bg-[#f7f7f7]">{children}</main>
    <div style={{ marginTop: "auto" }}>
      <Footer />
    </div>
  </div>
);

export default Layout;
