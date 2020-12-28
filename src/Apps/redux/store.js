import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
const rootReducers = combineReducers({ indexReducer })
export default createStore(rootReducers, applyMiddleware(thunk)) 