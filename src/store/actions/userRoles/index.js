import { UserRolesActionTypes } from "./actionTypes";
import UserRolesRequest from "./userRolesRequest";

export const GetUserRoles = (userid) => {

    return dispatch => {
        dispatch({
            type: UserRolesActionTypes.USER_ROLES_LOADING,
            payload: {
                status: true
            }
        });

        UserRolesRequest
            .getUserRoles(userid)
            .then(userroles => {
                return dispatch({
                    type: UserRolesActionTypes.USER_ROLES_LOADED,
                    payload: {
                        data : userroles.data.data
                    }
                })
            })
            .catch(err => {
                console.log(err);
                return dispatch({
                    type: UserRolesActionTypes.USER_ROLES_ERROR,
                    payload: {
                        error: `Some error occurred. Unable to fetch user role, please try again..`
                    }
                })
            })
    }
}
