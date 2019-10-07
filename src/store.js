import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Reducers from './reducers';

const middlewares = [thunk, multi, promise];

if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
}

export default createStore(Reducers, applyMiddleware(...middlewares));
