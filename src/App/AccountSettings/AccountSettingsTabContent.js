import React from 'react';
import { Tab } from "react-bootstrap";

import ChangePassword from "./AccountSettingsContent/ChangePassword";
import ChangeProfile from "./AccountSettingsContent/ChangeProfile";

const AccountSettingsTabContent = () => {

        return (
            <Tab.Content className="shadow-sm" >

                <Tab.Pane eventKey="password">
                    <ChangePassword />
                </Tab.Pane>

                <Tab.Pane eventKey="userprofile">
                    <ChangeProfile />
                </Tab.Pane>

            </Tab.Content>
        )
   
}

export default AccountSettingsTabContent;

