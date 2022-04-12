import React from "react";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Router from "./pages/Router";

const App = () => {
  // const [messagelist, setMessagelist] = useState([]);
  // const [value, setValue] = useState("");
  // const inputRef = useRef();

  // const updateMessage = (event) => {
  //   setValue(event.target.value);
  // };

  // const sendMessage = (e) => {
  //   e.preventDefault();
  //   if (value !== "") {
  //     const newMessage = { text: value, author: AUTHOR.me };
  //     setMessagelist([...messagelist, newMessage]);
  //     setValue("");
  //     inputRef.current?.focus();
  //   }
  // };

  // const sendMessagePress = (e) => {
  //   if (e.key === "Enter") {
  //     if (value !== "") {
  //       const newMessage = { text: value, author: AUTHOR.me };
  //       setMessagelist([...messagelist, newMessage]);
  //       setValue("");
  //       inputRef.current?.focus();
  //     }
  //   }
  // };

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);

  // useEffect(() => {
  //   let timerID;

  //   if (
  //     messagelist.length > 0 &&
  //     messagelist[messagelist.length - 1].author !== AUTHOR.bot
  //   ) {
  //     timerID = setTimeout(() => {
  //       setMessagelist([...messagelist, newMessage]);
  //     }, 1500);
  //     const newMessage = { text: "Hi! How are you?", author: AUTHOR.bot };
  //   }
  //   return () => {
  //     if (timerID) {
  //       clearTimeout(timerID);
  //     }
  //   };
  // }, [messagelist]);

  return (
    <Box className={styles.wrapper__message}>
      <Router />
    </Box>
  );
};

export default App;
