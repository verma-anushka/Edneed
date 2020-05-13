import { LoadInvitation, LoadInvitationMore, AcceptInvitation, RejectInvitation } from "../../store/actions/PendingInvitation";

export const MapStateToProps = state => {
    return{
        pendingInvitation: state.pendingInvitation,
        // user:state.user
    }
};

export const MapDispatchToProps = dispatch => {

    return {
        findInvitation      : (invitationType, limit, userId) => dispatch(LoadInvitation(invitationType, limit, userId)),
        findInvitationMore  : (invitationType, limit, userId, skip) => dispatch(LoadInvitationMore(invitationType, limit, userId, skip)),
        AcceptInvitation    : (type, id, userId, limit) => dispatch(AcceptInvitation(type, id, userId, limit)),
        RejectInvitation    : (type, id, userId, limit) => dispatch(RejectInvitation(type, id, userId, limit))
    }
}

 