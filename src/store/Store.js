import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import languageReducer from "./Reducer"

const store = createStore(languageReducer,composeWithDevTools())
export default store;