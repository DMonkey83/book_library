import { Router } from '@reach/router'
import React, { Component } from 'react'

import BookShelf from './BookShelf'
import MenuBar from './MenuBar'
import Title from './Title'
import BookDetails from './BookDetails'
import Reserved from './Reserved'
import Checkout from './Checkout'
import CheckedOut from './CheckedOut'

export default class Main extends Component {
  componentDidMount = () => {
    this.props.startGettingUserDetails()
    this.props.startLoadingBooks()
    this.props.startLoadingReservedBookList()
    this.props.startLoadingCheckedOutBooks()
  }
  render () {
    let page = 'browse'
    switch (this.props.visitedPage) {
      case '/':
        page = 'browse'
        break
      case 'bookdetails/:title':
        page = 'browse'
        break
      case 'checkout':
        page = 'checkout'
        break
      case 'checkedout':
        page = 'checkedOut'
        break
      case 'reserved':
        page = 'reserved'
        break
      default:
        page = 'browse'
    }
    return (
      <div className='main-container'>
        <div className='side-bar'>
          <Title text='The Library' />
          <MenuBar {...this.props} page={page}/>
        </div>
        {!this.props.books ? (
          <div>Loading</div>
        ) : (
          <div className='content-container'>
            <div className='book-library'>
              <Router className='book-shelf-container'>
                <BookShelf path='/' {...this.props} />
                <BookDetails path='bookdetails/:title' {...this.props} />
                <Reserved path='reserved' {...this.props} />
                <CheckedOut path='checkedout' {...this.props} />
                <Checkout path='checkout' {...this.props} />
              </Router>
            </div>
          </div>
        )}
      </div>
    )
  }
}
