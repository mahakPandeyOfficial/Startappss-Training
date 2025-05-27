//Actions are defined here to add and remove.
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

//action creator for adding an item to the cart
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

//action creator for removing an item from the cart
export const removeFromCart = (itemId) =>{
    return { 
        type: REMOVE_FROM_CART,
        payload: itemId
    }
}

