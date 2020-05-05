import { actionTypes } from "../../constants"

const initState = {
    listItems: [],
    countTotalItem: 0,
    totalPrice: 0
}

export default function CartReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_CART:
            let tempItem = {}
            const index = findExistItemInCart(state.listItems, action.payload.id);

            if (index !== -1) {
                // Exist in cart
                state.listItems[index].quantity++;

                return {
                    ...state,
                    countTotalItem: ++state.countTotalItem,
                    totalPrice: state.totalPrice + action.payload.price
                }
            }
            else {
                tempItem = { ...action.payload, quantity: 1 };

                return {
                    ...state,
                    listItems: [...state.listItems, tempItem],
                    countTotalItem: ++state.countTotalItem,
                    totalPrice: state.totalPrice + action.payload.price
                }
            }

        case actionTypes.ADD_MUPTIPLE_ITEM_TO_CARD:
            // count = 0
            if (action.count === 0) {

                const cartItem1 = findItemInCart(state.addedItems, action.payload.id);
                if (cartItem1 != null) {
                    let new_items = state.addedItems.filter(item => item.id !== action.payload.id)
                    let newTotalPrice = state.totalPrice - (cartItem1.price * cartItem1.quantity);
                    let totalItem = state.countTotalItem - cartItem1.quantity;
                    return {
                        ...state,
                        addedItems: new_items,
                        countTotalItem: totalItem,
                        totalPrice: newTotalPrice
                    }
                }
                else {
                    return {
                        ...state
                    }
                }
            }
            else {
                let tempItem = {}
                const index = findExistItemInCart(state.addedItems, action.payload.id);
                if (index !== -1) {
                    // Exist in cart
                    // increase
                    if (state.addedItems[index].quantity < action.count) {
                        let quantityAdd = action.count - state.addedItems[index].quantity;
                        let totalItem = state.countTotalItem + quantityAdd;
                        let newTotalPrice = state.totalPrice + (action.payload.price * quantityAdd);
                        state.addedItems[index].quantity = action.count;
                        return {
                            ...state,
                            countTotalItem: totalItem,
                            totalPrice: newTotalPrice
                        }
                    }
                    // decrease
                    else {
                        let quantityAdd = state.addedItems[index].quantity - action.count;
                        let totalItem = state.countTotalItem - quantityAdd;
                        let newTotalPrice = state.totalPrice - (action.payload.price * quantityAdd);
                        state.addedItems[index].quantity = action.count;
                        return {
                            ...state,
                            countTotalItem: totalItem,
                            totalPrice: newTotalPrice
                        }
                    }
                }
                else {
                    tempItem = { ...action.payload, quantity: action.count };

                    let totalItem = state.countTotalItem + action.count;
                    let newTotalPrice = state.totalPrice + (action.payload.price * action.count);

                    return {
                        ...state,
                        addedItems: [...state.addedItems, tempItem],
                        countTotalItem: totalItem,
                        totalPrice: newTotalPrice
                    }
                }
            }

        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            const cartItem = findItemInCart(state.listItems, action.payload.id);
            if (cartItem.quantity === 1) {
                let new_items = state.listItems.filter(item => item.id !== action.payload.id)
                let newTotalPrice = state.totalPrice - cartItem.price;
                return {
                    ...state,
                    listItems: new_items,
                    countTotalItem: --state.countTotalItem,
                    totalPrice: newTotalPrice
                }
            }
            else {
                --cartItem.quantity;
                let newTotalPrice = state.totalPrice - cartItem.price;
                return {
                    ...state,
                    totalPrice: newTotalPrice,
                    countTotalItem: --state.countTotalItem,
                }
            }

        case actionTypes.CLEAR_PRODUCT_FROM_CART:
            return {
                ...state,
                listItems: [],
                countTotalItem: 0,
                totalPrice: 0
            }
        default:
            return state;
    }
}

const findExistItemInCart = (cart, itemId) => {
    return cart.findIndex(x => x.id === itemId);
}

const findItemInCart = (cart, itemId) => {
    return cart.find(x => x.id === itemId);
}

