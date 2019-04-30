import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'

import Book from './Book'

class BookDetails extends Component {
  componentDidMount = () => {
    if (!this.props.books) {
      this.props.startLoadingBooks()
    }
    this.props.updateVisitedPage(this.props.path)
  }
  handleSelect = (e, book, dueDate) => {
    e.preventDefault()
    const index = this.props.books.indexOf(book)
    book.DueDate = dueDate 
    book.index = index
    this.props.selectBook(index, book)
  }
  handleUnSelect = (e, book) => {
    e.preventDefault()
    const index = this.props.selectedBooks.indexOf(book)
    this.props.removeSelected(index)
  }
  render () {
    const { title, books, selectedBooks } = this.props
    if (this.props.books.length > 0) {
      const book = books.find(item => item.title === title)
      const isSelected = selectedBooks && selectedBooks.indexOf(book) !== -1
      let dueDate = book.extraDueDate ? book.extraDueDate : (book.dueDate ? book.dueDate : '')
      return (
        <div className='book-details-container'>
          <Book book={book} />
          <div className='book-detail-panel'>
            <div>
              <h1>Title: {book.title}</h1>
              <p>Author: {book.author}</p>
            </div>
            <div>
              <p>Coutry: {book.country}</p>
              <p>Language: {book.language}</p>
              <p>{book.pages} pages</p>
              <p>Publishing year: {book.year < 0 ? `${Math.abs(book.year)}BC` : book.year}</p>
              {dueDate && <p>Book is unavailable till {dueDate} but You can reserve it?</p>}
            </div>
            <div />
            {isSelected ? (
              <button onClick={e => this.handleUnSelect(e, book)}>
                Unselect
              </button>
            ) : (
              <button onClick={e => this.handleSelect(e, book, dueDate)}>{dueDate ? 'Reserve' : 'Select'}</button>
            )}
            <Link className='button' to='/checkout'>
              Check Out
            </Link>
          </div>
        </div>
      )
    } else {
      return () => navigate('/')
    }
  }
}

export default BookDetails
