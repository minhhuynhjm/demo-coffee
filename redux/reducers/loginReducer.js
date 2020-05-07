import { actionTypes } from "../../constants"

const initState = {
    isSignIn: false,
    isLoading: true,
    user: null,
}

export default function LoginReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                isSignIn: true,
                isLoading: false,
                user: action.payload,
            }

        case actionTypes.USER_LOGOUT:
            return {
                isSignIn: false,
                isLoading: true,
                user: null,
            }
        default:
            return state;
    }
}