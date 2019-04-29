import { Link } from '@reach/router'
import React from 'react'

const Book = props => {
  const { book } = props
  if (book === undefined) {
    return ''
  } else {
    return (
      <figure className='figure'>
        <div className='figure-container'>
          <Link className='image-link' to={`/bookdetails/${book.title}`}>
            <img className='photo' src={`${book.imageLink}`} alt={book.title} />
          </Link>
        </div>
        <figcaption className='book-description'>
          <h2 className='book-title'>{book.title}</h2>
          <p className='book-author'>{book.author}</p>
        </figcaption>
      </figure>
    )
  }
}

export default Book
