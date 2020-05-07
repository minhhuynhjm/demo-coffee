import { actionTypes } from "../../constants"

const initState = {
    bonusPoint: "",
    isShowInput: false,
    id: -1
}

export default function ManagementReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SHOW_INPUT_POINT:
            return {
                ...state,
                id: action.payload.id,
                isShowInput: true,
                bonusPoint: "",
            }
        case actionTypes.CLEAR_INPUT_POINT:
            return {
                ...state,
                id: -1,
                bonusPoint: "",
                isShowInput: false,
            }
        case actionTypes.ADD_BONUS_POINT:
            return {
                ...state,
                id: action.payload.id,
                bonusPoint: action.payload.bonusPoint
            }
        default:
            return state;
    }
}

