const redux = require('redux');
const createStore = redux.createStore;
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

const store = createStore(reducer);