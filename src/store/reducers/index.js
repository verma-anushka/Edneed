import { combineReducers } from "redux";
import imageReducer from "./uploadImage";
import pendingInvitesReducer from "./pendingInvitation";
import pricingReducer from "./pricing";


export default combineReducers({
  uploadImage: imageReducer,
  pendingInvitation: pendingInvitesReducer,
  pricing: pricingReducer
});
