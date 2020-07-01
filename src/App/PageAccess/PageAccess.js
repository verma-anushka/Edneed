import React, { Component } from 'react';
import { Button, Container, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

import SearchUsers from "../Common/SearchUsers";
import PageRoles from "./PageRoles";
import { MapStateToProps, MapDispatchToProps } from "./PageAccessMapDispatch";

const kind = "pageaccess";
const ref = "5eabca3dc564fd324b42c03c";

class PageAccess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: {
                value: "",
                label: ""
            },
            selectedRoleId: "5ef0f970d185d647e7a091cf" //by default: EdNeed User
        }
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name] :e.target.value });
    }

    onSearchUserChange = (selectedUser) => {
		if (selectedUser) {
			this.setState({ selectedUser });
		}
	};

    accessRequest = () => {
        const newaccessrequest = {
            kind,
            role:this.state.selectedRoleId, 
            owner:this.state.selectedUser.value,
            ref    
        }
        this.props.grantAccess(newaccessrequest);
    }

    render() {

        const { pageaccess } = this.props.pageaccess;
        
        return (
            <Container>
                <SearchUsers handleChange={this.onSearchUserChange} selectedUser={this.state.selectedUser} />
                <PageRoles handleChange={this.onInputChange} selectedRoleId={this.state.selectedRoleId} />
                { 
                    pageaccess.loading ? 
                        <div className="text-center">
                            <Button type="submit" size="sm" variant="outline-success">
                                <Spinner animation="border" size="sm" variant="success" className="text-center" />
                            </Button>
                        </div>
                        :
                        <div className="text-center mb-2">
                            <Button onClick={this.accessRequest} size="sm" variant="outline-success">Give Access</Button>
                        </div>
                }
                {
                    pageaccess.message ?
                        <div className="text-center">{ pageaccess.message }</div>
                        :
                        <></>
                }
                
            </Container>    
        )
    }
   
}

export default connect(MapStateToProps, MapDispatchToProps)( PageAccess );

