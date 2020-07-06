import React, { Component, Fragment } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { GetUserRoles } from "../../../store/actions/userRoles";
// import Auth from "../../Classes/Auth";

const userid="5ecb9ed670e1ef395d63113a";

class UserRoles extends Component {

	state = {show: false}
	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });

    componentDidMount() {
        this.props.getUserRoles(userid);        
    }

    changeRole = role => {
        // if (Auth.user().user_defaultRole === role) {
        //        this.handleShow();
        // }
        // else {
        //     Auth.updateUserDetail("user_defaultRole", role)
        // }
    }

	render() {
        const allRoles=this.props.userRoles.data;

		return ( 
			<Fragment>
                <Dropdown className="mt-2 mr-2" alignRight>
                    <Dropdown.Toggle variant="outline-secondary"><FontAwesomeIcon icon={faExchangeAlt}/></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>Switch To Role</Dropdown.Header>
                        <Dropdown.Divider />
                        {
                            allRoles.length > 0 ? 
                                allRoles.map((roleItem, roleItemIndex)=> 
                                    <Dropdown.Item onClick={() => this.changeRole(roleItem._id)} key={roleItemIndex}>
                                            {roleItem.role_type}
                                            {
                                                !roleItem.approved ?
                                                    <span className="text-muted">- Pending</span>
                                                :
                                                    <span style={{ color: "red"}} >- Switch</span>
                                            }
                                    </Dropdown.Item>) 
                                : 
                                <Dropdown.Item>NA</Dropdown.Item>
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <Modal
                    show={this.state.show} 
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <div className="text-center text-danger">
                            <div className="mb-4">
                                <FontAwesomeIcon icon={faTimesCircle} size="3x" />
                            </div>
                        Selected role is already using
                    </div>
                    </Modal.Body>
                </Modal>
            </Fragment>
		)
	}
}

export const MapStateToProps = state => {
    return {
        userRoles: state.userroles
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        getUserRoles : (userid) => dispatch(GetUserRoles(userid))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)( UserRoles );

