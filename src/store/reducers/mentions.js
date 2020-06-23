import { MentionsActionTypes } from "../actions/mentions/actionTypes";

const MENTIONS_INITIAL_STATE = {

    users: {
        loading : false,
        data    : [],
        error   : false
    },
    saveanswer: {
        loading : false,
        text    : "",
        error   : false
    },
    getanswers: {
        loading : false,
        data : [],
        error   : false
    }
    
}

export default (
        state = MENTIONS_INITIAL_STATE, 
        { type, payload }
    ) => {
    switch (type) {
        
        case MentionsActionTypes.MENTIONS_LOADING:
            return({
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    loading: payload.status
                }
            })

        case MentionsActionTypes.MENTIONS_LOADED:
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading : false,
                    data    : payload.data
                }
            })     

        case MentionsActionTypes.MENTIONS_ERROR:
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loadingmore: payload.status
                }
            })  

        case MentionsActionTypes.SAVE_ANS_LOADING:
            return({
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    loading: payload.status
                }
            })

        case MentionsActionTypes.SAVE_ANS_LOADED:            
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading : false,
                    text    : payload.text
                }
            })  

        case MentionsActionTypes.SAVE_ANS_ERROR:
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loadingmore: payload.status
                }
            })  

        case MentionsActionTypes.GET_ANS_LOADING:
            return({
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    loading: payload.status
                }
            })

        case MentionsActionTypes.GET_ANS_LOADED:  
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading : false,
                    data    : payload.data
                }
            })  
        
        case MentionsActionTypes.GET_ANS_ERROR:
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loadingmore: payload.status
                }
            })  

        default:
            return state;
    }
}

