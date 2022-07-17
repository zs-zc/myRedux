// 该文件专门用于暴露一个store对象 ，整个应用只有一个store对象
import { legacy_createStore as createStore } from "redux";

import countRedux from "./count_redux"
export default createStore(countRedux)