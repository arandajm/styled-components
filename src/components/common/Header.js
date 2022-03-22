import React from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eee;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: "Open Sans";
  background: none;
  left: initial;
  top: initial;
`;

const Link = ({ isActive, children, ...props }) => (
  <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
);

// Styling normal React components + extending existing styled component styles
const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/" isActive>
          Home
        </StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};
