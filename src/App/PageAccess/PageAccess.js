import React, { Component } from 'react';
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";

import UsersList from "./UsersList";
import PageRoles from "./PageRoles";
import { MapStateToProps, MapDispatchToProps } from "./PageAccessMapDispatch";

const kind = "normal";
// const ref = "";

class PageAccess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // selectedUser: {
            //     name: "",
            //     userid: ""
            // }
            // selectedRole: {
            //     role: "",
            //     userid: ""
            // }
            selectedUserId: "",
            selectedRoleId: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] :e.target.value });
    }

    accessRequest = () => {
        const newaccessrequest = {
            kind,
            role:this.state.selectedRoleId, 
            owner:this.state.selectedUserId
            // ref    
        }

        this.props.grantAccess(newaccessrequest);
    }

    render() {
        // console.log(this.state);
        
        return (
            <Container>
                <UsersList handleChange={this.handleChange} selectedUserId={this.state.selectedUserId} />
                <PageRoles handleChange={this.handleChange} selectedRoleId={this.state.selectedRoleId} />
                <Button onClick={this.accessRequest} >Give Access</Button>
            </Container>    
        )
    }
   
}

export default connect(MapStateToProps, MapDispatchToProps)( PageAccess );

