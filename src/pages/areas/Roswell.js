import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class Roswell extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Roswell</title>
          <meta name="description" content="Happy Wife - Roswell" />
        </Helmet>
        <div className='sa-container roswell-container'>
          <div className='sa-content roswell-content'>
            <div className='sa-header roswell-header'>
              <span>Roswell</span>
            </div>
            <div className='sa-text roswell-text'>
              <span>We offer great removal and hauling rates to the people of Roswell Georgia. We have low prices and timely, professional service. Whether you're a business in Roswell, a non-profit, a home owner, or a renter, we can help you with your Roswell junk removal needs. We do small one-time loads as well as regular recurring service. If your closets are overflowing with junk, your store has regular hauling needs, or you've just completed landscaping and have a ton of yard waste that needs to be trashed, we can help.</span>
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