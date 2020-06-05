import React from 'react';

import { Form, Row, Col } from "react-bootstrap";

export default ({ label, type, name, value, placeholder, onInputChange }) => {

    return (
        <Form.Group as={Row}>
            <Form.Label column md="4" sm="4">{label}</Form.Label>
            <Col md="8" sm="8">
                <Form.Control type={type} name={name} value={value} required={true} placeholder={placeholder} onChange={onInputChange} />
            </Col>
        </Form.Group>     
    );
}


import FormInput from "./FormInput";
{/* <Form.Group as={Row}> */}
                    <FormInput 
                      label="New Location"
                      type="text"
                      name="newlocation"
                      value={this.state.newlocation}
                      placeholder="Enter the new location" 
                      onInputChange={this.onChange}
                    />
                    {/* <Form.Label column md="4" sm="4">New Location</Form.Label>
                    <Col md="8" sm="8">
                      <Form.Control type="text" placeholder="Enter the new location" onChange={this.onChange} />
                    </Col> */}
                {/* </Form.Group> */}