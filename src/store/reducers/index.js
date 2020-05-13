import { combineReducers } from "redux";
import imageReducer from "./uploadImage";
import pendingInvitesReducer from "./pendingInvitation";

export default combineReducers({
  uploadImage: imageReducer,
  pendingInvitation: pendingInvitesReducer
});
