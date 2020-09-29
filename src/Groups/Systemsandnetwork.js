import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'
import { BrowserView, MobileView } from 'react-device-detect'

function Systemsandnetwork()  {
    return (
        <div className="Systemsandnetwork">
            <Navbar />
            <div className="container" style={{paddingTop: "25px"}}>
                <BrowserView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Systems and Networks</p>
                </BrowserView>
                <MobileView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Systems and &nbsp;Networks</p>
                </MobileView>
            </div>
        </div>
    )
}

export default Systemsandnetwork