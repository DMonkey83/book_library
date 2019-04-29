import { Router } from '@reach/router'
import React, { Component } from 'react'

import BookShelf from './BookShelf'
import MenuBar from './MenuBar'
import Title from './Title'
import BookDetails from './BookDetails'
import Reserved from './Reserved'
import Checkout from './Checkout'

export default class Main extends Component {
  componentDidMount = () => {
    this.props.startLoadingBooks()
  }
  render () {
    return (
      <div className='main-container'>
        <div className='side-bar'>
          <Title text='The Library' />
          <MenuBar {...this.props} />
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
                <Checkout path='checkout' {...this.props} />
              </Router>
            </div>
          </div>
        )}
      </div>
    )
  }
}
