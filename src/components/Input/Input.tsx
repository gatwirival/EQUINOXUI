import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";

const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.disabled ? "#ccc" : "#ccc")};
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "#fff")};
  padding: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #1b116e;
  }
`;

const StyledLabel = styled.div<InputProps>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? "#ccc" : "#080808")};
  margin-bottom: 6px;
`;

const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  color: #a9150b;
  margin-top: 4px;
`;

const Input: FC<InputProps> = ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <Fragment>
      <StyledLabel disabled={disabled}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
      <StyledMessage>
        {message}
      </StyledMessage>
    </Fragment>
  );
};

export default Input;
