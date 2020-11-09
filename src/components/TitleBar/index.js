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

function TitleBar({
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
      <Avatar status={status} src={avatarUrl}></Avatar>
      <Title>
        <Pargraph size={size}>{name}</Pargraph>
        <Pargraph type={type}>
          <Text>{statusText}</Text>
          <Text> {time}</Text>
        </Pargraph>
      </Title>
      <Action>
        <Icon opacity={0.3} icon={Call}></Icon>
        <Icon opacity={0.3} icon={Camera}></Icon>
        <Icon opacity={0.3} icon={Options}></Icon>
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
