// 该文件专门用于暴露一个store对象 ，整个应用只有一个store对象
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import countReducer from "./reducers/count"
import personReducer from "./reducers/person";
// 整合
const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer
})
export default createStore(allReducer, applyMiddleware(thunk))