import { combineReducers } from 'redux';

// import all reducers
import notes from './notes';
import categories from './categories'

// combine them
const appReducer = combineReducers({
    // auth,
    notes: notes, // es6 shorthand from notes: notes
    categories: categories // es6
})

export default appReducer;