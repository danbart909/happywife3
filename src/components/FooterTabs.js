import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux'

export default class FooterTabs extends Component {
  render() {

    return (
      <Tabs className='footer-tabs'>
        <div id='tab-labels'>
          <TabLink component='div' to='info' className='hvr-trim tab-link'><span>Info</span></TabLink>
          <TabLink component='div' to='services' className='hvr-trim tab-link'><span>Services</span></TabLink>
          <TabLink component='div' to='zip' className='hvr-trim tab-link'><span>Zip</span></TabLink>
          <TabLink component='div' to='areas' className='hvr-trim tab-link'><span>Areas</span></TabLink>
          <TabLink component='div' to='cities' className='hvr-trim tab-link'><span>Cities</span></TabLink>
        </div>

        <TabContent for="info">
          <div id='footer-info-title' className='footer-title'>Our Info</div>
          <div className='footer-tab-content' id='footer-info-body'>
            <div id='footer-info-1' className='footer-info-box'>
              <span>Pretty Good Inc, DBA</span>
              <span>Happy Wife Junk Services</span>
            </div>
            <div id='footer-info-2' className='footer-info-box'>
              <span>1820 Tree Top Way</span>
              <span>Marietta, GA 30062</span>
            </div>
            <div id='footer-info-3' className='footer-info-box'>
              <span>dhbartlett12@gmail.com</span>
              <span>770.873.0803</span>
            </div>
          </div>
        </TabContent>
        <TabContent for="services">
          <div id='footer-services-title' className='footer-title'>Our Services</div>
          <div className='footer-tab-content' id='footer-services-body'>
            <Link to='/services/ApplianceRemoval'><span>Appliance Removal</span></Link>
            <Link to='/services/BasementCleanOut'><span>Basement Clean Out</span></Link>
            <Link to='/services/FurnitureJunkRemoval'><span>Furniture Junk Removal</span></Link>
            <Link to='/services/GarageCleanOut'><span>Garage Clean Out</span></Link>
            <Link to='/services/HouseholdJunkRemoval'><span>Household Junk Removal</span></Link>
            <Link to='/services/MovingJunk'><span>Moving Junk</span></Link>
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
        </TabContent>
        <TabContent for="zip">
          <div id='footer-zip-title' className='footer-title'>Our Zip Codes</div>
          <div className='footer-tab-content' id='footer-zip-body'>
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
        </TabContent>
        <TabContent for="areas">
          <div id='footer-areas-title' className='footer-title'>Our Areas</div>
          <div className='footer-tab-content' id='footer-areas-body'>
            <span>Cobb County</span>
            <span>East Cobb</span>
            <span>North Cobb</span>
            <span>South Cobb</span>
            <span>West Cobb</span>
          </div>
        </TabContent>
        <TabContent for="cities">
          <div id='footer-cities-title' className='footer-title'>Our Cities</div>
          <div className='footer-tab-content' id='footer-cities-body'>
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
        </TabContent>
      </Tabs>
    )
  }
}