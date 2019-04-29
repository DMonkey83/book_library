import React from 'react'

import Book from './Book'
import SearchBar from './SearchBar'

const BookShelf = props => {
  return (
    <div>
      <SearchBar {...props} />
      <div className='book-shelf'>
        {props.books.map((book, index) => (
          <Book key={index} book={book} {...props} index={index} />
        ))}
      </div>
    </div>
  )
}

export default BookShelf
