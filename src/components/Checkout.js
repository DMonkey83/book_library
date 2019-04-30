import React, { Component } from 'react'
import Book from './Book'
import moment from 'moment'

export default class Checkout extends Component {
  componentDidMount = () => {
    this.props.updateVisitedPage(this.props.path)
  }
  handleSubmit = e => {
    e.preventDefault()
    e.persist()
    const {selectedBooks} = this.props
    selectedBooks.map(item => {
      let book = {}
      if (item.dueDate) {
        book = (item)
        if (item.extraDueDate) {
          book.extraStartDate = item.extraDueDate
          book.extraDueDate = moment(item.extraDueDate).add(2, 'week').format('YYYY-MM-DD')
        } else {
          book.extraStartDate = item.dueDate
          book.extraDueDate = moment(item.dueDate).add(2, 'week').format('YYYY-MM-DD')
        }
        this.props.startReservingBooks(book)
      } else {
        book = (item)
        book.startDate = moment().format('YYYY-MM-DD')
        book.dueDate = moment().add(2, 'week').format('YYYY-MM-DD')
        this.props.startCheckingOutBooks(book)
      }
    })
    this.props.clearSelectedBooks()
  }
  render () {
    const { selectedBooks } = this.props
    return (
      <div className='checkout-container'>
        {selectedBooks && selectedBooks.length > 0 ? (
          <div className='checkout-container'>
            <div className='checkout-details'>
              <div>
                <h1>YourDetails</h1>
                <label>{this.props.user.title}</label>
                <hr />
              </div>
              <form
                onSubmit={e => this.handleSubmit(e)}
                className='checkout-form'>
                <button>Checkout</button>
              </form>
              <p className='checkout-message'>borrow books for two weeks</p>
            </div>
            <div className='checkout-selected-books'>
              {selectedBooks.map((book, index) => (
                <Book key={index} book={book} {...this.props} index={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className='checkout-empty'>
            <h1>Empty Basket</h1>
          </div>
        )}
      </div>
    )
  }
}
