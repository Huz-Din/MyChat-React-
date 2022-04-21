import React from "react";
import ChatList from "../ChatList";
import ControlPanel from "../ControlPanel";
import MessageList from "../MessageList";

const Chats = () => {
  return (
    <div className="container__chats">
      <ChatList />
      <MessageList />
      <ControlPanel />
    </div>
  );
};

export default Chats;
