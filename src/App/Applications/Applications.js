import React, { Component } from 'react';
import { connect } from "react-redux";

import { Tab, Tabs, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMousePointer, faSuitcase } from '@fortawesome/free-solid-svg-icons';

import ApplicationsList from "./ApplicationsList";
import { MapStateToProps, MapDispatchToProps } from "./ApplicationsMapDispatch";

const limit = 2;
const id = "5ec75a0e70e1ef395d631122";
const type = "page";

class Applications extends Component {

    state = {
        selectedTab: "event"
    }

    componentDidMount() {
        this.props.getApplications(type, this.state.selectedTab, id, limit);
    }

    LoadMoreApplications = (skip) => {
        this.props.getMoreApplications(type, this.state.selectedTab, id, limit, skip);
    }

    onTabSelect = (tab) => {
        this.setState({ selectedTab: tab });
        this.props.getApplications(type, tab, id, limit);
        this.props.history.push(`/applications/${tab}`);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md={{ offset: 3, span: 6 }} lg={{ offset: 3, span: 6 }} sm={ 12 }>
                        <Tabs defaultActiveKey={this.state.selectedTab} onSelect={key => this.onTabSelect(key)} id="uncontrolled-tab-example">

                            <Tab eventKey="event" title={<span>Events <FontAwesomeIcon icon={ faCalendar } /> </span>} >
                                { this.state.selectedTab === "event" && 
                                    <ApplicationsList kind="event" applications={this.props.applications[type]} LoadMoreApplications={this.LoadMoreApplications} />
                                }
                            </Tab>
                    
                            <Tab eventKey="admission" title={<span>Admissions <FontAwesomeIcon icon={ faMousePointer } /> </span>} >
                                { this.state.selectedTab === "admission" && 
                                    <ApplicationsList kind="admission" applications={this.props.applications[type]} LoadMoreApplications={this.LoadMoreApplications} />
                                }
                            </Tab>
                    
                            <Tab eventKey="job" title={<span>Jobs <FontAwesomeIcon icon={ faSuitcase } /> </span>} >
                                { this.state.selectedTab === "job" && 
                                    <ApplicationsList kind="job" applications={this.props.applications[type]} LoadMoreApplications={this.LoadMoreApplications} />
                                }
                            </Tab>
                    
                        </Tabs>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)( Applications );

