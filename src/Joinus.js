import React from 'react'
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'

function Joinus()  {
    return (
        <div className="Joinus">
            <Navbar />
            <div className="container">
                <br /><br /><br />
                <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Join Us</p>
            </div>
        </div>
    )
}

export default Joinus