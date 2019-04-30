const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CHECKED_OUT_BOOKS':
      return action.books
    default:
      return state
  }
}

export default userReducer