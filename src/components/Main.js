import { Router } from '@reach/router';
import React, { Component } from 'react';

import BookShelf from './BookShelf';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';
import Title from './Title'
import BookDetails from './BookDetails';

export default class Main extends Component {
  componentDidMount = () => {
    this.props.startLoadingBooks()
  }
  render () {
    return (
      <div className='main-container'>
        <div className='side-bar'>
          <Title text='The Library'/>
          <MenuBar {...this.props}/>
        </div>
        <div className='content-container'>
            <SearchBar {...this.props}/>
            <div className='book-library'>
              <Router className='book-shelf-container'>
                <BookShelf path='/' {...this.props} />
                <BookDetails path='/bookdetails/:title' {...this.props}/>
              </Router>
            </div>
        </div>
        }
      </div>
    )
  }
}
