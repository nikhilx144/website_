import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const NavTop = styled.div`
  background: #1769aa;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Header = () => {
  return (
    <header>
      <NavTop>Under construction !! Work in Progress!!!</NavTop>

      <Navbar />
    </header>
  );
};

export default Header;
