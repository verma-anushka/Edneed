import React from "react";
import { Switch, Route } from "react-router-dom";

// components

import PageAccess from "./PageAccess";

// import Mentions from "./Common/Mentions";

// import Rating from "./Common/Rating";
// import Report from "./Report";
// import AccountSettings from "./AccountSettings";

// import Applications from "./Applications";

// import FollowedQuestions from "./Questions/FollowedQuestions";
// import SavedQuestions from "./Questions/SavedQuestions";

// import Pricing from "./Pricing";
// import PendingInvitation from "./PendingInvitation";
// import UploadImage from "./UploadImage/UploadImage";

const Routes = () => {

    return (
        <div className="" style={{ margin:"25px" }}>

            <Switch>

                <Route exact path="/" component={ PageAccess } />
                {/* <Route exact path="/" component={ Mentions } /> */}
                {/* <Route exact path="/" component={ Rating } /> */}
                {/* <Route exact path="/report" component={ Report } /> */}
                {/* <Route exact path="/settings" component={ AccountSettings } /> */}
                {/* <Route exact path="/applications" component={ Applications } /> */}
                {/* <Route exact path="/followed" component={ FollowedQuestions } /> */}
                {/* <Route exact path="/saved" component={ SavedQuestions } /> */}
                {/* <Route exact path="/pricing" component={Pricing} /> */}
                {/* <Route exact path="/invitation" component={PendingInvitation} /> */}
                {/* <Route exact path="/image-upload" component={UploadImage} /> */}
                
            </Switch>
        </div>
    );
};

    // onImageUpload(imageData) {
    //   console.log(imageData);
    // }

export default Routes;
