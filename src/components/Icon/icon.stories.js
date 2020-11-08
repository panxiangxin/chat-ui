import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

export default {
  title: "UI 组件/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon}></Icon>;

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccccc"></Icon>;

export const CustomSize = () => (
  <Icon icon={SmileIcon} color="#cccccc" height={48} width={48}></Icon>
);
export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
}