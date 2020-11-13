import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Action, Title } from "./style";
import Avatar from "components/Avatar";
import Pargraph from "components/Pargraph";
import Text from "components/Text";
import Icon from "components/Icon";

import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";
import { DropdownItem } from "components/Dropdown/style";
import Dropdown from "components/Dropdown";
import Seperator from "components/Seperator";

function TitleBar({
  onAvatarClick,
  onVideoClick,
  avatarUrl,
  status,
  statusText,
  size = "large",
  type,
  name,
  time,
  ...rest
}) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status={status} src={avatarUrl} onClick={onAvatarClick}></Avatar>
      <Title>
        <Pargraph size={size}>{name}</Pargraph>
        <Pargraph type={type}>
          <Text>{statusText}</Text>
          <Text> {time}</Text>
        </Pargraph>
      </Title>
      <Action>
        <Icon opacity={0.3} icon={Call} onClick={onVideoClick}></Icon>
        <Icon opacity={0.3} icon={Camera}></Icon>
        <Dropdown
          content={
            <>
              <DropdownItem>
                <Pargraph>个人资料</Pargraph>
              </DropdownItem>
              <DropdownItem>
                <Pargraph>关闭会话</Pargraph>
              </DropdownItem>
              <Seperator></Seperator>
              <DropdownItem>
                <Pargraph type="danger">屏蔽此人</Pargraph>
              </DropdownItem>
            </>
          }
        >
          <Icon opacity={0.3} icon={Options}></Icon>
        </Dropdown>
      </Action>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["online", "offline"]),
  statusText: PropTypes.string,
  time: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
};

export default TitleBar;
