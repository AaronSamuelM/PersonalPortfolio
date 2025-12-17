// components/Navbar/navbarElements.js

import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 85px;
  padding: 0 2rem;
  background: #111111ff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      #00c2ff,
      #66FF00,
      #00c2ff
    );
    background-size: 400% 400%;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    box-sizing: border-box;
    filter: blur(1px);

    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover::before {
    opacity: 1;
    animation: fadein 1s ease-in-out, borderTracer 4s linear infinite;
  }

  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
`;



export const NavLink = styled(Link)`
    color: #e0e0e0;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    font-size: 1.1rem;
    font-weight: 500;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #ffffff;
        background: linear-gradient(90deg, #ff0404ff, #e70060ff, #f70000ff);
        animation: glowMove 1.5s infinite linear;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }

    &.active {
        color: #ffffff;
        font-weight: 600;
    }
`;

export const NavBrand = styled.div`
  position: relative;
  font-weight: 700;
  font-size: 1.05rem;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 24px;
        right: 24px;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index:60;
    position:fixed;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 30px;
    background: #fff;
    padding: 10px 24px;
    color: #333;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(45deg, #3f3f3fff, #000000ff);
        color: #fff;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    }
`;
export const SlidingMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 40%;
  height: 100%;
  z-index: 999;
  display: flex;
  background: #111111ff;
  justify-content: center;
  align-items: center;
  transition: right 0.4s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 0;
    background: linear-gradient(90deg, #00c2ff, #66ff00, #00c2ff);
    background-size: 400% 400%;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
    box-sizing: border-box;
    filter: blur(2px);

    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover::before {
    opacity: 1;
    animation: fadein 1s ease-in-out, borderTracer 4s linear infinite;
  }
`;

export const SlidingMenuContent = styled.div`
  margin-top: 85px;
  width: 99%;
  
  height: calc(100% - 85px);
  background: #111111ff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;
export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1003;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const ToggleButton = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1;

  @media screen and (max-width: 900px) {
    display: block;
    position: fixed;
    top: 25px;
    right: 25px;
  }
`;


export const CloseButton = styled(FaTimes)`
 z-index: 1000;  
color: #fff;
background-color: #111111ff;
  font-size: 1.8rem;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
 
`;

export const SlidingNavLink = styled(Link)`
  z-index: 1008; 
color: #e0e0e0;
  padding: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #00c2ff;
  }
`;

export const DesktopOnly = styled.div`
  @media (max-width: 900px) { display: none; }
`;

/* Mobile only helper */
export const MobileOnly = styled.div`
  @media (min-width: 901px) { display: none; }
`;