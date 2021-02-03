import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class Vinings extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Happy Wife - Vinings</title>
          <meta name="description" content="Happy Wife - Vinings" />
        </Helmet>
        <div className='sa-container vinings-container'>
          <div className='sa-content vinings-content'>
            <div className='sa-header vinings-header'>
              <span>Vinings</span>
            </div>
            <div className='sa-text vinings-text'>
              <span>Whatever you need removed from you Vinings Georgia location, Happy Wife Junk Service can do the job. We can handle any job, whether big or small. From a single piece of furniture to whole a whole giant load, we can do it. Happy Wife Junk Service also donates and recycles anything we can. Call Happy Wife Junk Service today to schedule.</span>
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