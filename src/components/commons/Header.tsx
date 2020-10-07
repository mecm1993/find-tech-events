import React from "react";
import GitHubLogo from "../../assets/github-logo.png";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <a
          href="https://github.com/mecm1993/find-tech-events"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub logo" />
        </a>
      </div>
    </header>
  );
};
