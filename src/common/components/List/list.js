import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledListContainer = styled.div`
  width: 100%;
`;

const StyledListItem = styled.div`
  padding: 15px 0 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  
  border-bottom: 1px solid #db7194;

  &:last-child {
    border: none;
  }
`;
const StyledKey = styled.div`
  font-size: 15px;
  font-weight: 600;

  &:after {
    content: ":";
  }
`;
const StyledValue = styled.div`
  font-size: 15px;
  color: #282828;
  margin-left: 5px;
`;

const List = ({ items }) => {


  return (
    <StyledListContainer>
      {items.map(({ key, value }) => {
        return (
          <StyledListItem key={key}>
            <StyledKey>{key}</StyledKey>
            <StyledValue>{value}</StyledValue>
          </StyledListItem>
        );
      })}
    </StyledListContainer>
  )
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export { List };
