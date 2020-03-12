import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "../FormGroup";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 15px;
  border: 1px solid ${p => (p.invalid ? "#DB7194" : "#DFDFDF")};
  font-size: 14px;
  outline: none;
  transition: 0.15s;

  &:focus {
    border: 1px solid ${p => (p.invalid ? "#DB7194" : "#3182e8")};
    box-shadow: 0 0 0 3px
      ${p => (p.invalid ? "rgba(219,113,148,0.4)" : "rgba(49,130,232,0.4)")};
  }
`;

const Input = ({
  value,
  valid,
  onChange,
  label,
  caption,
  isRequired,
  validation,
  name,
  ...restProps
}) => {
  const handleOnChange = ({ target: { value } }) => onChange({ name, value });

  return (
    <FormGroup
      invalid={validation && !valid}
      label={label}
      caption={caption}
      isRequired={isRequired}
    >
      <StyledInput
        value={value}
        onChange={handleOnChange}
        invalid={validation && !valid}
        {...restProps}
      />
    </FormGroup>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  caption: PropTypes.string,
  isRequired: PropTypes.bool,
  validation: PropTypes.bool
};

export { Input };
