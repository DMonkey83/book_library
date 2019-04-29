import React from 'react';

import Book from './Book';

const BookShelf = props => {
  return (
    <div className='book-shelf'>
      {props.books
        .map((book, index) => (
          <Book
            key={index}
            book={book}
            {...props}
            index={index}
          />
        ))}
    </div>
  )
}

export default BookShelf