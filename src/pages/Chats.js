import React from "react";
import ChatList from "../ChatList";
import ControlPanel from "../ControlPanel";
import MessageList from "../MessageList";

const Chats = ({ chats, addMessage }) => {
  return (
    <div className="container__chats">
      <ChatList chats={chats} />
      <MessageList chats={chats} />
      <ControlPanel addMessage={addMessage} />
    </div>
  );
};

export default Chats;
