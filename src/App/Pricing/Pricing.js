import React from 'react';
import { Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faPencilRuler } from '@fortawesome/free-solid-svg-icons';

import PricingList from "./PricingList";

export default () => {
    return (
        <React.Fragment>
            <Tabs defaultActiveKey="school" id="uncontrolled-tab-example">
                <Tab eventKey="school" title={<span>School / Institutes Pricing <FontAwesomeIcon icon={faUniversity} /> </span>} >
                    <PricingList type="school" />
                </Tab>
                <Tab eventKey="tutorcoaching" title={<span>Private Tutor / Coaching Centers Pricing <FontAwesomeIcon icon={faPencilRuler} /> </span>} >
                    <PricingList type="tutorcoaching" />
                </Tab>
            </Tabs>
        </React.Fragment>
    )
}
