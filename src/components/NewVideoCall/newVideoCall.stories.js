import { faDivide } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NewVideoCall from ".";

export default {
  title: "页面组件/NewVideoCall",
  component: NewVideoCall,
};

export const Default = () => (
  <div style={{ height: "100vh" }}>
    <NewVideoCall></NewVideoCall>
  </div>
);
