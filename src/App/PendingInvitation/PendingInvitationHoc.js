import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import SocketIO from "../../Common/Socketio";

import { MapStateToProps, MapDispatchToProps } from "./PendingInvitationMapDispatch";

class PendingInvitationHoc extends Component {

    makePostRequest(receiver_id) {
        axios({
            method: 'POST',
            url: "http://api.webunide.com/bubble",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZWFiYTc5MmM1NjRmZDMyNGI0MmMwM2IiLCJpYXQiOjE1ODg3NTc1NDEsImV4cCI6MTYyMDI5MzU0MSwiYXVkIjoiaHR0cHM6Ly93d3cuZWRuZWVkLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiOWZiM2EwOTEtMmZhMS00ZjMyLWE4NjEtNGI2OGRhMmFhMzhkIn0.47f0DRxphIelmqBoEyXtHUEGma1zra8WAeh6mho4Ktw'
            },
            data: {
                receiverid: receiver_id,
                ownerid: "5eaba792c564fd324b42c03b",
                bubblestatus: 1
            }
        }).then(res => {
                console.log(res);
            })
            .catch(err => {
                // console.log(err);
            });
    }
    componentDidMount() {

        // this.makePostRequest("5bfd3586c01b8642974f9c71"); // shivam
        // this.makePostRequest("5d5659e481f4de04547f1f15"); // sammy
        // this.makePostRequest("5d0c6dc641b9836dabb766b4"); // kk
        // this.makePostRequest("5ea82f81085b6828970caa71"); // th
        // this.makePostRequest("5bf681136e634e63594688f6"); // sck
        // this.makePostRequest("5eab10f3c564fd324b42c038"); // amit
        // this.makePostRequest("5ea84893085b6828970caa8b"); // geet
        // this.makePostRequest("5ea6907e3da41a7c41969deb"); // hemant
        // this.makePostRequest("5ea68dee3da41a7c41969de9"); // ranjeet

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

