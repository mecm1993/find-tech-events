import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
};
