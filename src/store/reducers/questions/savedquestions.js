import { savedQuestionsActionTypes } from "../../actions/questions/savedquestions/actionTypes";

const SAVED_QUES_INITIAL_STATE = {
    loading: false,
    skip: 0,
    total: 0,
    data: [],
    loadingmore: false,
    ismore: false,
    error: {}
}

export default (state=SAVED_QUES_INITIAL_STATE, {type, payload}) => {

    switch (type) {
        case savedQuestionsActionTypes.SAVED_QUES_LOADING:
            return({
                ...state,
                loading: payload.status
            })

        case savedQuestionsActionTypes.SAVED_QUES_LOADED:
            return({
                ...state,
                loading: false,
                skip: payload.limit,
                total: payload.total,
                data: payload.data,
                ismore: payload.data.length === payload.limit
            })
            
        case savedQuestionsActionTypes.SAVED_QUES_LOADING_MORE:
            return({
                ...state,
                loadingmore: payload.status
            })

        case savedQuestionsActionTypes.SAVED_QUES_MORE_LOADED:
            return({
                ...state,
                loadingmore: false,
                ismore: payload.data.length === payload.limit,
                skip: state.skip+payload.limit,
                total: payload.total,
                data: state.data.concat(payload.data)
            })

        case savedQuestionsActionTypes.SAVED_QUES_ERRORS:
            return({
                ...state,
                error: payload.error
            })
            
        default:
            return state;
    }
}

