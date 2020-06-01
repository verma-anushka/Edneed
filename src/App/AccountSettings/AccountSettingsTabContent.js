import React from 'react';
import { Tab } from "react-bootstrap";

import ChangePassword from "./AccountSettingsContent/ChangePassword";
import ChangeLocation from "./AccountSettingsContent/ChangeLocation";

const AccountSettingsTabContent = () => {

        return (
            <Tab.Content>
                <Tab.Pane eventKey="password">
                    <ChangePassword />
                </Tab.Pane>
                <Tab.Pane eventKey="location">
                    <ChangeLocation />
                </Tab.Pane>
            </Tab.Content>
        )
   
}

export default AccountSettingsTabContent;

