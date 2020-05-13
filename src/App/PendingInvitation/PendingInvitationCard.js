import React from 'react';
import dummy from '../../assets/images/dummy_cover_photo.jpg';

// React Bootstrap
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// import { imageServerPath } from "../../Common/UserIcon";

const PendingInvitationCard = ({ name, cover, profile, requestId, invitationType, accept, reject }) => {    

    return (
        <Col sm={6} md={6} lg={4} className="mb-4" >
            <Card>
                {/* <Card.Img variant="top" src={`${cover ? imageServerPath(cover) : dummy }`} alt={name} />
                <Card.Img src={`${profile ? imageServerPath(profile) : dummy }`} alt={name} /> */}
                
                <Card.Img variant="top" src={dummy} alt={name} />
                <Card.Img src={dummy} alt={name}  style={{ borderRadius:"50%", height:"80px", width:"80px", marginTop:"-40px", marginLeft:"5px" }} />

                <Card.Body>
                    <Card.Title>
                        { name }
                    </Card.Title>
                    {
                        invitationType === "receive" ?
                            <>
                                <Button variant="success" className="mr-3" onClick={()=>accept(requestId)}><FontAwesomeIcon icon={faCheck} /> Accept</Button>
                                <Button variant="danger" onClick={()=>reject(requestId)}><FontAwesomeIcon icon={faTimes} /> Reject</Button>
                            </>
                            :
                            <Button variant="danger" onClick={()=>reject(requestId)}><FontAwesomeIcon icon={faTimes} /> Reject</Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
}

PendingInvitationCard.defaultProps = {
    cover: undefined,
    profile: undefined,
    name: "NA",
    requestId: undefined,
    invitationType: "sent"
}

export default PendingInvitationCard;

