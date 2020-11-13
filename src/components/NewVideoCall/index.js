import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledNewVideoCall, {
  Action,
  Actions,
  Minimize,
  Self,
  VideoCallAlert,
} from "./style";
import VideoCaller from "assets/images/video-caller.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faMicrophone,
  faPhoneSlash,
  faVideo,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import face from "assets/images/face-male-1.jpg";
import Avatar from "components/Avatar";
import Pargraph from "components/Pargraph";
import "styled-components/macro";

function NewVideoCall({ onVideoClick, children, ...rest }) {
  const [fullScreen, setFullScreen] = useState(true);

  if (!fullScreen) {
    return (
      <VideoCallAlert>
        <Avatar
          src={face}
          css={`
            grid-area: avatar;
          `}
        ></Avatar>
        <Pargraph
          size="medium"
          css={`
            grid-area: info;
          `}
        >
          正在和 李明浩 进行视频通话
        </Pargraph>
        <Pargraph
          type="secondary"
          css={`
            grid-area: action;
            cursor: pointer;
          `}
          onClick={() => setFullScreen(true)}
        >
          点击切换全屏
        </Pargraph>
        <FontAwesomeIcon
          icon={faVideo}
          css={`
            grid-area: icon;
            font-size: 20px;
            justify-self: end;
            opacity: 0.3;
          `}
        ></FontAwesomeIcon>
      </VideoCallAlert>
    );
  }
  return (
    <StyledNewVideoCall src={VideoCaller} {...rest}>
      <Minimize shape="rect" onClick={() => setFullScreen(false)}>
        <FontAwesomeIcon icon={faCompressAlt}></FontAwesomeIcon>
      </Minimize>
      <Actions>
        <Action>
          <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
        </Action>
        <Action type="hangoff">
          <FontAwesomeIcon
            icon={faPhoneSlash}
            onClick={onVideoClick}
          ></FontAwesomeIcon>
        </Action>
        <Action>
          <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
        </Action>
      </Actions>
      <Self src={face} size="140px"></Self>
    </StyledNewVideoCall>
  );
}

NewVideoCall.propTypes = {
  children: PropTypes.any,
};

export default NewVideoCall;
