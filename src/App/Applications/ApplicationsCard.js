import React from "react";
// import moment from "moment";

import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelopeOpenText, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const ApplicationsCard = ({ name, about, email, phoneno, createdAt, attachment, attachmenttype, comment, title, kind }) => { 

    // const date = moment(createdAt).format('ll');
    // const time = moment(createdAt).format('LT');
    const link = `http://api.webunide.com/fs/${attachment}`

    return (
        <Col md={12} lg={12} sm={12}>
            <Card style={{ marginBottom: "10px"}}>
                <Card.Header>{name} applied for {title} </Card.Header> 
                <Card.Body>
                    {
                        about!=="" ?
                            <Card.Text> {about} </Card.Text>
                        :
                            <></>
                    }
                    <Card.Text> Reach out to them at: </Card.Text>
                    <Card.Text> <FontAwesomeIcon icon={ faEnvelopeOpenText } /> {email} </Card.Text>
                    <Card.Text> <FontAwesomeIcon icon={ faPhoneVolume } /> {phoneno} </Card.Text>
                    {/* <Card.Text> {date} at {time} </Card.Text> */}
                    <Card.Text> {comment} </Card.Text>
                    {
                        kind === "job" ?

                            attachmenttype === "pdf" ?
                            <div className="text-center">
                                <a target="_blank" rel="noopener noreferrer" href={link}>
                                    <Button variant="outline-info">
                                        View {" "}
                                        <FontAwesomeIcon icon={ faFilePdf } />
                                    </Button>
                                </a>
                            </div>
                            :
                                <Card.Img variant="top" src={link} alt={name} />
                        :
                            <></>
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ApplicationsCard;

