import React from "react";
import PropTypes from "prop-types";
import StyledSettings, {
  SettingsItemControl,
  StyledSettingsGroup,
  StyledSettingsItem,
} from "./style";
import Pargraph from "components/Pargraph";
import Switch from "components/Switch";
import Icon from "components/Icon";
import { ReactComponent as ArrowMenuRight } from "assets/icons/arrowMenuRight.svg";
import Seperator from "components/Seperator";
import { Link } from "react-router-dom";
import "styled-components/macro";

function Settings({ children, ...rest }) {
  return (
    <StyledSettings {...rest}>
      <SettingGroup gruupName="隐私设置">
        <SettingsItem label="添加好友需要验证"></SettingsItem>
        <SettingsItem
          label="推荐通讯录好友"
          description="上传的通讯录只用来匹配好友列表 本应用不会记录和发送任何信息给其他机构或"
        ></SettingsItem>
        <SettingsItem label="只能通过手机号找到我"></SettingsItem>
      </SettingGroup>
      <SettingGroup gruupName="通知设置">
        <SettingsItem label="新消息通知"></SettingsItem>
        <SettingsItem label="语音和视频通话提醒"></SettingsItem>
        <SettingsItem label="显示通知详情"></SettingsItem>
        <SettingsItem label="声音"></SettingsItem>
        <Link
          to={`/settings/blocked`}
          css={`
            text-decoration: none;
            color: inherit;
          `}
        >
          <SettingsItem label="查看已静音的好友" type="menu"></SettingsItem>
        </Link>
      </SettingGroup>
    </StyledSettings>
  );
}

export function SettingGroup({ gruupName, children, ...rest }) {
  return (
    <StyledSettingsGroup>
      <Pargraph size="xxlarge" style={{ paddingBottom: "24px" }}>
        {gruupName}
      </Pargraph>
      {children}
    </StyledSettingsGroup>
  );
}

export function SettingsItem({
  type = "switch",
  label,
  description,
  children,
  ...rest
}) {
  return (
    <StyledSettingsItem {...rest}>
      <SettingsItemControl>
        <Pargraph size="large">{label}</Pargraph>
        {type === "switch" && <Switch></Switch>}
        {type === "menu" && <Icon icon={ArrowMenuRight}></Icon>}
      </SettingsItemControl>

      {description && (
        <Pargraph type="secondary" style={{ margin: "4px 0" }}>
          {description}
        </Pargraph>
      )}
      <Seperator style={{ marginTop: "8px", marginBottom: "20px" }}></Seperator>
    </StyledSettingsItem>
  );
}

Settings.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Settings;
