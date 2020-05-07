import { pendingInvitationActionTypes } from "./actionTypes";
import PendingInvitationRequest from "./PendingInvitationRequest";

export const LoadInvitation = (type, userId) => {

    return dispatch => {
        dispatch({
            type: pendingInvitationActionTypes.PND_INV_LOADING,
            payload: {
                type,
                status: true
            }
        });

        if(type === "sent") {

            PendingInvitationRequest.findSentInvitation(userId).then(sentInvDocs => dispatch({ // sentInvDocs === response
                type: pendingInvitationActionTypes.PND_INV_LOADED,
                payload: {
                    type,
                    data: sentInvDocs.data.data,
                    skip: sentInvDocs.data.skip,
                    total: sentInvDocs.data.total,
                    limit: sentInvDocs.data.limit
                }
            }))

        } else { // type === receive

            PendingInvitationRequest.findReceiveInvitation(userId).then(receivedInvDocs => dispatch({ // receivedInvDocs === response
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


export const LoadInvitationMore = (type, userId, skip) => {
    
    return dispatch => { 
        dispatch({
            type: pendingInvitationActionTypes.PND_INV_MORE_LOADING,
            payload:{
                type,
                status: true
            }
        });

        if(type === "sent") {

            PendingInvitationRequest.findSentInvitation(userId, skip).then(sentInvDocs => dispatch({
                type: pendingInvitationActionTypes.PND_INV_MORE_LOADED,
                payload: {
                    type,
                    data: sentInvDocs.data.data,
                    skip: sentInvDocs.data.skip,
                    total: sentInvDocs.data.total,
                    limit: sentInvDocs.data.limit
                }
            }))

        } else { // type === receive
            
            PendingInvitationRequest.findReceiveInvitation(userId, skip).then(receiveInvDocs => dispatch({

                type: pendingInvitationActionTypes.PND_INV_MORE_LOADED,
                payload: {
                    type,
                    data: receiveInvDocs.data.data,
                    skip: receiveInvDocs.data.skip,
                    total: receiveInvDocs.data.total,
                    limit: receiveInvDocs.data.limit
                }
            }))
        }

    }
}

export const AcceptInvitation = (type, id) =>{

    return dispatch => {
        dispatch({
            type: pendingInvitationActionTypes.PND_INV_ACCEPT_LOADING,
            payload: {
                type,
                status: true
            }
        })

        PendingInvitationRequest.AcceptInvitation(id).then(acceptedItem => dispatch({
            type: pendingInvitationActionTypes.PND_INV_ACCEPT_LOADED,
            payload: { type, id }
        }))
        .catch(error => {
            console.log(`Accept Invitation Error!`);
            console.log( error.response);
            // console.trace() 
        }) 
    }
}

export const RejectInvitation = (type, id) => {
    return dispatch =>{
        dispatch({
            type: pendingInvitationActionTypes.PND_INV_DELETE_LOADING,
            payload: {
                type,
                status: true
            }
        })

        PendingInvitationRequest.RejectInvitation(id).then(acceptedItem=>dispatch({
            type: pendingInvitationActionTypes.PND_INV_DELETE_LOADED,
            payload: { type, id }
        }))
        .catch(error => console.log(`Reject Invitation Error: ${error.response}`))
    }
}

