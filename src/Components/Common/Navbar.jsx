import React from 'react'
import '../../css/style.css';
import '../../css/common.css';
import { BrowserView, MobileView } from 'react-device-detect'
import  { NavDropdown } from 'react-bootstrap'

function Navbar()   {

    return (
        <div className="Navbar">
        <BrowserView>
                <nav className="navbar navbar-expand fixed-top">
                     <div className="container">
                     <a className="navbar-brand" href="/acm-iith/#" style={{ textDecoration: 'none', borderBottom: '3px solid #f05a22', top: '50%' }}>ACM | IIT Hyderabad</a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarText">
                     <span className="navbar-text right-links" style={{marginLeft: "70%"}}>
                         <a href="/acm-iith/#">Home</a>
                         {/* <a href="/events">Events</a> */}
                         {/* <a href="/blogs">Blog</a> */}
                         {/* <a href="/team">Team</a> */}
                         <a href="/acm-iith/#/about">About Us</a>
                         <a href="/acm-iith/#/contact">Contact Us</a>
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
                            <NavDropdown.Item href="/acm-iith/#/about">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/contact">Contact  Us</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    </div>
                </nav>
    
                <br /><br /><br /><br />
            
        </MobileView>
        </div>
    )

    // if  (isMobile)  {
    //     return (
    //         <div className="Navbar">
    //         <nav className="navbar navbar-expand fixed-top">
    //             <div className="container">
    //                 <a className="navbar-brand" href="/acm-iith/#" style={{ textDecoration: 'none', borderBottom: '3px solid #f05a22', top: '50%' }}>ACM | IIT Hyderabad</a>
    //                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //                 </button>
    //                 <div className="collapse navbar-collapse" id="navbarText" style={{marginLeft: "70%"}}>
    //                     <NavDropdown title="Menu" id="basic-nav-dropdown">
    //                         <NavDropdown.Item href="/acm-iith/#">Home</NavDropdown.Item>
    //                         <NavDropdown.Item href="/acm-iith/#/about">About Us</NavDropdown.Item>
    //                         <NavDropdown.Item href="/acm-iith/#/contact">Contact  Us</NavDropdown.Item>
    //                     </NavDropdown>
    //                 </div>
    //                 </div>
    //             </nav>
    
    //             <br /><br /><br /><br />
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className="Navbar">
    //             <nav className="navbar navbar-expand fixed-top">
    //                  <div className="container">
    //                  <a className="navbar-brand" href="/acm-iith/#" style={{ textDecoration: 'none', borderBottom: '3px solid #f05a22', top: '50%' }}>ACM | IIT Hyderabad</a>
    //                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //                  <span className="navbar-toggler-icon"></span>
    //                  </button>
    //                  <div className="collapse navbar-collapse" id="navbarText">
    //                  <span className="navbar-text right-links" style={{marginLeft: "70%"}}>
    //                      <a href="/acm-iith/#">Home</a>
    //                      {/* <a href="/events">Events</a> */}
    //                      {/* <a href="/blogs">Blog</a> */}
    //                      {/* <a href="/team">Team</a> */}
    //                      <a href="/acm-iith/#/about">About Us</a>
    //                      <a href="/acm-iith/#/contact">Contact Us</a>
    //                  </span>
    //                  </div>
    //                  </div>
    //              </nav>
     
    //              <br /><br /><br /><br />
    //          </div>
    //     )
    // }
}

export default Navbar