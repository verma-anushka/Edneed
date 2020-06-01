import React, { Component } from 'react';
import { connect } from "react-redux";

import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
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
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>New Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter the new location" onChange={this.onChange} />
                </Form.Group>

                {
                  location.loading ?
                      <div className="text-center p-3">
                          <Spinner animation="border" variant="success" size="lg" ></Spinner>
                      </div>
                  :
                    <div className="text-center mb-2" >
                      <Button variant="outline-success" type="submit"> 
                        Update 
                        {" "}
                        <FontAwesomeIcon icon={ faEdit } />
                      </Button>
                    </div>
                }
            </Form>
        {
          location.success ? 
            <Alert variant="success" className="text-center">
              { location.success }
              {" "}
              <FontAwesomeIcon icon={ faCheckCircle }  className="text-center" style={{ float:"right", height:"1.5em", width:"1.5em" }} />
            </Alert>
            :
            <></>
        }
        {
          location.error ? 
            <Alert variant="danger" className="text-center">
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

