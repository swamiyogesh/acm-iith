import React from 'react';
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import ImageContainer from './Components/Home/ImageContainer'
import Mainpart from './Components/Home/Mainpart'

function Contact() {
  return (
    <div className="Contact"> 
        {/* <p className="h35" id="contactus" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Contact Us</p> */}
        <br  />
        <div style={{backgroundColor: "#0b143f"}} id="contactus">
            <div className="container">
            <br />
            <div className="row">
                <div className="col-md" style={{textAlign: "center"}}>
                <p class="h35" style={{color: "#fff"}}>Contact Us</p>
                {/* <br /> */}
                <p className="h22" style={{color: "#fff"}}>We would love to hear from you. Please send us a message here or mail us at <a href="mailto: acm.chapter@cse.iith.ac.in">acm.chapter@cse.iith.ac.in</a></p>
                {/* <br /><br /> */}
                <img src="https://img.icons8.com/fluent/48/000000/twitter.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="https://img.icons8.com/fluent/48/000000/gmail.png"/>
                <br /><br />
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
