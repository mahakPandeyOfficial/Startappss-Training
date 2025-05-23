const redux =  require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; //importing combineReducers from redux to combine multiple reducers
const applyMiddleware = redux.applyMiddleware; //importing applyMiddleware from redux to apply middleware
const reduxLogger = require('redux-logger'); //importing logger middleware for logging the actions and state changes
const logger = reduxLogger.logger; //creating a logger middleware

//Craetion of Counter Action
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

function add () {
    return { 
        type: ADD,
        info: 'Adding a Number',
    }
}

function subtract () {
    return {
        type: SUBTRACT,
        info : "Substracting a Number",
    }
}

const initialState = {
    numberOfCounter : 0
}

function addReducer( state = initialState, action) {
    switch (action.type) {
        case ADD: return {
            ...state,
            numberOfCounter : state.numberOfCounter + 1
        }

        default: return state
    }
}

function subtractReducer (state = initialState, action) {
    switch (action.type){
        case SUBTRACT: return {
            ...state,
            numberOfCounter : state.numberOfCounter - 1
        }

        default: return state
    }
}

//Combining Reducers
const rootReducer = combineReducers({
    add: addReducer,
    subtract: subtractReducer,
})


//Creating a Store
const store = createStore(rootReducer, applyMiddleware(logger));   // rootReducer and applyMiddleware are passed as arguments to createStore function. applyMiddleware is used to apply middleware to the store. logger is a middleware which logs the actions and state changes in the console.

console.log('Initial State', store.getState());
//Subscribing to the Store
const unsubscribe = store.subscribe(() => {}, {/*console.log('Updated State', store.getState())*/} );
//Disptaching action
store.dispatch(add());
store.dispatch(add());
store.dispatch(subtract());

unsubscribe(); // Unsubscribing from the store

