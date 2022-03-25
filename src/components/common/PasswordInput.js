import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PasswordInputStyles = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
export const PasswordInput = (props) => {
  return <PasswordInputStyles {...props}></PasswordInputStyles>;
};
