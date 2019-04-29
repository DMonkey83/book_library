import React, { Component } from 'react'
import { Link } from '@reach/router'

class MenuBar extends Component {
  render () {
    console.log('props', this.props)
    return (
      <div className='menu-bar'>
        <div className='menu-bar-title'>Books</div>
        <div className='menu-bar-container'>
          <Link {...this.props} className='menu-bar-item' to='/'>
            Browse
          </Link>
          <Link {...this.props} className='menu-bar-item' to='checkout'>
            Check Out
          </Link>
          <Link {...this.props} className='menu-bar-item' to='reserved'>
            Reserved
          </Link>
        </div>
      </div>
    )
  }
}

export default MenuBar
