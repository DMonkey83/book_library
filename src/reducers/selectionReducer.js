const selectionReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case 'SELECT_BOOK':
      return [...state, action.book]
    case 'CLEAR_SELECTED_BOOKS':
      return []
    case 'REMOVE_SELECTED':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default:
      return state
  }
}

export default selectionReducer
