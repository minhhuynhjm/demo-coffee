import { actionTypes } from "../actions/actionTypes";
import menuData from "../../mock-data/menuData";

const initState = {
    isSignIn: false
}

export default function LoginReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                isSignIn: true,
                user: action.payload
            }

        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                isSignIn: false,
            }

        default:
            return state;
    }
}