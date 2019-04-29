import React, { Component } from 'react'
import Book from './Book'
import moment from 'moment'

export default class Checkout extends Component {
  handleSubmit = e => {
    e.preventDefault()
    e.persist()
    const now = moment().format('YYYY-MM-DD')
    const reservedBooks = {
      selectedBooks: this.props.selectedBooks,
      dateBorrowed: now,
      lastDateToReturn: moment()
        .add(2, 'weeks')
        .format('YYYY-MM-DD'),
      formData: {
        name: e.target.elements.yourName.value,
        cardDetails: e.target.elements.cardDetails.value,
        address: e.target.elements.address.value
      }
    }
    this.props.startReservingBooks(reservedBooks)
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
                <hr />
              </div>
              <form
                onSubmit={e => this.handleSubmit(e)}
                className='checkout-form'>
                <label htmlFor='yourName'>Your Name</label>
                <input
                  id='yourName'
                  type='text'
                  placeholder='Your name'
                  name='yourName'
                />
                <label htmlFor='cardDetails'>Card Details</label>
                <input
                  id='cardDetails'
                  type='text'
                  placeholder='Card details'
                  name='cardDetails'
                />
                <label htmlFor='address'>Address</label>
                <input
                  id='address'
                  type='text'
                  placeholder='Address'
                  name='address'
                />
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
