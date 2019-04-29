import React, { Component } from 'react';

import Book from './Book'

class BookDetails extends Component {
  componentDidMount = () => {
    this.props.startLoadingBooks()
  }
  render() {
    const{title, books} = this.props
    console.log('books', this.props)
    const book = books.find(item => item.title === title)
    if(this.props.books.length > 0) {
      return (
        <div className='book-details-container'>
          <Book book={book}/>
          <div className='book-detail-panel'>
            <div>
              <h1>{book.title}</h1>
              <p>{book.author}</p>
            </div>
            <div>
              <p>{book.country}</p>
              <p>{book.language}</p>
              <p>{book.pages}</p>
              <p>{book.year}</p>
            </div>
            <button>Select</button>
            <button>Checkout</button>
          </div>
        </div>
      );
    } else {
      return <p>loading</p>
    }
  }
}

export default BookDetails;