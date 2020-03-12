import styled from "styled-components";

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export { StyledButtonContainer as ButtonContainer };
