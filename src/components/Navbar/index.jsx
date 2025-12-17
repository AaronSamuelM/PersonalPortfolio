import React, { useState, useEffect } from "react";
import {
  Nav,
  NavBrand,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
  ToggleButton,
  SlidingMenu,
  SlidingMenuContent,
  Overlay,
  SlidingNavLink,
  CloseButton,
} from "./navbarElements";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <Nav style={{ boxShadow: scrolled ? "0 6px 18px rgba(0,0,0,0.08)" : "none" }}>
        <NavMenu>
          <NavLink onClick={()=>scrollToSection("about")}>About</NavLink>
          <NavLink onClick={()=>scrollToSection("events")}>Projects</NavLink>
          <NavLink onClick={()=>scrollToSection("annual")}>Skills</NavLink>
          <NavLink onClick={()=> scrollToSection("team")}>Achievements</NavLink>
          <NavLink onClick={()=>scrollToSection("blogs")}>Extra</NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink onClick={() => scrollToSection("signup")}>Contact Me</NavBtnLink>
        </NavBtn>
        <ToggleButton onClick={toggleMenu} />
      </Nav>

      <Overlay isOpen={isOpen} onClick={closeMenu} />
      <SlidingMenu isOpen={isOpen}>
        <CloseButton onClick={toggleMenu} />
        <SlidingMenuContent>
          <SlidingNavLink onClick={() => scrollToSection("about")}>About</SlidingNavLink>
          <SlidingNavLink onClick={() => scrollToSection("events")}>Projects</SlidingNavLink>
          <SlidingNavLink onClick={() => scrollToSection("annual")}>Skills</SlidingNavLink>
          <SlidingNavLink onClick={() => scrollToSection("team")}>Achievements</SlidingNavLink>
          <SlidingNavLink onClick={() => scrollToSection("blogs")}>Extra</SlidingNavLink>
          <SlidingNavLink onClick={() => scrollToSection("signup")}>Contact Me</SlidingNavLink>
        </SlidingMenuContent>
      </SlidingMenu>
    </>
  );
};

export default Navbar;
