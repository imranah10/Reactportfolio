import React, { useEffect } from 'react'
// import { motion } from "framer-motion"
import { SiCss3, SiExpress, SiHtml5, SiJquery, SiSass } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap, FaLess, FaReact, FaWordpress } from "react-icons/fa";
import{GrMysql} from 'react-icons/gr';
import {TbBrandFramerMotion} from 'react-icons/tb'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
    },[])
  const iconstyle={
    border:'2px solid #FFFF00',
  borderRadius:'100%',
  boxShadow:  '5px 5px 10px 0px rgba(101,175,10,0.5)'
  }
  
  
  return (
    <> 
     <h1 className='projectfontHead text-white my-4 text-center'data-aos="fade-up"><span style={{borderBottom:"2px solid #FFFF00"}}>OUR SKILLS</span></h1>  
      <div className=' row display-2'data-aos="zoom-out-up">

        <div className="row text-center d-flex justify-content-center">
            <div className="col-2 "data-aos="zoom-out-left"><SiHtml5 style={iconstyle} className=' p-2 text-danger ' /></div>
            <div className="col-2 "data-aos="zoom-out-right"><SiCss3  style={iconstyle} className=' p-2 text-primary ' /></div>
            <div className="col-2"data-aos="zoom-out-left"><RiJavascriptFill style={iconstyle} className=' p-2 text-warning ' /></div>
            <div className="col-2"data-aos="zoom-out-right"><FaBootstrap style={iconstyle}  className=' p-2 text-info ' /></div>
        </div>
        <div className="row text-center d-flex justify-content-center">
            <div className="col-2"data-aos="zoom-out-right"><SiJquery  style={iconstyle}className=' p-2 text-white ' /></div>
            <div className="col-2"data-aos="zoom-out-left"><FaReact style={iconstyle}  className=' p-2 text-primary ' /></div>
            <div className="col-2"data-aos="zoom-out-right"><SiSass  style={iconstyle}className=' p-2 text-white ' /></div>
            <div className="col-2"data-aos="zoom-out-left"><FaLess style={iconstyle} className=' p-2 text-white ' /></div>
        </div>
        <div className="row text-center d-flex justify-content-center">
            <div className="col-2"data-aos="zoom-out-left"><GrMysql style={iconstyle}  className=' p-2 text-info' /></div>
            <div className="col-2"data-aos="zoom-out-right"><FaWordpress  style={iconstyle}className=' p-2 text-primary' /></div>
            <div className="col-2"data-aos="zoom-out-left"><TbBrandFramerMotion style={iconstyle} className=' p-2 text-white' /></div>
            <div className="col-2"data-aos="zoom-out-right"><SiExpress style={iconstyle} className=' p-2 text-info ' /></div>
        </div>


       

        
      </div>
    </>
  )
}

export default Skills;
