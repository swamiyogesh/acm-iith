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
            <div class="logo"><a href="/acm-iith/#"><img src = {require('../../assets/images/logo-3.jpg')} style={{height: "15%", width:"15%", marginLeft: "-5%"}}  alt=" " /></a></div>
            <div style={{marginLeft:"-58%"}}>
            <label for="btn" class="icon">
                    <span class="fa fa-bars"></span>
                </label>
                <input type="checkbox" id="btn" />
                <ul>
            <li><a href="/acm-iith/#">Home</a></li>
            <li><a href="/acm-iith/#/about">About Us</a></li>
            <li><a href="/acm-iith/#/events">Events</a></li>
            
            
            <li>
                    <label for="btn-2" class="show">Interest Groups +</label>
                    <a href="#">Interest Groups</a>
                    <input type="checkbox" id="btn-2" />
                    <ul>
                        <li><a href="/acm-iith/#/info/machine-intelligence">Machine Intelligence</a></li>
                        <li><a href="/acm-iith/#/info/systems-and-network">Systems and Networks</a></li>
                        <li><a href="/acm-iith/#/info/theoretical-cs">Theoretical CS</a></li>
                        <li><a href="/acm-iith/#/info/women-in-cs">Women in CS</a></li>
                    </ul>
            </li>

            <li>
                    <label for="btn-3" class="show">Resources +</label>
                    <a href="#">Resources</a>
                    <input type="checkbox" id="btn-3" />
                    <ul>
                        <li><a href="/acm-iith/#/Posts">Posts</a></li>
                        <li><a href="/acm-iith/#/Projects">Projects</a></li>
                        <li><a href="/acm-iith/#/Publications">Publications</a></li>
                    </ul>
            </li>

            <li><a href='/acm-iith/src/Components/Home/Mainpart.jsx#contactus'>Contact Us</a></li>
            <li><a href="/acm-iith/#/joinus" target="_blank">Join Us</a></li>
            </ul>
            </div>
        </div>
        </nav>

                {/* <nav className="navbar navbar-expand-lg fixed-top">
                     <div className="container">
                     <a className="navbar-brand" href="/acm-iith/#" >
                        <span>
                        <img src = {require('../../assets/images/logo-3.jpg')} style={{height: "15%", width:"15%", marginLeft: "2%"}}  alt=" " />
                        </span>
                     </a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarText">
                     <span className="navbar-text right-links" style={{marginLeft:"-44%"}}>
                         <a href="/events">Events</a>
                         <a href="/blogs">Blog</a>
                         <a href="/team">Team</a>
                         <AnchorLink href='#aboutus'><a >About Us</a></AnchorLink>
                         
                         <AnchorLink href='#contactus'><a >Contact Us</a></AnchorLink>

                        <Nav className="mr-auto">
                        <Nav.Link href="/acm-iith/#" >Home</Nav.Link>
                        <Nav.Link href="/acm-iith/#/about" >About Us</Nav.Link>
                        <Nav.Link href="/acm-iith/#/events" >Events</Nav.Link>
                        
                        <NavDropdown title="Interest Groups" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/acm-iith/#/info/machine-intelligence">Machine Intelligence</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/systems-and-network" >Systems and Network</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/theoretical-cs" >Theoretical CS</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/info/women-in-cs" >Women in CS</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/acm-iith/#/Projects" >Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/Publications" >Publications</NavDropdown.Item>
                            <NavDropdown.Item href="/acm-iith/#/Posts" >Posts</NavDropdown.Item>
                        </NavDropdown>
                    
                        <Nav.Link href="/acm-iith/src/Components/Home/Mainpart.jsx#contactus" >Contact Us </Nav.Link>

                        <a href="/acm-iith/#/joinus" target="_blank"><button class="button"><span style={{fontSize: "16px"}}>Become a Member</span></button></a>
                        </Nav>
                     </span>
                     </div>
                     </div>
                 </nav> */}
     
                 <br /><br /><br /><br />
             
        </BrowserView>

        <MobileView>

        <nav>
        <div class="logo"><a href="/acm-iith/#"><img src = {require('../../assets/images/logo-3.jpg')} style={{height: "20%", width:"20%"}} alt=" " /></a></div>
        <label for="btn" class="icon">
                <span class="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="btn" />
            <ul>
            <li><a href="/acm-iith/#">Home</a></li>
            <li><a href="/acm-iith/#/about">About Us</a></li>
            <li><a href="/acm-iith/#/events">Events</a></li>
            
            
            <li>
                    <label for="btn-2" class="show">Interest Groups +</label>
                    <a href="#">Interest Groups</a>
                    <input type="checkbox" id="btn-2" />
                    <ul>
                        <li><a href="/acm-iith/#/info/machine-intelligence">Machine Intelligence</a></li>
                        <li><a href="/acm-iith/#/info/systems-and-network">Systems and Networks</a></li>
                        <li><a href="/acm-iith/#/info/theoretical-cs">Theoretical CS</a></li>
                        <li><a href="/acm-iith/#/info/women-in-cs">Women in CS</a></li>
                    </ul>
            </li>

            <li>
                    <label for="btn-3" class="show">Resources +</label>
                    <a href="#">Resources</a>
                    <input type="checkbox" id="btn-3" />
                    <ul>
                        <li><a href="/acm-iith/#/Posts">Posts</a></li>
                        <li><a href="/acm-iith/#/Projects">Projects</a></li>
                        <li><a href="/acm-iith/#/Publications">Publications</a></li>
                    </ul>
            </li>

            <li><a href='/acm-iith/src/Components/Home/Mainpart.jsx#contactus'>Contact Us</a></li>
            <li><a href="/acm-iith/#/joinus" target="_blank">Join Us</a></li>
        </ul>
    </nav>
            


            {/* <nav style={{ background: 'linear-gradient(#fcfcfc, #fff)' , height: '8vh' }}>
                <div className="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <ul class="nav-links">
                    <li><a href="#">gbhfgrf</a></li>
                    <li><a href="#">gbhfgrf</a></li>
                    <li><a href="#">gbhfgrf</a></li>
                </ul>
            </nav> */}



            {/* <nav className="navbar navbar-expand fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/acm-iith/#">
                        <span>
                        <img src = {require('../../assets/images/logo.jpg')} style={{height: "15%", width:"15%"}}  alt=" " />
                        </span>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText" style={{marginLeft: "auto"}}>
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
                        
                        <Nav.Link href="/acm-iith/src/Components/Home/Mainpart.jsx#contactus" >Contact Us </Nav.Link>
                        <a href="/acm-iith/#/joinus"><button class="button"><span>Become a Member</span></button></a>
                        </NavDropdown>
                    </div>
                    </div>
                </nav>
     */}
                
            
        </MobileView>
        </div>
    )

}

export default Navbar