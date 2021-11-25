import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import dicInfo from './modules/dic_info'

const middlewares = [thunk]
const rootReducer = combineReducers({dicInfo})
const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer)

export default store