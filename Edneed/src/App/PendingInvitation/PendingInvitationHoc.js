import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import SocketIO from "../../Common/Socketio";

import { MapStateToProps, MapDispatchToProps } from "./PendingInvitationMapDispatch";

class PendingInvitationHoc extends Component {

    componentDidMount() {
        // this.props.findInvitation(this.props.invitationType, this.props.user._id);
        this.props.findInvitation(this.props.invitationType, this.props.limit, "5eaba792c564fd324b42c03b");
    }

    LoadMore = skip => {
        // this.props.findInvitationMore(this.props.invitationType, this.props.user._id, skip);
        this.props.findInvitationMore(this.props.invitationType, this.props.limit, "5eaba792c564fd324b42c03b", skip);
    }

    AcceptInvitation = id => {
        // this.props.AcceptInvitation(this.props.invitationType, id, this.props.user._id, this.props.limit);
        this.props.AcceptInvitation(this.props.invitationType, id, "5eaba792c564fd324b42c03b", this.props.limit);
    }

    RejectInvitation = id => {
        // this.props.RejectInvitation(this.props.invitationType, id, this.props.user._id, this.props.limit);
        this.props.RejectInvitation(this.props.invitationType, id, "5eaba792c564fd324b42c03b", this.props.limit);
    }

    componentDidUpdate() {
        
        // SocketIO.on("bubble created",BubbleCreated=>{
        //     if(BubbleCreated.receiverid===this.props.user._id){
        //         this.props.findInvitation(this.props.invitationType, this.props.user._id)
        //     }
        // })
        // SocketIO.on("bubble patched", BubblePatched=> {
        //     if(BubblePatched.owner || BubblePatched.receiverid){
        //         this.props.FetchChatList(this.props.user._id)
        //     }
        // })

    }

    render() {
        return this.props.render({
            invitation: this.props.pendingInvitation[this.props.invitationType],
            LoadMore:   this.LoadMore,
            accept:     this.AcceptInvitation,
            reject:     this.RejectInvitation
        })
    }
}

PendingInvitationHoc.defaultProps = {
    user: undefined,
    invitationType: "receive"
}

export default connect(MapStateToProps, MapDispatchToProps)( PendingInvitationHoc );

