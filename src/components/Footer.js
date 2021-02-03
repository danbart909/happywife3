import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {

  render() {

    let d = new Date();
    let year = d.getFullYear();

    return (
      <div className='f-container'>

          <div className='f-top'>
            <div className='f1'>
    
              <div className='f-1 f-1-1'>
                <span>About Happy Wife</span>
              </div>
    
              <div className='f-1 f-1-2'>
                <span>A family-owned and operated company, Happy Wife Junk Service was started by a father and son duo, and is a consumer service driven junk removal company based in Marietta, Georgia. We believe passionately that only trustworthy men and women belong in your home. We strive to hire the best and to bring you the best service. At Happy Wife, we pride ourselves on taking care of you.</span>
                {/* <span>You deserve quality service from anybody you invite into your home. Whether it be landscaping, plumbing, or contractors, you need honest, upstanding men and women. With Happy Wife, junk removal is one less thing you need to worry about, giving you peace of mind. Our junk removal experts will honor your home like you do. There are no jobs too big or too small. There are no loads we won't take. Our crews will always strive to serve you, no matter the job. We can do anything, from furniture removal, refrigerator removal, contractor debris clean up, and storage unit clean out, to estate sale clean up and commercial junk removal. We will never say no to you.</span> */}
              </div>
    
              <div className='f-1 f-1-3'>
                <Link to='/termsofservice' className='f-tos'>Terms of Service</Link>
                <Link to='/privacypolicy' className='f-pp'>Privacy Policy</Link>
                <Link to='/sitemap' className='f-sm'>Sitemap</Link>
              </div>
    
            </div>
    
            <div className='f2'>
    
              <div className='f-2 f-2-1'>
                <span>Contact Information</span>
              </div>
    
              <div className='f-2 f-2-2'>
                <span className='f-2-title'>SOCIAL MEDIA</span>
                <div className='f-socialmedia'>
                  <div className='f-google'>
                    <span>Google</span>
                    <a href='https://g.page/HappyWife?gm' target='_blank'><i className='fab fa-google' id='google-button' role='link'/></a>
                  </div>
                  <div className='f-facebook'>
                    <span>Facebook</span>
                    <a href='http://www.facebook.com/happywifejunkservice' target='_blank'><i className='fab fa-facebook' id='facebook-button' role='link'/></a>
                  </div>
                </div>
              </div>
    
              <div className='f-2 f-2-3'>
                <span className='f-2-title'>PHONE</span>
                <span>770.873.0803</span>
              </div>
    
              <div className='f-2 f-2-4'>
                <span className='f-2-title'>EMAIL</span>
                <div className='f-email'>
                  <span>dhbartlett12</span>
                  <span>@gmail.com</span>
                </div>
              </div>
    
              <div className='f-2 f-2-5'>
                <span className='f-2-title f-a1'>ADDRESS</span>
                <div className='f-address'>
                  <span>1820 Tree Top Way</span>
                  <span>Marietta, GA 30062</span>
                </div>
              </div>
  
              <div className='f-2 f-2-6'>
              <Link
                  to='/contact'
                  className='f-contact'
                >
                  <span>Contact Page</span>
                </Link>
              </div>
              
            </div>
          </div>

          <div className='f-bot'>
            <div className='f-3'>
              <div className='f-cr'>
                <span>Copyright © {year}</span>
                <span>Pretty Good Inc., DBA</span>
                <span>Happy Wife Junk Service</span>
              </div>
            </div>
          </div>

      </div>
    )
  }
}






// <div className='f2'>
  
//   <div className='f-2 f-2-1'>
//     <Link
//       to='/contactus'
//       className='f-contact'
//     >
//       <span>Contact Information</span>
//     </Link>
//   </div>


//   <div className='f-2 f-2-2'>
//     <div className='f-left f-2-2-left'>
//       <span>SOCIAL MEDIA</span>
//     </div>
//     <div className='f-right f-2-2-right'>
//       <div className='f-google'>
//         <span>Google</span>
//         <a href='https://g.page/HappyWife?gm' target='_blank'><i className='fab fa-google' id='google-button' role='link'/></a>
//       </div>
//       <div className='f-facebook'>
//         <span>Facebook</span>
//         <a href='http://www.facebook.com/happywifejunkservice' target='_blank'><i className='fab fa-facebook' id='facebook-button' role='link'/></a>
//       </div>
//     </div>
//   </div>

//   <div className='f-2 f-2-3'>
//     <div className='f-left f-2-3-left'>
//       <span>PHONE</span>
//     </div>
//     <div className='f-right f-2-3-right'>
//       <span>770.873.0803</span>
//     </div>
//   </div>

//   <div className='f-2 f-2-4'>
//     <div className='f-left f-2-4-left'>
//       <span>EMAIL</span>
//     </div>
//     <div className='f-right f-2-4-right'>
//       <span>dhbartlett12@gmail.com</span>
//     </div>
//   </div>

//   <div className='f-2 f-2-5'>
//     <div className='f-left f-2-5-left'>
//       <span>ADDRESS</span>
//     </div>
//     <div className='f-right f-2-5-right'>
//       <span>1820 Tree Top Way</span>
//       <span>Marietta, GA 30062</span>
//     </div>
//   </div>
  
// </div>