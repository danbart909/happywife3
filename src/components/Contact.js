import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-scroll';

export default class BookNow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      call: false,
      text: false,
      email: false,
      form: false
    }
  }

  toggleCall = () => {
    this.setState({ call: !this.state.call })
  }

  toggleText = () => {
    this.setState({ text: !this.state.text })
  }

  toggleEmail = () => {
    this.setState({ email: !this.state.email })
  }

  toggleForm = () => {
    this.setState({ form: !this.state.form })
  }

  render() {

    return (
      <>
        <Helmet>
          <title>Happy Wife - Schedule Appointment - Contact Form</title>
          <meta name="description" content="Happy Wife - Schedule Appointment - Contact Form" />
        </Helmet>
        <div className='bk-container container'>
          <div className='bk-title title'>
            <span>Contact Us</span>
          </div>
          <div className='bk-header'>
            <div className='bk-header-icons'>
              <a href='tel:770-873-0803'
                onMouseEnter={this.toggleCall}
                onMouseLeave={this.toggleCall}
              >
                <i className="fas fa-phone"/>
                { this.state.call && <span className='bk-call'>CALL</span> }
                <span className='bk-call2'>CALL</span>
              </a>
              <a href='sms:7708730803'
                onMouseEnter={this.toggleText}
                onMouseLeave={this.toggleText}
              >
                <i className="fas fa-comment-dots"/>
                { this.state.text && <span className='bk-text'>TEXT</span> }
                <span className='bk-text2'>TEXT</span>
              </a>
              <a href='mailto:dhbartlett12@gmail.com'
                onMouseEnter={this.toggleEmail}
                onMouseLeave={this.toggleEmail}
              >
                <i className="fas fa-envelope-open-text"/>
                { this.state.email && <span className='bk-email'>EMAIL</span> }
                <span className='bk-email2'>EMAIL</span>
              </a>
              <Link
                to='form'
                smooth={true}
                duration={400}
                onMouseEnter={this.toggleForm}
                onMouseLeave={this.toggleForm}
              >
                <i className="fas fa-keyboard"/>
                { this.state.form && <span className='bk-form'>FORM</span> }
                <span className='bk-form2'>FORM</span>
              </Link>
            </div>
          </div>
          <div className='bk-mid'>
            <div className='bk-mid-phone'>
              <i className="fas fa-phone"/>
              <span>770.873.0802</span>
            </div>
            <div className='bk-mid-email'>
              <i className="fas fa-envelope-open-text"/>
              <div className='bk-mid-email-2'>
                <span>dhbartlett12</span>
                <span>@gmail.com</span>
              </div>
            </div>
          </div>
          <form name='form' className='bk-contact-form' action="https://formspree.io/xwkrwbyl" method="POST">
            <fieldset className='bk-fieldset'>
              <legend className='bk-fieldset-legend'>Contact Form</legend>
              <div className='bk-fieldset-title'><span>Send Us an Email</span></div>
              <input className='bk-nameinput bk-inputs' type='text' name='name' placeholder='Name' required />
              <input className='bk-emailinput bk-inputs' type='text' name='email' placeholder='Email' required />
              <input className='bk-phoneinput bk-inputs' type='text' name='phone' placeholder='Phone' required />
              <textarea className='bk-contentinput bk-inputs' name='content' placeholder="Please include some details such as where the junk is, how much junk there is, and what times work best for you." required defaultValue={""} />
              <input className='bk-submit' type='submit' name='send' value='Send Email' />
            </fieldset>
          </form>
        </div>
      </>
    )
  }
}