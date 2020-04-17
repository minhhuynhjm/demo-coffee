import { actionTypes } from "../actions/actionTypes";
import menuData from "../../mock-data/menuData";

const initState = {
    addedItems: [],
    countTotalItem: 0,
    totalPrice: 0
}

export default function CartReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_CART:
            let tempItem = {}
            const index = findExistItemInCart(state.addedItems, action.payload.id);

            if (index !== -1) {
                // Exist in cart
                state.addedItems[index].quantity++;

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
                    addedItems: [...state.addedItems, tempItem],
                    countTotalItem: ++state.countTotalItem,
                    totalPrice: state.totalPrice + action.payload.price
                }
            }


        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            const cartItem = findItemInCart(state.addedItems, action.payload.id);
            if (cartItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.id !== action.payload.id)
                let newTotalPrice = state.totalPrice - cartItem.price;
                return {
                    ...state,
                    addedItems: new_items,
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


// if (index !== -1) {
//     // Exist in cart
//     state[index].count++;
//     return state; // =
// } else {
//     tempItem = { ...action.payload, count: 1};
//     return [...state, tempItem]
// }

// return {
//     ...state,
//     addedItems: [...state.addedItems, action.payload],
//     countTotalItem: ++state.countTotalItem
// }

            // return {
//     ...state,
//     countTotalItem: --state.countTotalItem
// }