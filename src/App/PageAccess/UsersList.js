import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { MapStateToProps, MapDispatchToProps } from "./PageAccessMapDispatch";

const limit = 50;

class UsersList extends Component {

    componentDidMount() {
        this.props.getUsersList(limit);
    }

    render() {
        
        const { users } = this.props.pageaccess 
        return (
                <Form>
                    <Form.Label>Select User:</Form.Label>
                    <Form.Control as="select" name="selectedUserId" value={this.props.selectedUserId} onChange={this.props.handleChange} >
                        {
                            users.data.length && users.data.map((userItem, userIndex) => {
                                return (
                                    <option key={userIndex} value={userItem._id} >{ userItem.fullName }</option>
                                )
                            })
                        }
                        
                    </Form.Control>
                </Form>

        )
    }
   
}

export default connect(MapStateToProps, MapDispatchToProps)( UsersList );

