import { combineReducers } from "redux";
import imageReducer from "./uploadImage";

export default combineReducers({
  uploadImage: imageReducer
});
