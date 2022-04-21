import { ADD_MESSAGE } from "./actions";

const initialState = {
  messageList: {},
};

/**
 * {
 * chatId: [ {id, text, author} ]
 * }
 * type MessageItem = {
 *      id: string,
 *      text: string,
 *      author: string
 * }
 * type MessageList = {
 *      [string]: messageItem []
 * }
 */

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { chatId, message } = action.payload;
      const oldMessages = state.messageList[chatId] || [];

      return {
        ...state,
        messageList: {
          ...state.messageList,
          [chatId]: [
            ...oldMessages,
            {
              ...message,
              id: `${chatId}${oldMessages.lenght}`,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
};

export default messagesReducer;
