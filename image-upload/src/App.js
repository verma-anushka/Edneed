import React, { Component } from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import UploadImage from "./App/UploadImage";

// Parent Component
class App extends Component {

  onImageUpload(imageData) {
    console.log(imageData);
  }

  render () {
    return (      
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <UploadImage onUpload = {this.onImageUpload} /> 
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
