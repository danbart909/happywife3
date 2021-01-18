import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default class Services extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Our Services</title>
          <meta name="description" content="Happy Wife - Our Services" />
        </Helmet>
        <div className='s-container container'>

          {/* <div className='s-box box'> */}

            <div className='s-title title'>
              <span>Our Services</span>
            </div>

            <div className='s-box'>

              <div className='s-jr-1'>

                <div className='s-intro'>
                  <span>Happy Wife Junk Service can haul just about any kind of junk you can imagine. From large mirrors and windows, to old planks of wood, to bulky mattresses and couches, we've got you covered. The only junk we can't handle are hazardous materials, since they require a specialized form of disposal. We break up our junk disposal options into two main categories: Commercial and Residential junk removal</span>
                </div>

              </div>

              <div className='s-jr-2'>

                <div className='s-commercial'>
                  <div className='s-title'>
                    <Link to='/services/CommercialJunkRemoval'><span>Commercial Junk Removal</span></Link>
                  </div>

                  <div className='s-body'>
                    <span>Construction sites, office spaces, and warehouses can benefit greatly from hiring professional junk haulers to handle their garbage or unwanted materials. It's important for businesses to keep their office spaces looking uncluttered and tidy, and it can be a challenge to clear out rooms full of old computers, monitors, tables, office furnishings, etc. Construction crews will rest easy knowing that their accumulated debris will not overflow into neighboring yards, which could warrant hefty fines.</span>
                  </div>
                </div>

                <div className='s-residential'>
                  <div className='s-title'>
                    <Link to='/services/ResidentialJunkRemoval'><span>Residential Junk Removal</span></Link>
                  </div>

                  <div className='s-body'>
                    <span>We do our best to keep our homes clean and tidy, but it's common for junk to accumulate in the storage spaces of our homes. Old exercise equipment, not quite broken tv sets from the 80s, boxes of clothes that we've given up finding an occasion to wear; it's in these moments that our junk removal crew will be there to give you a hand. The experts at Happy Wife Junk Removal are always sure to treat your home with respect and will never track dirt into your living spaces.</span>
                  </div>
                </div>

              </div>

              <div className='s-jr-3'>

                <div className='s-x-title'>
                  <span>Here is a brief list of things we take:</span>
                </div>

                <div className='s-x-list'>
                  <Link to='/services/ApplianceRemoval'><span>Appliance Removal</span></Link>
                  <Link to='/services/BasementCleanOut'><span>Basement Clean Out</span></Link>
                  <Link to='/services/FurnitureJunkRemoval'><span>Furniture Junk Removal</span></Link>
                  <Link to='/services/GarageCleanOut'><span>Garage Clean Out</span></Link>
                  <Link to='/services/HouseholdJunkRemoval'><span>Household Junk Removal</span></Link>
                  <Link to='/services/MovingJunk'><span>Moving Junk</span></Link>
                  <Link to='/services/OvenRemoval'><span>Oven Removal</span></Link>
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

            </div>

          {/* </div> */}

        </div>
      </>
    )
  }
}






{/* <div id='services-container-jr'>
  <div id='residential' className='service-box'>
    <div id='residential-title' className='service-title'>
      <Link to='/services/ResidentialJunkRemoval'><span>Residential Junk Removal</span></Link>
    </div>
    <div id='residential-list' className='service-list'>
      <Link to='/services/ApplianceRemoval'><span>Appliance Removal</span></Link>
      <Link to='/services/BasementCleanOut'><span>Basement Clean Out</span></Link>
      <Link to='/services/FurnitureJunkRemoval'><span>Furniture Junk Removal</span></Link>
      <Link to='/services/GarageCleanOut'><span>Garage Clean Out</span></Link>
      <Link to='/services/HouseholdJunkRemoval'><span>Household Junk Removal</span></Link>
      <Link to='/services/MovingJunk'><span>Moving Junk</span></Link>
      <Link to='/services/OvenRemoval'><span>Oven Removal</span></Link>
      <Link to='/services/YardDebrisRemoval'><span>Yard Debris Removal</span></Link>
    </div>
  </div>
  <div id='commercial' className='service-box'>
    <div id='commercial-title' className='service-title'>
      <Link to='/services/CommercialJunkRemoval'><span>Commercial Junk Removal</span></Link>
    </div>
    <div id='commercial-list' className='service-list'>
      <Link to='/services/ApartmentCleanOut'><span>Apartment Clean Out</span></Link>
      <Link to='/services/OfficeJunkRemoval'><span>Office Junk Removal</span></Link>
      <Link to='/services/StorageUnitCleanOut'><span>Storage Unit Clean Out</span></Link>
      <Link to='/services/WarehouseCleanOut'><span>Warehouse Clean Out</span></Link>
    </div>
  </div>
  <div id='furniture' className='service-box'>
    <div id='furniture-title' className='service-title'>
      <Link to='/services/FurnitureJunkRemoval'><span>Furniture Junk Removal</span></Link>
    </div>
    <div id='furniture-list' className='service-list'>
      <Link to='/services/CouchRemoval'><span>Couch Removal</span></Link>
      <Link to='/services/DresserRemoval'><span>Dresser Removal</span></Link>
      <Link to='/services/EntertainmentCenterRemoval'><span>Entertainment Center Removal</span></Link>
      <Link to='/services/TableAndChairsRemoval'><span>Table and Chairs Removal</span></Link>
      <Link to='/services/TVRemoval'><span>TV Removal</span></Link>
    </div>
  </div>
</div> */}