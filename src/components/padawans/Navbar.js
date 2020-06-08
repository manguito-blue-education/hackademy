import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div>
      <HamburgerMenu onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
        <Line isOpen={isNavbarOpen} />
        <LineTwo isOpen={isNavbarOpen} />
      </HamburgerMenu>
      <Menu isOpen={isNavbarOpen}>
        <Link to="/padawans/bootcamp">
          <MenuItem>Bootcamp</MenuItem>
        </Link>
        <Link to="/padawans/about-us">
          <MenuItem>Nosotros</MenuItem>
        </Link>
        <Link to="/padawans/programming-club">
          <MenuItem>Club de programación</MenuItem>
        </Link>
        <Link to="/padawans/backend-program">
          <MenuItem>Programas</MenuItem>
        </Link>
        <Link to="/padawans/contact">
          <MenuItem>Contacto</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

const HamburgerMenu = styled.div`
  position: absolute;
  top: 75px;
  right: 40px;
  z-index: 3;
  > div {
    margin-bottom: 10px;
  }
  cursor: pointer;
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background: #fff;
  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) => isOpen && "transform: translateY(6px) rotate(45deg)"};
`;

const LineTwo = styled(Line)`
  ${({ isOpen }) => isOpen && "transform: translateY(-6px) rotate(-45deg)"};
`;

const Menu = styled.div`
  background: var(--main-black);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  transition: clip-path 0.5s ease-out;
  clip-path: circle(
    ${({ isOpen }) => (isOpen ? "120vmax" : "0")} at calc(100% - 70px) 80px
  );
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 91px;
  line-height: 107px;
  color: #ffffff;
  @media screen and (max-width: 920px) {
    font-size: 72px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
