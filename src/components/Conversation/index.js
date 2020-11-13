import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { MyChatBubble, Conversations } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";
import face from "assets/images/face-male-1.jpg";

function Conversation({ onAvatarClick, onVideoClick, children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar
        onAvatarClick={onAvatarClick}
        onVideoClick={onVideoClick}
        avatarUrl={face}
        status="offline"
        statusText="离线"
        size="large"
        type="secondary"
        name="慕容天宇"
        time=" 最后阅读 3小时前"
      ></TitleBar>
      <Conversations>
        <ChatBubble time="昨天 下午14:26">HI 小雨，忙什么呢？</ChatBubble>
        <MyChatBubble time="昨天 下午14:30">
          Hello 那当然是天天996咯 马上就进ICU了呢! 真开心！
        </MyChatBubble>
        <ChatBubble time="昨天 下午14:32">
          <VoiceMessage time="01:24"></VoiceMessage>
        </ChatBubble>
        <MyChatBubble time="昨天 下午14:32">
          什么？约我？会React 吗？不会免谈！！！😓
          <Emoji label="smile">😎</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
