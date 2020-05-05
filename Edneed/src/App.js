import React, { Component } from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
// import UploadImage from "./App/UploadImage/UploadImage";
import PendingInvitation from "./App/PendingInvites/PendingInvitation";

// Parent Component
class App extends Component {

  // onImageUpload(imageData) {
  //   console.log(imageData);
  // }

  render () {
    return (      
      <Provider store={store}>
        <BrowserRouter>
          {/* <UploadImage onUpload = {this.onImageUpload} /> */}
        <PendingInvitation />

        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
