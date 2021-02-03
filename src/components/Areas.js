import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Acworth from '../images/areas/Acworth.jpg'
import Austell from '../images/areas/Austell.jpg'
import Kennesaw from '../images/areas/Kennesaw.jpg'
import Marietta from '../images/areas/Marietta.jpg'
import Mableton from '../images/areas/Mableton.jpg'
import PowderSprings from '../images/areas/PowderSprings.jpg'
import Roswell from '../images/areas/Roswell.jpg'
import Smyrna from '../images/areas/Smyrna.jpg'
import Vinings from '../images/areas/Vinings.jpg'
import Woodstock from '../images/areas/Woodstock.jpg'
import logo from '../images/logo.png'

export default class Areas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: logo
    }
  }

  acworth = () => {
    this.setState({ img: Acworth })
  }

  austell = () => {
    this.setState({ img: Austell })
  }

  kennesaw = () => {
    this.setState({ img: Kennesaw })
  }

  marietta = () => {
    this.setState({ img: Marietta })
  }

  mableton = () => {
    this.setState({ img: Mableton })
  }

  powderSprings = () => {
    this.setState({ img: PowderSprings })
  }
  
  roswell = () => {
    this.setState({ img: Roswell })
  }

  smyrna = () => {
    this.setState({ img: Smyrna })
  }

  vinings = () => {
    this.setState({ img: Vinings })
  }

  woodstock = () => {
    this.setState({ img: Woodstock })
  }

  placeholder = () => {
    this.setState({ img: logo })
  }

  render() {

    return (
      <>
        <Helmet>
          <title>Service Areas</title>
          <meta name="description" content="Happy Wife - Service Areas" />
        </Helmet>
        <div className='a-container container'>

            <div className='a-title title'>
              <span>Our Service Areas</span>
            </div>

            <div className='a-body'>

              <div className='a-list'>

                <Link
                  className='acworth map'
                  to='/areas/Acworth'
                  onMouseEnter={() => this.acworth()}
                  // onMouseLeave={() => this.placeholder()}
                >
                  <span>Acworth</span>
                </Link>

                <Link
                  className='austell map'
                  to='/areas/Austell'
                  onMouseEnter={() => this.austell()}
                >
                  <span>Austell</span>
                </Link>

                <Link
                  className='kennesaw map'
                  to='/areas/Kennesaw'
                  onMouseEnter={() => this.kennesaw()}
                >
                  <span>Kennesaw</span>
                </Link>

                <Link
                  className='marietta map'
                  to='/areas/Marietta'
                  onMouseEnter={() => this.marietta()}
                >
                <span>Marietta</span>
                </Link>

                <Link
                  className='mableton map'
                  to='/areas/Mableton'
                  onMouseEnter={() => this.mableton()}
                >
                  <span>Mableton</span>
                </Link>

                <Link
                  className='powdersprings map'
                  to='/areas/PowderSprings'
                  onMouseEnter={() => this.powderSprings()}
                >
                  <span>Powder Springs</span>
                </Link>

                <Link
                  className='roswell map'
                  to='/areas/Roswell'
                  onMouseEnter={() => this.roswell()}
                >
                  <span>Roswell</span>
                </Link>

                <Link
                  className='smyrna map'
                  to='/areas/Smyrna'
                  onMouseEnter={() => this.smyrna()}
                >
                  <span>Smyrna</span>
                </Link>

                <Link
                  className='vinings map'
                  to='/areas/Vinings'
                  onMouseEnter={() => this.vinings()}
                >
                  <span>Vinings</span>
                </Link>

                <Link
                  className='woodstock map'
                  to='/areas/Woodstock'
                  onMouseEnter={() => this.woodstock()}
                >
                  <span>Woodstock</span>
                </Link>

              </div>

              <div className='a-map-container'>
                <div className='a-map' style={{backgroundImage: `url(${this.state.img})`}}></div>
              </div>

            </div>

        </div>
      </>
    )
  }
}