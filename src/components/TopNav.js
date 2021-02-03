import React, { Component } from 'react'
import logo from '../images/logo.png'

export default class TopNav extends Component {
  render() {
    return (
      <div className='TN'>

        <div className='TN-left'>
          <img src={logo} alt='company logo' />
        </div>

        <div className='TN-right'>

          <div className='TN-right-top'>
            <span>Happy Wife Junk Service</span>
          </div>

          <div className='TN-right-middle'>
            <a href='tel:770-873-0803'>
              <span>770.873.0803</span>
            </a>
          </div>

          <div className='TN-right-bot'>
            <a href='tel:770-873-0803'><i className="fas fa-phone"/><span className='TN-call'> Call </span></a><span className='TN-or'> or </span><a href='sms:7708730803'> <i className="fas fa-comment-dots"/><span className='TN-text'> Text</span></a>
          </div>

        </div>

      </div>
    )
  }
}