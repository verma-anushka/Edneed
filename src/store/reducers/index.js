import { combineReducers } from "redux";

// import imageReducer from "./uploadImage";
// import pendingInvitesReducer from "./pendingInvitation";
// import pricingReducer from "./pricing";
// import followedQuestionsReducer from "./questions/followedquestions";
// import savedQuestionsReducer from "./questions/savedquestions";
// import applicationsReducer from "./applications";
import accountSettingsReducer from "./accountSettings";
import reportReducer from "./report";

export default combineReducers({
    
    // uploadImage: imageReducer,
    // pendingInvitation: pendingInvitesReducer,
    // pricing: pricingReducer,
    // followQuestions: followedQuestionsReducer,
    // savedQuestions: savedQuestionsReducer,
    // applications: applicationsReducer,
    accountSettings: accountSettingsReducer,
    report: reportReducer
});

