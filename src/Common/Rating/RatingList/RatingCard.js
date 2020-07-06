import React, { Fragment } from "react";

import { Row, Col, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import dummy from '../../../../assets/images/dummy_cover_photo.jpg';

const makeStar = rate => {

    let allStars = [];
    for (let idx=1; idx <= 5; idx++) {
        allStars.push(  
                        <Fragment key={ idx }>
                            <FontAwesomeIcon icon={ faStar } className={ rate >= idx ? 'text-warning' : 'text-light' } />
                        </Fragment>
                     )
    }

    return allStars;
}

export default ({ username, userphoto, rate, review, createdAt }) => {

    return <Container>
        <Col md={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 10 }} sm={ 12 }>
            <Card className="mb-2">
                <Card.Body>
                    <Row>
                        <Col md={ 1 } lg={ 1 } sm={ 1 }>
                        {
                            userphoto ?
                                <Card.Img src={ dummy } alt={ username } style={{ borderRadius:"50%", height:"40px", width:"40px" }} />
                                // <Card.Img variant="top" src={`https://api.webunide.com/fs/${userphoto}`} alt={ username } style={{ borderRadius:"50%", height:"40px", width:"40px" }} />
                                :
                                <Card.Img variant="top" src={ dummy } alt={ username } style={{ borderRadius:"50%", height:"40px", width:"40px" }} />
                        }
                        </Col>
                        <Col md={ 10 } lg={ 10 } sm={ 12 }>
                            <Card.Title as="h5" className="mt-2">
                                { username }
                                {" "}
                                { makeStar(rate) }
                                {" "}
                                {rate} out of 5
                            </Card.Title> 
                            <Card.Text>{review}</Card.Text> 
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Container>

}

