import { accountSettingsActionTypes } from "./actionTypes";
import AccountSettingsRequest from "./accountSettingsRequest";

export const UpdateUserDetails = (id, newdetails) => {

    const property = Object.keys(newdetails)[0];
    const value = newdetails[Object.keys(newdetails)[0]];
    
    return dispatch => {
        dispatch ({
            type:    accountSettingsActionTypes.ACC_SETTING_USER_DETAILS_LOADING,
            payload: { type : `${property}`, status: true }
        })

        AccountSettingsRequest
            .updateUserDetails(id, property, value)
            .then(updateduserdetails => {
                return dispatch({
                    type: accountSettingsActionTypes.ACC_SETTING_USER_DETAILS_LOADED,
                    payload: {
                        type   : `${property}`,
                        success: `Your ${property} was successfully updated!`
                    }
                })
            })
            .catch(error => {
                return dispatch({
                    type: accountSettingsActionTypes.ACC_SETTING_ERRORS,
                    payload: {
                        type : `${property}`,
                        error: `Your ${property} not updated! Please try again`
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

