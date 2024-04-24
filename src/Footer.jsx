import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='foo_conatiner1'>
          <p>LOGO</p>
          <p>Copyright @2023 developed by team CareNavigator all rights reserved</p>
          <p>Us on Different Platforms</p>
        </div>
        <div className='quick_links'>
            <p>Quick Links</p>
            <p>Home</p>
            <p>Services</p>
            <p>Find a Donor</p>
            <p>Contact</p>
        </div>
        <div className='feature'>
            {/* <p>I Want to</p> */}
            <p>Find a Donor</p>
        </div>
        {/* <div className='support'>
             <p>Support</p>
              <p>Donate</p>
              <p>Contact Us</p>
        </div> */}
    </div>
  )
}

export default Footer