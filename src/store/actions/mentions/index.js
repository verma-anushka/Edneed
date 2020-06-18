import MentionsRequest from "./mentionsRequest";
import { MentionsActionTypes } from "./actionTypes";

export const GetUsers = (name, limit) => {

return dispatch => {

    dispatch({
        type    : MentionsActionTypes.USERS_LOADING,
        payload : { status: true }
    })

    MentionsRequest
        .getUsers(name, limit) 
        .then(users => {
            // console.log(name);
            // console.log(users.data.data);
            return dispatch ({
                type    : MentionsActionTypes.USERS_LOADED,
                payload : {
                    data: users.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    MentionsActionTypes.USERS_ERROR,
                payload: {
                    error: err.response
                }
            })
        })
}

}

