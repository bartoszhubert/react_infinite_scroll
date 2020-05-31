import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const isProduction = process.env.NODE_ENV === 'production';
const middlewareList = [];

middlewareList.push(thunk);
if (!isProduction) middlewareList.push(logger);

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;
