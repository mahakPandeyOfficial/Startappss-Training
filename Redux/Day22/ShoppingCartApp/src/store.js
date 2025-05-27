import { createStore } from 'redux';
import cartReducers from './reducers/cartReducers';

const store = createStore(cartReducers);
export default store;

