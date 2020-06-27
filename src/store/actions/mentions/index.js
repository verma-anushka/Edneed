import MentionsRequest from "./mentionsRequest";
import { MentionsActionTypes } from "./actionTypes";

export const GetUsers = (searchkey, limit) => {

return dispatch => {

    dispatch({
        type    : MentionsActionTypes.MENTIONS_LOADING,
        payload : { type:"users", status: true }
    })

    MentionsRequest
        .getUsers(searchkey, limit) 
        .then(users => {
            return dispatch ({
                type    : MentionsActionTypes.MENTIONS_LOADED,
                payload : {
                    type:"users",
                    data: users.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    MentionsActionTypes.MENTIONS_ERROR,
                payload: {
                    type:"users",
                    error: err.response
                }
            })
        })
}

}

export const GetAnswers = (post_id, limit) => {

return dispatch => {

    dispatch({
        type    : MentionsActionTypes.GET_ANS_LOADING,
        payload : { type:"getanswers", status: true }
    })

    MentionsRequest
        .getAnswers(post_id, limit) 
        .then(answers => {
            return dispatch ({
                type    : MentionsActionTypes.GET_ANS_LOADED,
                payload : {
                    type:"getanswers",
                    data: answers.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    MentionsActionTypes.GET_ANS_ERROR,
                payload: {
                    type:"getanswers",
                    error: err.response
                }
            })
        })
}

}


export const SaveAnswer = (post_id, text, limit) => {

return dispatch => {

    dispatch({
        type    : MentionsActionTypes.SAVE_ANS_LOADING,
        payload : { type:"saveanswer", status: true }
    })

    MentionsRequest
        .saveAnswer(post_id, text) 
        .then(savedanswer => {
            MentionsRequest
                .getAnswers(post_id, limit) 
                    .then(answers => {
                        return dispatch ({
                            type    : MentionsActionTypes.GET_ANS_LOADED,
                            payload : {
                                type:"getanswers",
                                data: answers.data.data
                            }
                        })
                    })
                    .catch(err => {
                        return dispatch({
                            type:    MentionsActionTypes.GET_ANS_ERROR,
                            payload: {
                                type:"getanswers",
                                error: err.response
                            }
                        })
                    })
                return dispatch ({
                    type    : MentionsActionTypes.SAVE_ANS_LOADED,
                    payload : {
                        type:"saveanswer",
                        text: savedanswer.data.text
                    }
                })
            })
        .catch(err => {
            return dispatch({
                type:    MentionsActionTypes.SAVE_ANS_ERROR,
                payload: {
                    type:"saveanswer",
                    error: err.response
                }
            })
        })
}

}

