import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default class Acworth extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Acworth</title>
          <meta name="description" content="Happy Wife - Acworth" />
        </Helmet>
        <div className='sa-container acworth-container'>
          <div className='sa-content acworth-content'>
            <div className='sa-header acworth-header'>
              <span>Acworth</span>
            </div>
            <div className='sa-text acworth-text'>
              <span>Happy Wife Junk Service is your expert provider of local junk removal services in Acworth, GA. We provide high-quality services to homes and businesses in the area. We make every effort to donate, recycle, or re-purpose our clients' unwanted items so that they do not end up in a landfill. Contact us at 770-873-0803 or complete the <Link to='/contact' className='sa-link'><span>contact form</span></Link> to schedule your free junk removal estimate today!</span>
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