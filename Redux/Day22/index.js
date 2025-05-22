//import redux from 'redux'; //Importing redux libary
const  redux =  require('redux');  //importing redux with require bcz we are using node.js 
const createStore = redux.createStore;

//Creation of Action

const BUY_CAKE = 'BUY_CAKE';

function buyCake () {                         // This function is an action creator which return an action
    return {                                //This is an action which is a plain object having type property , encllosing in {}
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// Creation of Reducer

const initialState  = {
    numberOfCake: 100
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCake: state.numberOfCake - 1
        }
        default: return state
    }
}

//Step 1
const store  = createStore(reducer);  // create Store mwthod accepts the parameter as reducer fucntion

//Step 2
console.log('Initial State', store.getState()); // getState method returns the current state of the store

//Step 3
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState())); // subscribe method is used to listen to the changes in the state of the store 

//Step 4
store.dispatch(buyCake()); // dispatch method is used to send the action to the reducer  , **dispatch** is a store method used to send actions to the Redux store. It is the only way to trigger a state change.
store.dispatch(buyCake());
store.dispatch(buyCake());

//Step 5
unsubscribe(); // unsubscribe method is used to stop listening to the changes in the state of the store