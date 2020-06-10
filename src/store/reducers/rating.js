import { ratingActionTypes } from "../actions/rating/actionTypes";

const RATING_INITIAL_STATE = {

    loading     : false,
    more        : false,
    loadingmore : false,
    data        : [],
    skip        : 0,
    total       : 0,
    error       : false,
}

export default (
        state = RATING_INITIAL_STATE, 
        { type, payload }
    ) => {
    switch (type) {
        
        case ratingActionTypes.RATING_LOADING:
            return({
                ...state,
                loading: payload.status,
            })

        case ratingActionTypes.RATING_LOADED:
            return({
                ...state,
                loading : false,
                more    : payload.data.length===payload.limit,
                data    : payload.data,
                skip    : payload.limit,
                total   : payload.total,
            })

        case ratingActionTypes.RATING_LOADING_MORE:
            return({
                ...state,
                loadingmore: payload.status
            })

        case ratingActionTypes.RATING_MORE_LOADED:
            return({
                ...state,
                loadingmore : false,
                more        : payload.data.length===payload.limit,
                skip        : state.skip+payload.limit,
                total       : payload.total,
                data        : state.data.concat(payload.data)
            })

        case ratingActionTypes.RATING_ERRORS:
            return({
                ...state,
                loading : false,
                error   : payload.error

            })

        default:
            return state;
    }
}

