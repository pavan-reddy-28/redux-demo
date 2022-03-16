import {  SET_USER } from "../constants";

const initialState = {
    user:undefined
}

 const userReducer = ( state = initialState , action ) => {
switch (action.type) {
    case SET_USER:
        const {user}=action
        return {
            ...state,
            user:user
        };
        
    default:
    return state;
}
}
export default userReducer;