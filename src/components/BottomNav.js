import React, { Component, createRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import Sticky from 'react-sticky-el';

export default class BottomNav extends Component {
  render() {
    return (
      // <Sticky>
        <div className='BN'>
          <div className='BN-left'>
            <div className='BN-button'>
              <NavLink exact={true} to='/' activeClassName='is-active' className='BN-navlink'>
                <span>Home</span>
              </NavLink>
            </div>
            <div className='BN-button'>
              <NavLink to='/areas' activeClassName='is-active' className='BN-navlink'>
                <span>Areas</span>
              </NavLink>
            </div>
            <div className='BN-button'>
              <NavLink to='/services' activeClassName='is-active' className='BN-navlink'>
                <span>Services</span>
              </NavLink>
            </div>
            <div className='BN-button'>
              <NavLink to='/pricing' activeClassName='is-active' className='BN-navlink'>
                <span>Pricing</span>
              </NavLink>
            </div>
            <div className='BN-button'>
              <NavLink to='/booknow' activeClassName='is-active' className='BN-navlink'>
                <span id='BN-book-1'>Book</span>
                <span id='BN-book-2'>Book Now</span>
              </NavLink>
            </div>
          </div>
            
          <div className='BN-right'>
            <a href='http://www.facebook.com/happywifejunkservice' target='_blank'><i className='fab fa-facebook' id='facebook-button' role='link'></i></a>
            <a href='https://g.page/HappyWife?gm' target='_blank'><i className='fab fa-google' id='google-button' role='link'></i></a>
          </div>
        </div>
      // </Sticky>
    )
  }
}