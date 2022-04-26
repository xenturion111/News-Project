import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);