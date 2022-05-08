import { ADD_MESSAGE } from "../store/messages/actions";
import addMessage from "../store/messages/actions";
import AUTHOR from "../constants";

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

export default middleware;
