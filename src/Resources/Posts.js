import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'

function Posts()  {
    return (
        <div className="Posts">
            <Navbar />
            <div className="container">
                <br /><br /><br />
                <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Posts</p>
            </div>
        </div>
    )
}

export default Posts