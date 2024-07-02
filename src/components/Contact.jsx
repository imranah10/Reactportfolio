import React from "react";
import { FaGithub, FaHackerrank, FaLongArrowAltRight } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import './Home.css'
import { Link } from "react-router-dom";
// import Aos from 'aos'
// import 'aos/dist/aos.css'

const Contact = () => {
  // useEffect(()=>{
  //   Aos.init({duration:2000});
  //   },[])
  const iconstyle = {
    border: "2px solid #FFFF00",
    borderRadius: "100%",
    boxShadow: "5px 5px 10px 0px rgba(101,175,10,0.5)",
  };

  return (
    <>
      <div className="container my-3"data-aos="fade-up">
        <h2 className="text-white text-center my-4">
          <span style={{ borderBottom: "2px solid #FFFF00" }}>Contact -Us</span>
        </h2>
        <div className="row d-flex justify-content-evenly ">
          <div className="col-sm-12 col-lg-4 text-white fs-4 border contcontenbox " data-aos="fade-up-right">
            <p>
              I 'm interested in Full, part and freelance opportunities
              also.However if you have Jobs available,please give me chance or
              connect to me.. <FaLongArrowAltRight />{" "}
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 border py-4 px-auto connecbox "data-aos="fade-up-left">
            <div className="py-1 d-flex justify-content-evenly align-items-center">
              <FaGithub style={iconstyle} className="fs-1 text-white" />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="https://github.com/imranah10">
                https://github.com/imranah10
              </Link>
            </div>
            <div className="py-1 d-flex justify-content-evenly align-items-center">
              <BsLinkedin style={iconstyle} className="fs-1 text-white" />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="https://www.linkedin.com/in/imran-ahmad-aa257520b/">
                linkedin.com/in/imran-ahmad
              </Link>
            </div>
            <div className="py-1 d-flex justify-content-evenly align-items-center">
              <FaHackerrank  style={iconstyle} className="fs-1 text-white" />

              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="https://www.hackerrank.com/profile/imranaha310">
                www.hackerrank/imranaha10
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <a href="Tel:+91946141526">91946141526</a> */}
    </>
  );
};

export default Contact;
