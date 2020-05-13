import React from "react";
import subscriptions from "./subscription.json"
import { oneOf } from "prop-types";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEnvelopeOpenText, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";


function Packages({ type, heading }) {

    return <React.Fragment>
        {heading && <Row className="mt-5 mb-4">
            <Col lg={12}>
                <h5>{heading}</h5>
                <div className="bor-bottom" />
            </Col>
        </Row>}
        {
            subscriptions.hasOwnProperty(type) ?

                <Row>
                    {
                        subscriptions[type].map(planItem => <Col md={3} lg={3} sm={12}>
                            <Card>
                                <Card.Header className="text-center p-0">
                                    <Card.Text className="p-0 pt-3 pb-2 m-0">{planItem.name}</Card.Text>
                                    <Card.Text className="p-0">{planItem.discount}</Card.Text>
                                    <Card.Title className="p-3 bg-primary-ed">{planItem.title}</Card.Title>
                                    <Card.Subtitle className="pt-4 pb-4 pl-2 pr-2">{planItem.subtitle}</Card.Subtitle>
                                </Card.Header>
                                <Card.Body>
                                    {
                                        planItem.features.map(feature => <p className="ml-1"><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-success" />{feature}</p>)
                                    }
                                </Card.Body>
                                {planItem.name && <Card.Footer className="text-center">
                                    Please reach out for additional information.<br /><br />
                                    <a href={encodeURI(`tel:+919315675847`)} className="btn btn-primary"><FontAwesomeIcon icon={faPhoneSquareAlt} size="lg" className="mr-2" />+919315675847</a><br /><br />
                                    <a href={encodeURI(`mailto:info@edneed.com?subject=${planItem.title} - ${planItem.name}&body=Hi Sales, \n\nPlan: ${planItem.title} - ${planItem.name} \n\nFeatures:\n*****************\n${planItem.features.join('\n')}`)} className="btn btn-primary"><FontAwesomeIcon icon={faEnvelopeOpenText} size="lg" className="mr-2" />Send Enquiry</a><br /><br /> 
                                </Card.Footer>}
                            </Card>
                        </Col>)
                    }
                </Row>
                :
                <></>
        }
    </React.Fragment>

}

Packages.defaultProps = {
    type: undefined
}

Packages.defaultProps = {
    type: oneOf(['school', 'tutorcoaching'])
}

export default Packages;