export const actionTypes = {
    ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
    REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
    CLEAR_PRODUCT_FROM_CART: "CLEAR_PRODUCT_FROM_CART",
    USER_LOGIN: "USER_LOGIN",
    USER_LOGOUT: "USER_LOGOUT",
    RESTORE_TOKEN: "RESTORE_TOKEN"
};

export const ENVIROMENT = {
    HOST: "http://192.168.50.96:8080"
}

export const URL = {
    ORDER_MENU: ENVIROMENT.HOST + "/order",
    USER_MANAGEMENT: ENVIROMENT.HOST + "/management/allAccount",
}


export const MESSAGE = {
    EMPTY_STAFF_PASSWORD: "Please input staffid and password",
    EMPTY_STAFFID: "Please input staffId",
    EMPTY_PASSWORD: "Please input password",
    LOGIN_FAILD: "Incorrect staffid or password",
    TITLE_DELETE_ACCOUNT: "Delete Account",
    TITLE_SAVE_MANAGEMENT: "Save Information",
    TITLE_INFORMATION: "Information",
    TITLE_CONFIRMATION: "Confirmation",
    LOGOUT: "Do you want to logout?",
    DELETE_ACCOUNT: "Are you sure you want to delete account?",
    SAVE_MANAGEMENT: "Are you sure you want to save changes?",
    ORDER: "Are you want to order?",
    ORDER_SUCCESSFUL: "order successfully !!",
    EMPTY_CART: "You have no items in your shopping cart.",
    PASSWORD_NOT_MATCH: "Password are not matching",
    IS_REQUIRED: " is required",
}