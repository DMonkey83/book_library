import React, { Component } from 'react';

class SearchBar extends Component {
  handleSearch = e => {
    e.persist()
    let searchTerm = e.target.value
    this.props.searchBooks(searchTerm)
    
  }
  render() {
    return (
      <div className='search-bar-container'>
        <input
          onChange={e => {this.handleSearch(e)}}
          className='search-bar'
          type='text'
          name='searchBar'
          placeholder='Search'/>
      </div>
    );
  }
}

export default SearchBar;