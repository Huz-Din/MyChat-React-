import React, { useState, useEffect } from "react";
import AUTHOR from "./constants";
import styles from "./index.module.css";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
import Messages from "./Messages";

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

  // const Input = (props) => {
  //   const inputRef = useRef(null);
  //   return (
  //   <input ref={inputRef} />
  //   )
  //   },

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
      <h3>Chat: </h3>
      <Messages messages={messagelist} />
      {/* {messagelist.map((element, index) => (
        <div key={index}>
          <List>
            <ListItem disablePadding></ListItem>
            <ListItemButton>
              <ListItemIcon>{element.author}</ListItemIcon>
              <ListItemText primary={element.text} />
            </ListItemButton>
            <Divider />
          </List>
        </div>
      ))} */}
      <TextField
        // ref={inputRef}
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
  );
  // return (
  //   <div className={styles.wrapper__message}>
  //     <h3>Chat: </h3>
  //     {messagelist.map((element, index) => (
  //       <div key={index}>
  //         <p>{element.author}</p>
  //         <p>{element.text}</p>
  //       </div>
  //     ))}
  //     <TextField
  //       style={{ marginRight: "20px" }}
  //       placeholder={"enter your massege"}
  //       type="text"
  //       value={value}
  //       onChange={updateMessage}
  //       onKeyPress={sendMessagePress}
  //     />
  //     <Fab onClick={sendMessage} color="info" aria-label="add">
  //       <LocalAirportIcon />
  //     </Fab>
  //   </div>
  // );
};

export default App;
