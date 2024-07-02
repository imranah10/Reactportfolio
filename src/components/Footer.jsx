import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Footer = () => {
    const footlink={
        textDecoration:'none'
    }
  return (
    <div>
       <div  className="container-fluid  my-4 footbox">
                <div style={{ backgroundColor: 'black',borderRadius:"20px"}} className="row text-center fs-5 text-info p-3">
                  <div className="col-lg-12 col-md-12 col-sm-12 socialicons  text-white fs-3 py-3 ">
                 <Link style={footlink} to='https://www.linkedin.com/in/imran-ahmad-aa257520b/'><i className="fa-brands fa-linkedin px-1"></i></Link> 
                   <Link style={footlink} to=''><i className="fa-brands fa-twitter px-1"></i></Link> 
                   <Link style={footlink} to='https://www.hackerrank.com/profile/imranaha310'> <i class="fa-brands fa-hackerrank px-1"></i></Link>
                  </div>

                  <div className="row d-flex  justify-content-center p-2 fs-5">
                    <div className="col-auto">
                    <Link  style={footlink} to='/' className="px-2">Home</Link>
                    </div>
                   <div className="col-auto">
                   <Link style={footlink} to='/projects' className="px-2">Projects</Link>
                   </div>
                    <div className="col-auto">
                    <Link style={footlink} to='/experience' className="px-2">Experience</Link>
                    </div>
                   <div className="col-auto">
                   <Link style={footlink} to='/about' className="px-2">About</Link>
                   </div>
                    <div className="col-auto">
                    <Link style={footlink} to='/contact' className="px-2">Contact</Link>
                    </div>
                  </div>
                    <footer className="fs-5 mb-3">
                        &copy; Copywrite 2024 Devloped by   <a className="text-white" href="">Imran</a>
                    </footer>
                </div>
            </div>
    </div>
  )
}

export default Footer
