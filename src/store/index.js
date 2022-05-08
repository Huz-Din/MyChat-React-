import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import middleware from "../midlewares/midllewares";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import mySaga from "./sagas";
import storage from "redux-persist/lib/storage";
import profileReducer from "./profile/reducer";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";

//saga
// const sagaMiddleware = createSagaMiddleware();

//thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

//saga
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const persistedReducer = persistReducer(persistConfig, reducers);

//thunk
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

//
const persistor = persistStore(store);

export default persistor;

//saga
// sagaMiddleware.run(mySaga);
