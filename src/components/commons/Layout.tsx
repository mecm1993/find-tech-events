import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: spaceBetween;
  padding: 1.45rem 0;
  min-height: 100vh;

  div.content {
    flex: 1 1;

    @media (min-width: 816px) {
      padding: 0 5em;
    }

    @media (max-width: 815px) {
      padding: 0 2em;
    }

    @media (max-width: 555px) {
      padding: 0 1em;
    }
  }
`

export const Layout = ({children}: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </LayoutContainer>
  );
};
