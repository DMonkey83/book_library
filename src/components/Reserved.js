import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Reserved extends Component {
  componentDidMount = () => {
    this.props.startLoadingReservedBooks()
  }

  render () {
    return (
      <div>
        <SearchBar {...this.props} />
        Reserved
      </div>
    )
  }
}

export default Reserved
