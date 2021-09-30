import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import appReducer from './Redux';

const middleware = [createLogger({ collapsed: true })];

export default createStore(appReducer, applyMiddleware(...middleware));
