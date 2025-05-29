import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from "@redux-devtools/extension";
import cartReducers from './reducers/cartReducers';

const store = createStore(cartReducers, composeWithDevTools(applyMiddleware(logger)));
export default store;

