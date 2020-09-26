import React from "react";
import styled from "styled-components";
import GitHubLogo from "../../assets/github-logo.png";

const HeaderContainer = styled.div`
  text-align: right;
  height: 10vh;

  @media (min-width: 816px) {
    margin: 1rem 2rem;
  }

  @media (max-width: 815px) {
    margin: 0.5rem 2rem;
  }

  @media (max-width: 555px) {
    margin: 0 2rem;
  }
  
  a > img {
    height: 30px;
    width: 30px;
  }
`
export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <a
          href="https://github.com/mecm1993/find-tech-events"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub logo" />
        </a>
      </HeaderContainer>
    </header>
  );
};
