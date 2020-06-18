import { MentionsActionTypes } from "../actions/mentions/actionTypes";

const MENTIONS_INITIAL_STATE = {
    loading     : false,
    data        : [],
    total       : 0,
    error       : false,
}

export default (
        state = MENTIONS_INITIAL_STATE, 
        { type, payload }
    ) => {
    switch (type) {
        
        case MentionsActionTypes.USERS_LOADING:
            return({
                ...state,
                loading: payload.status,
            })

        case MentionsActionTypes.USERS_LOADED:
            return({
                ...state,
                loading : false,
                data    : payload.data,
            })

        case MentionsActionTypes.USERS_ERRORS:
            return({
                ...state,
                loading : false,
                error   : payload.error
            })

        default:
            return state;
    }
}

