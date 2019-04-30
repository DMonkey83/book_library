import { Link } from '@reach/router'
import React, {Component} from 'react'

class Book extends Component {
  handleReturn = book => {
    this.props.startRemovingCheckedOutBook(book.extraIndex)
  }
  render () {
    const { book, visitedPage } = this.props
    if (book === undefined) {
      return ''
    } else {
      let dueDate = ''
      if (visitedPage === 'checkedout') {
        dueDate = book.dueDate
      } else if ( visitedPage === 'reserved') {
        dueDate = book.extraDueDate
      }
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
            {visitedPage === 'checkedout' || visitedPage === 'reserved' ?
            (<div className='book-due-date'>
              <p>DueDate: </p>
              <p>{dueDate}</p>
            </div>):''}
            {visitedPage === 'checkedout' ?
            (
              <button onClick={() => this.handleReturn(book)} className='button return'>Return Book</button>
            ) : ''}
          </figcaption>
        </figure>
      )
    }
  }
}

export default Book
