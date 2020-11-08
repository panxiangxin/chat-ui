/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Pargraph from ".";

export default {
  title: "排版分区/Pargraph",
  component: Pargraph,
};

export const Default = () => (
  <React.Fragment>
    <Pargraph>这是一个段落</Pargraph>
    <Pargraph>这是一个段落</Pargraph>
  </React.Fragment>
);

export const Ellipsis = () => (
  <Pargraph ellipsis>
    这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落
  </Pargraph>
);
