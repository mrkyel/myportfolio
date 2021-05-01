/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Drawer } from "components/drawer/Drawer";
import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuClicked, setMenuCliked] = React.useState<boolean>(false);

  const hambergerClick = () => {
    setMenuCliked(!menuClicked);
  };

  return (
    <HeaderArea>
      <NavArea>
        {menuClicked && <Drawer />}
        <Burger onClick={hambergerClick}>
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </Burger>
        <MenuList>
          <Link css={LinkStyle} to="/about">
            <Menus>About Me</Menus>
          </Link>
          <Link css={LinkStyle} to="/chat">
            <Menus>Chat with me</Menus>
          </Link>
          <Link css={LinkStyle} to="/contact">
            <Menus>Contact me</Menus>
          </Link>
        </MenuList>
      </NavArea>
    </HeaderArea>
  );
};

const HeaderArea = styled.header`
  width: 100vw;
  position: fixed;
`;
const NavArea = styled.nav`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;
const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 640px) {
    display: none;
  }
`;
const Menus = styled.li`
  font-size: 3rem;
  color: white;
  margin: 2rem;
`;
const Burger = styled.div`
  margin: 2rem;
  @media (min-width: 640px) {
    display: none;
  }
`;
const BurgerLine = styled.div`
  width: 2.5rem;
  height: 0.3rem;
  background-color: white;
  margin: 0.5rem;
  transition: all 0.4s ease;
`;
const LinkStyle = css`
  text-decoration: none;
`;
