import { SearchUsersActionTypes } from "../actions/searchUsers/actionTypes";

const INITIAL_STATE = {
    
    loading : false,
    data    : [],
    error   : ""

}

export default (
        state = INITIAL_STATE, 
        { type, payload }
    ) => {
    switch (type) {
        
        case SearchUsersActionTypes.USERS_LOADING:
            return({
                ...state,
                loading: payload.status
            })

        case SearchUsersActionTypes.USERS_LOADED:
            return ({
                ...state,
                loading : false,
                data    : payload.data
            })     

        case SearchUsersActionTypes.USERS_ERROR:
            return ({
                ...state,
                loading : false,
                error   : payload.error
            })  
        
        default:
            return state;
    }
}

