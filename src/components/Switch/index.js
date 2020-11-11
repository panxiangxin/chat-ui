import React from "react";
import PropTypes from "prop-types";
import StyledSwitch, { CheckBox, Slider } from "./style";

function Switch({ ...rest }) {
  return (
    <StyledSwitch {...rest}>
      <CheckBox></CheckBox>
      <Slider></Slider>
    </StyledSwitch>
  );
}

Switch.propTypes = {
  children: PropTypes.any,
};

export default Switch;
