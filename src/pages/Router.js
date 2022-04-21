import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";
import styles from "../index.module.css";
import AUTHOR from "../constants";

const initialChats = {
  id1: {
    name: "Chat 1",
    messages: [
      { text: "Message 1", author: AUTHOR.bot },
      { text: "Hi", author: AUTHOR.me },
    ],
  },
  id2: {
    name: "Chat 2",
    messages: [{ text: "Message from chat 2", author: AUTHOR.me }],
  },
};

const Router = () => {
  const [chats, setChats] = useState(initialChats);

  const addMessage = (chatId, message) => {
    setChats({
      ...chats,
      [chatId]: {
        name: chats[chatId].name,
        messages: [...chats[chatId].messages, message],
      },
    });
  };

  return (
    <BrowserRouter>
      <div>
        <ul className={styles.nav__menu}>
          <li className={styles.nav__menu_li}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.nav__menu_li}>
            <Link to="/profile">Profile</Link>
          </li>
          <li className={styles.nav__menu_li}>
            <Link to="/chats">Chats</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/chats/:chatId"
          element={<Chats chats={chats} addMessage={addMessage} />}
        />
        <Route path="*" element={<Chats chats={chats} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
