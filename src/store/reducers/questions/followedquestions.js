import { followQuestionsActionTypes } from "../../actions/questions/followedquestions/actionTypes";

const INITIAL_STATE = {
    loading: false,
    loadingmore: false,
    ismore: false,
    skip: 0,
    total: 0,
    data: [],
    error: {}
}

export default (state=INITIAL_STATE, {type, payload}) => {

    switch (type) {
        case followQuestionsActionTypes.FLLW_QUES_LOADING:
            return({
                ...state,
                loading: payload.status
            })

        case followQuestionsActionTypes.FLLW_QUES_LOADED:
            return({
                ...state,
                loading: false,
                ismore: payload.data.length===payload.limit,
                skip: payload.limit,
                total: payload.total,
                data: payload.data
            })
            
        case followQuestionsActionTypes.FLLW_QUES_LOADING_MORE:
            return({
                ...state,
                loadingmore: payload.status
            })

        case followQuestionsActionTypes.FLLW_QUES_MORE_LOADED:
            return({
                ...state,
                loadingmore: false,
                ismore: payload.data.length===payload.limit,
                skip: state.skip+payload.limit,
                total: payload.total,
                data: state.data.concat(payload.data)
            })

        case followQuestionsActionTypes.FLLW_QUES_ERRORS:
            return({
                ...state,
                error: payload.error
            })
            
        default:
            return state;
    }
}

