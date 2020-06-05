import { accountSettingsActionTypes } from "./actionTypes";
import AccountSettingsRequest from "./accountSettingsRequest";

export const UpdateUserProfile = (id, newuserprofile) => {

    return dispatch => {
        dispatch ({
            type:    accountSettingsActionTypes.ACC_SETTING_USER_DETAILS_LOADING,
            payload: { type : "updateuserprofile", status: true }
        })

        AccountSettingsRequest
            .updateUserProfile(id, newuserprofile)
            .then(updateduserdetails => {
                return dispatch({
                    type: accountSettingsActionTypes.ACC_SETTING_USER_DETAILS_LOADED,
                    payload: {
                        type   : "updateuserprofile",
                        success: `Your profile was successfully updated!`
                    }
                })
            })
            .catch(error => {
                return dispatch({
                    type: accountSettingsActionTypes.ACC_SETTING_ERRORS,
                    payload: {
                        type : "updateuserprofile",
                        error: `Some error occurred. Profile was not updated! Please try again..`
                    }
                })
            })
    }
}


export const ChangePassword = (id, email, oldpassword, newpassword) => {

    return dispatch => {
        dispatch ({
            type:    accountSettingsActionTypes.ACC_SETTING_USER_DETAILS_LOADING,
            payload: { type: "password", status: true }
        });

        AccountSettingsRequest
            .changePassword(id, email, oldpassword, newpassword)
            .then(updateduserdetails => {
                return dispatch({
                    type: accountSettingsActionTypes.ACC_SETTING_USER_DETAILS_LOADED,
                    payload: {
                        type   : "password",
                        success: "Your password was successfully updated!"
                    }
                })
                
            })
            .catch(error => {
                return dispatch({
                    type: accountSettingsActionTypes.ACC_SETTING_ERRORS,
                    payload: {
                        type : "password",
                        error: error.response.data.message
                    }
                })
            })
    }
}

