import React from "react";
import { oneOf } from "prop-types";

import { Col, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEnvelopeOpenText, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";


const PricingCard = ({ name, discount, title, subtitle, features }) => {    

    return (
        <Col md={3} lg={3} sm={12}>
            <Card>
                <Card.Header className="text-center p-0">
                    <Card.Text className="p-0 pt-3 pb-2 m-0">{name}</Card.Text>
                    <Card.Text className="p-0">{discount}</Card.Text>
                    <Card.Title style={{ backgroundColor: "#645a53", color: "#ffffff" }} className="p-3 bg-primary-ed">{title}</Card.Title>
                    <Card.Subtitle className="pt-4 pb-4 pl-2 pr-2">{subtitle}</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    {
                        features.map((feature, featureIndex) => {
                            return (
                                <p key={featureIndex} className="ml-1"><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-success" />{feature.ak}</p>
                            )}
                        )
                    }
                </Card.Body>
                {name && <Card.Footer className="text-center">
                    Please reach out for additional information.<br /><br />
                    <a href={encodeURI(`tel:+919315675847`)} className="btn btn-primary" style={{ backgroundColor: "#96c946", borderColor: "#bae675"}}><FontAwesomeIcon icon={faPhoneSquareAlt} size="lg" className="mr-2" />+919315675847</a><br /><br />
                    <a href={encodeURI(`mailto:info@edneed.com?subject=${title} - ${name}&body=Hi Sales, \n\nPlan: ${title} - ${name} \n\nFeatures:\n*****************\n${features.join('\n')}`)} className="btn btn-primary" style={{ backgroundColor: "#96c946", borderColor: "#bae675"}}><FontAwesomeIcon icon={faEnvelopeOpenText} size="lg" className="mr-2" />Send Enquiry</a><br /><br /> 
                </Card.Footer>}
            </Card>
        </Col>

    )

}

PricingCard.defaultProps = {
    type: oneOf(['school', 'tutorcoaching'])
}

export default PricingCard;

