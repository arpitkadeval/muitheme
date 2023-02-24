import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import drawerReducer from "./drawer/drawerReducer";
import userCheckReducer from "./usercheck/userCheckReducer";
import toggleReducer from "./Toggle/toggleReducer";

export default combineReducers({
  authReducer,
  drawerData: drawerReducer,
  userCheckData: userCheckReducer,
  toggleReducer,
});
