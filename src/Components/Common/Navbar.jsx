import React from 'react'
import '../../css/style.css';
import '../../css/common.css';
import { BrowserView, MobileView } from 'react-device-detect'
import  { NavDropdown } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar()   {

    return (
        <div className="Navbar">
        <BrowserView>
                <nav className="navbar navbar-expand fixed-top">
                     <div className="container">
                     <a className="navbar-brand" href="/acm-iith/#" >
                        <span>
                        <img src = {require('../../assets/images/logo.jpg')} style={{height: "15%", width:"15%"}}  alt=" " />
                        {/* &nbsp;&nbsp; */}
                        {/* <img src = {require('../../assets/images/acm.png')} style={{height: "6%", width:"6%"}}  alt=" " /> */}
                        </span>
                     </a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarText">
                     <span className="navbar-text right-links" style={{marginLeft: "40%"}}>
                         <a href="/acm-iith/#" style={{fontSize: "24px"}}>Home</a>
                         {/* <a href="/events">Events</a> */}
                         {/* <a href="/blogs">Blog</a> */}
                         {/* <a href="/team">Team</a> */}
                         <AnchorLink href='#aboutus'><a style={{fontSize: "24px"}}>About Us</a></AnchorLink>
                         <AnchorLink href='#contactus'><a style={{fontSize: "24px"}}>Contact Us</a></AnchorLink>
                     </span>
                     </div>
                     </div>
                 </nav>
     
                 <br /><br /><br /><br />
             
        </BrowserView>

        <MobileView>

            <nav className="navbar navbar-expand fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/acm-iith/#" style={{ textDecoration: 'none', borderBottom: '3px solid #f05a22', top: '50%' }}>ACM | IIT Hyderabad</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/acm-iith/#">Home</NavDropdown.Item>
                            <AnchorLink href='#aboutus'><NavDropdown.Item>About Us</NavDropdown.Item></AnchorLink>
                            <AnchorLink href='#contactus'><NavDropdown.Item href="/acm-iith/#/contact">Contact  Us</NavDropdown.Item></AnchorLink>
                        </NavDropdown>
                    </div>
                    </div>
                </nav>
    
                <br /><br /><br /><br />
            
        </MobileView>
        </div>
    )

}

export default Navbar