/* eslint-disable import/no-anonymous-default-export */
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavBar, { MenuItem } from ".";
import "styled-components/macro";

export default {
  title: "页面组件/NavBar",
  component: NavBar,
};

export const Default = () => <NavBar></NavBar>;

export const Menu = () => {
  return (
    <div
      css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width: 100px;
      `}
    >
      <MenuItem active showBadge icon={faCommentDots}></MenuItem>
    </div>
  );
};
