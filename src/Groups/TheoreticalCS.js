import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'

function TheoreticalCS()  {
    return (
        <div className="TheoreticalCS">
            <Navbar />
            <div className="container">
                <br /><br />
                <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Theoretical Computer Science</p>
            </div>
        </div>
    )
}

export default TheoreticalCS