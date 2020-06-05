import React, { Component } from 'react';
import { Tab, Row, Col } from "react-bootstrap";

import AccountSettingsTabLinks from "./AccountSettingsTabLinks";
import AccountSettingsTabContent from "./AccountSettingsTabContent";

class AccountSettings extends Component {

    state= {
        selectedTab: "userprofile"
    }

    onTabSelect = (tab) => {
        this.setState({ selectedTab: tab });
        this.props.history.push(`/${tab}`);
    }

    render() {
        return (
            <Tab.Container defaultActiveKey={this.state.selectedTab} onSelect={key => this.onTabSelect(key)}>
                <Row>
                    <Col lg={2} md={3} sm={3}>
                        <AccountSettingsTabLinks selectedTab={this.state.selectedTab} />
                    </Col>
                    <Col lg={6} md={9} sm={9}>
                        <AccountSettingsTabContent />
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
   
}

export default AccountSettings;

