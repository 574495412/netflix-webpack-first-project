import { combineReducers } from "redux";
import LangReducer from "../Reducers/LangReducer";
import LoadReducer from "../Reducers/LoadReducer";
import FavReducer from "../Reducers/FavReducer";

export default combineReducers({
  LangReducer: LangReducer,
  LoadReducer: LoadReducer,
  FavReducer: FavReducer,
});
