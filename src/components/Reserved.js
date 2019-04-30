import React, { Component } from 'react'
import Book from './Book'

class Reserved extends Component {
  componentDidMount = () => {
    this.props.updateVisitedPage(this.props.path)
  }
  render () {
    return (
      <div>
        <div className='book-shelf'>
          {this.props.reservedBooks.map((book, index) => (
            <Book key={index} book={book} {...this.props} index={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default Reserved
