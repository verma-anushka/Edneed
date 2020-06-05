import React from "react";
import { Switch, Route } from "react-router-dom";

// components

// import Report from "./Report";
import AccountSettings from "./AccountSettings";

// import Applications from "./Applications";

// import FollowedQuestions from "./Questions/FollowedQuestions";
// import SavedQuestions from "./Questions/SavedQuestions";

// import Pricing from "./Pricing";
// import PendingInvitation from "./PendingInvitation";
// import UploadImage from "./UploadImage/UploadImage";

const Routes = () => {

    // onImageUpload(imageData) {
    //   console.log(imageData);
    // }

    return (
        <div className="" style={{ margin:"25px" }}>
            <Switch>
                {/* <Route path="/" component={ Report } /> */}
                <Route path="/" component={ AccountSettings } />
                {/* <Route path="/applications" component={ Applications } /> */}
                {/* <Route exact path="/followed" component={ FollowedQuestions } /> */}
                {/* <Route exact path="/saved" component={ SavedQuestions } /> */}
                {/* <Route exact path="/pricing" component={Pricing} /> */}
                {/* <Route exact path="/invitation" component={PendingInvitation} /> */}
                {/* <Route exact path="/image-upload" component={UploadImage} /> */}
            </Switch>
        </div>
    );
};

export default Routes;
