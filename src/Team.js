import React from 'react'
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'

function Team()   {
    return (
        <div className="Team">
            <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Team</p>
            <br  />
            <p className="h20" style={{color: '#080e2c', fontSize: '24px'}}><b>Meet Our Current Team</b></p>
            <br /><br />
            <div className="row">
                <div className="col-md">
                    {/* <img src={require('./assets/images/iith.png')} style={{borderRadius: "50%", width: "20%", height: "20%"}} /> */}


                </div>
                <div className="col-md">
                    <div className="primaryContainer">
                        <center>
                            <p className="h22">Name</p>
                            <p className="p15">Lorem Epsum!</p>
                            <br /><br /><br /><br />
                        </center>
                    </div>
                </div>
                <div className="col-md">
                    <div className="primaryContainer">
                        <center>
                            <p className="h22">Name</p>
                            <p className="p15">Lorem Epsum!</p>
                            <br /><br /><br /><br />
                        </center>
                    </div>
                </div>
            </div><br />
            <div className="row">
                <div className="col-md">
                    <div className="primaryContainer">
                        <center>
                            <p className="h22">Name</p>
                            <p className="p15">Lorem Epsum!</p>
                            <br /><br /><br /><br />
                        </center>
                    </div>
                </div>
                <div className="col-md">
                    <div className="primaryContainer">
                        <center>
                            <p className="h22">Name</p>
                            <p className="p15">Lorem Epsum!</p>
                            <br /><br /><br /><br />
                        </center>
                    </div>
                </div>
                <div className="col-md">
                    <div className="primaryContainer">
                        <center>
                            <p className="h22">Name</p>
                            <p className="p15">Lorem Epsum!</p>
                            <br /><br /><br /><br />
                        </center>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    )
}

export default Team