import { ApproveRolesActionTypes } from "../actions/approveRoles/actionTypes";

const APPROVE_ROLES_INITIAL_STATE = {
    loading       : false,
    ismore        : false,
    loadingmore   : false,
    buttonLoading : false,
    skip          : 0,
    total         : 0,
    data          : [],
    error         : ""
}

export default (state=APPROVE_ROLES_INITIAL_STATE, {type, payload}) => {

    switch (type) {
    
        case ApproveRolesActionTypes.ROLE_REQ_LOADING:
            return({
                ...state,
                loading: payload.status
            })

        case ApproveRolesActionTypes.ROLE_REQ_LOADED:
            return({
                ...state,
                loading : false,
                ismore  : payload.data.length===payload.limit,
                skip    : payload.limit,
                total   : payload.total,
                data    : payload.data
            })

        case ApproveRolesActionTypes.ROLE_REQ_MORE_LOADING:
            return({
                ...state,
                loadingmore: payload.status
            })

        case ApproveRolesActionTypes.ROLE_REQ_MORE_LOADED:
            return({
                ...state,
                loadingmore : false,
                ismore      : payload.data.length===payload.limit,
                skip        : state.skip + payload.limit,
                total       : payload.total,
                data        : state.data.concat(payload.data)
            })

        case ApproveRolesActionTypes.ROLE_REQ_ACCEPT_LOADING:
            return({
                ...state,
                buttonLoading: payload.status
            })

        case ApproveRolesActionTypes.ROLE_REQ_ACCEPT_LOADED:
            return({
                ...state,
                buttonLoading : false,
                total         : --state.total,
                skip          : --state.skip,
                data          : state.data.filter(acceptedRole => acceptedRole._id !== payload.id)
            })
        
        case ApproveRolesActionTypes.ROLE_REQ_REJECT_LOADING:
            return({
                ...state,
                buttonLoading: payload.status
            })

        case ApproveRolesActionTypes.ROLE_REQ_REJECT_LOADED:
            return({
                ...state,
                buttonLoading : false,
                total         : --state.total,
                skip          : --state.skip,
                data          : state.data.filter(rejectedRole => rejectedRole._id !== payload.id)
            })

        case ApproveRolesActionTypes.ROLE_REQ_ERROR:
            return({
                ...state,
                loading       : false,
                loadingmore   : false,
                buttonLoading : false,
                error         : payload.status
            })
            
        default:
            return state;
    }
}

