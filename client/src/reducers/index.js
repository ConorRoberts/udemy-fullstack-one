import {combineReducers} from "redux";
import authReducer from "./authReducer";

export default combineReducers({
    // Auth state managed by authreducer
    auth:authReducer,
});