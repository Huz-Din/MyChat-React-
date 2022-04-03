import React, { useState, useEffect } from "react";
import AUTHOR from "./constants";
import styles from "./index.module.css";

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
    <div className={styles.wrapper__message}>
      <h3>Chat: </h3>
      {messagelist.map((element) => (
        <div>
          <p>{element.author}</p>
          <p>{element.text}</p>
        </div>
      ))}
      <input
        placeholder={"enter your massege"}
        type="text"
        value={value}
        onChange={updateMessage}
        onKeyPress={sendMessagePress}
      />
      <button className={styles.button__sendmessage} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default App;
