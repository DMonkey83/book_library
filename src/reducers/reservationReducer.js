const reservationReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_RESERVED_BOOKS':
      return action.books
    case 'CLEAR_SELECTED_BOOKS':
      return []
    case 'RETURN_RESERVED':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default:
      return state
  }
}

export default reservationReducer
