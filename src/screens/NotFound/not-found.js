import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <StyledContainer>
      <h2>Страница не найдена ¯\_(ツ)_/¯</h2>
    </StyledContainer>
  );
};

export { NotFound };
