import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { composeWithDevTools } from "redux-devtools-extension";
import store from "./app/store";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// let store = createStore(configstore,composeWithDevTools(applyMiddleware()))
// let store = createStore(configstore, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
