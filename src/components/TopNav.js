import React, { Component } from 'react'

export default class TopNav extends Component {
  render() {
    return (
      <div className='TN'>

        <div className='TN-left'>
          <img src='https://i.imgur.com/usX1Piu.png' alt='company logo' />
        </div>

        <div className='TN-right'>

          <div className='TN-right-child'>
            <a href='tel:770-873-0803'>
              770.873.0803
            </a>
          </div>

          <div className='TN-right-child'>
            <a href='tel:770-873-0803'><i className="fas fa-phone"></i> Call </a><span> or </span><a href='sms:7708730803'> <i className="fas fa-comment-dots"></i> Text</a>
          </div>

        </div>

      </div>
    )
  }
}