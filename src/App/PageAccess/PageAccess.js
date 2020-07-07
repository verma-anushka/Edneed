import React, { Component } from 'react';
import { Button, Container, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

import SearchUsers from "../../Common/SearchUsers";
import PageRoles from "./PageRoles";
import { MapStateToProps, MapDispatchToProps } from "./PageAccessMapDispatch";

const kind = "pageaccess";
const ref = "5eabca3dc564fd324b42c03c";

class PageAccess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUserId: "",
            selectedRoleId: "" ,
            errors: {
                user: "",
                role: ""
            }
        }
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name] :e.target.value });
    }

    accessRequest = () => {

        const { selectedRoleId, selectedUserId } = this.state;

        if (selectedUserId === '') {

            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    user: 'Please select a user!'
                }
            }));
        } 
        if (selectedRoleId === '') {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    role: 'Please select a role!'
                }
            }));
        } 
        if(selectedUserId !== '' && selectedRoleId !== '') {
            this.setState({ errors: {}});
            const newaccessrequest = {
                kind:"pageaccess",
                role:this.state.selectedRoleId, 
                user:this.state.selectedUserId,
                owner:"5ecb9ed670e1ef395d63113a",
                ref,
                approved:true
            }  
            this.props.grantAccess(newaccessrequest);
        }
    }

    render() {
        const { pageaccess } = this.props.pageaccess;
        return (
            <Container>
                
                <SearchUsers onSelect={selectedOption => this.setState({ selectedUserId: selectedOption })} />
                { this.state.errors.user && <div style={{ color:"red" }} className="mt-0 text-center"> {this.state.errors.user} </div> }
                
                <PageRoles handleChange={this.onInputChange} selectedRoleId={this.state.selectedRoleId} />
                { this.state.errors.role && <div style={{ color:"red" }} className="mt-0 mb-3 text-center"> {this.state.errors.role} </div> }
                
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

