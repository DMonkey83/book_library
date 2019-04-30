import React, { Component } from 'react'
import { Link } from '@reach/router'

class MenuBar extends Component {
  render() {

    return (
      <div className='menu-bar'>
        <div className='menu-bar-title'>Books</div>
        <div className='menu-bar-container'>
          <Link {...this.props} className={this.props.page === 'browse' ? 'visited menu-bar-item' : 'menu-bar-item'} to='/'>
            Browse
          </Link>
          <Link {...this.props} className={this.props.page === 'checkedOut' ? 'visited menu-bar-item' : 'menu-bar-item'} to='checkedout'>
            Checked Out
          </Link>
          <Link {...this.props} className={this.props.page === 'reserved' ? 'visited menu-bar-item' : 'menu-bar-item'} to='reserved'>
            Reserved
          </Link>
          {this.props.selected &&
            <Link {...this.props} className={this.props.page === 'checkout' ? 'visited menu-bar-item' : 'menu-bar-item'} to='checkout'>
              Check Out
            </Link>
          }
        </div>
        <hr />
        <p>Hello : {this.props.user && this.props.user.title}</p>
      </div>
    )
  }
}

export default MenuBar
