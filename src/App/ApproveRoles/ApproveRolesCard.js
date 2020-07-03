import React from 'react';
import dummy from '../../assets/images/dummy_cover_photo.jpg';

import { Col, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ApproveRolesCard = ({ name, role, photo, cover, requestid, accept, reject }) => {    

    return (
        <Col sm={6} md={6} lg={4} className="mb-4" >
            <Card>
                { 
                    cover ?
                        <Card.Img variant="top" src={`http://api.webunide.com/fs/${cover}`} alt={name} />
                        :
                        <Card.Img variant="top" src={ dummy } alt={name} />
                }
                { 
                    photo ?
                        <Card.Img variant="top" style={{ borderRadius:"50%", height:"80px", width:"80px", marginTop:"-40px", marginLeft:"5px" }} src={`http://api.webunide.com/fs/${photo}`} alt={name} />
                        :
                        <Card.Img variant="top" style={{ borderRadius:"50%", height:"80px", width:"80px", marginTop:"-40px", marginLeft:"5px" }} src={ dummy } alt={name} />
                }
                <Card.Body>
                    <Card.Text> { name } requested for the role of { role } </Card.Text>
                    <Button variant="success" className="mr-3" onClick={()=>accept(requestid)}>
                        <FontAwesomeIcon icon={faCheck} /> Accept
                    </Button>
                    <Button variant="danger" onClick={()=>reject(requestid)}>
                        <FontAwesomeIcon icon={faTimes} /> Reject
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

ApproveRolesCard.defaultProps = {
    name: "NA",
    role: "NA",
    cover: undefined,
    profile: undefined,
    requestid: undefined
}

export default ApproveRolesCard;

