import SearchUsersRequest from "./searchUsersRequest";
import { SearchUsersActionTypes } from "./actionTypes";

export const SearchUsers = (searchkey, curruserid, limit) => {

return dispatch => {

    dispatch({
        type    : SearchUsersActionTypes.USERS_LOADING,
        payload : { 
            status: true 
        }
    })

    SearchUsersRequest
        .searchUsers(searchkey, curruserid, limit) 
        .then(users => {
            return dispatch ({
                type    : SearchUsersActionTypes.USERS_LOADED,
                payload : {
                    data: users.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    SearchUsersActionTypes.USERS_ERROR,
                payload: {
                    error: err.response
                }
            })
        })
}

}

