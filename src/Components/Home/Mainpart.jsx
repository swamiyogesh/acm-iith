import React from 'react'
import '../../css/style.css';
import '../../css/common.css';
import Contact from '../../Contact';
import { BrowserView, MobileView } from 'react-device-detect'

function Mainpart() {

    return (
        <div className="Mainpart">
            <div className="container" style={{paddingTop: "25px"}}>
            <BrowserView>
            <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;IIT Hyderabad ACM Student Chapter</p>
            </BrowserView>
            <MobileView>
            <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;IIT &nbsp;Hyderabad &nbsp;ACM &nbsp;Student &nbsp;Chapter</p>
            </MobileView>
            {/* <br /> */}
            <div className="row">
                {/* <div class="col-md-2">
                    <BrowserView><img src = {require('../../assets/images/logo.jpg')} style={{height: "90%", width:"110%"}}  alt=" " /></BrowserView>
                </div> */}
                    
                <div class="col-md">
                    {/* <br /> */}
                    <p id="aboutus" className="p18" style={{color: 'black', padding: '5px'}}>The IIT Hyderabad ACM student chapter is an official non profit student chapter of the Association of Computing Machinery (ACM). Our aim is to unite computer fraternity at IIT Hyderabad to foster research in various disciplines of Computer Science under the shelter of department of Computer Science.
                        {/* IIT Hyderabad ACM student chapter has been officially... */}
                        {/* <a href="/acm-iith/#/about">&nbsp;Know more about us.</a> */}
                        <br />
                        {/* <button href="/acm-iith/#/about" type="button" class="btn btn-outline-primary">About Us</button> */}
                        {/* <br /> */}
                        <a href="/acm-iith/#/joinus" target="_blank"><button class="button"><span>Become a Member</span></button></a>&nbsp;
                        <a href="/acm-iith/#/about"><button class="button-2"><span>Know more</span></button></a>
                    </p>
                </div>
            </div>      
            {/* <hr style={{backgroundColor: "#C0C0C0", height:"1px"}} /> */}
            <br />





            <div class="row" style={{ borderRadius: '5px'}}>
            <div className="container">
                <div className="row">
                    <div class="col-md">
                        <br />
                        <a class="p30" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;Upcoming Events</a>
                        <br /><br />
                        <a><b> Inauguration</b></a>
                        <p>Official Inauguration of chapter to IIT Hyderabad community coming on 8th October.</p>
                        {/* <a><b> Paper1!</b></a>
                        <p>Check us out at acm.iith.ac.in soon!</p>
                        <a><b> Paper2!</b></a>
                        <p>Check us out at acm.iith.ac.in soon! Lorem Epsum Lorem Epsum Lorem Epsum Lorem EpsumLorem Epsum</p>
                        <a><b> xyz!</b></a>
                        <p>Check us out at acm.iith.ac.in soon! Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum</p> */}
                        <br />
                    </div>
                    <div className="col-md-1"></div>
                    <div class="col-md">
                        <br />
                        <a class="p30" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;News</a>
                        <br /><br />
                        <a><b> Puneet Paper</b></a>
                        <p>Paper on....</p>
                        <a><b> Chapter Started!</b></a>
                        <p>IIT Hyderabad ACM Student Chapter officially chartered on 31-08-2020</p>
                        <a><b></b></a>
                        <p></p>
                        <a><b> </b></a>
                        <p></p>
                        <a href="/acm-iith/#/news"><u>See all</u></a>
                    </div>
                </div>
            </div>
            </div>

            <br /><br /><br /><br /><br /><br />
            {/* <hr style={{backgroundColor: "#C0C0C0", height:"1px"}} />
            <br /><br /> */}

        </div>

        <Contact />

       {/* <br /><br /><br /><br /> */}
        </div>
    )
}

export default Mainpart
