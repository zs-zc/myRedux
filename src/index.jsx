import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { Provider } from "react-redux"
import store from "../src/redux/store"
// 两个ui组件渲染传多个store，可以利用Provider一次性传值
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.querySelector("#root"))