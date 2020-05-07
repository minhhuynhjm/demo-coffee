import { actionTypes } from "../../constants"

export const addProductToCart = (item) => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: item
    }
}

export const removeProductToCart = (item) => {
    return {
        type: actionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: item
    }
}

export const clearProductFromCart = () => {
    return {
        type: actionTypes.CLEAR_PRODUCT_FROM_CART,
    }
}

export const showInputPoint = (item) => {
    return {
        type: actionTypes.SHOW_INPUT_POINT,
        payload: item
    }
}

export const addBonusPoint = (item) => {
    return {
        type: actionTypes.ADD_BONUS_POINT,
        payload: item
    }
}

export const clearInputPoint = () => {
    return {
        type: actionTypes.CLEAR_INPUT_POINT
    }
}

export const userLogin = (item) => {
    return {
        type: actionTypes.USER_LOGIN,
        payload: item
    }
}

export const userLogout = () => {
    return {
        type: actionTypes.USER_LOGOUT,
    }
}
