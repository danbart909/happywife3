import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default class Services extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Our Services</title>
          <meta name="description" content="Happy Wife - Our Services" />
        </Helmet>
        <div className='s-container container'>

            <div className='s-title title'>
              <span>Our Services</span>
            </div>

            <div className='s-body'>

              <div className='s-jr-1'>
                <div className='s-1-1'>
                  <span>Happy Wife Junk Service can haul just about any kind of junk you can imagine. From large mirrors and windows, to old planks of wood, to bulky mattresses and couches, we've got you covered. It's actually much easier to list the things we<span className='s-red'>don't</span>take.</span>
                </div>
                <div className='s-1-2'>
                  <div className='s-1-2-top'>
                    <div className='s12left s12left1'></div>
                    <div className='s12right'>
                      <span>We don't have the equipment or liscences to deal with hazardous materials, such as explosive or radioactive material. If you have C-4 or uranium, we unfortunately can't help with that.</span>
                    </div>
                  </div>

                  <div className='s-1-2-mid'>
                    <div className='s12left s12left2'></div>
                    <div className='s12right'>
                      <span>We prefer not to work with paint or paint cans, as the dump charges a high fee to dispose of them. If you need us to dispose of paint, an additional fee will need to be discussed.</span>
                    </div>
                  </div>

                  <div className='s-1-2-bot'>
                    <div className='s12left s12left3'></div>
                    <div className='s12right'>
                      <span>We can remove brush and logs, but if you have large logs or tree trunks to get rid of, a tree removal service might be more appropriate, as we work by hand. We can manage deckwood and other chunks of structures - as long as we can break it down with a sledgehammer.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='s-jr-2'>
                <div className='s-2-1'>
                  <span>We will consider any job if it meets the above guidelines, but if you still aren't sure if our services are right for you, then go ahead and <Link className='cu' to='/contactus'><span>give us a call</span></Link>! If you're the type who would just rather us list what we <span className='s-green'>do</span> take, then perhaps the (by no means complete) list below can help you.</span>
                </div>

                <div className='s-2-2'>
                  <span>Appliances, Carpets, Couches, Decks, Dressers, Dryers, Freezers, Furniture, Grills, Mattresses, Ovens, Recliners, Refrigerators, Stoves, TVs, Boxes, Knick-knacks, Books, Tools, Tires, Rubbish, Paper, Cardboard, Floorboards, Plasterboard, Frames, Windows, Shingles, Corrugated Iron, Washers, Air Conditioners, Dishwashers, Trash Compactors, Refrigerators, Freezers, Lawnmowers, Stoves, Microwaves, Water Heaters, Washing Machines, Dryers, Mattresses, Hot Tubs</span>
                </div>
              </div>

              {/* <div className='s-jr-2'>
                <div className='s-c'>
                  <div className='s-c-title'>
                    <Link to='/services/CommercialJunkRemoval'><span>Commercial Junk Removal</span></Link>
                  </div>

                  <div className='s-c-body'>
                    <span>Construction sites, office spaces, and warehouses can benefit greatly from hiring professional junk haulers to handle their garbage or unwanted materials. It's important for businesses to keep their office spaces looking uncluttered and tidy, and it can be a challenge to clear out rooms full of old computers, monitors, tables, office furnishings, etc. Construction crews will rest easy knowing that their accumulated debris will not overflow into neighboring yards, which could warrant hefty fines.</span>
                  </div>
                </div>

                <div className='s-r'>
                  <div className='s-r-title'>
                    <Link to='/services/ResidentialJunkRemoval'><span>Residential Junk Removal</span></Link>
                  </div>

                  <div className='s-r-body'>
                    <span>We do our best to keep our homes clean and tidy, but it's common for junk to accumulate in the storage spaces of our homes. Old exercise equipment, not quite broken tv sets from the 80s, boxes of clothes that we've given up finding an occasion to wear; it's in these moments that our junk removal crew will be there to give you a hand. The experts at Happy Wife Junk Removal are always sure to treat your home with respect and will never track dirt into your living spaces.</span>
                  </div>
                </div>
              </div>

              <div className='s-jr-3'>
                <div className='s-3-title'>
                  <span>Here is a brief list of things we take:</span>
                </div>

                <div className='s-3-list'>
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
              </div> */}

            </div>

        </div>
      </>
    )
  }
}