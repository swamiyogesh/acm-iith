import React from 'react'
import './css/style.css';
import './css/common.css';

function Team()   {
    return (
        <div className="Team">
            <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Team</p>
            <br  />
            <p className="h20" style={{color: '#080e2c', fontSize: '24px'}}><b>Meet Our Current Team</b></p>
            <br /><br />
            <div className="row">
                <div className="col-md">
                    <center>
                    <img src={require("./assets/images/vineeth.jpg")} style={{borderRadius:"100%",width: "50%",  padding: "2%"}} />
                        <p className="h22">Vineeth N Balasubramanian</p>
                        <p className="p15">Faculty Sponsor</p>
                        <br /><br /><br /><br />
                    </center>
                </div>
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/surgan.jpg")} style={{borderRadius:"100%",width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Surgan Jandial</p>
                        <p className="p15">Chair</p>
                        <br /><br />
                    </center>
                </div>
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/chaitanya.jpg")} style={{borderRadius:"100%",width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Chaitanya Devaguptapu</p>
                        <p className="p15">Vice Chair</p>
                        <br /><br />
                    </center>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/vedant.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Vedant Singh</p>
                        <p className="p15">Treasurer</p>
                        <br /><br />
                    </center>
                </div>
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/archana.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">CS Archana</p>
                        <p className="p15">Design Lead</p>
                        <br /><br />
                    </center>
                </div>
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/deeptanshu.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Deeptanshu Sankhwar</p>
                        <p className="p15">Outreach Lead</p>
                        <br /><br />
                    </center>
                </div>
            </div>
            

            <a class="p20" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;Systems and Networks Moderators</a>
            <br /><br /><br />
            <div className="row">
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/jyoti.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Jyoti Tiwari</p>
                        <br /><br />
                    </center>
                </div>
                <div className="col-md">
                    {/* <center>
                        <img src={require("./assets/images/deeptanshu.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Deeptanshu Sankhwar</p>
                        <br /><br />
                    </center> */}
                </div>
                <div className="col-md">
                    <center>
                        {/* <img src={require("./assets/images/vedant.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">CS Archana</p> */}
                        <br /><br />
                    </center>
                </div>
            </div>

	
	    <a class="p20" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;Theoretical Computer Science Moderators</a>
            <br /><br /><br />
            <div className="row">
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/vedant.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Vedant Singh</p>
                        <br /><br />
                    </center>
                </div>
                <div className="col-md">
                    {/* <center>
                        <img src={require("./assets/images/deeptanshu.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Deeptanshu Sankhwar</p>
                        <br /><br />
                    </center> */}
                </div>
                <div className="col-md">
                    <center>
                        {/* <img src={require("./assets/images/vedant.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">CS Archana</p> */}
                        <br /><br />
                    </center>
                </div>
            </div>

	
           <a class="p20" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;Machine Intelligence Moderators</a>
            <br /><br /><br />
            <div className="row">
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/samujjwal.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Samujjwal Ghosh</p>
                        <br /><br />
                    </center>
                </div>
		<div className="col-md">
                    <center>
                        <img src={require("./assets/images/pratik.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Pratik Chhapolika</p>
                        <br /><br />
                    </center>
                </div>
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/puneet.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Puneet Mangla</p>
                        <br /><br />
                    </center>
                </div>
            </div>
	    

            <a class="p20" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;Women in Computer Science Moderators</a>
            <br /><br /><br />
            <div className="row">
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/piyushi.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Piyushi Manupriya</p>
                        <br /><br />
                    </center>
                </div>
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/adeeba.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Adeeba Naaz</p>
                        <br /><br />
                    </center> 
                </div>
                <div className="col-md">
                    <center>
                        <img src={require("./assets/images/sravanthi.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Sravanthi Reddy M</p>
                        <br /><br />
                    </center>
                </div>
		<div className="col-md">
                    <center>
                        <img src={require("./assets/images/jaynee.jpg")} style={{borderRadius:"100%", width: "50%",  padding: "2%"}} />
                        <br />
                        <p className="h22">Jaynee Rawal M</p>
                        <br /><br />
                    </center>
                </div>
            </div>

            <br /><br /><br />
        </div>
    )
}

export default Team
