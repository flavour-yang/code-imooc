/*
 * @Author: Y
 * @Date: 2022-03-02 16:21:56
 * @Description: redux
 */
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const IS_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
let store = createStore(reducers, compose(applyMiddleware(reduxThunk), IS_DEVTOOLS()))

export default store
