import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import Box from "@mui/material/Box";
// import AUTHOR from "./constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import addMessageWithThunk from "./store/messages/actions";
import { addMessageWithFB } from "./midlewares/midllewares";
// import { addMessageWithSaga } from "./store/messages/actions";

const ControlPanel = () => {
  let { chatId } = useParams();
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const author = useSelector((state) => state.profile.name);
  // const allMessages = useSelector((state) => state.messages.messageList);
  // const messages = allMessages[chatId] || [];

  const updateMessage = (event) => {
    setValue(event.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (value !== "") {
      const newMessage = { text: value, author };
      dispatch(addMessageWithFB(chatId, newMessage));
      // dispatch(addMessageWithSaga(chatId, newMessage));
      setValue("");
      inputRef.current?.focus();
    }
  };

  // const sendMessage = (e) => {
  //   e.preventDefault();
  //   if (value !== "") {
  //     const newMessage = { text: value, author };
  //     dispatch(addMessageWithThunk(chatId, newMessage));
  //     // dispatch(addMessageWithSaga(chatId, newMessage));
  //     setValue("");
  //     inputRef.current?.focus();
  //   }
  // };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // deactived bot
  // useEffect(() => {
  //   let timerID;
  //   if (
  //     messages?.length > 0 &&
  //     messages[messages.length - 1].author !== AUTHOR.bot
  //   ) {
  //     const newMessage = { text: "Hi! How are you?", author: AUTHOR.bot };
  //     timerID = setTimeout(() => {
  //       dispatch(addMessage(chatId, newMessage));
  //     }, 1500);
  //   }
  //   return () => {
  //     if (timerID) {
  //       clearTimeout(timerID);
  //     }
  //   };
  // }, [messages, chatId]);

  return (
    <div>
      <Box className={styles.wrapper__message}>
        <TextField
          inputRef={inputRef}
          style={{ marginRight: "20px" }}
          placeholder={"Enter your massege"}
          type="text"
          value={value}
          onChange={updateMessage}
        />
        <Fab onClick={sendMessage} color="info" aria-label="add">
          <LocalAirportIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default ControlPanel;
