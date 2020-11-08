/* eslint-disable import/no-anonymous-default-export */
import Icon from "components/Icon";
import React from "react";
import Input from ".";
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";

export default {
  title: "UI 组件/Input",
  component: Input,
};

export const Default = () => <Input></Input>;

export const Search = () => <Input.Search></Input.Search>;

export const WithAffix = () => (
  <Input
    prefix={<Icon icon={ClipIcon} color="#cccccc"></Icon>}
    suffix={<Icon icon={SmileIcon} color="#cccccc"></Icon>}
  ></Input>
);
