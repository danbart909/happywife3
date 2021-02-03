import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ContactStub extends Component {
  render() {
    return (
      <div className='cs-container scontainer'>
        <div className='cs-body sbody'>
          <div className='cs-left'>
            <div className='cs-1 cs-l cs'>
              <span>Call us or send us a Text to find out how we can help you!</span>
            </div>
            <div className='cs-2 cs-l cs'>
              <span>You can also send us an email or fill out the form on the <Link className='cs-link' to='/contact'><span>Contact page</span></Link>.</span>
            </div>
          </div>
          <div className='cs-right'>
            <a href='tel:770-873-0803' className='cs-3 cs-r cs'>
              <i className="fas fa-phone"/>
              <span>770.873.0802</span>
            </a>
            <a href='mailto:dhbartlett12@gmail.com' className='cs-4 cs-r cs'>
              <i className="fas fa-envelope-open-text"/>
              <div className='cs-4-1'>
                <span>dhbartlett12</span>
                <span>@gmail.com</span>
              </div>
            </a>
            <Link to='/contact' className='cs-5 cs-r cs'>
              <i className="fas fa-keyboard"/>
              <span>Contact Form</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
