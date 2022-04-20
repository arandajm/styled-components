import React, { useState, useContext } from "react";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { Toggle } from "./Toggle";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${(props) => (props.show ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
  background: ${(props) => props.theme.backgroundColor};

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
  color: ${(props) => props.theme.bodyFontColor};
  display: block;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  margin: auto 0;
  padding: 4px 8px;
  text-align: center;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  /* any direct children */
  > div {
    height: 3px;
    background: ${(props) => props.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header = () => {
  // Use useLocation hook to get the active path and check the route active prop
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const { id, setGlobalTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setIsOpen((prevValue) => !prevValue)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu show={isOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
        <Toggle isActive={id === "dark"} onToggle={setGlobalTheme} />
      </Menu>
    </HeaderWrapper>
  );
};
