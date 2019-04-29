import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as a from '../actions';
import Main from '../components/Main';

const mapStatePostsToProps = state => {
  return {
    books: state.books,
  }
}

const mapDispatchPostsToProps = dispatch => {
  return bindActionCreators(a, dispatch)
}

export default connect(
  mapStatePostsToProps,
  mapDispatchPostsToProps
)(Main)