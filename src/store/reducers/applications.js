import { ApplicationsActionTypes } from "../actions/applications/actionTypes";

const APPLICATIONS_INITIAL_STATE = {
    page: {
        loading:     false,
        moreloading: false,
        ismore:      false,
        data:        [],
        errors:      {},
        skip:        0,
        total:       0
    },
    user: {
        loading:     false,
        moreloading: false,
        ismore:      false,
        data:        [],
        errors:      {},
        skip:        0,
        total:       0
    }
}

export default (
        state = APPLICATIONS_INITIAL_STATE,
        {type, payload}
    ) => {

        switch (type) {

            case ApplicationsActionTypes.APPLICATIONS_LOADING:
                return ({
                    ...state,
                    [payload.type]: {
                        ...state[payload.type],
                        loading: payload.status
                    }
                })

            case ApplicationsActionTypes.APPLICATIONS_LOADED:
                return ({
                    ...state,
                    [payload.type]:{
                        ...state[payload.type],
                        loading: false,
                        ismore: payload.data.length===payload.limit,
                        skip: payload.limit,
                        total: payload.total,
                        data: payload.data
                    }
                })                

            case ApplicationsActionTypes.APPLICATIONS_LOADING_MORE:
                 return ({
                    ...state,
                    [payload.type]:{
                        ...state[payload.type],
                        loadingmore: payload.status
                    }
                })    
                

            case ApplicationsActionTypes.APPLICATIONS_MORE_LOADED:
                 return ({
                    ...state,
                    [payload.type]: {
                        ...state[payload.type],
                        loadingmore: false,
                        ismore: payload.data.length===payload.limit,
                        skip: state[payload.type].skip+payload.limit,
                        total: payload.total,
                        data: state[payload.type].data.concat(payload.data)
                    }
                })    

            case ApplicationsActionTypes.APPLICATIONS_ERRORS:
                 return ({
                    ...state,
                    [payload.type]: {
                        ...state[payload.type],
                        error: payload.err
                    }
                })    
        
            default:
                return state;
        }
    }

    