import React, { Component } from 'react';
import { Tab, Row, Col } from "react-bootstrap";

import AccountSettingsTabLinks from "./AccountSettingsTabLinks";
import AccountSettingsTabContent from "./AccountSettingsTabContent";

class AccountSettings extends Component {

    state= {
        selectedTab: "password"
    }

    onTabSelect = (tab) => {
        this.setState({ selectedTab: tab });
        this.props.history.push(`/${tab}`);
    }

    render() {
        return (
            <Tab.Container defaultActiveKey={this.state.selectedTab} onSelect={key => this.onTabSelect(key)}>
                <Row>
                    <Col lg={{ offset: 1, span: 2 }} md={{ offset: 1, span: 2 }} sm={{ offset: 1, span: 2 }}>
                        <AccountSettingsTabLinks selectedTab={this.state.selectedTab} />
                    </Col>
                    <Col lg={7} md={7} sm={8}>
                        <AccountSettingsTabContent />
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
   
}

export default AccountSettings;

