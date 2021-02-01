import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import materializeCSS from "materialize-css/dist/css/materialize.min.css";

import reduxThunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

// Fetch link https://jsonplaceholder.typicode.com/albums

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    // Provider is a component that is aware how to hook everything up with redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
