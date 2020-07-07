import PageAccessRequest from "./pageAccessRequest";
import { PageAccessActionTypes } from "./actionTypes";

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
            return dispatch ({
                type    : PageAccessActionTypes.PAGE_ROLE_LOADED,
                payload : {
                    type    : "roles",
                    data    : roles.data.data
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    PageAccessActionTypes.PAGE_ROLE_ERROR,
                payload: {
                    type    :"roles",
                    error   : err.response
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
            type    :"pageaccess", 
            status  : true 
        }
    })

    PageAccessRequest
        .grantAccess(newaccessrequest) 
        .then(res => {
            return dispatch ({
                type    : PageAccessActionTypes.ACCESS_REQ_LOADED,
                payload : {
                    type    :"pageaccess",
                    success : "Access Granted!"
                }
            })
        })
        .catch(err => {
            return dispatch({
                type:    PageAccessActionTypes.ACCESS_REQ_ERROR,
                payload: {
                    type    :"pageaccess",
                    error   : err.response.data.message
                }
            })
        })
}

}

