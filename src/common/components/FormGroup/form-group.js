import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledFormGroup = styled.label`
  width: 100%;
  display: block;
`;

const StyledLabel = styled.div`
  font-size: 13px;
  color: #4d4d4d;
  margin-bottom: 5px;
  display: block;

  ${p => p.isRequired &&
    css`
      &:after {
        content: "*";
        color: #db7194;
      }
    `}
`;

const StyledCaption = styled.div`
  font-size: 11px;
  color: ${p => p.invalid ? "#DB7194" : "#797979"};
  margin-top: 5px;
`;

const FormGroup = ({ label, caption, children, isRequired, invalid }) => {
  return (
    <StyledFormGroup>
      <StyledLabel isRequired={isRequired}>{label}</StyledLabel>
      {children}
      <StyledCaption invalid={invalid}>{caption}</StyledCaption>
    </StyledFormGroup>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  children: PropTypes.element.isRequired
};

export { FormGroup };
