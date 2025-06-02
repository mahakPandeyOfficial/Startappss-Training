// FOR ADD ITEMS TO CART
export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product,
    }
}

// FOR REMOVE ITEMS FROM CART
export const removeFromCart = (product) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: product,
    }
}

