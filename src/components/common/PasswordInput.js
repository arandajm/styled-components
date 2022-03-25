import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PasswordInputWrapper = styled.div`
  display: flex;
`;
const PasswordInputStyles = styled(Input).attrs((props) => ({
  type: props.type || "password",
  placeholder: "Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.button`
  background: white;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  height: 40px;
  padding: 8px;
  user-select: none;
  width: 65px;
  border-left: 0px;
`;

export const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleButtonClick = (e) => {
    e.preventDefault();
    setShowPassword((prevValue) => !prevValue);
  };

  return (
    <PasswordInputWrapper>
      <PasswordInputStyles
        {...props}
        type={showPassword ? "text" : "password"}
      />
      <ToggleButton onClick={handleToggleButtonClick}>
        {showPassword ? "Hide" : "Show"}
      </ToggleButton>
    </PasswordInputWrapper>
  );
};
