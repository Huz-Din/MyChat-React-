import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Messages = (props) => {
  const { messages } = props;

  return (
    <>
      {messages.map((element, index) => (
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
      ))}
    </>
  );
};
export default Messages;
