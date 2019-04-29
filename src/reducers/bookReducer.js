const bookReducer = (state = [], action) => {
  switch (action.type) {
    // case '':
    //   return [
    //     ...state.filter(post => post.id !== Number(action.payload))
    //   ]
    // case 'ADD_POST':
    //   return [...state, action.payload]
    case 'LOAD_BOOKS':
      return action.books
    default:
      return state
  }
}

export default bookReducer