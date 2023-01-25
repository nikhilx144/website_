import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    // opacity: 0.7;
    background-color: #d3d3d3;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    text-decoration: none;
  }
`;

const NavbarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavbarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <NavbarLabel>{item.title}</NavbarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavbarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <NavbarLabel>{item.title}</NavbarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
