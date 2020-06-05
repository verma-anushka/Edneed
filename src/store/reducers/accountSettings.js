import { accountSettingsActionTypes } from "../actions/accountSettings/actionTypes";

const ACCOUNT_SETTINGS_INITIAL_STATE = {
    password: {
        loading: false,
        success: "",
        error: ""
    },
    userprofile: {
        loading: false,
        success: "",
        error: ""
    } 
}

export default (
        state=ACCOUNT_SETTINGS_INITIAL_STATE, 
        {type, payload}
    ) => {
        
        switch (type) {
            case accountSettingsActionTypes.ACC_SETTING_USER_DETAILS_LOADING:
                return({
                    ...state,
                    [payload.type]: {
                        ...state[payload.type],
                        loading: payload.status
                    }
                })

            case accountSettingsActionTypes.ACC_SETTING_USER_DETAILS_LOADED:
                return({
                    ...state,
                    [payload.type]: {
                        ...state[payload.type],
                        loading: false,
                        error: "",
                        success: payload.success 
                    }
                })

            case accountSettingsActionTypes.ACC_SETTING_ERRORS:
                return({
                    ...state,
                    [payload.type]: {
                        ...state[payload.type],
                        loading: false,
                        success: "",
                        error: payload.error
                    }
                })
                
            default:
                return state;
        }
}

