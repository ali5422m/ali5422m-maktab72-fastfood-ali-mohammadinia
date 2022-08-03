import {
  ADD_TO_CART,
  INCREMENT,
  DECREMENT,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./actionType";
import { saveStorage,getStorage } from "./localStorage";



const initialState = {
    cart: getStorage(),
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            state.cart = [...state.cart, { ...action.payload.product, qty: action.payload.qty }];
            
            console.log(state.cart)
            saveStorage(state.cart)
            
            
            return {
                ...state,
                cart: state.cart
            }
        
         case REMOVE_FROM_CART :
            state.cart = state.cart.filter(p => p.id !== action.payload)
            
            console.log(state.cart)
            saveStorage(state.cart)
            

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