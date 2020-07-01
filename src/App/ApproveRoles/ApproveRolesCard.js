import React from 'react';
import dummy from '../../assets/images/dummy_cover_photo.jpg';

import { Col, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ApproveRolesCard = ({ name, accept, reject }) => {    

    return (
        <Col sm={6} md={6} lg={4} className="mb-4" >
            <Card>
                <Card.Img variant="top" src={dummy} alt={name} />
                <Card.Img src={dummy} alt={name}  style={{ borderRadius:"50%", height:"80px", width:"80px", marginTop:"-40px", marginLeft:"5px" }} />
                <Card.Body>
                    <Card.Title> { name } </Card.Title>
                    <Button variant="success" className="mr-3" onClick={()=>accept()}><FontAwesomeIcon icon={faCheck} /> Accept</Button>
                    <Button variant="danger" onClick={()=>reject()}><FontAwesomeIcon icon={faTimes} /> Reject</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

ApproveRolesCard.defaultProps = {
    name: "NA",
    cover: undefined,
    profile: undefined
}

export default ApproveRolesCard;

