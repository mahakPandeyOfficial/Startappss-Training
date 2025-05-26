const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

//State the initial state
const initialState = {
    loading: false,
    data: [],
    error: ''
}

//Action Types  
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';


//Action Creators

//Async Actions are used to fetch the user or data from API endpoint and stores in redux store.
const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error                     //PAYLOAD:  It is a way to pass data from the action creator to the reducer, allowing the reducer to perform specific tasks based on the action type and payload
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payLoad: data
    }
}

//Reducer  
const reducer = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_DATA_REQUEST: return {
            loading: true
        }

        case FETCH_DATA_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: ''
        }

        case FETCH_DATA_FAILURE: return {
            loading: false,
            data: [],
            error: action.payload,
        }
    }
}

//Async Action Creator .... using Thunk Middleware - What Thunk takes to the table is that It returns a function instead of an action object.
const fetchData = () => {
   return function(dispatch) {   //These functions are having benifits that they dont have to be pure functions , they can have side effects and can perform aync operations.

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
             //response.data will give you user data, it is an array of users objects 
        })
        .catch(error => {
            //error.message will give you error messsage here
        })
    

   }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
