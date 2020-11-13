import Icon from "components/Icon";
import Pargraph from "components/Pargraph";
import Seperator from "components/Seperator";
import React from "react";
import Dropdown from ".";
import { DropdownItem } from "./style";
import { ReactComponent as Options } from "assets/icons/options.svg";

export default {
  title: "UI 组件/Dropdown",
  component: Dropdown,
};
const dropdownContent = (
  <>
    <DropdownItem>
      <Pargraph>个人资料</Pargraph>
    </DropdownItem>
    <DropdownItem>
      <Pargraph>关闭会话</Pargraph>
    </DropdownItem>
    <Seperator></Seperator>
    <DropdownItem>
      <Pargraph type="danger">屏蔽此人</Pargraph>
    </DropdownItem>
  </>
);
export const Default = () => (
  <div
    style={{ display: "flex", justifyContent: "space-between", width: "50%" }}
  >
    <Pargraph>点击右侧按钮</Pargraph>
    <Dropdown content={dropdownContent}>
      <Icon opacity={0.3} icon={Options}></Icon>
    </Dropdown>
  </div>
);

export const Left = () => (
  <div
    style={{ display: "flex", justifyContent: "space-between", width: "50%" }}
  >
    <Pargraph>点击右侧按钮</Pargraph>
    <Dropdown align="left" content={dropdownContent}>
      <Icon opacity={0.3} icon={Options}></Icon>
    </Dropdown>
  </div>
);
