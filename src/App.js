import React from 'react';
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import Routes from "./AppRouting";

const store = configureStore();
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
