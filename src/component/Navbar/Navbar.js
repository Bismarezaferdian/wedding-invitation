import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElement";

const Navbar = ({ togl
  
  e }) => {
  const [navscroll, setNavscroll] = useState(false);

  const ChangeNav = () => {
    if (window.scrollY >= 80) {
      setNavscroll(true);
    } else {
      setNavscroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);
  }, []);

  const togleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav navscroll={navscroll}>
        <NavbarContainer>
          <NavLogo to="/home" onClick={togleHome}>
            Bisma & Novi
          </NavLogo>
          {/* <MobileIcon onClick={togle} navscroll={navscroll}> */}
          {/* </MobileIcon> */}
          <NavMenu>
            <NavItem>
              <NavLinks
                navscroll={navscroll}
                to={"about"}
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                {" "}
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                navscroll={navscroll}
                to={"DateTime"}
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                {" "}
                Event
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                navscroll={navscroll}
                to={"Story"}
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                {" "}
                Our Story
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                navscroll={navscroll}
                to={"Gallery"}
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                {" "}
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                navscroll={navscroll}
                to={"Amplop"}
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                {" "}
                Amplop
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <Button navscroll={navscroll}>
            {" "}
            <FaRegPauseCircle />{" "}
          </Button> */}

          {/* <NavBtn>
            <BtnLinks to="/signIn">Sing In</BtnLinks>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
