import React, { Component } from 'react'

import Book from './Book'

class BookShelf extends Component {
  componentDidMount = () => {
    this.props.updateVisitedPage(this.props.path)
    if (!this.props.user.name) {
      this.props.startGettingUserDetails()
    }
  }
  render () {
   return (
      <div>
        <div className='book-shelf'>
          {
            this.props.checkedOut.map((book, index) => (
              <Book key={index} book={book} {...this.props} index={index} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default BookShelf
