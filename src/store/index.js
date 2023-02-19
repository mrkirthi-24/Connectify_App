import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

//here createStore is used to create new store |
//rootReducer holds the initial state |
//applyMiddleware is used to apply middleware function

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
