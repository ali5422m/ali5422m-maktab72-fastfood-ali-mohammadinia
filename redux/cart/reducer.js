import {
  ADD_TO_CART,
  INCREMENT,
  DECREMENT,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./actionType";

const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            state.cart = [...state.cart, { ...action.payload.product, qty: action.payload.qty }];
            
            console.log(state.cart)
            return {
                ...state,
                cart: state.cart
            }
        default: {
            return state;
        }
    }
};

export default cartReducer;