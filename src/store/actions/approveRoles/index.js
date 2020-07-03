import { ApproveRolesActionTypes } from "./actionTypes";
import ApproveRolesRequest from "./approveRolesRequest";

export const GetRoleRequests = (kind, pageid, limit) => {

    return dispatch => {
        dispatch({
            type: ApproveRolesActionTypes.ROLE_REQ_LOADING,
            payload: {
                status: true
            }
        });

        ApproveRolesRequest
            .getRolesReq(kind, pageid, limit)
            .then(rolereqs => {
                return dispatch({
                    type: ApproveRolesActionTypes.ROLE_REQ_LOADED,
                    payload: {
                        data    : rolereqs.data.data,
                        skip    : rolereqs.data.skip,
                        total   : rolereqs.data.total,
                        limit   : rolereqs.data.limit
                    }
                })
            })
            .catch(err => {
                console.log(err);
                return dispatch({
                    type: ApproveRolesActionTypes.ROLE_REQ_ERROR,
                    payload: {
                        error: `Some error occurred. Unable to fetch requests for role approval! Please try again..`
                    }
                })
            })
    }
}

export const GetMoreRoleRequests = (kind, pageid, limit, skip) => {

    return dispatch => { 
        dispatch({
            type: ApproveRolesActionTypes.ROLE_REQ_MORE_LOADING,
            payload:{
                status: true
            }
        });

        ApproveRolesRequest
            .getRolesReq(kind, pageid, limit, skip)
            .then(rolereqs => {
                return dispatch({
                    type: ApproveRolesActionTypes.ROLE_REQ_MORE_LOADED,
                    payload: {
                        data   : rolereqs.data.data,
                        skip   : rolereqs.data.skip,
                        total  : rolereqs.data.total,
                        limit  : rolereqs.data.limit
                    }
                })
            })
            .catch(err => {
                console.log(err);
                return dispatch({
                    type: ApproveRolesActionTypes.ROLE_REQ_ERROR,
                    payload: {
                        error: `Unable to fetch more requests for role approval! Please try again.`
                    }
                })
            })
    }
}

export const AcceptRoleRequest = id =>{

    return dispatch => {
        dispatch({
            type: ApproveRolesActionTypes.ROLE_REQ_ACCEPT_LOADING,
            payload: {
                status: true
            }
        })

        ApproveRolesRequest
            .acceptRoleReq(id)
            .then(acceptedRole => {
                return dispatch({
                    type: ApproveRolesActionTypes.ROLE_REQ_ACCEPT_LOADED,
                    payload:{
                        id
                    }
                })
            })
            .catch(err => {
                console.log(err);
                return dispatch({
                    type: ApproveRolesActionTypes.ROLE_REQ_ERROR,
                    payload: {
                        error: `The selected role request could not be approved, please try again.`
                    }
                })
            }) 
    }
}

export const RejectRoleRequest = id => {

    return dispatch =>{
        dispatch({
            type: ApproveRolesActionTypes.ROLE_REQ_REJECT_LOADING,
            payload: {
                status: true
            }
        })        

        ApproveRolesRequest
            .rejectRoleReq(id)
            .then(rejectedRole => {
                return dispatch({
                    type:ApproveRolesActionTypes.ROLE_REQ_REJECT_LOADED,
                    payload: {
                        id
                    }
                })
                })
                .catch(err => {
                    console.log(err);
                    return dispatch({
                        type: ApproveRolesActionTypes.ROLE_REQ_ERROR,
                        payload: {
                            error: `The selected role request could not be rejected, please try again!`
                        }
                    })
                }) 
    }
}
