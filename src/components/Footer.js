import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div id='f-container'>

        <div id='f-info' className='f-box'>

          <div id='f-info-title' className='f-titles'>
            <span>Our Info</span>
          </div>
          {/* <div id='f-info-hr' className='f-hr'>
            <hr />
          </div> */}
          <div id='f-info-content' className='f-content'>
            <div id='f-info-1' className='f-info-box'>
              <span>Pretty Good Inc, DBA</span>
              <span>Happy Wife Junk Services</span>
            </div>
            <div id='f-info-2' className='f-info-box'>
              <span>1820 Tree Top Way</span>
              <span>Marietta, GA 30062</span>
            </div>
            <div id='f-info-3' className='f-info-box'>
              <span>dhbartlett12@gmail.com</span>
              <span>770.873.0803</span>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
