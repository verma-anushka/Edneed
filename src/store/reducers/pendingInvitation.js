import { pendingInvitationActionTypes } from "../actions/PendingInvitation/actionTypes";

const PENDING_INVITATION_STATES = {
    sent: {
        loading: false,
        more: false,
        skip: 0,
        total: 0,
        data: [],
        acceptLoading: false,
        deleteLoading: false,
        loadingmore: false
    },
    receive: {
        loading: false,
        more: false,
        skip: 0,
        total: 0,
        data: [],
        acceptLoading: false,
        deleteLoading: false,
        loadingmore: false
    }
}

export default (state=PENDING_INVITATION_STATES, {type, payload}) =>{
    switch (type) {
        case pendingInvitationActionTypes.PND_INV_LOADING:
            return({
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    loading: payload.status
                }
            })

        case pendingInvitationActionTypes.PND_INV_LOADED:
            return({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loading: false,
                    more: payload.data.length===payload.limit,
                    skip: payload.limit,
                    total: payload.total,
                    data: payload.data
                }
            })

        case pendingInvitationActionTypes.PND_INV_MORE_LOADING:
            return({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loadingmore: payload.status
                }
            })

        case pendingInvitationActionTypes.PND_INV_MORE_LOADED:
            return({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    loadingmore: false,
                    more: payload.data.length===payload.limit,
                    skip: state[payload.type].skip+payload.limit,
                    total: payload.total,
                    data: state[payload.type].data.concat(payload.data)
                }
            })

        case pendingInvitationActionTypes.PND_INV_ACCEPT_LOADING:
            return({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    buttonLoading: payload.status
                }
            })

        case pendingInvitationActionTypes.PND_INV_ACCEPT_LOADED:
            return({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    buttonLoading: false,
                    total: --state[payload.type].total,
                    skip: --state[payload.type].skip,
                    data: state[payload.type].data.filter(acceptedItem => acceptedItem._id!==payload.id)
                }
            })
        
        case pendingInvitationActionTypes.PND_INV_DELETE_LOADING:
            return({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    buttonLoading: payload.status
                }
            })

        case pendingInvitationActionTypes.PND_INV_DELETE_LOADED:
            return({
                ...state,
                [payload.type]:{
                    ...state[payload.type],
                    buttonLoading: false,
                    total: --state[payload.type].total,
                    skip: --state[payload.type].skip,
                    data: state[payload.type].data.filter(acceptedItem => acceptedItem._id!==payload.id)
                }
            })
            
        default:
            return state;
    }
}

