import React from 'react'
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Call = () => {
    const iconstyle = {
        border: "2px solid #FFFF00",
        borderRadius: "100%",
        boxShadow: "5px 5px 10px 0px rgba(101,175,10,0.5)",
        position:"fixed",
        top:"50%",
        left:"15px",
      };
  return (
    <div>
       <Link to='Tel:+91946141526'style={iconstyle} className="text-white  p-2"><IoCall className="fs-1 text-info" /></Link>
    </div>
  )
}

export default Call
