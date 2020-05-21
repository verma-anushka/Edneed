import React from "react";
import moment from "moment";
import xss from "xss";
// import xssFilters from "xss-filters";

import { Col, Card } from "react-bootstrap";
import dummy from '../../assets/images/dummy_cover_photo.jpg';

const QuestionsCard = ({ name, profileImg, questionText, questionImg, createdAt }) => { 

    const date = moment(createdAt).format('ll');
    const time = moment(createdAt).format('LT');
    
    function escapeHtml(html) {
        return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    }

    const t = xss(questionText);
    const text = escapeHtml(t);

    return (
        <Col md={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 10 }} sm={ 12 }>
            <Card style={{ marginBottom: "10px"}}>
                <Card.Header as="h5">
                    <Card.Img src={ dummy } alt={name} style={{ borderRadius:"50%", height:"40px", width:"40px" }} />
                    {/* <Card.Img src={`http://api.webunide.com/fs/${profileImg}`} alt={name} style={{ borderRadius:"50%", height:"80px", width:"80px", marginLeft:"5px" }} /> */}
                    {" "}
                    { name }
                    <Card.Text style={{fontSize:"10px", marginLeft:"50px"}}>{ date } at { time }</Card.Text>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{ text }</Card.Title> 
                    { 
                        questionImg ?
                            <Card.Img variant="top" src={ dummy } alt={name} />
                            // <Card.Img variant="top" src={`http://api.webunide.com/fs/${questionImg}`} alt={name} />
                            :
                            <></>
                    }
                </Card.Body>
            </Card>
        </Col>
    )


}

export default QuestionsCard;

