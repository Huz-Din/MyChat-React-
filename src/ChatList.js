import React, { useState, useEffect } from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  List,
  Fab,
  Dialog,
  DialogTitle,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  initTrackerWithFB,
  addChatWithFB,
  deleteChatWithFB,
} from "./midlewares/midllewares";

const ChatList = () => {
  const chats = useSelector((state) => state.chats.chatList);
  const [visible, setVisible] = useState(false);
  const [chatName, setChatName] = useState("");
  const dispatch = useDispatch();
  let { chatId } = useParams();

  const handleChatName = (e) => {
    setChatName(e.target.value);
  };

  const handleAdd = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSave = () => {
    dispatch(addChatWithFB(chatName));
    setChatName("");
    handleClose();
  };

  const deleteChat = (id) => {
    dispatch(deleteChatWithFB(id));
  };

  //ошибка зависимостей
  useEffect(() => {
    dispatch(initTrackerWithFB());
  }, [chatId]);

  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Chat List
      </Typography>
      <List>
        {chats?.length ? (
          chats.map((chat) => (
            <Link to={`/chats/${chat.id}`} key={chat.id}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteChat(chat.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>{}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={chat.name} />
              </ListItem>
            </Link>
          ))
        ) : (
          <div>No chats</div>
        )}
      </List>
      <Fab
        onClick={handleAdd}
        variant="extended"
        color="primary"
        aria-label="add"
      >
        <NavigationIcon sx={{ mr: 0.5 }} />
        Add chat
      </Fab>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Enter a name</DialogTitle>
        <TextField
          placeholder="chat name"
          value={chatName}
          onChange={handleChatName}
        />
        <Fab
          onClick={handleSave}
          variant="extended"
          color="primary"
          aria-label="add"
        >
          Save it
        </Fab>
      </Dialog>
    </div>
  );
};

export default ChatList;
