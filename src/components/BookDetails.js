import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'

import Book from './Book'

class BookDetails extends Component {
  componentDidMount = () => {
    if (!this.props.books) {
      this.props.startLoadingBooks()
    }
  }
  handleSelect = (e, book) => {
    e.preventDefault()
    const index = this.props.books.indexOf(book)
    this.props.selectBook(index, book)
  }
  handleUnSelect = (e, book) => {
    e.preventDefault()
    const index = this.props.selectedBooks.indexOf(book)
    this.props.removeSelected(index)
  }
  render () {
    const { title, books, selectedBooks } = this.props
    console.log('books', this.props)
    console.log('selected', this.props.selectedBooks.indexOf)
    if (this.props.books.length > 0) {
      const book = books.find(item => item.title === title)
      const isSelected = selectedBooks.indexOf(book) !== -1
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
              <p>Publishing year: {book.year}</p>
            </div>
            <div />
            {isSelected ? (
              <button onClick={e => this.handleUnSelect(e, book)}>
                Unselect
              </button>
            ) : (
              <button onClick={e => this.handleSelect(e, book)}>Select</button>
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
