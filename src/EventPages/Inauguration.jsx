import React from 'react'
import Navbar from '../Components/Common/Navbar'

function Inauguration() {
    return  (
        <div className="Inauguration">
            <Navbar />
            <div className="container">
            <br/>
            <h2>IIT Hyderabad ACM Student Chapter Inauguration</h2>
            <br/><br/>
            <div className="row">
                <div className="col">
                    <img src={require('../assets/events/Inaugural.png')} style={{width: "100%"}} />
                </div>
                <div className="col">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                </div>
            </div>
            </div>
        </div>
    )
}

export default Inauguration