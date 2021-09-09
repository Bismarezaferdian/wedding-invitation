import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ navscroll }) => (navscroll ? "#3a6351" : "trasparant")};
  color: #ffff;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 760px) {
    transition: 0.8s all ease;
    background: none;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkS)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: ${({ navscroll }) => (navscroll ? "#ffff" : "#000")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #cf0000;
  }
  &.active {
    border-bottom: 3px solid #cf0000;
    color: #cf0000;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnLinks = styled(LinkR)`
  border-radius: 50px;
  background: #cf0000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and(max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: block;
  bottom: 0;
  left: 0;
  transform: translate(100%, 10%);
  background: none;
  border: none;
  font-size: 50px;
  color: #cf0000;

  @media screen and (max-width: 768px) {
    color: #000;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

    :hover {
      color: #cf0000;
    }
  }
`;
