import React, { Component } from "react";
import PendingInvitationHoc from "../PendingInvitationHoc";
import PendingInvitationCard from "../PendingInvitationCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { connect } from "react-redux";
import { MapStateToProps, MapDispatchToProps } from "../../PendingInvitation/PendingInvitationMapDispatch";

// import Loader from "../../Loader";

let invitationType = "receive";
let limit = 2; // Set limit

class ReceiveInvitation extends Component {

    render() {
        return (
            <PendingInvitationHoc invitationType={invitationType} limit={limit} render={({ invitation, LoadMore, accept, reject }) => {

                console.log(invitation);
                
                return <Container> {
                    invitation.loading ?
                        <div className="text-center p-3">
                            {/* <Loader /> */}
                            Loading...
                        </div>
                        :
                        invitation.data.length ?
                        <Row>
                            {invitation.data.map((invitationItem, invitationItemIndex) => <PendingInvitationCard
                                key={invitationItemIndex}
                                name={invitationItem.owner_fullName}
                                profile={invitationItem.owner_photo}
                                cover={invitationItem.owner_cover}
                                requestId={invitationItem._id}
                                invitationType={invitationType} 
                                limit={limit}
                                accept={accept}
                                reject={reject}
                            />)}
                        </Row>
                            :
                            <div className="text-center p-3">No pending received invitation!!</div>
                    }
                    {
                        invitation.loadingmore ?
                        <div className="text-center p-3">
                            {/* <Loader /> */}
                            Loading
                        </div>
                            :
                            invitation.more && 
                                <Button variant="primary" onClick={()=>LoadMore(invitation.skip)} >Load More</Button>                    
                    }
                </Container>
                }
            }>
            </PendingInvitationHoc>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)( ReceiveInvitation );
