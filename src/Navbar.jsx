import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import img from './Image/RBG.png'
function Navbar() {
  return (
    <div className='nav'>
    <img src={img} alt=""  width="100rem"/>
      <div className='options'>
        <Link to='/existing' className='Options_link'> <p>Donor List</p></Link>
      </div>
      <div className='options'>
      <Link to='/addD' className='Options_link'> <p>Add Donor</p></Link>
      </div>
      <div className='btn'>
       <Link to='/'><button className='Logout'>LogOut</button></Link>
      </div>
    </div>
  )
}

export default Navbar