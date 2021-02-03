import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AreasStub extends Component {
  render() {
    return (
      <div className='as-container scontainer'>
        <div className='as-body sbody'>
          <div className='as-header'>
            <span>We Serve the Following <Link to='/contact' className='as-link'>Cities</Link></span>
          </div>
          <div className='as-body'>
            <span>Acworth, Austell, Kennesaw, Marietta, Mableton, Powder Springs, Roswell, Smyrna, Vinings, Woodstock</span>
          </div>
        </div>
      </div>
    )
  }
}