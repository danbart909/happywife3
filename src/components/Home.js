import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import trailer1 from '../images/trailer1.jpg'
import trailer2 from '../images/trailer2.jpg'
import trailer3 from '../images/trailer3.jpg'
import logo from '../images/logo.png'
import AboutUs from './AboutUs'
import MidBanner from './MidBanner'
import Virtues from './Virtues'

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

    // $(document).ready(function () {
    
    //   $('#home-third-button-1').hover(function() {
    //     $('#home-fourth-img').css('background-image', 'url(https://i.imgur.com/SRaiiE6.jpg)')
    //   })

    //   $('#home-third-button-2').hover(function() {
    //     $('#home-fourth-img').css('background-image', 'url(https://i.imgur.com/jvtvG2G.jpg)')
    //   })

    // })

    
    // let imgStyle = {
    //   backgroundImage: `url(${this.state.trailerimg})`
    // }

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
          </div>
          <div className='home-second'>
            <div className='home-second-span'>
              <span>A Customer Service-Driven Junk Removal Company</span>
            </div>
          </div>
        </div>
        <div className='home-mid'>
          <div className='home-third'>
            <Link
              to='/services'
              className='home-third-button-1'
              // onMouseEnter={() => this.setTrailer2()}
              // onMouseLeave={() => this.setTrailer1()}
            >
              <span>WHAT WE TAKE</span>
            </Link>
            <Link
              to='/areas'
              className='home-third-button-2'
              // onMouseEnter={() => this.setTrailer2()}
              // onMouseLeave={() => this.setTrailer1()}
            >
              <span>OUR AREAS</span>
            </Link>
            <Link
              to='/pricing'
              className='home-third-button-3'
              // onMouseEnter={() => this.setTrailer2()}
              // onMouseLeave={() => this.setTrailer1()}
            >
              <span>SEE PRICING</span>
            </Link>
            <Link
              to='/booknow'
              className='home-third-button-4'
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
          <AboutUs />
          <Virtues />
        </div>
      </div>
    )
  }
}