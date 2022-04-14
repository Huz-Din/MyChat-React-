import { TOGGLE_NAME } from "./actions";

const initialState = {
  showName: false,
  name: "Roman",
};

//reducer хранит в аргументах state (состояние) и action
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAME:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};

export default profileReducer;
