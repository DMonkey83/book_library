import { Router } from '@reach/router';
import React, { Component } from 'react';

import BookShelf from './BookShelf';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';
import Title from './Title'

export default class Main extends Component {
  componentDidMount = () => {
    this.props.startLoadingBooks()
  }
  render () {
    console.log('main Props', this.props)
    return (
      <div className='main-container'>
        <div className='side-bar'>
          <Title text='The Library'/>
          <MenuBar />
        </div>
        <div className='content-container'>
          <SearchBar />
          <div className='book-library'>
            <Router className='book-shelf-container'>
              <BookShelf path='/' {...this.props} />
            </Router>
          </div>
        </div>
      </div>
    )
  }
}
