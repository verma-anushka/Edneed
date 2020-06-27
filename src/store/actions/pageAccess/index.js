import PageAccessRequest from "./pageAccessRequest";
import { PageAccessActionTypes } from "./actionTypes";

export const GetUsers = (limit) => {

return dispatch => {

    dispatch({
        type    : PageAccessActionTypes.USER_LIST_LOADING,
        payload : { 
            type:"users", 
            status: true 
        }
    })

    PageAccessRequest
        .getUsers(limit) 
        .then(users => {
            // console.log(users);
            
            return dispatch ({
                type    : PageAccessActionTypes.USER_LIST_LOADED,
                payload : {
                    type:"users",
                    data: users.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    PageAccessActionTypes.USER_LIST_ERROR,
                payload: {
                    type:"users",
                    error: err.response
                }
            })
        })
}

}


export const GetRoles = (limit) => {

return dispatch => {

    dispatch({
        type    : PageAccessActionTypes.PAGE_ROLE_LOADING,
        payload : { 
            type:"roles", 
            status: true 
        }
    })

    PageAccessRequest
        .getRoles(limit) 
        .then(roles => {
            // console.log(roles);
            
            return dispatch ({
                type    : PageAccessActionTypes.PAGE_ROLE_LOADED,
                payload : {
                    type:"roles",
                    data: roles.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    PageAccessActionTypes.PAGE_ROLE_ERROR,
                payload: {
                    type:"roles",
                    error: err.response
                }
            })
        })
}

}

export const GrantAccess = (newaccessrequest) => {

return dispatch => {

    dispatch({
        type    : PageAccessActionTypes.ACCESS_REQ_LOADING,
        payload : { 
            type:"pageaccess", 
            status: true 
        }
    })

    PageAccessRequest
        .grantAccess(newaccessrequest) 
        .then(res => {
            // console.log(res);
            
            return dispatch ({
                type    : PageAccessActionTypes.ACCESS_REQ_LOADED,
                payload : {
                    type:"pageaccess",
                    success: "Access Granted!"
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    PageAccessActionTypes.ACCESS_REQ_ERROR,
                payload: {
                    type:"pageaccess",
                    error: "Access Denied!"
                }
            })
        })
}

}
