import axios from '../helpers/axios_api'

// export const startAddingPost = post => {
//   return dispatch => {
//     console.log(post)
//     return axios
//       .post('/posts.json', post)
//       .then(response => {
//         dispatch(addPost(post))
//       })
//       .catch(err => console.log('error', err))
//   }
// }

export const startLoadingBooks = () => {
  return dispatch => {
    return axios.get('/books.json').then(response => {
      console.log(response.data)
      let books = []
      response.data.forEach(book => {
        console.log(book)
        books.push(book)
      })
      dispatch(loadBooks(books))
    })
  }
}

// export const startRemovingPosts = (inde)

// export const removePost = id => {
//   return {
//     type: 'REMOVE_POST',
//     payload: id
//   }
// }

// export const addPost = post => {
//   return {
//     type: 'ADD_POST',
//     payload: post
//   }
// }

// export const addComment = (comment, postId) => {
//   return {
//     type: 'ADD_COMMENT',
//     payload: {
//       comment,
//       postId
//     }
//   }
// }

export const loadBooks = books => {
  return {
    type: 'LOAD_BOOKS',
    books
  }
}