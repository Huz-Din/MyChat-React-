import AUTHOR from "../../constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_MESSAGE_WITH_SAGA = "MESSAGES::ADD_MESSAGE_WITH_SAGA";
export const UPDATE_MESSAGES = "MESSAGES::UPDATE_MESSAGES";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { chatId, message },
});

export const addMessageWithSaga = (chatId, message) => ({
  type: ADD_MESSAGE_WITH_SAGA,
  payload: { chatId, message },
});

export const updateMessages = (chatId, messages) => ({
  type: UPDATE_MESSAGES,
  chatId,
  messages,
});

export const addMessageWithThunk =
  (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== AUTHOR.bot) {
      const botMessage = {
        text: "Hi! How are you? I'm from Thunk!",
        author: AUTHOR.bot,
      };
      setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
    }
  };

export default addMessageWithThunk;
