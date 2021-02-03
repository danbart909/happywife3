import React, { Component } from 'react'

export default class Virtues extends Component {
  render() {
    return (
      <>
        <div className='v-container'>

          <div className='v-header'>
            <div className='v-header-1'>
              <span>Our Virtues</span>
            </div>
          </div>

          <div className='v-body'>

            <div className='v'>
              <div className='v-title'>
                <div className='v-title-1'>
                  <span>Open and Honest Pricing</span>
                  <i className="fas fa-balance-scale"/>
                </div>
              </div>
              <div className='v-text'>
                <div className='v-text-1'>
                  <span>We strive to be as straight forward and open as possible. You can trust us to charge only for as much as you use.</span>
                  <span>"You shall have just balances, just weights, a just ephah, and a just hin: I am the LORD your God, who brought you out of the land of Egypt." Leviticus 19:36</span>
                </div>
              </div>
            </div>

            <div className='v'>
              <div className='v-title'>
                <div className='v-title-1'>
                  <span>Cleanliness</span>
                  <i className="fas fa-hand-sparkles"/>
                </div>
              </div>
              <div className='v-text'>
                <div className='v-text-1'>
                  <span>We change into clean sneakers before entering your home. Those sneakers don't touch anything but hardwood, carpet, and concrete.</span>
                  <span>"But everything should be done in a fitting and orderly way." 1 Corinthians 14:40</span>
                </div>
              </div>
            </div>

            <div className='v'>
              <div className='v-title'>
                <div className='v-title-1'>
                  <span>Trustworthy Service</span>
                  <i className="fas fa-handshake"/>
                </div>
              </div>
              <div className='v-text'>
                <div className='v-text-1'>
                  <span>You deserve honest service, and we are dedicated to bring that to you. When you open your doors to us, we will go above and beyond to ensure you feel safe.</span>
                  <span>"Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward, You are serving the Lord Christ." Colossians 3:23-24</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </>
    )
  }
}
