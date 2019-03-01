import { combineReducers } from 'redux'
import todos from './todos'
import text from './text'
import filter from './filter'

export default combineReducers({
    todos,
    text,
    filter
});