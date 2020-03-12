import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #DB7194;
  color: white;
  font-size: 13px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  transition: .3s;
  
  &:hover {
    background-color: #c66384;
  }
  
  &:focus {
     box-shadow: 0 0 0 3px rgba(219,113,148,0.4);
  } 
`;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export { Button };
