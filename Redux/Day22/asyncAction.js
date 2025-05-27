const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').thunk;    //It's exporting an object with thunk inside it, bcz while using Node JS it is causing error that midddleware is not a fucntion and it is undefinedin the log
const axios = require('axios');

console.log('Thunk module:', thunkMiddleware);

//State the initial state
const initialState = {
    loading: false,
    user: [],
    error: ''
}

//Action Types  
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';


//Action Creators

//Async Actions are used to fetch the user or data from API endpoint and stores in redux store.
const fetchDataRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchDataFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error                     //PAYLOAD:  It is a way to pass data from the action creator to the reducer, allowing the reducer to perform specific tasks based on the action type and payload
    }
}

const fetchDataSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

//Reducer  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        };

        case FETCH_USER_SUCCESS: return {
            ...state,
            loading: false,
            user: action.payload,
            error: ''
        };

        case FETCH_USER_FAILURE: return {
            ...state,
            loading: false,
            user: [],
            error: action.payload
        };

        default:
            return state;
    }
};

//Async Action Creator .... using Thunk Middleware - What Thunk takes to the table is that It returns a function instead of an action object.
const fetchData = () => {
   return function(dispatch) {   //These functions are having benifits that they dont have to be pure functions , they can have side effects and can perform aync operations.
      dispatch(fetchDataRequest());    //This dispatch will basically set the loading state to true which is initially false in the reducer. 
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
             //response.data will give you user data, it is an array of users objects 
             const user = response.data.map((users) => users.id)
             dispatch(fetchDataSuccess(user))
        })
        .catch(error => {
            //error.message will give you error messsage here
            dispatch(fetchDataFailure(error.message))
        })
    

   }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState())})
store.dispatch(fetchData());   //This will call the fetchData function which will dispatch the fetchDataRequest action and then it will make the API call to get the user data. 
