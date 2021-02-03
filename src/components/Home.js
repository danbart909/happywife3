import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
// import AboutUs from './AboutUs'
// import MidBanner from './MidBanner'
import Virtues from './Virtues'
import ServicesStub from './ServicesStub'
import AreasStub from './AreasStub'
import PricingStub from './PricingStub'
import ContactStub from './ContactStub'

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     trailerimg: trailer1
  //   }
  // }

  // setTrailer1 = () => {
  //   this.setState({ trailerimg: trailer1 })
  // }

  // setTrailer2 = () => {
  //   this.setState({ trailerimg: trailer2 })
  // }

  // setTrailer3 = () => {
  //   this.setState({ trailerimg: trailer3 })
  // }

  render() {

    return (
      <div className='home-container'>
        <div className='home-top'>
          <div className='home-first'>
            <div className='home-img-container'>
              <img
                src={logo}
                className='home-first-logo'
                alt='company logo'
              />
            </div>
            
            {/* <div className='home-img-container-2'>
              <img
                src='https://i.imgur.com/usX1Piu.png'
                className='home-first-logo-2'
                alt='company logo'
              />
            </div> */}
            <div className='home-first-2'>
              <span>A Customer Service-Driven Junk Removal Company</span>
            </div>
            <Link to='/contact' className='home-first-3'>
              <span>Contact Us to Get a Quote</span>
            </Link>
          </div>
        </div>
        <div className='home-mid'>
          <div className='home-2'>
            <Link
              to='/services'
              className='home-2-button-1 home-2-button'
            >
              <span>WHAT WE TAKE</span>
            </Link>
            <Link
              to='/areas'
              className='home-2-button-2 home-2-button'
            >
              <span>OUR AREAS</span>
            </Link>
            <Link
              to='/pricing'
              className='home-2-button-3 home-2-button'
            >
              <span>SEE PRICING</span>
            </Link>
            <Link
              to='/contact'
              className='home-2-button-4 home-2-button'
              // onMouseEnter={() => this.setTrailer3()}
              // onMouseLeave={() => this.setTrailer1()}
            >
              <span>GET A QUOTE</span>
            </Link>
          </div>
          {/* <div className='home-fourth'>
            <div className='home-fourth-img' style={{backgroundImage: `url(${this.state.trailerimg})`}}>

            </div>
          </div> */}
        </div>
        <div className='home-bot'>
          <ServicesStub />
          <AreasStub />
          <PricingStub />
          <ContactStub />
          <Virtues />
        </div>
      </div>
    )
  }
}