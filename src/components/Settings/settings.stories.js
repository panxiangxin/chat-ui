import React from "react";
import Settings, { SettingsItem } from ".";

export default {
  title: "页面组件/Settings",
  component: Settings,
};

export const Default = () => <Settings></Settings>;

export const WithOutDescription = () => (
  <SettingsItem label="这是一个咩有描述的设置项"></SettingsItem>
);
export const WithDescription = () => (
  <SettingsItem
    label="这是一个咩有描述的设置项"
    description="这是一个有描述的设置项"
  ></SettingsItem>
);
export const WithMenu = () => (
  <SettingsItem
    label="这是一个咩有描述的设置项"
    type="menu"
    description="这是一个有描述的设置项"
  ></SettingsItem>
);
