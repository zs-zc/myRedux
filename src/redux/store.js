// 该文件专门用于暴露一个store对象 ，整个应用只有一个store对象
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./index"
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))