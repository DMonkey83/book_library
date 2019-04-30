import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import bookReducer from './bookReducer'
import selectionReducer from './selectionReducer'
import reservationReducer from './reservationReducer'
import userReducer from './userReducer'
import pageReducer from './pageReducer'
import checkedOutReducer from './checkedOutReducer'

const rootReducer = combineReducers({
  books: bookReducer,
  search: searchReducer,
  selected: selectionReducer,
  reservedBooks: reservationReducer,
  user: userReducer,
  visitedPage: pageReducer,
  checkedOut: checkedOutReducer
})

export default rootReducer
