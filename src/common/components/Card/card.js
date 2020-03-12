import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 30px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export { Card };
