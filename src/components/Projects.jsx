import React, {  useEffect, useState } from 'react'
import './Home.css'
// import project1 from './images/project.jpg'
// import  Notetaking from './images/Note.jpg'
import  smartedu from '../assets/SmartEDU.png'
import techhy from '../assets/Techyy.png'
import trendzz from '../assets/Trendzz.png'
// import Tour from '../assets/tour.png'
import Retodo from '../assets/todo.png'
import Boost from '../assets/Boost.png'
import Portfo1 from '../assets/PORTFOLIO1.png'
import countries from '../assets/Countries.png'
import weather from '../assets/weather.png'
// import Pricing from './projects/Pricing.png'
// import Counter from './projects/Counter.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {  FaLongArrowAltRight } from 'react-icons/fa'

const imghandle=(e)=>{
  const projimg=document.querySelector('.projimg')
  console.log(projimg,'imghover')
  e.stopPropagation()
}
const projimgboxhandle=(e)=>{
const projectimgbox=document.querySelector('.projects')
console.log(projectimgbox,'projectboxhover')
e.stopPropagation()
}
const Projects = () => {
  const projectcodecolor={
    border:'1px solid white ',
    padding:'8px',
    borderRadius:'10px'
  }
  const [isShow,setIsShow]=useState(false)
  
  useEffect(()=>{
    Aos.init({duration:2000});
    },[])
  return (
    <>
      <div className="row my-4 text-white text-center">
        <div className="col-6"data-aos="fade-left">
            <p className='contentfont'><span style={{'color':'#f9fd07'}}># </span>PROJECTS</p>
        </div>
        <div className="col-6"data-aos="fade-right">
            <button className=' text-white contentfont' style={{background:"none",border:"none"}} onClick={()=>setIsShow(!isShow)} > {isShow ? 'SHOW LESS':'SHOW ALL'} <FaLongArrowAltRight /> </button>
        </div>
      </div>

      {/* project start  */}

      <div className="row d-flex justify-content-evenly">
      <div onMouseOver={projimgboxhandle} className="col-sm-12 col-lg-3 mb-2 card projects " style={{'width': '18rem'}} data-aos='flip-left'>
        <h4 className='card-title projectfontHead text-center'>Countries api APP</h4>
  <img onMouseOver={imghandle} src={countries} className="card-img-top projimg" alt="Note taking"/>
  <div className="card-body">
    <h6 className="card-title">HTML CSS JS BOOTSRAP NODE REACT TAILWIND</h6>
  </div>
  <div className="card-body text-center">
    <a href="https://github.com/imranah10/Countries-api" className="card-link"style={projectcodecolor}>View code</a>
    <a href="countriesapiproject1.netlify.app" className="card-link"style={projectcodecolor}>Live</a>
  </div>
</div>

<div onMouseOver={projimgboxhandle}  className="col-sm-12 col-lg-3 mb-2 card projects" style={{'width': '18rem'}} data-aos='flip-right'>
        <h4 className='card-title text-center projectfontHead py-1'>Weather Api App</h4>
  <img src={weather} className="card-img-top projimg" alt="Weather Api App"/>
  <div className="card-body">
    <h6 className="card-title text-center">HTML CSS JS REACT REST Apis</h6>
  </div>
  <div className="card-body text-center">
    <a href="https://github.com/imranah10/Weather-App" className="card-link"style={projectcodecolor}>View code</a>
    <a href="weather-app-eta-ruddy-61.vercel.app" className="card-link"style={projectcodecolor}>Live</a>
  </div>
</div>

<div onMouseOver={projimgboxhandle}  className="col-sm-12 col-lg-3 mb-2 card projects" style={{'width': '18rem'}}data-aos='flip-left'>
        <h4 className='card-title projectfontHead text-center py-1'>TECHHY</h4>
  <img src={techhy} className="card-img-top projimg" alt="TECHHY"/>
  <div className="card-body">
    <h6 className="card-title text-center">HTML CSS JS BOOTSRAP </h6>
  </div>
  <div className="card-body text-center">
    <a href="https://github.com/imranah10/Techy" className="card-link"style={projectcodecolor}>View code</a>
    <a href="https://imranah10.github.io/Techy/" className="card-link"style={projectcodecolor}>Live</a>
  </div>
</div>

<div onMouseOver={projimgboxhandle}  className="col-sm-12 col-lg-3 mb-2 card projects" style={{'width': '18rem'}}data-aos='flip-right'>
        <h4 className='card-title text-center projectfontHead py-1'>TRENDZZ</h4>
  <img src={trendzz} className="card-img-top projimg" alt="Trendzz"/>
  <div className="card-body">
    <h6 className="card-title text-center">HTML CSS JS BOOTSRAP </h6>
  </div>
  <div className="card-body text-center">
    <a href="https://github.com/imranah10/Trendzz" className="card-link"style={projectcodecolor}>View code</a>
    <a href="https://imranah10.github.io/Trendzz/" className="card-link"style={projectcodecolor}>Live</a>
  </div>
</div>
      </div>


  {isShow &&     <div className="row d-flex justify-content-evenly my-3">
    <p className='ms-5 text-white'> <span style={{'color':'#6526ad'}}># </span>Small Projects</p>
    <div onMouseOver={projimgboxhandle}  className="col-sm-12 col-lg-3 mb-2 card projects" style={{'width': '18rem'}} data-aos='flip-right'>
        <h4 className='card-title text-center projectfontHead py-1'>SMART EDU</h4>
  <img src={smartedu} className="card-img-top projimg" alt="SMART EDU"/>
  <div className="card-body">
    <h6 className="card-title text-center">HTML CSS JS BOOTSRAP</h6>
  </div>
  <div className="card-body text-center">
    <a href="https://github.com/imranah10/SmartEDU" className="card-link"style={projectcodecolor}>View code</a>
    <a href="https://imranah10.github.io/SmartEDU/" className="card-link"style={projectcodecolor}>Live</a>
  </div>
</div>

<div onMouseOver={projimgboxhandle}  className="col-sm-12 col-lg-3 mb-2 card projects" style={{'width': '18rem'}}data-aos='flip-right'>
        <h4 className='card-title projectfontHead text-center py-1'>TO-DO LIST</h4>
  <img src={Retodo} className="card-img-top projimg" alt="to do"/>
  <div className="card-body">
    <h6 className="card-title">HTML CSS JS REACT</h6>
  </div>
  <div className="card-body text-center">
    <a href="https://github.com/imranah10/React-Simple-To-Do" className="card-link"style={projectcodecolor}>View code</a>
    <a href="https://react-simple-to-do.vercel.app/" className="card-link"style={projectcodecolor}>Live</a>
  </div>
</div>

<div onMouseOver={projimgboxhandle}  className="col-sm-12 col-lg-3 mb-2 card projects" style={{'width': '18rem'}}data-aos='flip-left'>
        <h4 className='card-title projectfontHead text-center py-1'>BOOST APP</h4>
  <img src={Boost} className="card-img-top projimg" alt="Tredzz"/>
  <div className="card-body">
    <h6 className="card-title text-center">HTML CSS JS BOOTSRAP </h6>
    <p className="card-text contentfont">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className="card-body text-center">
    <a href="https://github.com/imranah10/bootstrap-Practice-Template" className="card-link"style={projectcodecolor}>View code</a>
    <a href="https://imranah10.github.io/bootstrap-Practice-Template/" className="card-link"style={projectcodecolor}>Live</a>
  </div>
</div>

<div onMouseOver={projimgboxhandle}  className="col-sm-12 col-lg-3 mb-2 card projects" style={{'width': '18rem'}}data-aos='flip-right'>
        <h4 className='card-title projectfontHead text-center py-1'>I FOLIO</h4>
  <img onMouseOver={projimgboxhandle} src={Portfo1} className="card-img-top projimg" alt="Tredzz"/>
  <div className="card-body">
    <h6 className="card-title">HTML CSS JS BOOTSRAP </h6>
  </div>
  <div className="card-body text-center">
    <a href="https://github.com/imranah10/Portfolio-bootstrap-sample" className="card-link"style={projectcodecolor}>View code</a>
    <a href="https://imranah10.github.io/Portfolio-bootstrap-sample/" className="card-link"style={projectcodecolor}>Live</a>
  </div>
</div>
      </div>}
    </>
  )
  
  

}

export default Projects