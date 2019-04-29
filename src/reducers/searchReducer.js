const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS':
      return {
        ...state,
        searchTerm: action.input
      }
    default:
      return state
  }
}

export default searchReducer