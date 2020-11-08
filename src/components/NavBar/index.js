import React from "react";
import PropTypes from "prop-types";
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from "./style";
import Badge from "components/Badge";
import profileImages from "assets/images/face-male-1.jpg";
import Avatar from "components/Avatar";
import {
  faCog,
  faCommentDots,
  faEllipsisH,
  faFolder,
  faStickyNote,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";

function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImages} status="online"></Avatar>
      <MenuItems>
        <MenuItem showBadge active icon={faCommentDots}></MenuItem>
        <MenuItem icon={faUsers}></MenuItem>
        <MenuItem icon={faFolder}></MenuItem>
        <MenuItem icon={faStickyNote}></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem
          icon={faCog}
          css={`
            align-self: end;
          `}
        ></MenuItem>
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </a>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
