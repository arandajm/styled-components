import React from "react";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  /* background: #eee; */
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;

const Menu = styled.nav`
  display: block;
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: white;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

const Link = ({ isActive, children, ...props }) => (
  <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
);

// Styling normal React components + extending existing styled component styles
const StyledLink = styled(Link)`
  box-sizing: border-box;
  color: black;
  display: block;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  margin: auto 0;
  padding: 4px 8px;
  text-align: center;
`;

export const Header = () => {
  // Use useLocation hook to get the active path and check the route active prop
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};
