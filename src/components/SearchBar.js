import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar-container'>
        <input className='search-bar' type='text' name='rearch-bar' placeholder='Search'/>
      </div>
    );
  }
}

export default SearchBar;