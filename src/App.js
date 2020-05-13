import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
// import UploadImage from "./App/UploadImage/UploadImage";
// import PendingInvitation from "./App/PendingInvitation/PendingInvitation";

import Routes from "./App/Routes";

const App = () => {
  return (      
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    )
}

export default App;
