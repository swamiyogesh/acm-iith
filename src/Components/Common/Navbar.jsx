import React from 'react'
import '../../css/style.css';
import '../../css/common.css';
import { BrowserView, MobileView } from 'react-device-detect'
import  { NavDropdown,  Nav } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar()   {

    return (
        <div className="Navbar">
        <BrowserView>
                <nav className="navbar navbar-expand-lg fixed-top">
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
                     <span className="navbar-text right-links" style={{marginLeft: "-10%"}}>
                         {/* <a href="/events">Events</a> */}
                         {/* <a href="/blogs">Blog</a> */}
                         {/* <a href="/team">Team</a> */}
                         {/* <AnchorLink href='#aboutus'><a >About Us</a></AnchorLink>
                         
                         <AnchorLink href='#contactus'><a >Contact Us</a></AnchorLink> */}

                         <Nav className="mr-auto">
                         <Nav.Link href="/acm-iith/#">Home</Nav.Link>
                        <Nav.Link href="/acm-iith/#/about">About Us</Nav.Link>
                        <Nav.Link href="/acm-iith/#/events">Events</Nav.Link>
                        
                        <NavDropdown title="Interest Groups" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/acm-iith/#/info/women-in-cs">Women in CS</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/theoretical-cs">Theoretical CS</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/machine-intelligence">Machine Intelligence</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/systems-and-network">Systems and Network</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/acm-iith/#/Posts">Posts</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/Projects">Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/Publications">Publications</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        </Nav>
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