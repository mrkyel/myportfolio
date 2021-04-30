/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { Link } from "react-router-dom";

export const Drawer: React.FC = () => {
  return (
    <CustomDrawer>
      {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> */}
      <Link css={CustomLink} to="/about">
        About Me
      </Link>
      <Link css={CustomLink} to="/chat">
        Chat with me
      </Link>
      <Link css={CustomLink} to="/contact">
        Contact me
      </Link>
    </CustomDrawer>
  );
};

const CustomDrawer = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

const CustomLink = css`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
`;
