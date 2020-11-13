import React from "react";
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from "./style";
import Badge from "components/Badge";
import profileImages from "assets/images/face-male-1.jpg";
import Avatar from "components/Avatar";
import { Link, useLocation, matchPath } from "react-router-dom";
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
        <MenuItem to="/" showBadge icon={faCommentDots}></MenuItem>
        <MenuItem to="/contacts" icon={faUsers}></MenuItem>
        <MenuItem to="/files" icon={faFolder}></MenuItem>
        <MenuItem to="/notes" icon={faStickyNote}></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem
          icon={faCog}
          to="/settings"
          css={`
            align-self: end;
          `}
        ></MenuItem>
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ to, icon, showBadge, ...rest }) {
  const loc = useLocation();
  const active = !!matchPath(loc.pathname, {
    path: to,
    exact: to === "/",
  });
  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
