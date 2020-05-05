import { combineReducers } from "redux";
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'

import { authentication } from "./authentication.reducer";
import { userReducer as user } from "./users.reducer";

const rootReducer = combineReducers({
  authentication,
  user,
  loadingBar,
});

export default rootReducer;
