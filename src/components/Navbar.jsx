import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { FaAlignJustify } from 'react-icons/fa'



const Navbar = () => {
  const nvlinkcolor={
    color:'#ffff',
    fontWeight:'bold',
    fontSize:'1.2rem'
  }
 
 
  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top nvbox " style={{backgroundColor:"black"}}>
  <div className="container-fluid">
    <Link style={{fontSize:'2.5rem'}} to='/' className="navbar-brand contentfont"><span className='I'>I</span> <span className='Iport'>Portfolio</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"> <FaAlignJustify /></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link to='/' className="nav-link active I1 " aria-current="page" style={nvlinkcolor}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/projects' className="nav-link a"style={nvlinkcolor}>Projects</Link>
        </li>

        <li className="nav-item">
          <Link to='/experience' className="nav-link a "style={nvlinkcolor}>Experience</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link a "style={nvlinkcolor}>About</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link a "style={nvlinkcolor}>Contact</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>




    </>
  )

 
}

export default Navbar
