import {ADD_TO_CART , REMOVE_FROM_CART } from '../actions/cartActions';

// Initial state for the cart
const initialState = {
    cart: []
}

//reducers functions 
const cartReducers = (state = initialState, action) =>  {
    switch(action.type) {
        case ADD_TO_CART: return {
            ...state,
            cart : [...state.cart, action.payload]  //Adding a new item here to the cart
        }

        case REMOVE_FROM_CART : return {
            ...state,
            cart : state.cart.filter(item => item.id !== action.payload)  //removing an item from the cart based on id
        }

        default:
            return state;
    }

}

export default cartReducers;