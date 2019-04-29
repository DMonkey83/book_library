import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  search: searchReducer
})

export default rootReducer