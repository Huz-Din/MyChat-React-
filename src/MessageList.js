import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import AUTHOR from "./constants";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AdbIcon from "@mui/icons-material/Adb";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

const MessageList = () => {
  const allMessages = useSelector((state) => state.messages.messageList);
  const { name } = useSelector((state) => state.profile);
  let { chatId } = useParams();

  if (!allMessages[chatId]) return null;

  const messages = allMessages[chatId];

  const AmIBot = (author) => {
    return author === AUTHOR.bot;
  };

  return (
    <div className={styles.wrapper__chatlist}>
      {messages.map((element, index) => (
        <div key={index}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  {AmIBot(element.author) ? <AdbIcon /> : <AccountBoxIcon />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={AmIBot(element.author) ? AUTHOR.bot : name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {element.text}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
