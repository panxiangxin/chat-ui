/* eslint-disable import/no-anonymous-default-export */
import Emoji from "components/Emoji";
import VoiceMessage from "components/VoiceMessage";
import React from "react";
import ChatBubble from ".";

export default {
  title: "UI 组件/ChatBubble",
  component: ChatBubble,
};

export const FromOthers = () => (
  <ChatBubble time="昨天 下午14:26">这是一条其他人发送的消息</ChatBubble>
);
export const FromMine = () => (
  <ChatBubble time="昨天 下午14:26" type="mine">
    这是一条我自己发送的消息<Emoji label="smile">😊</Emoji>
  </ChatBubble>
);

export const VoiceMessageType = () => (
  <ChatBubble time="昨天 下午14:26">
    <VoiceMessage time="01:25"></VoiceMessage>
  </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
  <ChatBubble time="昨天 下午14:26" type="mine">
    <VoiceMessage type="mine" time="01:25"></VoiceMessage>
  </ChatBubble>
);
