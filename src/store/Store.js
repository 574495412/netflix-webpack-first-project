import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./Reducer";

const store = createStore(Reducer, composeWithDevTools());
export default store;
  