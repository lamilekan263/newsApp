import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import newsReducer from './newsData/newsDataReducer';


const middlewares = [logger, thunkMiddleware];


const store = createStore(newsReducer, applyMiddleware(...middlewares));


export default store;