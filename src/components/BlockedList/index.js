import React from "react";
import PropTypes from "prop-types";
import StyledBlockedList, {
  BlockAvatar,
  BlockName,
  ClosableAvatar,
  CloseIcon,
  FriendList,
  SettingsMenu,
} from "./style";
import Icon from "components/Icon";
import { ReactComponent as ArrowMenuLeft } from "assets/icons/arrowMenuLeft.svg";
import { ReactComponent as closeCircle } from "assets/icons/closeCircle.svg";
import Text from "components/Text";
import face from "assets/images/face-male-1.jpg";
import { useHistory } from "react-router-dom";
import "styled-components/macro";

function BlockedList({ children, ...rest }) {
  const history = useHistory();
  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => history.goBack()}
        ></Icon>
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingsMenu>

      <FriendList>
        {new Array(8).fill(0).map((_, i) => {
          return (
            <ClosableAvatar key={i}>
              <BlockAvatar size="105px" src={face}></BlockAvatar>
              <CloseIcon width={46} height={51} icon={closeCircle}></CloseIcon>
              <BlockName>席海波</BlockName>
            </ClosableAvatar>
          );
        })}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
