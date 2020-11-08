import React from "react";
import PropTypes from "prop-types";
import face1 from "assets/images/face-male-1.jpg";
import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from "./style";

function Avatar({
  src = face1,
  size = "48px",
  status,
  statusIconSize = "8px",
  ...rest
}) {
  return (
    <StyledAvatar {...rest}>
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt=""></AvatarImage>
      </AvatarClip>
    </StyledAvatar>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string,
};

export default Avatar;
