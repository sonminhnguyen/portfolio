import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { Router } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/stockApp">
      {/* <HashRouter basename="/" hashType="noslash"> */}
        <App />
      {/* </HashRouter> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
