import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(createLogger()))
);

export default configureStore;