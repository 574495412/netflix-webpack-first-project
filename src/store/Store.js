import { createStore } from "redux";
import languageReducer from "./Reducer"
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(languageReducer,composeWithDevTools())
export default store;