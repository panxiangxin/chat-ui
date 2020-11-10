import React from "react";
import PropTypes from "prop-types";
import StyledIcon from "./style";
import SocialIcon from "./SocialIcon";

function Icon({
  icon: IconComponents,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponents && (
        <IconComponents width={width} height={height}></IconComponents>
      )}
    </StyledIcon>
  );
}

Icon.Social = SocialIcon;


Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOf(PropTypes.number, PropTypes.string),
  height: PropTypes.oneOf(PropTypes.number, PropTypes.string),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;
