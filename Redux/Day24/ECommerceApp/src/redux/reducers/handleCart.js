//Initial State
const cart = [];

const handleCart = (state = cart, action) => {

    const product = action.payload;

    switch (action.type) {
        case "ADD_TO_CART": 
               //Check if Already exists in cart
                { const exist = state.find((item) => item.id === product.id);
               
               if(exist) {
                //increase the quantity
                 return state.map((item) => {
                     item.id === product.id ? { ...item, qty: item.qty + 1} : item;
                 })
               }else{
                //Add a new product to the cart
                   const product = action.payload;
                   return [
                      ...state,
                      {
                        ...product, // Spread the product details
                        qty: 1 // Initialize quantity to 1
                      }
                   ]
               }
             }

               case "REMOVE_FROM_CART": {

                 // Check if the product exists in the cart
                 const exist1 = state.find((item) => item.id === product.id);

                   if(exist1.qty === 1){
                        //if only one is in the cart then remove it
                        return state.filter((item) => item.id !== exist1.id);
                   }else {
                       // Decrease the qty by 1
                         return state.map((item) => {
                              item.id === product.id ? {...item, qty: item.qty -1} : item;
                         })
                   }
               }

               default:
                return state;
               
        
    }
}


export default handleCart;