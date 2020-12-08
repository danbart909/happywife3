import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import MidBanner from './MidBanner'
import Virtues from './Virtues'
import $ from 'jquery'

export default class Home extends Component {
  render() {

    $(document).ready(function () {
    
      $('#home-third-button-1').hover(function() {
        $('#home-fourth-img').css('background-image', 'url(https://i.imgur.com/SRaiiE6.jpg)')
      })

      $('#home-third-button-2').hover(function() {
        $('#home-fourth-img').css('background-image', 'url(https://i.imgur.com/jvtvG2G.jpg)')
      })

    })

    return (
      <div id='home-container'>
        <div id='home-top'>
          <div id='home-first'>
            <div id='home-img-container'>
              <img
                src='https://i.imgur.com/usX1Piu.png'
                id='home-first-logo'
                alt='company logo'
              />
            </div>
            {/* <div id='home-img-container-2'>
              <img
                src='https://i.imgur.com/usX1Piu.png'
                id='home-first-logo-2'
                alt='company logo'
              />
            </div> */}
          </div>
          <div id='home-second'>
            <span>A Customer Service Driven Junk Removal Company</span>
          </div>
        </div>
        <div id='home-mid'>
          <div id='home-third'>
            <Link to='/pricing' id='home-third-button-1'>
              SEE PRICING
            </Link>
            <Link to='/booknow' id='home-third-button-2'>
              GET A QUOTE
            </Link>
          </div>
          <div id='home-fourth'>
            <div id='home-fourth-img'>
            </div>
          </div>
        </div>
        <div id='home-bot'>
          <AboutUs />
          <Virtues />
        </div>
      </div>
    )
  }
}