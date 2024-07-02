import React, { useEffect } from 'react'
import './Home.css'
import profile2 from './images/profile.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
    },[])

  const txtshadow={
    textShadow: '2px 2px #0e41e7',
    fontWeight:'bold'
  }
  return (
    <>
    <div className="conatiner my-2"data-aos="zoom-in-down">
      <h2 className='text-white projectfontHead text-center my-4'><span style={{borderBottom:"2px solid #FFFF00"}}data-aos="fade-up"> About-Us</span>  </h2>
      <div className="row d-flex justify-content-evenly align-items-center">
        <div style={{borderBottom:"2px solid #FFFF00"}} className="col-sm-12 col-md-12 col-lg-6 text-white contentfont border aboutconbox fs-4  "data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
         <p>Hello, I am <span style={txtshadow}>Imran</span>!</p>
         <p>I am a self-taught front end developer based in india,Bihar.I can develope responsive websites from scratch and raise them into modern-friendly web experiences.  </p>
         <p>Transforming my creativity and knowledge into a websites has been my passion for over a year.I am always strive to learn about the newest technologies and frameworks</p>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4  text-center my-2"data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img style={{height:"320px",width:"320px"}} className='img-fluid border border-4 rounded' src={profile2} alt="profile2" />
        </div>
      </div>
    </div>
   
    </>
  )
}

export default About
