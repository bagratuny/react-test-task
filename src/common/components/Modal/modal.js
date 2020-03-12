import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../Button";

const StyledModalWindow = styled.div`
  width: 60%;
  position: absolute;
  top: 50px;
  left: 20%;
  right: 20%;
  background-color: white;
  padding: 30px;
  border-radius: 3px;
  border: 1px solid #dee2e6;
`;
const StyledOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
`;
const StyledModalFooter = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Modal = ({ children, onClose, active }) => {
  const onCloseHandler = () => onClose(false);

  if (!active) return null;

  return (
    <>
      <StyledOverlay />
      <StyledModalWindow>
        {children}
        <StyledModalFooter>
          <Button onClick={onCloseHandler} text="Закрыть" />
        </StyledModalFooter>
      </StyledModalWindow>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired
};

export { Modal };
