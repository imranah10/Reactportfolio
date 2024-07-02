import React, { useEffect }  from 'react'
import './Home.css'
import experience from './data/experience.json'
import Skills from './Skills'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Experience = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
    },[])
  return (
    <>
  <h1 className='projectfontHead text-white my-4 text-center'data-aos="zoom-in-up"><span style={{borderBottom:"2px solid #FFFF00"}}>EXPERIENCE</span></h1>
{experience.map((data)=>{

return(

  <div className="container text-white experiencebox my-3 "data-aos="zoom-in-right">
<h2 className='text-center projectfontHead  '> <span style={{borderBottom:"2px solid yellow"}}>{data.role}</span></h2>
<div className="row d-flex align-item-center justify-content-center text-center p-2">
<div className="col-4">
<img className='w-50 py-2' style={{borderRadius:"100%",backgroundColor:"white",border:"5px solid rgb(11,26,51)"}} src={data.imagesrc} alt="company" />
</div>

      <div className="col-8 contentfont">
        <h6>{`${data.startDate}- ${data.endDate} ${data.Location}`}</h6>
        <p>{data.experiences[0]}</p>
        <p>{data.experiences[1]}</p>
      </div>
</div>



</div>


)

})}


<Skills />
    </>
  )
}

export default Experience
