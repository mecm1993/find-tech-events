import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: any;
}

export const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Header />
      <div
        style={{padding: '5% 10%'}}
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
};
