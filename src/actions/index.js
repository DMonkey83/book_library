import axios from '../helpers/axios_api'

export const startReservingBooks = books => {
  return dispatch => {
    console.log(books)
    return axios
      .post(`/reservedBooks.json`, books)
      .then(response => {
        dispatch(addReservedBooks(books))
      })
      .catch(err => console.log('error', err))
  }
}
export const startLoadingReservedBooks = () => {
  return dispatch => {
    return axios.get('/reservedBooks.json').then(response => {
      let books = []
      console.log('reserved', response.data)
      Object.values(response.data).forEach(book => {
        books.push(book)
      })
      console.log('res bbok', books)
      dispatch(loadReservedBooks(books))
    })
  }
}

export const startLoadingBooks = () => {
  return dispatch => {
    return axios.get('/books.json').then(response => {
      let books = []
      response.data.forEach(book => {
        books.push(book)
      })
      dispatch(loadBooks(books))
    })
  }
}

export const clearSelectedBooks = () => {
  return {
    type: 'CLEAR_SELECTED_BOOKS'
  }
}

export const addReservedBooks = books => {
  return {
    type: 'ADD_RESERVED_BOOKS',
    books
  }
}

export const selectBook = (index, book) => {
  return {
    type: 'SELECT_BOOK',
    index,
    book
  }
}

export const removeSelected = index => {
  return {
    type: 'REMOVE_SELECTED',
    index
  }
}

export const searchBooks = input => {
  return {
    type: 'SEARCH_BOOKS',
    input
  }
}

export const loadReservedBooks = books => {
  return {
    type: 'LOAD_RESERVED_BOOKS',
    books
  }
}

export const loadBooks = books => {
  return {
    type: 'LOAD_BOOKS',
    books
  }
}
