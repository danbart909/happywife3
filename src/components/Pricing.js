import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import emptyglass from '../images/pricing/emptyglass.jpg'
import waterdrop from '../images/pricing/waterdrop.jpg'
import onethird from '../images/pricing/onethird.jpg'
import twothirds from '../images/pricing/twothirds.jpg'
import full from '../images/pricing/full.jpg'

export default class Pricing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: emptyglass
    }
  }

  onethird = () => {
    this.setState({ img: onethird })
  }

  twothirds = () => {
    this.setState({ img: twothirds })
  }

  full = () => {
    this.setState({ img: full })
  }

  waterdrop = () => {
    this.setState({ img: waterdrop })
  }

  render() {

    return (
      <>
        <Helmet>
          <title>Happy Wife - Pricing Information</title>
          <meta name="description" content="Happy Wife - Pricing Information" />
        </Helmet>
        <div className='p-container container' name='pricing'>
          <div className='p-title title'>
            <span>Our Pricing</span>
          </div>
          <div className='p-body'>
            <div className='p-header'><span>One Full Load is almost always large enough to clean out the excess junk from a 5 person, 3200 sq ft house!</span></div>
            <div className='p-mid'>
              <div className='p-prices'>
                <div className='p-price' onMouseEnter={this.full}><span>A Full Load is $350</span></div>
                <div className='p-price' onMouseEnter={this.twothirds}><span>A 2/3 Load is $250</span></div>
                <div className='p-price' onMouseEnter={this.onethird}><span>A 1/3 load is $150</span></div>
                <div className='p-price' onMouseEnter={this.waterdrop}><span>A single item removal is $99</span></div>
              </div>
              <div className='p-img'>
                <div className='p-imgbackground' style={{backgroundImage: `url(${this.state.img})`}}>
                </div>
              </div>
            </div>
            <div className='p-footer'><span>Our flexible pricing ensures you are only charged for what you have!</span></div>
          </div>
        </div>
      </>
    )
  }
}
