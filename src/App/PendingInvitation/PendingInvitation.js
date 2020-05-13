import React from 'react';
import { useSelector } from "react-redux";

import ReceiveInvitation from "./ReceiveInvitation";
import SentInvitation from "./SentInvitation";

import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import "./css/pendinginvitation.css";

export default () => {
    
    let { sentCount, receiveCount } = useSelector(state => {
        return {
            sentCount: state.pendingInvitation.sent.total,
            receiveCount: state.pendingInvitation.receive.total
        }
    })

    const Received = `Received (${receiveCount})`;
    const Sent = `Sent (${sentCount})`;

    return (
        <Container >
            <Tabs defaultActiveKey="received" id="uncontrolled-tab-example">
                <Tab eventKey="received" title={Received} >
                    <ReceiveInvitation />
                </Tab>
                <Tab eventKey="sent" title={Sent}>
                    <SentInvitation />
                </Tab>
            </Tabs>
        </Container>
    )
}

