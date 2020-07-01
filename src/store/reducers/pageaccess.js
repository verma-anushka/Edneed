import { PageAccessActionTypes } from "../actions/pageAccess/actionTypes";

const PAGE_ACCESS_INITIAL_STATE = {

    roles: {
        loading : false,
        data    : [],
        error   : ""
    },
    pageaccess: {
        loading : false,
        message : ""
    }
}

export default (
        state = PAGE_ACCESS_INITIAL_STATE, 
        { type, payload }
    ) => {
    switch (type) {

        case PageAccessActionTypes.PAGE_ROLE_LOADING:
            return({
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    loading: payload.status
                }
            })

        case PageAccessActionTypes.PAGE_ROLE_LOADED:            
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading : false,
                    data    : payload.data
                }
            })  

        case PageAccessActionTypes.PAGE_ROLE_ERROR:
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading : false,
                    error   : payload.error
                }
            })  

        case PageAccessActionTypes.ACCESS_REQ_LOADING:
            return({
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    loading: payload.status
                }
            })

        case PageAccessActionTypes.ACCESS_REQ_LOADED:  
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading : false,
                    message : payload.success
                }
            })  
        
        case PageAccessActionTypes.ACCESS_REQ_ERROR:
            return ({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading : false,
                    message : payload.error
                }
            })  

        default:
            return state;
    }
}

