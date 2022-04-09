import React, { useState, useEffect } from "react";
import AUTHOR from "./constants";
import styles from "./index.module.css";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import Box from "@mui/material/Box";
import Messages from "./Messages";
import ChatList from "./ChatList";

const App = () => {
  const [messagelist, setMessagelist] = useState([]);
  const [value, setValue] = useState("");

  const updateMessage = (event) => {
    setValue(event.target.value);
  };

  const sendMessage = () => {
    if (value !== "") {
      const newMessage = { text: value, author: AUTHOR.me };
      setMessagelist([...messagelist, newMessage]);
      setValue("");
    }
  };

  const sendMessagePress = (e) => {
    if (e.key === "Enter") {
      if (value !== "") {
        const newMessage = { text: value, author: AUTHOR.me };
        setMessagelist([...messagelist, newMessage]);
        setValue("");
      }
    }
  };

  useEffect(() => {
    let timerID;

    if (
      messagelist.length > 0 &&
      messagelist[messagelist.length - 1].author !== AUTHOR.bot
    ) {
      timerID = setTimeout(() => {
        setMessagelist([...messagelist, newMessage]);
      }, 1500);
      const newMessage = { text: "Hi! How are you?", author: AUTHOR.bot };
    }
    return () => {
      if (timerID) {
        clearTimeout(timerID);
      }
    };
  }, [messagelist]);

  return (
    <Box className={styles.wrapper__message}>
      <h3>Dialogs: </h3>
      <ChatList />
      <h3>Chat: </h3>
      <Messages messages={messagelist} />
      <TextField
        style={{ marginRight: "20px" }}
        placeholder={"Enter your massege"}
        autoFocus
        type="text"
        value={value}
        onChange={updateMessage}
        onKeyPress={sendMessagePress}
      />
      <Fab onClick={sendMessage} color="info" aria-label="add">
        <LocalAirportIcon />
      </Fab>
    </Box>
  );
};

export default App;
