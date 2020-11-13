import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from "./style";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import Profile from "components/Profile";
import { Route, Switch } from "react-router-dom";
import Conversation from "components/Conversation";
import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";
import Settings from "components/Settings";
import BlockedList from "components/BlockedList";
import NewVideoCall from "components/NewVideoCall";

function ChatApp({ children, ...rest }) {
  const [showDrawer, setshowDrawer] = useState(false);
  const [videoCalling, setVideoCalling] = useState(false);
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar></NavBar>
      </Nav>
      <Sidebar>
        <Switch>
          <Route exact path="/">
            <MessageList></MessageList>
          </Route>
          <Route exact path="/contacts">
            <ContactList></ContactList>
          </Route>
          <Route exact path="/files">
            <FileList></FileList>
          </Route>
          <Route exact path="/notes">
            <NoteList></NoteList>
          </Route>
          <Route exact path="/settings">
            <EditProfile></EditProfile>
          </Route>
        </Switch>
      </Sidebar>
      <Content>
        {videoCalling && <NewVideoCall onVideoClick={() => setVideoCalling(false)}></NewVideoCall>}
        <Switch>
          <Route exact path="/settings">
            <Settings></Settings>
          </Route>
          <Route exact path="/settings/blocked">
            <BlockedList></BlockedList>
          </Route>
          <Route path="/">
            <Conversation
              onAvatarClick={() => setshowDrawer(true)}
              onVideoClick={() => setVideoCalling(true)}
            ></Conversation>
          </Route>
        </Switch>
      </Content>
      <Drawer show={showDrawer}>
        <Profile onCloseClick={() => setshowDrawer(false)}></Profile>
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
