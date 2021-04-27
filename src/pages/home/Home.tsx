import * as React from "react";
import HomeImg from "image/home-background.jpg";
import styled from "@emotion/styled";

type MenuProps = {
  children: React.ReactNode;
};

export const Home: React.FC<MenuProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

const MainContainer = styled.div`
  background-image: url(${HomeImg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
