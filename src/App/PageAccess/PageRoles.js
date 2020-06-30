import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { MapStateToProps, MapDispatchToProps } from "./PageAccessMapDispatch";

const limit = 10;

class PageRoles extends Component {

    componentDidMount() {
        this.props.getPageRoles(limit);
    }

    render() {
        
        const { roles } = this.props.pageaccess 

        return (
            <Form>
                <Form.Label>Select Role:</Form.Label>
                {/* <Form.Control as="select" name="selectedRoleId" defaultValue={this.props.selectedRoleId} value={this.props.selectedRoleId || defaultValue} onChange={this.props.handleChange} > */}
                <Form.Control as="select" name="selectedRoleId" value={this.props.selectedRoleId} onChange={this.props.handleChange} >
                    {
                        roles.data.length && roles.data.map((roleItem, roleIndex) => {
                            return (
                                <option key={roleIndex} value={roleItem._id} >{ roleItem.type }</option>
                            )
                        })
                    }
                </Form.Control>
            </Form>

        )
    }
   
}

export default connect(MapStateToProps, MapDispatchToProps)( PageRoles );

