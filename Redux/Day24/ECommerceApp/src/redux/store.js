import { createStore } from 'redux';
import rootReducer from './reducers/index';

//create a store 
const store = createStore(
    rootReducer,
)

//exporting
export default store;