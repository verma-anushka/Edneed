import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { MapStateToProps, MapDispatchToProps } from "../AccountSettingsMapDispatch";

const id="5ebaaa999ef9495b52fc92d3";

class ChangeLocation extends Component {

  state = {
    newlocation: ""
  }

  onSubmit = (event) => {
    event.preventDefault();
    const location = {
      "location": this.state.newlocation
    }
    this.props.updateUserDetails(id, location);
  }

  onChange = (event) => {
    this.setState({ newlocation: event.target.value });
  }

  render() {

    const { location } = this.props.accountsettings;
    return (
      <Container>
        <h4 className="pt-3 pb-3" style={{ borderBottom: "1px #ddd solid" }} >Change Location</h4>
            <Form onSubmit={this.onSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column md="4" sm="4">New Location</Form.Label>
                    <Col md="8" sm="8">
                      <Form.Control type="text" placeholder="Enter the new location" onChange={this.onChange} />
                    </Col>
                </Form.Group>

                {
                  location.loading ?
                      <div className="text-center p-3">
                          <Spinner animation="border" variant="success" size="lg" ></Spinner>
                      </div>
                  :
                    <div className="text-center mb-2" >
                      <Button variant="outline-success" type="submit" className="mb-3"> 
                        Update 
                        {" "}
                        <FontAwesomeIcon icon={ faEdit } />
                      </Button>
                    </div>
                }
            </Form>
        {
          location.success ? 
            <Alert variant="success" className="text-center mb-2">
              { location.success }
              {" "}
              <FontAwesomeIcon icon={ faCheckCircle }  className="text-center" style={{ float:"right", height:"1.5em", width:"1.5em" }} />
            </Alert>
            :
            <></>
        }
        {
          location.error ? 
            <Alert variant="danger" className="text-center mb-2">
              { location.error }
              {" "}
              <FontAwesomeIcon icon={ faTimesCircle } style={{ float:"right", height:"1.5em", width:"1.5em" }} />
            </Alert>
            :
            <></>
        }
      </Container>
    )
  }
}

export default connect(MapStateToProps, MapDispatchToProps)( ChangeLocation );

