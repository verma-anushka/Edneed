import { MentionsActionTypes } from "../actions/mentions/actionTypes";

const MENTIONS_INITIAL_STATE = {
    loading     : false,
    data        : [],
    error       : false
}

export default (
        state = MENTIONS_INITIAL_STATE, 
        { type, payload }
    ) => {
    switch (type) {
        
        case MentionsActionTypes.MENTIONS_LOADING:
            return({
                ...state,
                data    : [],
                loading : payload.status,
            })

        case MentionsActionTypes.MENTIONS_LOADED:
            console.log(payload.data);
            
            return({
                ...state,
                loading : false,
                data    : payload.data,
            })

        case MentionsActionTypes.MENTIONS_ERRORS:
            return({
                ...state,
                loading : false,
                error   : payload.error
            })

        // case MentionsActionTypes.SAVE_ANS_LOADING:
        //     return({
        //         ...state,
        //         loading: payload.status,
        //     })

        // case MentionsActionTypes.SAVE_ANS_LOADED:
        //     return({
        //         ...state,
        //         loading : false,
        //         data    : payload.data,
        //     })

        // case MentionsActionTypes.SAVE_ANS_ERROR:
        //     return({
        //         ...state,
        //         loading : false,
        //         error   : payload.error
        //     })

        default:
            return state;
    }
}

