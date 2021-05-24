import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from '../reducer/loginReducer';

const rootReducer = combineReducers({
  LoginReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export {store};
