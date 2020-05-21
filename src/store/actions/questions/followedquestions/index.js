import { followQuestionsActionTypes } from "./actionTypes";
import FollowQuestionsRequest from "./followedQuestionsRequest";

export const GetFollowQuestions = (limit, id) => {

    return dispatch => {
        dispatch({
            type: followQuestionsActionTypes.FLLW_QUES_LOADING,
            payload: {
                status: true
            }
        });

        FollowQuestionsRequest.findFollowQuestions(limit, id).then(followQuestions => {
            return dispatch({
                type: followQuestionsActionTypes.FLLW_QUES_LOADED,
                payload: {
                    data: followQuestions.data.data,
                    limit: followQuestions.data.limit,
                    skip: followQuestions.data.skip,
                    total: followQuestions.data.total
                }
            })
        }).catch(error => {
            console.log(`Get Follow Questions Error!`);
            console.log(error.response.data.message);
            return dispatch({
                type: followQuestionsActionTypes.FLLW_ERRORS,
                payload: {
                    // error: error.response.data.message
                    error: "Something went wrong. Please try again!"
                }
            })
        }) 
    }
}


export const GetMoreFollowQuestions = (limit, id, skip) => {

    return dispatch => { 
        dispatch({
            type: followQuestionsActionTypes.FLLW_QUES_LOADING_MORE,
            payload: {
                status: true
            }
        });

        FollowQuestionsRequest.findFollowQuestions(limit, id, skip).then(followQuestions => {
            return dispatch({
                type: followQuestionsActionTypes.FLLW_QUES_MORE_LOADED,
                payload: {
                    data: followQuestions.data.data,
                    limit: followQuestions.data.limit,
                    skip: followQuestions.data.skip,
                    total: followQuestions.data.total
                }
            })
        }).catch(error => {
            console.log(`Get More Follow Questions Error!`);
            console.log(error.response.data.message);
            return dispatch({
                type: followQuestionsActionTypes.FLLW_QUES_ERRORS,
                payload: {
                    // error: error.response.data.message
                    error: "Something went wrong. Please try again!"
                }
            })
        }) 
    }
}

