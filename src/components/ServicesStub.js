import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ServicesStub extends Component {
  render() {
    return (
      <div className='ss-container scontainer'>
        <div className='ss-body sbody'>
          <span>We'll take care of any mess and move anything you need!</span>
          <span>The only things we don't take are hazardous materials.</span>
          <Link to='/services'>
            <span>Find out more about what we take.</span>
          </Link>
        </div>
      </div>
    )
  }
}