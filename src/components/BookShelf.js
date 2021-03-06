import React, { Component } from 'react'

import Book from './Book'
import SearchBar from './SearchBar'

class BookShelf extends Component {
  componentDidMount = () => {
    this.props.updateVisitedPage(this.props.path)
  }
  render () {
    return (
      <div>
        <SearchBar {...this.props} />
        <div className='book-shelf'>
          {this.props.books.map((book, index) => (
            <Book key={index} book={book} {...this.props} index={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default BookShelf
