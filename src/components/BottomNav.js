import React, { Component, createRef } from 'react'
import { NavLink } from 'react-router-dom'

export default class BottomNav extends Component {
  render() {
    return (
      <div className='BN'>

        <div className='BN-left'>
          <div className='BN-button'>
            <NavLink exact={true} to='/' activeClassName='is-active' className='BN-navlink BN-home'>
              <span>HOME</span>
            </NavLink>
          </div>
          <div className='BN-button'>
            <NavLink to='/services' activeClassName='is-active' className='BN-navlink BN-services'>
              <span>SERVICES</span>
            </NavLink>
          </div>
          <div className='BN-button'>
            <NavLink to='/areas' activeClassName='is-active' className='BN-navlink BN-areas'>
              <span>AREAS</span>
            </NavLink>
          </div>
          <div className='BN-button'>
            <NavLink to='/pricing' activeClassName='is-active' className='BN-navlink BN-pricing'>
              <span>PRICING</span>
            </NavLink>
          </div>
          <div className='BN-button'>
            <NavLink to='/contact' activeClassName='is-active' className='BN-navlink BN-schedule'>
              <span>CONTACT</span>
            </NavLink>
          </div>
        </div>
          
        <div className='BN-right'>
          <a href='http://www.facebook.com/happywifejunkservice' target='_blank'><i className='fab fa-facebook' id='facebook-button' role='link'/></a>
          <a href='https://g.page/HappyWife?gm' target='_blank'><i className='fab fa-google' id='google-button' role='link'/></a>
        </div>

      </div>
    )
  }
}