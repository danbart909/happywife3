import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class Pricing extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Pricing Information</title>
          <meta name="description" content="Happy Wife - Pricing Information" />
        </Helmet>
        <div id='pricing-container'>
          <div id='pricing'>
            <div className='gD-title'>
              <span>Our Pricing</span>
            </div>
            <div id='pricing-info'>
              <span>A full load is almost always large enough to clean out the excess junk from a 5 person, 3200 sq ft house!</span>
              <span>Our Full load is 350 dollars</span>
              <span>A 2/3 Load is 250 dollars</span>
              <span>A 1/3 load is 150 dollars</span>
              <span>A single item removal cost 99 dollars.</span>
              <span>We only charge you for what you use!</span>
            </div>
          </div>
          {/* <div id='pricing-pic'>

          </div> */}
        </div>
      </>
    )
  }
}
