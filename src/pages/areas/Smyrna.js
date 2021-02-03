import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class Smyrna extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Smyrna</title>
          <meta name="description" content="Happy Wife - Smyrna" />
        </Helmet>
        <div className='sa-container smyrna-container'>
          <div className='sa-content smyrna-content'>
            <div className='sa-header smyrna-header'>
              <span>Smyrna</span>
            </div>
            <div className='sa-text smyrna-text'>
              <span>Our Smyrna Junk Removal team believes that you deserve to know that everyone who comes into your house should be upright, honest men and women. That’s why we honor your home and your family. We will never track dirt into you house or use profanity around you or your children. Your comfort and ease of mind is our utmost concern. We never provide a service that we wouldn’t be proud of! Whether you need furniture removal, appliance removal, property clean out, or and other form of household junk, Happy Wife junk service is there for you. Our fast, reliable service is a favorite for those looking for Smyrna junk hauling.</span>
            </div>
            <div className='sa-footer'>
              <div className='sa-goback' onClick={() => {this.props.history.goBack()}}>
                <i className="fas fa-arrow-left sa-goback-leftarrow"/>
                <span className='sa-goback-span'>Back</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}