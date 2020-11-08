import React from "react";
import PropTypes from "prop-types";
import StyledPargraph from "./style";

function Pargraph({ children, ellipsis, ...rest }) {
  return (
    <StyledPargraph as="p" ellipsis={ellipsis} {...rest}>
      {children}
    </StyledPargraph>
  );
}

Pargraph.propTypes = {
  children: PropTypes.any,
  ellipsis: PropTypes.bool,
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
  bold: PropTypes.bool,
};

export default Pargraph;
