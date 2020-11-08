/* eslint-disable import/no-anonymous-default-export */
import Option from "components/Option";
import React from "react";
import Select from ".";

export default {
  title: " UI 组件/Input/Select",
  component: Select,
};

export const Default = () => (
  <Select>
    <Option>最新消息有限</Option>
    <Option>最新消息有限</Option>
  </Select>
);
