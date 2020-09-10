import React from 'react'
import '../../css/style.css';
import '../../css/common.css';
import { BrowserView, MobileView } from 'react-device-detect'
import  { NavDropdown,  Nav } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar({ props })   {

    return (
        <div className="Navbar">
        <BrowserView>
                <nav className="navbar navbar-expand-lg fixed-top">
                     <div className="container">
                     <a className="navbar-brand" href="/acm-iith/#" >
                        <span>
                        <img src = {require('../../assets/images/logo.jpg')} style={{height: "25%", width:"25%", marginLeft: "2%"}}  alt=" " />
                        {/* &nbsp;&nbsp; */}
                        {/* <img src = {require('../../assets/images/acm.png')} style={{height: "6%", width:"6%"}}  alt=" " /> */}
                        </span>
                     </a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarText">
                     <span className="navbar-text right-links" style={{marginLeft: "-20%"}}>
                         {/* <a href="/events">Events</a> */}
                         {/* <a href="/blogs">Blog</a> */}
                         {/* <a href="/team">Team</a> */}
                         {/* <AnchorLink href='#aboutus'><a >About Us</a></AnchorLink>
                         
                         <AnchorLink href='#contactus'><a >Contact Us</a></AnchorLink> */}

                         <Nav className="mr-auto">
                         <Nav.Link href="/acm-iith/#" style={props==='Home' ? {color: "grey"} : null}>Home</Nav.Link>
                        <Nav.Link href="/acm-iith/#/about" style={props==='About' ? {color: "grey"} : null}>About Us</Nav.Link>
                        <Nav.Link href="/acm-iith/#/events" style={props==='Events' ? {color: "grey"} : null}>Events</Nav.Link>
                        
                        <NavDropdown title="Interest Groups" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/acm-iith/#/info/machine-intelligence" style={props==='MI' ? {color: "grey"} : null}>Machine Intelligence</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/systems-and-network" style={props==='SN' ? {color: "grey"} : null}>Systems and Network</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/theoretical-cs" style={props==='TCS' ? {color: "grey"} : null}>Theoretical CS</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/women-in-cs" style={props==='WCS' ? {color: "grey"} : null}>Women in CS</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/acm-iith/#/Projects" style={props==='Projects' ? {color: "grey"} : null}>Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/Publications" style={props==='Publications' ? {color: "grey"} : null}>Publications</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/Posts" style={props==='Posts' ? {color: "grey"} : null}>Posts</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        <a href="/acm-iith/#/joinus"><button class="button"><span style={{fontSize: "18px"}}>Become a Member</span></button></a>
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
                    <a className="navbar-brand" href="/acm-iith/#">
                        <span>
                        <img src = {require('../../assets/images/logo.jpg')} style={{height: "15%", width:"15%"}}  alt=" " />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText" style={{marginLeft: "-28%"}}>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <Nav.Link href="/acm-iith/#">Home</Nav.Link>
                        <Nav.Link href="/acm-iith/#/about">About Us</Nav.Link>
                        <Nav.Link href="/acm-iith/#/events">Events</Nav.Link>
                        
                        <NavDropdown title="Interest Groups" style={{marginLeft: '10px'}} drop="left" id="basic-nav-dropdown">
                            <NavDropdown.Item style={{fontSize: '13px'}} href="/acm-iith/#/info/machine-intelligence">Machine Intelligence</NavDropdown.Item>
                            <NavDropdown.Item style={{fontSize: '13px'}} href="/acm-iith/#/info/systems-and-network">Systems and Network</NavDropdown.Item>
                            <NavDropdown.Item style={{fontSize: '13px'}} href="/acm-iith/#/info/theoretical-cs">Theoretical CS</NavDropdown.Item>
                            <NavDropdown.Item style={{fontSize: '13px'}} href="/acm-iith/#/info/women-in-cs">Women in CS</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title="Resources" style={{marginLeft: '10px'}} drop="left" id="basic-nav-dropdown">
                            <NavDropdown.Item style={{fontSize: '13px'}} href="/acm-iith/#/Posts">Posts</NavDropdown.Item>
                            <NavDropdown.Item style={{fontSize: '13px'}} href="/acm-iith/#/Projects">Projects</NavDropdown.Item>
                            <NavDropdown.Item style={{fontSize: '13px'}} href="/acm-iith/#/Publications">Publications</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        <a href="/acm-iith/#/joinus"><button class="button"><span>Become a Member</span></button></a>
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