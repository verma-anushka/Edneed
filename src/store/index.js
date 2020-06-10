// import { createStore, applyMiddleware, compose } from "redux";
// import reduxThunk from "redux-thunk";
// import rootReducer from "./reducers";

// // const initialState = {};
// // const middleware = [reduxThunk];

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// // const store = createStore(
// //   rootReducer,
// //   initialState,
// //   compose(
// //     applyMiddleware(...middleware)
// //     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// //   )
// // );


// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(reduxThunk)
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";


export function configureStore() {
  const store = createStore(
    rootReducer,
    // composeWithDevTools(
    compose(
      applyMiddleware(reduxThunk),
      // window.devToolsExtension ? window.devToolsExtension() : f => f
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}


