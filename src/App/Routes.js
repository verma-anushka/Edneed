import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Pricing from "./Pricing";
// import PendingInvitation from "./PendingInvitation";
// import UploadImage from "./UploadImage/UploadImage";

const Routes = () => {

    // onImageUpload(imageData) {
    //   console.log(imageData);
    // }

    return (
        <div className="" style={{ margin:"25px" }}>
            <Switch>
                <Route exact path="/" component={Pricing} />
                {/* <Route exact path="/invitation" component={PendingInvitation} /> */}
                {/* <Route exact path="/image-upload" component={UploadImage} /> */}
        </Switch>
        </div>
    );
};

export default Routes;