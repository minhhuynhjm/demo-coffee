import { actionTypes } from "../actions/actionTypes";
import menuData from "../../mock-data/menuData";

const initState = {
    isSignIn: false,
    isLoading: true,
}

export default function LoginReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                isSignIn: true,
                isLoading: false,
                user: action.payload
            }

        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                isSignIn: false,
                isLoading: true,
            }
        case actionTypes.RESTORE_TOKEN:
            return {
                ...state,
                isSignIn: true,
                isLoading: false,
            }

        default:
            return state;
    }
}