import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'
import { BrowserView, MobileView } from 'react-device-detect'

function WomenInCS()  {
    return (
        <div className="WomenInCS">
            <Navbar />
            <div className="container">
                <br /><br /><br />
                <BrowserView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Women in Computer Science</p>
                </BrowserView>
                <MobileView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Women in &nbsp;Computer &nbsp;Science</p>
                </MobileView>            
            </div>
        </div>
    )
}

export default WomenInCS