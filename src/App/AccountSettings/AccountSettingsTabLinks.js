import React from 'react';

import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const AccountSettingsTabLinks = props => {

    return (
        <Nav variant="pills" className="flex-column shadow-sm">

            <Nav.Item>
                <Nav.Link 
                    eventKey="userprofile"
                    style={{ 
                        backgroundColor: props.selectedTab === "userprofile" ? "#96c946" : "#fff", 
                        borderRadius: "0"
                    }}
                >
                    Change Profile 
                    {" "}
                    <FontAwesomeIcon icon={ faUserCircle } />
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link 
                    eventKey="password" 
                    style={{ 
                        backgroundColor: props.selectedTab === "password" ? "#96c946" : "#fff", 
                        borderRadius: "0"
                    }}
                >
                    Change Password 
                    {" "}
                    <FontAwesomeIcon icon={ faUnlockAlt } />
                </Nav.Link>
            </Nav.Item>
        
        </Nav>
    )
   
}

export default AccountSettingsTabLinks;

