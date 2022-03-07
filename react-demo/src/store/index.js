/*
 * @Author: Y
 * @Date: 2022-03-02 16:21:56
 * @Description: redux
 */
import { createStore } from 'redux'
const { composeWithDevTools } = require('redux-devtools-extension');
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools()) // , applyMiddleware(reducers)

export default store
