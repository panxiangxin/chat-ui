/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import MessageCard from ".";
import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI 组件/MessageCard",
  component: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarUrl={face1}
    name="李明浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
  ></MessageCard>
);

export const Active = () => (
  <MessageCard
    avatarUrl={face1}
    name="李明浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    active
  ></MessageCard>
);

export const Replied = () => (
  <MessageCard
    avatarUrl={face1}
    name="李明浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    active
    replied
  ></MessageCard>
);

export const RepliedInactive = () => (
  <MessageCard
    avatarUrl={face1}
    name="李明浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    replied
  ></MessageCard>
);
