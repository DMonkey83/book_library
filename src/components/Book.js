import { Link } from '@reach/router';
import React from 'react';

const Book = props => {
  const { book } = props
  if (book === undefined) {
    return ''
  } else {
    return (
      <figure className='figure'>
          <div className='figure-container'>
            <Link className='image-link' to={`bookdetails/${book.title}`}>
              <img
                className='photo'
                src={`${book.imageLink}`}
                alt={book.title}
              />
            </Link>
          </div>
            <figcaption className='book-description'>
              <h2 className='book-title'>{book.title}</h2>
              <p className='book-author'>{book.author}</p>
            </figcaption>
            {/* <div className='button-container'>
              <button
                onClick={() => {
                  removePost(post.id)
                  navigate('/')
                }}
                className='remove-button'>
                Remove
              </button>
              <Link className='button' to={`postdetails/${post.id}`}>
                <div className='comment-count'>
                  <div className='speech-bubble' />
                  {props.comments[post.id] === undefined
                    ? 0
                    : props.comments[post.id].length}
                </div>
              </Link>
            </div> */}
      </figure>
    )
  }
}

export default Book