import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Roswell from '../pages/areas/Roswell';
import $ from 'jquery'

export default class Areas extends Component {
  render() {

    $(document).ready(function () {

      $('#areas-title').fadeIn(4000, 'linear')

      $('.acworth').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/q1shkdc.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.austell').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/xxASiH7.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.kennesaw').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/b6RqwPU.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.marietta').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/bNArkD5.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.mableton').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/H55jJQD.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.powdersprings').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/VwCkOY0.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.roswell').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/wC2yC1k.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.smyrna').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/Qb2P44a.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.vinings').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/rahFD2X.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

      $('.woodstock').hover(function() {
        $('#areas-map').css('background-image', 'url(https://i.imgur.com/SECGbkl.jpg)')
      // }, function() {
      //   $('#areas-map').css('background-image', '');
      })

    });

    return (
      <>
        <Helmet>
          <title>Service Areas</title>
          <meta name="description" content="Happy Wife - Service Areas" />
        </Helmet>
        <div id='area-container'>
          <div id='service-areas'>
            <div className='gD-title'>
              <span>Our Service Areas</span>
            </div>

            <div id='areas-body'>

              <div id='areas-list'>
                <Link className='acworth bonkle' to='/areas/Acworth'><span>Acworth</span></Link>
                <Link className='austell bonkle' to='/areas/Austell'><span>Austell</span></Link>
                <Link className='kennesaw bonkle' to='/areas/Kennesaw'><span>Kennesaw</span></Link>
                <Link className='marietta bonkle' to='/areas/Marietta'><span>Marietta</span></Link>
                <Link className='mableton bonkle' to='/areas/Mableton'><span>Mableton</span></Link>
                <Link className='powdersprings bonkle' to='/areas/PowderSprings'><span>Powder Springs</span></Link>
                <Link className='roswell bonkle' to='/areas/Roswell'><span>Roswell</span></Link>
                <Link className='smyrna bonkle' to='/areas/Smyrna'><span>Smyrna</span></Link>
                <Link className='vinings bonkle' to='/areas/Vinings'><span>Vinings</span></Link>
                <Link className='woodstock bonkle' to='/areas/Woodstock'><span>Woodstock</span></Link>
              </div>

              <div id='areas-map-container'>
                <div id='areas-map'></div>
              </div>

            </div>

          </div>
        </div>
      </>
    )
  }
}