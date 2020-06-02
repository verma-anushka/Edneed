import React, { Component } from 'react';
import { connect } from "react-redux";

import { Form, Button, Container, Spinner, Alert, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { MapStateToProps, MapDispatchToProps } from "../AccountSettingsMapDispatch";

const id="5ebaaa999ef9495b52fc92d3";
const email="anushkarvp1999@gmail.com"

class ChangePassword extends Component {

  state= {
    oldpassword: "",
    newpassword: "",
    confirmnewpassword: "",
    error: ""
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const { newpassword, confirmnewpassword } = this.state;
    if (newpassword !== confirmnewpassword) {
      this.setState({ error: "Password and Confirm Password do not match."})
    } else {
      this.setState({ error: ""})
      this.props.changePassword(id, email, this.state.oldpassword, this.state.newpassword);
    }
  }

  render() {

    const { password } = this.props.accountsettings;
    return (
      <Container>
        <h4 className="pt-3 pb-3" style={{ borderBottom: "1px #ddd solid" }} >Change Password</h4>
        <Form onSubmit={this.onFormSubmit}>
            <Form.Group as={Row}>
                <Form.Label column md="4" sm="4">Password</Form.Label>
                <Col md="8" sm="8">
                  <Form.Control type="password" name="oldpassword" value={this.state.password} required={true} placeholder="Enter your current password" onChange={this.onInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column md="4" sm="4">New password</Form.Label>
                <Col md="8" sm="8">
                  <Form.Control type="password" name="newpassword" value={this.state.newpassword} required={true} placeholder="Enter new password" onChange={this.onInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column md="4" sm="4">Confirm new password</Form.Label>
                <Col md="8" sm="8">
                  <Form.Control type="password" name="confirmnewpassword" value={this.state.confirmnewpassword} required={true} placeholder="Confirm new password" onChange={this.onInputChange} />
                </Col>
            </Form.Group>
            
            {
              this.state.error.length > 0 && 
                <Alert variant="danger">{this.state.error}</Alert>
            }
            {
              password.loading ?
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
          password.success ? 
            <Alert variant="success" className="text-center">
              { password.success } 
              {" "}
              <FontAwesomeIcon icon={ faCheckCircle } style={{ float:"right", height:"1.5em", width:"1.5em" }} />
            </Alert>
            :
            <></>
        }
        {
          password.error ? 
            <Alert variant="danger" className="text-center">
              { password.error } 
              {" "}
              <FontAwesomeIcon icon={ faTimesCircle }  style={{ float:"right", height:"1.5em", width:"1.5em" }} />  
            </Alert>
            :
            <></>
        }
      </Container>
    );
  }
}

export default connect(MapStateToProps, MapDispatchToProps)( ChangePassword );

