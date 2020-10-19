import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Sticky } from 'semantic-ui-react'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import Home from './components/Home'
import Areas from './components/Areas'
import Services from './components/Services'
import Pricing from './components/Pricing'
import BookNow from './components/BookNow'
import Footer from './components/Footer'
import FooterTabs from './components/FooterTabs'
import ScrollToTop from './modules/ScrollToTop'
import Acworth from './pages/areas/Acworth'
import Austell from './pages/areas/Austell'
import Kennesaw from './pages/areas/Kennesaw'
import Mableton from './pages/areas/Mableton'
import Marietta from './pages/areas/Marietta'
import PowderSprings from './pages/areas/PowderSprings'
import Roswell from './pages/areas/Roswell'
import Smyrna from './pages/areas/Smyrna'
import Vinings from './pages/areas/Vinings'
import Woodstock from './pages/areas/Woodstock'
import ResidentialJunkRemoval from './pages/services/ResidentialJunkRemoval'
import ApplianceRemoval from './pages/services/ApplianceRemoval'
import AtticJunkRemoval from './pages/services/AtticJunkRemoval'
import BasementCleanOut from './pages/services/BasementCleanOut'
import BulkTrashPickUp from './pages/services/BulkTrashPickUp'
import FreezerRemoval from './pages/services/FreezerRemoval'
import GarageCleanOut from './pages/services/GarageCleanOut'
import GrillRemoval from './pages/services/GrillRemoval'
import HouseholdJunkRemoval from './pages/services/HouseholdJunkRemoval'
import MattressRemoval from './pages/services/MattressRemoval'
import MovingJunk from './pages/services/MovingJunk'
import OvenRemoval from './pages/services/OvenRemoval'
import RefrigeratorRemoval from './pages/services/RefrigeratorRemoval'
import StoveRemoval from './pages/services/StoveRemoval'
import WasherAndDryerRemoval from './pages/services/WasherAndDryerRemoval'
import YardDebrisRemoval from './pages/services/YardDebrisRemoval'
import CommercialJunkRemoval from './pages/services/CommercialJunkRemoval'
import ApartmentCleanOut from './pages/services/ApartmentCleanOut'
import CarpetRemoval from './pages/services/CarpetRemoval'
import ForeclosureJunkRemoval from './pages/services/ForeclosureJunkRemoval'
import OfficeJunkRemoval from './pages/services/OfficeJunkRemoval'
import StorageUnitCleanOut from './pages/services/StorageUnitCleanOut'
import WarehouseCleanOut from './pages/services/WarehouseCleanOut'
import FurnitureJunkRemoval from './pages/services/FurnitureJunkRemoval'
import CouchRemoval from './pages/services/CouchRemoval'
import DresserRemoval from './pages/services/DresserRemoval'
import EWasteRemoval from './pages/services/EWasteRemoval'
import EntertainmentCenterRemoval from './pages/services/EntertainmentCenterRemoval'
import LoveSeatRemoval from './pages/services/LoveSeatRemoval'
import ReclinerRemoval from './pages/services/ReclinerRemoval'
import TableAndChairsRemoval from './pages/services/TableAndChairsRemoval'
import TVRemoval from './pages/services/TVRemoval'
import $ from 'jquery'

export default class App extends Component {
  render() {

    $(document).ready(function() {
      document.getElementsByTagName("html")[0].style.visibility = "visible";
    });

    return (
      <section id='overlord' className='flex'>
        <div id='nav' className='flex'>
          <TopNav />
          {/* <Sticky> */}
            <BottomNav />
          {/* </Sticky> */}
        </div>
        <div id='body' className='flex'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/areas/Acworth' component={Acworth} />
            <Route path='/areas/Austell' component={Austell} />
            <Route path='/areas/Kennesaw' component={Kennesaw} />
            <Route path='/areas/Mableton' component={Mableton} />
            <Route path='/areas/Marietta' component={Marietta} />
            <Route path='/areas/PowderSprings' component={PowderSprings} />
            <Route path='/areas/Roswell' component={Roswell} />
            <Route path='/areas/Smyrna' component={Smyrna} />
            <Route path='/areas/Vinings' component={Vinings} />
            <Route path='/areas/Woodstock' component={Woodstock} />
            <Route path='/services/ResidentialJunkRemoval' component={ResidentialJunkRemoval} />
            <Route path='/services/ApplianceRemoval' component={ApplianceRemoval} />
            <Route path='/services/AtticJunkRemoval' component={AtticJunkRemoval} />
            <Route path='/services/BasementCleanOut' component={BasementCleanOut} />
            <Route path='/services/BulkTrashPickUp' component={BulkTrashPickUp} />
            <Route path='/services/FreezerRemoval' component={FreezerRemoval} />
            <Route path='/services/GarageCleanOut' component={GarageCleanOut} />
            <Route path='/services/GrillRemoval' component={GrillRemoval} />
            <Route path='/services/HouseholdJunkRemoval' component={HouseholdJunkRemoval} />
            <Route path='/services/MattressRemoval' component={MattressRemoval} />
            <Route path='/services/MovingJunk' component={MovingJunk} />
            <Route path='/services/OvenRemoval' component={OvenRemoval} />
            <Route path='/services/RefrigeratorRemoval' component={RefrigeratorRemoval} />
            <Route path='/services/StoveRemoval' component={StoveRemoval} />
            <Route path='/services/WasherAndDryerRemoval' component={WasherAndDryerRemoval} />
            <Route path='/services/YardDebrisRemoval' component={YardDebrisRemoval} />
            <Route path='/services/CommercialJunkRemoval' component={CommercialJunkRemoval} />
            <Route path='/services/ApartmentCleanOut' component={ApartmentCleanOut} />
            <Route path='/services/CarpetRemoval' component={CarpetRemoval} />
            <Route path='/services/ForeclosureJunkRemoval' component={ForeclosureJunkRemoval} />
            <Route path='/services/OfficeJunkRemoval' component={OfficeJunkRemoval} />
            <Route path='/services/StorageUnitCleanOut' component={StorageUnitCleanOut} />
            <Route path='/services/WarehouseCleanOut' component={WarehouseCleanOut} />
            <Route path='/services/FurnitureJunkRemoval' component={FurnitureJunkRemoval} />
            <Route path='/services/CouchRemoval' component={CouchRemoval} />
            <Route path='/services/DresserRemoval' component={DresserRemoval} />
            <Route path='/services/EWasteRemoval' component={EWasteRemoval} />
            <Route path='/services/EntertainmentCenterRemoval' component={EntertainmentCenterRemoval} />
            <Route path='/services/LoveSeatRemoval' component={LoveSeatRemoval} />
            <Route path='/services/ReclinerRemoval' component={ReclinerRemoval} />
            <Route path='/services/TableAndChairsRemoval' component={TableAndChairsRemoval} />
            <Route path='/services/TVRemoval' component={TVRemoval} />
            <Route path='/areas' component={Areas} />
            <Route path='/services' component={Services} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/booknow' component={BookNow} />
          </Switch>
        </div>
        <div id='footertabs' className='flex'>
          <FooterTabs />
        </div>
        <div id='footer' className='flex'>
          <Footer />
        </div>
        <ScrollToTop />
      </section>
    )
  }
}