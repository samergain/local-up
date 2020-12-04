// =========================== Jeff's Code ===========================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
