import React from "react";
import PropTypes from "prop-types";
import StyledInInputText, { InputUnderLine } from "./style";
import LabelContainer from "components/LabelContainer";

function InInputText({ label, placeholder = "请输入内容", ...rest }) {
  const input = (
    <InputUnderLine type="text" placeholder={placeholder}></InputUnderLine>
  );
  return (
    <StyledInInputText {...rest}>
      {label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
    </StyledInInputText>
  );
}

InInputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InInputText;
