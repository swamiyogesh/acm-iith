import React from 'react'
import Navbar from '../Components/Common/Navbar'

function ResearchConnect1() {
    return  (
        <div className="ResearchConnect1">
            <Navbar />
            <div className="container">
            <br/>
            <h2>#ResearchConnect: Making Neural Networks Robust Against Image Corruptions</h2>
            <br/><br/>
            <div className="row">
                <div className="col">
                    <img src={require('../assets/events/ResearchConnect_1.png')} style={{width: "100%"}} />
                </div>
                <div className="col">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                </div>
            </div>
            </div>
        </div>
    )
}

export default ResearchConnect1