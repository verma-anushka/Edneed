import { UserRolesActionTypes } from "../actions/userRoles/actionTypes";

const USER_ROLES_STATE = {
    loading : false,
    data    : [],
    error   : ""
}

export default (state=USER_ROLES_STATE, {type, payload}) => {

    switch (type) {
    
        case UserRolesActionTypes.USER_ROLES_LOADING:
            return({
                ...state,
                loading : payload.status
            })

        case UserRolesActionTypes.USER_ROLES_LOADED:
            return({
                ...state,
                loading : false,
                data    : payload.data
            })

        case UserRolesActionTypes.USER_ROLES_ERROR:
            return({
                ...state,
                error : payload.error
            })
            
        default:
            return state;
    }
}

