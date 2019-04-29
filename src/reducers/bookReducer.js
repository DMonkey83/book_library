const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return action.books
    default:
      return state
  }
}

export default bookReducer
