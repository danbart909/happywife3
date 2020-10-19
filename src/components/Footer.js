import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div id='f-container'>

        <div id='f-info' className='f-box'>

          <div id='f-info-title' className='f-titles'>
            <span>Our Info</span>
          </div>
          <div id='f-info-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-info-content' className='f-content'>
            <div id='f-info-1' className='f-info-box'>
              <span>Pretty Good Inc, DBA</span>
              <span>Happy Wife Junk Services</span>
            </div>
            <div id='f-info-2' className='f-info-box'>
              <span>1820 Tree Top Way</span>
              <span>Marietta, GA 30062</span>
            </div>
            <div id='f-info-3' className='f-info-box'>
              <span>dhbartlett12@gmail.com</span>
              <span>770.873.0803</span>
            </div>
          </div>

        </div>

        <div id='f-services' className='f-box'>

          <div id='f-services-title' className='f-titles'>
            <span>Our Services</span>
          </div>
          <div id='f-services-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-services-content' className='f-content'>
            <Link to='/services/ApplianceRemoval'><span>Appliance Removal</span></Link>
            <Link to='/services/BasementCleanOut'><span>Basement Clean Out</span></Link>
            <Link to='/services/GarageCleanOut'><span>Garage Clean Out</span></Link>
            <Link to='/services/HouseholdJunkRemoval'><span>Household Junk Removal</span></Link>
            <Link to='/services/MovingJunk'><span>Moving Junk</span></Link>
            {/* <Link to='/services/OvenRemoval'><span>Oven Removal</span></Link> */}
            <Link to='/services/YardDebrisRemoval'><span>Yard Debris Removal</span></Link>
            <Link to='/services/ApartmentCleanOut'><span>Apartment Clean Out</span></Link>
            <Link to='/services/OfficeJunkRemoval'><span>Office Junk Removal</span></Link>
            <Link to='/services/StorageUnitCleanOut'><span>Storage Unit Clean Out</span></Link>
            <Link to='/services/WarehouseCleanOut'><span>Warehouse Clean Out</span></Link>
            <Link to='/services/CouchRemoval'><span>Couch Removal</span></Link>
            <Link to='/services/DresserRemoval'><span>Dresser Removal</span></Link>
            <Link to='/services/EntertainmentCenterRemoval'><span>Entertainment Center Removal</span></Link>
            <Link to='/services/TableAndChairsRemoval'><span>Table and Chairs Removal</span></Link>
            <Link to='/services/TVRemoval'><span>TV Removal</span></Link>
          </div>

        </div>

        <div id='f-zip' className='f-box'>

          <div id='f-zip-title' className='f-titles'>
            <span>Our Zip Codes</span>
          </div>
          <div id='f-zip-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-zip-content' className='f-content'>
            <span>30060</span>
            <span>30062</span>
            <span>30064</span>
            <span>30066</span>
            <span>30067</span>
            <span>30068</span>
            <span>30080</span>
            <span>30082</span>
            <span>30106</span>
            <span>30126</span>
            <span>30127</span>
          </div>

        </div>

        <div id='f-areas' className='f-box'>

          <div id='f-areas-title' className='f-titles'>
            <span>Our Areas</span>
          </div>
          <div id='f-areas-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-areas-content' className='f-content'>
            <span>Cobb County</span>
            <span>East Cobb</span>
            <span>North Cobb</span>
            <span>South Cobb</span>
            <span>West Cobb</span>
          </div>

        </div>

        <div id='f-cities' className='f-box'>

          <div id='f-cities-title' className='f-titles'>
            <span>Our Cities</span>
          </div>
          <div id='f-cities-hr' className='f-hr'>
            <hr />
          </div>
          <div id='f-cities-content' className='f-content'>
            <Link to='/areas/Acworth'><span>Acworth</span></Link>
            <Link to='/areas/Austell'><span>Austell</span></Link>
            <Link to='/areas/Kennesaw'><span>Kennesaw</span></Link>
            <Link to='/areas/Marietta'><span>Marietta</span></Link>
            <Link to='/areas/Mableton'><span>Mableton</span></Link>
            <Link to='/areas/PowderSprings'><span>Powder Springs</span></Link>
            <Link to='/areas/Roswell'><span>Roswell</span></Link>
            <Link to='/areas/Smyrna'><span>Smyrna</span></Link>
            <Link to='/areas/Vinings'><span>Vinings</span></Link>
            <Link to='/areas/Woodstock'><span>Woodstock</span></Link>
          </div>

        </div>

      </div>
    )
  }
}
