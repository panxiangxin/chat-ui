/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import TitleBar from ".";
import face from "assets/images/face-male-1.jpg";

export default {
  title: "UI 组件/TitleBar",
  component: TitleBar,
};

export const Default = () => (
  <TitleBar
    avatarUrl={face}
    status="offline"
    statusText="离线"
    size="large"
    type="secondary"
    name="慕容天宇"
    time=" 最后阅读 3小时前"
  ></TitleBar>
);
