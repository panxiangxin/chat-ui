import React from "react";
import PropTypes from "prop-types";
import StyledMessageCard, {
  Message,
  MessageText,
  Name,
  Status,
  Time,
  UnreadCount,
} from "./style";
import Avatar from "components/Avatar";
import Icon from "components/Icon";
import { useTheme } from "styled-components";
import { ReactComponent as Replied } from "assets/icons/replied.svg";

function MessageCard({
  avatarUrl,
  avatarStatus,
  statusText,
  name,
  time,
  message,
  unreadCount,
  active,
  replied,
  children,
  ...rest
}) {
  const theme = useTheme();
  return (
    <StyledMessageCard active={active} {...rest}>
      <Avatar status={avatarStatus} src={avatarUrl}></Avatar>
      <Name>{name}</Name>
      <Status>{statusText}</Status>
      <Time>{time}</Time>
      <Message replied={replied}>
        {replied && (
          <Icon
            width={16}
            height={14}
            icon={Replied}
            color={active ? theme.inactiveColorDark : theme.inactiveColor}
            opacity={active ? 0.4 : 1}
            style={{ justifyContent: "start" }}
          ></Icon>
        )}
        <MessageText>{message}</MessageText>
        <UnreadCount count={unreadCount}></UnreadCount>
      </Message>
    </StyledMessageCard>
  );
}

MessageCard.propTypes = {
  children: PropTypes.any,
  avatarUrl: PropTypes.string.isRequired,
  avatarStatus: PropTypes.any,
  statusText: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
};

export default MessageCard;
