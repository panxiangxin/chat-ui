import React from "react";
import PropTypes from "prop-types";
import StyledProfile, {
  Album,
  AlbumSection,
  AlbumTitle,
  CloseIcon,
  ContactSection,
  Photo,
  SocialLink,
} from "./style";
import "styled-components/macro";
import Avatar from "components/Avatar";
import face from "assets/images/face-male-1.jpg";
import Pargraph from "components/Pargraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import {
  faGithub,
  faLinkedin,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";
import Seperator from "components/Seperator";
import Text from "components/Text";

import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";

import { ReactComponent as Cross } from "assets/icons/cross.svg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Profile({
  onCloseClick,
  showEditBtn,
  showCloseIcon = true,
  onEdit,
  status,
  children,
  ...rest
}) {
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && (
        <CloseIcon onClick={onCloseClick} icon={Cross}></CloseIcon>
      )}
      <Avatar
        css={`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2;
        `}
        src={face}
        size="160px"
        status={status}
        statusIconSize="25px"
      ></Avatar>
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2;
            margin-left: 100px;
            align-self: end;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon
            css={`
              font-size: 24px;
            `}
            icon={faPen}
          ></FontAwesomeIcon>
        </Button>
      )}
      <Pargraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        慕容天宇
      </Pargraph>
      <Pargraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        北京市 朝阳区
      </Pargraph>
      <Pargraph
        css={`
          margin-bottom: 26px;
        `}
      >
        帮助客户构建网站，并协助在社交网络上进行推广{" "}
        <Emoji label="fire">🔥</Emoji>
      </Pargraph>
      <SocialLink>
        <Icon.Social
          icon={faWeibo}
          bgColor="#F06767"
          href="http://www.weibo.com"
        ></Icon.Social>
        <Icon.Social
          icon={faGithub}
          bgColor="black"
          href="http://www.github.com"
        ></Icon.Social>
        <Icon.Social
          icon={faLinkedin}
          bgColor="#2483C0"
          href="http://www.linkIn.com"
        ></Icon.Social>
      </SocialLink>

      <Seperator
        css={`
          margin: 30px 0;
        `}
      ></Seperator>

      <ContactSection>
        <Description label="联系电话">+86 12345678910</Description>
        <Description label="电子邮件">admin@ygsoft.com</Description>
        <Description label="个人网站">https://zxqian.com</Description>
      </ContactSection>

      <Seperator
        css={`
          margin: 30px 0;
        `}
      ></Seperator>

      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册（31）</Text>
          <a>查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt=""></Photo>
          <Photo src={photo2} alt=""></Photo>
          <Photo src={photo3} alt=""></Photo>
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}
function Description({ label, children }) {
  return (
    <Pargraph>
      <Text type="secondary">{label}：</Text>
      <Text>{children}</Text>
    </Pargraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
