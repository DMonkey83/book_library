import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as a from '../actions';
import Main from '../components/Main';

const mapStatePostsToProps = state => {
  const books = state.books.filter(book => {
    return book.title.match(new RegExp(state.search.searchTerm, 'i')) || book.author.match(new RegExp(state.search.searchTerm, 'i'));
 });

  return {
    search: state.search,
    books: books
  }
}

const mapDispatchPostsToProps = dispatch => {
  return bindActionCreators(a, dispatch)
}

export default connect(
  mapStatePostsToProps,
  mapDispatchPostsToProps
)(Main)