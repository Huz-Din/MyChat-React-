import { ADD_MESSAGE, updateMessages } from "../store/messages/actions";
import addMessage from "../store/messages/actions";
import AUTHOR from "../constants";
import { ref, onValue, push, set, remove } from "firebase/database";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "../services/firebaseConfig";
import chatListUpdate from "../store/chats/actions";
// import { useDispatch } from "react-redux";

const middleware = (store) => (next) => (action) => {
  if (
    action.type === ADD_MESSAGE &&
    action.payload.message.author !== AUTHOR.bot
  ) {
    const newMessage = {
      text: "Hi! How are you? I'm from middleware!",
      author: AUTHOR.bot,
    };
    setTimeout(
      () => store.dispatch(addMessage(action.payload.chatId, newMessage)),
      2000
    );
  }

  return next(action);
};

export const initTrackerWithFB = () => async (dispatch) => {
  const db = getDatabase(firebaseConfig);
  const chatRef = ref(db, "/chat");
  onValue(chatRef, (snapshot) => {
    const data = snapshot.val();
    const chatIds = Object.keys(data);
    const chatArr = chatIds.map((item) => ({
      id: item,
      name: data[item].name,
    }));
    dispatch(chatListUpdate(chatArr));
  });
};

export const addChatWithFB = (name) => async () => {
  const db = getDatabase(firebaseConfig);
  const chatRef = ref(db, "/chat");
  const newChatRef = push(chatRef);
  set(newChatRef, { name: name }).then((res) => {
    console.log("chat added", res);
  });
};

export const deleteChatWithFB = (id) => async () => {
  const db = getDatabase(firebaseConfig);
  const chatRef = ref(db, `/chat/${id}`);
  const messagesRef = ref(db, `/messages/${id}`);
  remove(chatRef).then((res) => {
    console.log("Chat Removed", res);
  });
  remove(messagesRef).then((res) => {
    console.log("Messages deleted", res);
  });
};

export const addMessageWithFB = (chatId, message) => async () => {
  const db = getDatabase(firebaseConfig);
  const messageRef = ref(db, `/messages/${chatId}`);
  const newMessageRef = push(messageRef);
  set(newMessageRef, message).then((res) => {
    console.log("messages added", res);
  });
};

export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
  const db = getDatabase(firebaseConfig);

  const msgRef = ref(db, `/messages/${chatId}`);

  onValue(msgRef, (snapshot) => {
    const data = snapshot.val();
    const msg = data && Object.values(data);
    if (msg?.length > 0) {
      dispatch(updateMessages(chatId, msg));
    }
  });
};

export default middleware;
