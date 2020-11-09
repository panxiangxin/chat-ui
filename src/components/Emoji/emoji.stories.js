/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Emoji from ".";

export default {
  title: "UI 组件/Emoji",
  component: Emoji,
};

export const Default = () => (
  <div>
    <Emoji label="smile">😊</Emoji>
    <Emoji label="todo">☑️</Emoji>
    <Emoji label="clock">⏰</Emoji>
  </div>
);
