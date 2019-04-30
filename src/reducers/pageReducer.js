const pageReducer = (state = '/', action) => {
  switch (action.type) {
    case 'UPDATE_VISITED_PAGE':
      return action.page
    default:
      return state
  }
}

export default pageReducer