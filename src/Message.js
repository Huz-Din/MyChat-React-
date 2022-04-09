import React from "react";
import styles from "./index.module.css";

function Message({ message }) {
  // useEffect(() => {
  //   console.log(messagelist);
  // }, []);

  return (
    <div className={styles.message__banner}>
      <h1>Dialog: {message.dialog}</h1>
    </div>
  );
}

export default Message;

// объект должен содержать, как минимум, поля text и author).
