import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile, {
  GenderAndRegion,
  GroupTitle,
  SelectGroup,
  StyleIconInput,
} from "./style";
import Profile from "components/Profile";
import Avatar from "components/Avatar";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import face from "assets/images/face-male-1.jpg";
import "styled-components/macro";
import InInputText from "components/Input/InInputText";
import LabelContainer from "components/LabelContainer";
import Radio from "components/Radio";
import Select from "components/Select";
import Option from "components/Option";
import Icon from "components/Icon";
import {
  faGithub,
  faLinkedin,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";

function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false);
  if (!showEdit) {
    return (
      <Profile
        onEdit={() => setShowEdit(true)}
        showEditBtn
        showCloseIcon={false}
      ></Profile>
    );
  }
  return (
    <StyledEditProfile {...rest}>
      <Avatar
        src={face}
        size="160px"
        css={`
          grid-area: 1 / 1 / 2 / 2;
          justify-self: center;
          margin-bottom: 12px;
        `}
      ></Avatar>
      <Button
        size="52px"
        css={`
          grid-area: 1 / 1 / 3 / 2;
          justify-self: end;
          align-self: end;
          z-index: 10;
        `}
      >
        <FontAwesomeIcon
          icon={faCheck}
          onClick={() => setShowEdit(false)}
        ></FontAwesomeIcon>
      </Button>
      <GroupTitle>基本信息</GroupTitle>
      <InInputText label="昵称"></InInputText>
      <GenderAndRegion>
        <Radio.Group label="性别">
          <Radio name="gender">男</Radio>
          <Radio name="gender">女</Radio>
        </Radio.Group>
        <LabelContainer label="地区">
          <SelectGroup>
            <Select type="form">
              <Option>省份</Option>
            </Select>
            <Select type="form">
              <Option>城市</Option>
            </Select>
            <Select type="form">
              <Option>区县</Option>
            </Select>
          </SelectGroup>
        </LabelContainer>
      </GenderAndRegion>
      <InInputText label="个性签名"></InInputText>

      <GroupTitle>联系信息</GroupTitle>
      <InInputText label="联系电话"></InInputText>
      <InInputText label="电子邮箱"></InInputText>
      <InInputText label="个人网站"></InInputText>

      <GroupTitle>社交信息</GroupTitle>
      <IconInput icon={faWeibo} bgColor="#F06767"></IconInput>
      <IconInput icon={faGithub} bgColor="black"></IconInput>
      <IconInput icon={faLinkedin} bgColor="#2483C0"></IconInput>
    </StyledEditProfile>
  );
}

function IconInput({ icon, bgColor, ...rest }) {
  return (
    <StyleIconInput>
      <Icon.Social icon={icon} bgColor={bgColor}></Icon.Social>
      <InInputText {...rest}></InInputText>
    </StyleIconInput>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
