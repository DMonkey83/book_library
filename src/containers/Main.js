import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as a from '../actions'
import Main from '../components/Main'

const mapStatePostsToProps = state => {
  const books = state.books.filter(book => {
    if (book.title && book.author) {
      return (
        book.title.match(new RegExp(state.search.searchTerm, 'i')) ||
        book.author.match(new RegExp(state.search.searchTerm, 'i'))
      )
    } else {
      return ''
    }
  })

  return {
    search: state.search,
    books: books,
    selectedBooks: state.selected,
    reservedBooks: state.reservedBooks
  }
}

const mapDispatchPostsToProps = dispatch => {
  return bindActionCreators(a, dispatch)
}

export default connect(
  mapStatePostsToProps,
  mapDispatchPostsToProps
)(Main)
