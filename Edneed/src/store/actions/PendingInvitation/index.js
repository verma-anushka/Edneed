import { pendingInvitationActionTypes } from "./actionTypes";
import PendingInvitationRequest from "./PendingInvitationRequest";

export const LoadInvitation = (type, limit, userId) => {

    return dispatch => {
        dispatch({
            type: pendingInvitationActionTypes.PND_INV_LOADING,
            payload: {
                type,
                status: true
            }
        });

        if(type === "sent") {
            PendingInvitationRequest.findSentInvitation(userId, limit).then(sentInvDocs => {
                return dispatch({
                    type: pendingInvitationActionTypes.PND_INV_LOADED,
                    payload: {
                        type,
                        data: sentInvDocs.data.data,
                        skip: sentInvDocs.data.skip,
                        total: sentInvDocs.data.total,
                        limit: sentInvDocs.data.limit
                    }
                })
            })
        } else {
            PendingInvitationRequest.findReceiveInvitation(userId, limit).then(receivedInvDocs => dispatch({
                type: pendingInvitationActionTypes.PND_INV_LOADED,
                payload: {
                    type,
                    data: receivedInvDocs.data.data,
                    skip: receivedInvDocs.data.skip,
                    total: receivedInvDocs.data.total,
                    limit: receivedInvDocs.data.limit
                }
            }))
        }
    }
}

export const LoadInvitationMore = (type, limit, userId, skip) => {
    
    return dispatch => { 
        dispatch({
            type: pendingInvitationActionTypes.PND_INV_MORE_LOADING,
            payload:{
                type,
                status: true
            }
        });

        if(type === "sent") {  
            PendingInvitationRequest.findSentInvitation(userId, limit, skip).then(sentInvDocs => {
                return dispatch({
                    type: pendingInvitationActionTypes.PND_INV_MORE_LOADED,
                    payload: {
                        type,
                        data: sentInvDocs.data.data,
                        skip: sentInvDocs.data.skip,
                        total: sentInvDocs.data.total,
                        limit: sentInvDocs.data.limit
                    }
                })
            })
        } else { // type === receive
            PendingInvitationRequest.findReceiveInvitation(userId, limit, skip).then(receiveInvDocs => {
                return dispatch({
                    type: pendingInvitationActionTypes.PND_INV_MORE_LOADED,
                    payload: {
                        type,
                        data: receiveInvDocs.data.data,
                        skip: receiveInvDocs.data.skip,
                        total: receiveInvDocs.data.total,
                        limit: receiveInvDocs.data.limit
                    }
                })
            })
        }
    }
}

export const AcceptInvitation = (type, id, userId, limit) =>{

    return dispatch => {
        dispatch({
            type: pendingInvitationActionTypes.PND_INV_ACCEPT_LOADING,
            payload: {
                type,
                status: true
            }
        })

        PendingInvitationRequest.AcceptInvitation(id).then(acceptedItem => {
            if(type === "sent") {
                PendingInvitationRequest.findSentInvitation(userId, limit).then(sentInvDocs => {
                    return dispatch({ // sentInvDocs === response
                        type: pendingInvitationActionTypes.PND_INV_LOADED,
                        payload: {
                            type,
                            data: sentInvDocs.data.data,
                            skip: sentInvDocs.data.skip,
                            total: sentInvDocs.data.total,
                            limit: sentInvDocs.data.limit
                        }
                    })
                })
            } else if(type === "receive") {
                PendingInvitationRequest.findReceiveInvitation(userId, limit).then(receiveInvDocs => {
                    return dispatch({
                        type: pendingInvitationActionTypes.PND_INV_LOADED,
                        payload: {
                            type,
                            data: receiveInvDocs.data.data,
                            skip: receiveInvDocs.data.skip,
                            total: receiveInvDocs.data.total,
                            limit: receiveInvDocs.data.limit
                        }
                    })
                })
            }
        })
        .catch(error => {
            console.log(`Accept Invitation Error!`);
            console.log( error.response);
            // console.trace() 
        }) 
    }
}

export const RejectInvitation = (type, id, userId, limit) => {

    return dispatch =>{
        dispatch({
            type: pendingInvitationActionTypes.PND_INV_DELETE_LOADING,
            payload: {
                type,
                status: true
            }
        })        

        PendingInvitationRequest.RejectInvitation(id).then(rejectedItem => {
            if(type === "sent") {
                PendingInvitationRequest.findSentInvitation(userId, limit).then(sentInvDocs => {
                    return dispatch({
                        type: pendingInvitationActionTypes.PND_INV_LOADED,
                        payload: {
                            type,
                            data: sentInvDocs.data.data,
                            skip: sentInvDocs.data.skip,
                            total: sentInvDocs.data.total,
                            limit: sentInvDocs.data.limit
                        }
                    })
                })
            } else if(type === "receive") {
                PendingInvitationRequest.findReceiveInvitation(userId, limit).then(receiveInvDocs => {
                    return dispatch({
                        type: pendingInvitationActionTypes.PND_INV_LOADED,
                        payload: {
                            type,
                            data: receiveInvDocs.data.data,
                            skip: receiveInvDocs.data.skip,
                            total: receiveInvDocs.data.total,
                            limit: receiveInvDocs.data.limit
                        }
                    })
                })
            }
        })
        .catch(error => {
            console.log(`Reject Invitation Error!`);
            console.log(error.response);
            // console.trace() 
        })
    }
}
