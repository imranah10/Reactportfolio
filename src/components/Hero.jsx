import React from 'react'

import profileimg1 from './images/profile1.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'
import pdf from './resume.pdf'
// import { Link } from 'react-router-dom';


const Hero = () => {
    const txtshadow={
      textShadow: '2px 2px #e9d62c',
      fontWeight:'400'
    }
    
  return (
    <>
    
    <div className="row p-2">
        
        <div  className="col-md-12 col-lg-7 text-white heroleft" >
           <p className='display-5'>I am imran <span style={txtshadow}>Front-end Developer</span>,<span>Wordpress Developer </span> <span style={txtshadow}>Backend Developer</span></p>
           <p className='my-4 contentfont'>We crafts responsive websites where technologies meet creativity</p>
           <a href={pdf} download={'resume.pdf'} className='btn btn-outline-warning mb-2 '>Download Resume</a>
        </div>
        <div  className="col-md-12 col-lg-5 ">
            <img style={{margin:"0 auto",height:"300px",width:"300px",objectFit:"scale-down"}} className='img-fluid profileimg  ' src={profileimg1} alt="profile" />
            <p className='I2  h4 text-center m-2'> <i  className=" bi bi-app"></i>  Currently working on Portfolio </p>
        </div>
        <div className="row  my-4">
        <p className='text-white rounded  text-center contentfont'>"Have no fear of perfection—you'll never reach it."</p>
        </div>
       
        
      </div>
     
  
      
    </>
  )
}

export default Hero
