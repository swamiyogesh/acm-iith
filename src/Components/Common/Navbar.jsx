import React from 'react'
import '../../css/style.css';
import '../../css/common.css';

function Navbar()   {
    return (
       <div className="Navbar">
           <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                <a className="navbar-brand" href="/acm-iith/#" style={{ textDecoration: 'none', borderBottom: '3px solid #f05a22', top: '50%' }}>ACM | IIT Hyderabad</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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
        </div>
    )
}

export default Navbar