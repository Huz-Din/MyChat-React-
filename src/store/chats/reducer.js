import { ADD_CHAT } from "./actions";
import CHATS_UPDATE from "./actions";

const initialState = {
  chatList: [],
};

//струткура данных
//chatItem = {id: string, name: string};
//chatList = chatItem[];

/** const chatList = [
//     { 
//         id: 'string = id +chat.length',
//         name: 'string'
//     }
// ];
*/

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${state.chatList.length}`,
            name: action.payload,
          },
        ],
      };

    case CHATS_UPDATE:
      return {
        ...state,
        chatList: action.chats,
      };

    default:
      return state;
  }
};

export default chatsReducer;
