import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import bookReducer from './bookReducer'
import selectionReducer from './selectionReducer'
import reservationReducer from './reservationReducer'

const rootReducer = combineReducers({
  books: bookReducer,
  search: searchReducer,
  selected: selectionReducer,
  reservedBooks: reservationReducer
})

export default rootReducer
