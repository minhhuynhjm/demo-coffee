export const actionTypes = {
    ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
    REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
    CLEAR_PRODUCT_FROM_CART: "CLEAR_PRODUCT_FROM_CART",
    USER_LOGIN: "USER_LOGIN",
    USER_LOGOUT: "USER_LOGOUT",
    RESTORE_TOKEN: "RESTORE_TOKEN"
};

export const Environment = {
    HOST: "http://192.168.50.96:8080",
    HOST_TEST: "http://192.168.66.75:8080"
}

export const URL = {
    ORDER_MENU: Environment.HOST + "/order/menu",
    LOGIN: Environment.HOST_TEST + "/oauth/token",
}