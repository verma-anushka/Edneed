import { LoadInvitation, LoadInvitationMore, AcceptInvitation, RejectInvitation } from "../../store/actions/PendingInvitation";

export const MapStateToProps = state => {
    // console.log(state);
    return{
        pendingInvitation: state.pendingInvitation,
        // user:state.user
    }
};

export const MapDispatchToProps = dispatch => {

    return {
        findInvitation   : (invitationType, userId) => dispatch(LoadInvitation(invitationType,userId)),
        findInvitationMore : (invitationType, userId, skip=0) => dispatch(LoadInvitationMore(invitationType, userId, skip)),
        AcceptInvitation : (type, userId) => dispatch(AcceptInvitation(type, userId)),
        RejectInvitation : (type, userId) => dispatch(RejectInvitation(type, userId)),
    }
}

