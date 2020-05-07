// CLASS LIST COMPONENT

import React from "react";
import PendingInvitationHoc from "../PendingInvitationHoc";
import PendingInvitationCard from "../PendingInvitationCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// import Loader from "../../Loader";
let invitationType = "receive";

export default () => <PendingInvitationHoc invitationType={invitationType} render={({ invitation, LoadMore, accept, reject }) => 

    <Container>
        {
            invitation.loading ?
                <div className="text-center p-3">
                    {/* <Loader /> */}
                    Loading...
                </div>
                :
                invitation.data.length ?
                <Row>
                    {invitation.data.map((invitationItem, invitationItemIndex) => {
                        return <PendingInvitationCard
                                    key={invitationItemIndex}
                                    name={invitationItem.owner_fullName}
                                    profile={invitationItem.owner_photo}
                                    cover={invitationItem.owner_cover}
                                    requestId={invitationItem._id}
                                    invitationType={invitationType} 
                                    accept={accept}
                                    reject={reject}
                                />
                    })}
                </Row>
                    :
                    <div className="text-center p-3">No pending received invitation!!</div>
        }

        {/* Load More */}
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
    } />
