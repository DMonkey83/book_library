import axios from '../helpers/axios_api'

export const startReservingBooks = book => {
  return dispatch => {
    return axios.post(`/reservedBookList.json`, book)
    .then(response => {
      return axios.put(`/books/${book.index}.json`, book)
      .then(response => {
        dispatch(startLoadingBooks())
        dispatch(startLoadingReservedBookList())
      })
    }).catch(err => console.log('error', err))
  }
}

export const startCheckingOutBooks = book => {
  return dispatch => {
    return axios
      .post(`/checkedOutBooks.json`, book)
      .then(response => {
        return axios.put(`/books/${book.index}.json`, book)
        .then(response => {
          dispatch(startLoadingBooks())
          dispatch(startLoadingCheckedOutBooks())
        })
      })
      .catch(err => console.log('error', err))
  }
}

export const startRemovingCheckedOutBook = index => {
  return dispatch => {
    return axios
      .delete(`/checkedOutBooks/${index}.json`)
      .then(response => {
        dispatch(startLoadingBooks())
        dispatch(startLoadingCheckedOutBooks())
      })
      .catch(err => console.log('error', err))
  }
}

export const startLoadingReservedBookList = () => {
  return dispatch => {
    return axios.get(`/reservedBookList.json`).then(response => {
      let books = []
      Object.values(response.data).forEach(book => {
        books.push(book)
      })
      dispatch(loadReservedBooks(books))
    })
    .catch(err => console.log('error', err))
  }
}

export const startLoadingCheckedOutBooks = () => {
  return dispatch => {
    return axios.get(`/checkedOutBooks.json`).then(response => {
      let books = []
      Object.keys(response.data).forEach(index => {
        response.data[index].extraIndex = index
        books.push(response.data[index])
      })
      dispatch(loadCheckedOutBooks(books))
    })
    .catch(err => {
     dispatch(loadCheckedOutBooks([]))
     console.log('error', err)
    })
  }
}

export const startGettingUserDetails = () => {
  return dispatch => {
    return axios.get('/user.json').then(response => {
      let user = response.data
      dispatch(updateUserDetails(user))
    })
  }
}

export const updateVisitedPage = (page) => {
  return {
    type: 'UPDATE_VISITED_PAGE',
    page
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

export const updateUserDetails = user => {
  return {
    type: 'UPDATE_USER_DETAILS',
    user
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

export const loadCheckedOutBooks = books => {
  return {
    type: 'LOAD_CHECKED_OUT_BOOKS',
    books
  }
}

export const loadBooks = books => {
  return {
    type: 'LOAD_BOOKS',
    books
  }
}
