import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class PowderSprings extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Powder Springs</title>
          <meta name="description" content="Happy Wife - Powder Springs" />
        </Helmet>
        <div className='sa-container powdersprings-container'>
          <div className='sa-content powdersprings-content'>
            <div className='sa-header powdersprings-header'>
              <span>Powder Springs</span>
            </div>
            <div className='sa-text powdersprings-text'>
              <span>Happy Wife Junk Service is your expert provider of local junk removal services in Powder Springs Georgia. We provide high-quality services to homes and businesses in the area. We make every effort to donate, recycle, or re-purpose our clients' unwanted items so that they do not end up in a landfill. Contact us at 770-873-0803 complete the contact form to schedule your free junk removal estimate today!</span>
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