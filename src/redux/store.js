import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { matchReducer } from './matchReducer';
export const store = createStore(matchReducer, applyMiddleware(thunk));