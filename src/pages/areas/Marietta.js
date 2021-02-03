import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default class Marietta extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Marietta</title>
          <meta name="description" content="Happy Wife - Marietta" />
        </Helmet>
        <div className='sa-container marietta-container'>
          <div className='sa-content marietta-content'>
            <div className='sa-header marietta-header'>
              <span>Marietta</span>
            </div>
            <div className='sa-text marietta-text'>
              <span>Whatever you need removed from your Marietta Georgia location, Happy Wife Junk Service can do the job. We can handle any job, whether big or small. From a single piece of furniture to whole a whole giant load, we can do it. Happy Wife Junk Service also donates and recycles anything we can. <Link to='/contact' className='sa-link'><span>Call Happy Wife Junk Service</span></Link> today to schedule.</span>
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