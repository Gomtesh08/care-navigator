import React from 'react'
import doctor1 from './Image/doctor1.png'
import doctor2 from './Image/doctor2.png'
import doctor3 from './Image/doctor3.png'
import person from './Image/person.png'
import location_icon from './Image/location_icon.png'
import './Hero.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Hero() {
  return (
   <>

   <Navbar/>
   <div className='hero'>
      <div className='hero1'>
         <div className='text_container'>
            <div className="text">
            <h1> <span style={{fontSize:'60px', color:'cyan'}}>We </span> help Patients to live a <span style={{color:'green', textShadow:'10px 10px 30px black'}}>healthy</span> and <span style={{color:'green',textShadow:'10px 10px 30px black'}}>longer life</span> </h1>
            </div>
            <div className='text2'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia quod ducimus 
                  quisquam ab iusto dolore aliquid officiis sed optio placeat blanditiis at,
                  in nostrum tempora, enim reprehenderit, explicabo repellendus.</p>
            </div>
            <div className='herobtn_container'>
               <Link to='/existing'><button className='searchbtn'>Search A Donor</button></Link>
            </div>
            <div className="attributes_icon">
               <h1>+30 </h1>
               <h1>+1B</h1>
               <h1>+100%</h1>
            </div>
            <div className="attributes">
               <p>Years of Experience</p>
               <p>Patient's Count</p>
               <p>Customer Satisfaction</p>
            </div>
         </div>
         <div className="image_container">
            <div className="image1">
               <img src={doctor1} alt="doctor1" className="doctor1"></img>
            </div>
            <div className="image2">
               <img src={doctor2} alt="doctor2" className="doctor2"></img>
               <img src={doctor3} alt="doctor3" className="doctor3"></img>
            </div>
         </div>
      </div>
       <hr />
      <div className='hero2'>
         <div className="text_container2">
            <div className='c2_heading'>
               <p>Providing the best Blood Services</p>
            </div>
            <div className='c2_text'>
               <p>World Class Care for everyone.Our Health System offers unmatched,exert health care</p>
            </div>
          <div className="icon_container">
               <div className='location_image'>
               <img src={location_icon} alt="icon"/>
               </div>
               <div className='ic_heading'>
                  <h3>Find A Donor</h3>
               </div>
               <div className='ic_text'> 
                  <p>World Class Care for everyone.Our Health System offers unmatched,exert health care.From the 
                  lab to the Clinic.</p>
               </div>
           </div> 
         </div>
      </div>
      <hr />
      <div className='sidehero'>
         <div className='text_container3'>
            <div className='c3_heading'>
               <h2>What Our Patient Say</h2>
            </div>
            <div className='c3_text'>
               <p>World Class Care for everyone.Our Health System offers unmatched,exert health care.</p>
            </div>
         </div>
      </div>
      <div className='review_container'>
            <div className='review1'>
               <div className='review1_box'>
                  <img src={person} alt="person_avatar" className='person_image'></img>
                  <p className='person_name'>Gomtesh Kote</p>
               </div>
               <div className='review_text'>
                  <p>'I had the blood service from them.They treat so well and they are providing 
                     the best medical services'</p>
               </div>
            </div>
            <div className='review2'>
               <div className='review1_box'>
                  <img src={person} alt="person_avatar" className='person_image'></img>
                  <p className='person_name'>Gomtesh Kote</p>
               </div>
               <div className='review_text'>
                  <p>'I had the blood service from them.They treat so well and they are providing 
                     the best medical services'</p>
               </div>
            </div>
            <div className='review3'>
               <div className='review1_box'>
                  <img src={person} alt="person_avatar" className='person_image'></img>
                  <p className='person_name'>Gomtesh Kote</p>
               </div>
               <div className='review_text'>
                  <p>'I had the blood service from them.They treat so well and they are providing 
                     the best medical services'</p>
               </div>
            </div>
         </div>

   </div>
   <Footer/>
   </>
  )
}

export default Hero