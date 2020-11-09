import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledFooter, { IconContainer, StyledPopoverContent } from "./style";
import Input from "components/Input";
import Icon from "components/Icon";
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icons/microphone.svg";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";

import Button from "components/Button";
import Emoji from "components/Emoji";
import Popover from "components/Popover";
import { useTheme } from "styled-components";

function Footer({ children, ...rest }) {
  const [emojiIconActive, setEmojiIconActive] = useState(false);
  const theme = useTheme();

  return (
    <StyledFooter {...rest}>
      <Input
        placeholder="请输入想和对方说的话"
        prefix={<Icon icon={ClipIcon}></Icon>}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent></PopoverContent>}
              offset={{ x: "-25%" }}
              OnVisible={() => setEmojiIconActive(true)}
              OnHide={() => setEmojiIconActive(false)}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.gray3}
              ></Icon>
            </Popover>
            <Icon icon={MicrophoneIcon}></Icon>
            <Button size="52px">
              <Icon
                icon={PlaneIcon}
                color="white"
                style={{ transform: "translateX(-2px)" }}
              ></Icon>
            </Button>
          </IconContainer>
        }
      ></Input>
    </StyledFooter>
  );
}
function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label="smile">😊</Emoji>
      <Emoji label="grinning">😆</Emoji>
      <Emoji label="thumbup">👍</Emoji>
      <Emoji label="indexfingerup">🖕</Emoji>
      <Emoji label="ok">👌</Emoji>
      <Emoji label="handsputtogether">🙏</Emoji>
      <Emoji label="smilewithsunglass">😎</Emoji>
      <Emoji label="flexedbicep">🦾</Emoji>
      <Icon icon={OptionsIcon} style={{ marginLeft: "24px" }}></Icon>
    </StyledPopoverContent>
  );
}
Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
