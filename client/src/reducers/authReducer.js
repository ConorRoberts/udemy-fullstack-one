import {FETCH_USER} from "../actions/types";

// We want this to return false, null, or the current user
const authReducer = (state=null,action)=>{
    switch(action.type){
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}

export default authReducer;