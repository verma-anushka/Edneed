import { savedQuestionsActionTypes } from "./actionTypes";
import SavedQuestionsRequest from "./savedQuestionsRequest";

export const GetSavedQuestions = (limit, id) => {

    return dispatch => {
        dispatch({
            type: savedQuestionsActionTypes.SAVED_QUES_LOADING,
            payload: {
                status: true
            }
        });

        SavedQuestionsRequest.findSavedQuestions(limit, id).then(savedQuestions => {
            return dispatch({
                type: savedQuestionsActionTypes.SAVED_QUES_LOADED,
                payload: {
                    data: savedQuestions.data.data,
                    limit: savedQuestions.data.limit,
                    skip: savedQuestions.data.skip,
                    total: savedQuestions.data.total
                }
            })
        }).catch(error => {
            console.log(`Get Saved Questions Error!`);
            console.log(error.response.data);
            return dispatch({
                type: savedQuestionsActionTypes.SAVED_QUES_ERRORS,
                payload: {
                    // error: error.response.data
                    error: "Something went wrong! Please try again."
                }
            })
        }) 
    }
}


export const GetMoreSavedQuestions = (limit, id, skip) => {

    return dispatch => { 
        dispatch({
            type: savedQuestionsActionTypes.SAVED_QUES_LOADING_MORE,
            payload: {
                status: true
            }
        });

        SavedQuestionsRequest.findSavedQuestions(limit, id, skip).then(savedQuestions => {
            return dispatch({
                type: savedQuestionsActionTypes.SAVED_QUES_MORE_LOADED,
                payload: {
                    data: savedQuestions.data.data,
                    limit: savedQuestions.data.limit,
                    skip: savedQuestions.data.skip,
                    total: savedQuestions.data.total
                }
            })
        }).catch(error => {
            console.log(`Get More Saved Questions Error!`);
            console.log(error.response.data);
            return dispatch({
                type: savedQuestionsActionTypes.SAVED_QUES_ERRORS,
                payload: {
                    // error: error.response.data
                    error: "Something went wrong! Please try again."
                }
            })
        }) 
    }

}

