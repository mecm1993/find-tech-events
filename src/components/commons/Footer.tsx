import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;
`

export const Footer = () => {
  return (
    <FooterContainer>
      Made with
      <span role="img" aria-label="heart">
        &nbsp;❤️&nbsp;
      </span>
      from
      <span role="img" aria-label="heart">
        &nbsp;🌴&nbsp;
      </span>
    </FooterContainer>
  );
};
