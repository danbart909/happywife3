import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class Mableton extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Mableton</title>
          <meta name="description" content="Happy Wife - Mableton" />
        </Helmet>
        <div className='sa-container mableton-container'>
          <div className='sa-content mableton-content'>
            <div className='sa-header mableton-header'>
              <span>Mableton</span>
            </div>
            <div className='sa-text mableton-text'>
              <span>We can you help you get rid of your old junk. We offer reliable Mableton junk removal and disposal services that help you remove the stress while saving time and money! Our professional junk haulers will remove and dispose of your unwanted bulky junk items by responsibly recycling or donating the items for you. When you need help decluttering used junk or have that broken appliance hauled away, Happy Wife offers guaranteed, upfront pricing for on-demand junk removal Mableton, Georgia. Save time and money when you book full service Mableton junk removal and professional haul away services.</span>
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