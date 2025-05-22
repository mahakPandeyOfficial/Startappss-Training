//import redux from 'redux'; //Importing redux libary
const  redux =  require('redux');  //importing redux with require bcz we are using node.js 
const createStore = redux.createStore;

//Creation of Action

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


function buyCake () {                         // This function is an action creator which return an action
    return {                                  // This is an action which is a plain object having type property , encllosing in {}
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream () {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

// Creation of Reducer

const cakeInitialState  = {
    numberOfCake: 10
}

const icecreamInitialState = {
    numberOfIceCream: 5
}


function cakeReducer (state = cakeInitialState, action) {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCake: state.numberOfCake - 1
        }
        default: return state
    }
}

function iceCreamreducer (state = icecreamInitialState, action) {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
        }
        default: return state
    }
}

//Here we have used combiner func in redux to combine 2 reducer explain above. combineReducers() lets you organize multiple reducers, each managing a part of the state, into one main reducer that the Redux store can use.
const rootReducer = redux.combineReducers({
    cake  :cakeReducer, // cakeReducer is a reducer function which is used to update the state of the cake
    icecream : iceCreamreducer // iceCreamreducer is a reducer function which is used to update the state of the icecream
})

//Step 1
const store  = createStore(rootReducer);  // create Store mwthod accepts the parameter as reducer fucntion

//Step 2
console.log('Initial State', store.getState()); // getState method returns the current state of the store

//Step 3
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState())); // subscribe method is used to listen to the changes in the state of the store 

//Step 4
store.dispatch(buyCake()); // dispatch method is used to send the action to the reducer  , **dispatch** is a store method used to send actions to the Redux store. It is the only way to trigger a state change.
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

//Step 5
unsubscribe(); // unsubscribe method is used to stop listening to the changes in the state of the store