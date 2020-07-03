import { combineReducers } from "redux";

// import imageReducer from "./uploadImage";
// import pendingInvitesReducer from "./pendingInvitation";
// import pricingReducer from "./pricing";
// import followedQuestionsReducer from "./questions/followedquestions";
// import savedQuestionsReducer from "./questions/savedquestions";
// import applicationsReducer from "./applications";
// import accountSettingsReducer from "./accountSettings";
// import reportReducer from "./report";
// import ratingReducer from "./rating";
// import mentionsReducer from "./mentions";
// import pageaccessReducer from "./pageaccess";
// import searchUsersReducer from "./searchUsers";
// import rolesreqReducer from "./approveRoles";
import userRolesReducer from "./userRoles";


export default combineReducers({
    
    // uploadImage: imageReducer,
    // pendingInvitation: pendingInvitesReducer,
    // pricing: pricingReducer,
    // followQuestions: followedQuestionsReducer,
    // savedQuestions: savedQuestionsReducer,
    // applications: applicationsReducer,
    // accountSettings: accountSettingsReducer,
    // report: reportReducer,
    // users: mentionsReducer,
    // pageaccess: pageaccessReducer,
    // users: searchUsersReducer,
    // rolesreq: rolesreqReducer,
    userroles: userRolesReducer

});



