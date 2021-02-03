import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


export default class Sitemap extends Component {
  render() {
    return (
      <div className='sm-container container'>
        <div className='sm-header'>Sitemap</div>
        <div className='sm-body'>
          <ul>
            <li>
              <Link to='/'>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/services'>
                <span>Our Services</span>
              </Link>
            </li>
            <li>
              <Link to='/areas'>
                <span>Our Service Areas</span>
              </Link>
              <ul className='ulchild'>
                <li>
                  <Link to='/areas/Acworth'>
                    <span>Acworth</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/Austell'>
                    <span>Austell</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/Kennesaw'>
                    <span>Kennesaw</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/Marietta'>
                    <span>Marietta</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/Mableton'>
                    <span>Mableton</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/PowderSprings'>
                    <span>Powder Springs</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/Roswell'>
                    <span>Roswell</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/Smyrna'>
                    <span>Smyrna</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/Vinings'>
                    <span>Vinings</span>
                  </Link>
                </li>
                <li>
                  <Link to='/areas/Woodstock'>
                    <span>Woodstock</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/pricing'>
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link to='/contactus'>
                <span>Contact Us</span>
              </Link>
            </li>
            <li>
              <span>Footer</span>
              <ul className='ulchild'>
                <li>
                  <Link to='/termsofservice'>
                    <span>Terms of Service</span>
                  </Link>
                </li>
                <li>
                  <Link to='/privacypolicy'>
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to='/sitemap'>
                    <span>Sitemap</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
