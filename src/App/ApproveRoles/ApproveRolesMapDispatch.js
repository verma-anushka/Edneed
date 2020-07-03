import { GetRoleRequests, GetMoreRoleRequests, AcceptRoleRequest, RejectRoleRequest } from "../../store/actions/approveRoles";

export const MapStateToProps = state => {
    return {
        rolereqs: state.rolesreq
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        getRoleRequests     : (kind, pageid, limit) => dispatch(GetRoleRequests(kind, pageid, limit)),
        getMoreRoleRequests : (kind, pageid, limit, skip) => dispatch(GetMoreRoleRequests(kind, pageid, limit, skip)),
        acceptRoleRequest   : (id) => dispatch(AcceptRoleRequest(id)),
        rejectRoleRequest   : (id) => dispatch(RejectRoleRequest(id))
    }
}

