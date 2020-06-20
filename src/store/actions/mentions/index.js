import MentionsRequest from "./mentionsRequest";
import { MentionsActionTypes } from "./actionTypes";

export const GetUsers = (searchkey, limit) => {

return dispatch => {

    dispatch({
        type    : MentionsActionTypes.MENTIONS_LOADING,
        payload : { status: true }
    })

    MentionsRequest
        .getUsers(searchkey, limit) 
        .then(users => {
            console.log(searchkey);
            console.log(users.data.data);
            return dispatch ({
                type    : MentionsActionTypes.MENTIONS_LOADED,
                payload : {
                    data: users.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    MentionsActionTypes.MENTIONS_ERROR,
                payload: {
                    error: err.response
                }
            })
        })
}

}

export const SaveAnswer = (post, text) => {

return dispatch => {

    dispatch({
        type    : MentionsActionTypes.MENTIONS_LOADING,
        payload : { status: true }
    })

    MentionsRequest
        .saveAnswer(post, text) 
        .then(savedanswer => {
            console.log(savedanswer);

            return dispatch ({
                type    : MentionsActionTypes.MENTIONS_LOADED,
                payload : {
                    data: savedanswer.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    MentionsActionTypes.MENTIONS_ERROR,
                payload: {
                    error: err.response
                }
            })
        })
}

}

