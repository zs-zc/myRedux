import countReducer from "./reducers/count"
import personReducer from "./reducers/person";
import { combineReducers } from "redux";

// 整合
export default combineReducers({
    count: countReducer,
    persons: personReducer
})

