import { actionTypes } from "./actionTypes"

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