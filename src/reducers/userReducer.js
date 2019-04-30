
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DETAILS':
      return action.user
    default:
      return state
  }
}

export default userReducer