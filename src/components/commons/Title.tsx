import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  margin: 1rem 0 2rem;
`

const TitleText = styled.span`
  font-size: 32px;
  font-weight: 800;
`

const SubtitleText = styled.span`
  font-size: 18px;
  font-weight: 500;
`

const DescriptionText = styled.span`
  font-size: 16px;
  font-weight: 300;
`

export const Title = () => {
  return (
    <TitleContainer>
      <TitleText>
        Find Events
      </TitleText>
      <br />
      <SubtitleText>
        Related to Technology from the Dominican Republic
      </SubtitleText>
      <br />
      <DescriptionText>
        Support the local communities
      </DescriptionText>
    </TitleContainer>
  );
};
