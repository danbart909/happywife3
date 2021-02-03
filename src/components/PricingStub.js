import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import emptyglass from '../images/pricing/emptyglass.jpg'
import waterdrop from '../images/pricing/waterdrop.jpg'
import onethird from '../images/pricing/onethird.jpg'
import twothirds from '../images/pricing/twothirds.jpg'
import full from '../images/pricing/full.jpg'

export default class PricingStub extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     img: emptyglass
  //   }
  // }

  // onethird = () => {
  //   this.setState({ img: onethird })
  // }

  // twothirds = () => {
  //   this.setState({ img: twothirds })
  // }

  // full = () => {
  //   this.setState({ img: full })
  // }

  // waterdrop = () => {
  //   this.setState({ img: waterdrop })
  // }

  render() {

    return (
      <div className='ps-container scontainer'>
        <div className='ps-body sbody'>
          <div className='ps-left'>
            <span>One Full Load is almost always large enough to clean out the excess junk from a 5 person, 3200 sq ft house!</span>
            <span>Our flexible pricing ensures you are only charged for what you have - prices range from $99 for a single item to $350 for a full load.</span>
            <Link to='/contact' className='ps-link'>
              <span>Learn More About Prices</span>
            </Link>
          </div>
          <div className='ps-right'>
            <div className='ps-img-box'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}