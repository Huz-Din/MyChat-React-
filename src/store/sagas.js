// import { takeLatest, put, delay } from "redux-saga/effects";
// import { ADD_MESSAGE_WITH_SAGA } from "./messages/actions";
// import { addMessage } from "./messages/actions";
// import AUTHOR from "../constants";

// function* onAddMessageWithSaga(action) {
//   yield put(addMessage(action.payload.chatId, action.payload.message));
//   if (action.payload.message.author !== AUTHOR.bot) {
//     const botMessage = {
//       text: "Hi! How are you? I'm from Thunk!",
//       author: AUTHOR.bot,
//     };
//     yield delay(5000);
//     yield put(addMessage(action.payload.chatId, botMessage));
//   }
// }

// function* mySaga() {
//   yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
// }

// export default mySaga;
