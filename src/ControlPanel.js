import React, { useState, useEffect, useRef } from "react";
import AUTHOR from "./constants";
import styles from "./index.module.css";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import Box from "@mui/material/Box";
// import ChatList from "./ChatList";
import { useParams } from "react-router-dom";

const ControlPanel = ({ addMessage }) => {
  let { chatId } = useParams();
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const updateMessage = (event) => {
    setValue(event.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (value !== "") {
      const newMessage = { text: value, author: AUTHOR.me };
      addMessage(chatId, newMessage);
      setValue("");
      inputRef.current?.focus();
    }
  };

  const sendMessagePress = (e) => {
    if (e.key === "Enter") {
      if (value !== "") {
        const newMessage = { text: value, author: AUTHOR.me };
        addMessage(chatId, newMessage);
        setValue("");
        inputRef.current?.focus();
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  //   useEffect(() => {
  //     let timerID;

  //     if (
  //       messagelist.length > 0 &&
  //       messagelist[messagelist.length - 1].author !== AUTHOR.bot
  //     ) {
  //       timerID = setTimeout(() => {
  //         setMessagelist([...messagelist, newMessage]);
  //       }, 1500);
  //       const newMessage = { text: "Hi! How are you?", author: AUTHOR.bot };
  //     }
  //     return () => {
  //       if (timerID) {
  //         clearTimeout(timerID);
  //       }
  //     };
  //   }, [messagelist]);

  return (
    <div>
      <Box className={styles.wrapper__message}>
        {/* <ChatList  /> */}
        <TextField
          inputRef={inputRef}
          style={{ marginRight: "20px" }}
          placeholder={"Enter your massege"}
          type="text"
          value={value}
          onChange={updateMessage}
          onKeyPress={sendMessagePress}
        />
        <Fab onClick={sendMessage} color="info" aria-label="add">
          <LocalAirportIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default ControlPanel;
