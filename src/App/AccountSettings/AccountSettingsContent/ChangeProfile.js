import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { MapStateToProps, MapDispatchToProps } from "../AccountSettingsMapDispatch";

const id="5ebaaa999ef9495b52fc92d3";

class ChangeProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profiledata: {}
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.updateUserProfile(id, this.state.profiledata);
    }

    onChange = (event) => {
    
        let inputName = event.target.name;
        let inputValue  = event.target.value;

        this.setState(prevState=>{
            return {
                profiledata : {
                    ...prevState.profiledata,
                    [inputName]: inputValue
                }
            }
        })
    }

  render() {

    const { userprofile } = this.props.accountsettings;

    return (

        <Container>
            <h4 className="pt-3 pb-3" style={{ borderBottom: "1px #ddd solid" }} >Update Profile Information</h4>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column md="4" sm="4">Full Name:</Form.Label>
                        <Col md="8" sm="8">
                        <Form.Control type="text" name="fullName" value={this.state.fullName} placeholder="Enter your full name" onChange={this.onChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column md="4" sm="4">About:</Form.Label>
                        <Col md="8" sm="8">
                        <Form.Control type="text" name="about" placeholder="Tell us something about yourself" onChange={this.onChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column md="4" sm="4">Location:</Form.Label>
                        <Col md="8" sm="8">
                        <Form.Control type="text" name="location" placeholder="Enter your new location" onChange={this.onChange} />
                        </Col>
                    </Form.Group>

                    {
                        userprofile.loading ?
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
                    userprofile.success ? 
                        <Alert variant="success" className="text-center mb-2">
                            { userprofile.success }
                            {" "}
                            <FontAwesomeIcon icon={ faCheckCircle } className="text-center" style={{ float:"right", height:"1.5em", width:"1.5em" }} />
                        </Alert>
                        :
                        <></>
                }
                {
                    userprofile.error ? 
                        <Alert variant="danger" className="text-center mb-2">
                            { userprofile.error }
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

export default connect(MapStateToProps, MapDispatchToProps)( ChangeProfile );

