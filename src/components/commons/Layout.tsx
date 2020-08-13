import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: any;
}

export const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
        justifyContent: 'spaceBetween',
        padding: '1.45rem 0',
        minHeight: '100vh',
      }}
    >
      <Header />
      <div className="content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
