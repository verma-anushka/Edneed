import React from "react";
import { Switch, Route } from "react-router-dom";

// components
// import Question from "../App/Question";
// import { FollowedQuestions, SavedQuestions } from "../App/FollowSaveQuestion";

// import SwitchAccount from "../Common/SwitchAccount";

// import ApproveRoles from "./ApproveRoles";
import PageAccess from "../App/PageAccess";

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

                {/* <Route exact path="/" component={ SwitchAccount } /> */}
                {/* <Route path="/" component={Question} />
                <Route path="/question">
                    <Switch>
                        <Route path="/question/followed" component={FollowedQuestions} />
                        <Route path="/question/saved" component={SavedQuestions} />
                    </Switch>
                </Route> */}
                {/* <Route exact path="/" component={ SwitchAccount } /> */}
                {/* <Route exact path="/approveroles" component={ ApproveRoles } /> */}
                <Route exact path="/" component={ PageAccess } />
                {/* <Route exact path="/mentions" component={ Mentions } /> */}
                {/* <Route exact path="/rating" component={ Rating } /> */}
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
