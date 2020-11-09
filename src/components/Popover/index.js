import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledPopover, { Content, Target, Triangle } from "./style";

function Popover({
  children,
  content,
  offset = {},
  OnVisible,
  OnHide,
  ...rest
}) {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (visible) {
      setVisible(false);
      OnHide && OnHide();
    } else {
      setVisible(true);
      OnVisible && OnVisible();
    }
  };

  return (
    <StyledPopover onClick={handleClick} {...rest}>
      <Content visible={visible} offset={offset}>
        {content}
      </Content>
      <Triangle visible={visible} offset={offset} />
      <Target>{children}</Target>
    </StyledPopover>
  );
}

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  OnVisible: PropTypes.func,
  OnHide: PropTypes.func,
};

export default Popover;
