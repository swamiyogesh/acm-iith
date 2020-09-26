import React from 'react'
import '../../css/style.css';
import '../../css/common.css';
import { BrowserView, MobileView } from 'react-device-detect'

function Mainpart() {

    return (
        <div className="Mainpart">
            <br /><br /><br />
            <div className="container">
            <BrowserView>
            <p className="h50" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;IIT Hyderabad ACM Student Chapter</p>
            </BrowserView>
            <MobileView>
            <p className="h50" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;IIT &nbsp;Hyderabad &nbsp;ACM &nbsp;Student &nbsp;Chapter</p>
            </MobileView>
            <br />
            <div className="row">
                {/* <div class="col-md-2">
                    <BrowserView><img src = {require('../../assets/images/logo.jpg')} style={{height: "90%", width:"110%"}}  alt=" " /></BrowserView>
                </div> */}
                    
                <div class="col-md">
                    <br />
                    <p id="aboutus" className="p20" style={{color: 'black', padding: '5px'}}>The IIT Hyderabad ACM student chapter is an official non profit student chapter of the Association of Computing Machinery(ACM). It aims at uniting students with an interest in Computer Science. It sanctions students from graduate and undergraduate backgrounds to interact, network and learn both technical and research aligned skills.
                        IIT Hyderabad ACM student chapter has been officially...
                        <a href="/acm-iith/#/about">&nbsp;Know more about us.</a>
                    </p>
                </div>
            </div>      

                <hr style={{backgroundColor: "#C0C0C0", height:"1px"}} />
                <br />





            <div class="row" style={{ borderRadius: '5px'}}>
            <div className="container">
                <div className="row">
                    <div class="col-md">
                        <br />
                        <a class="p30" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;Upcoming Events</a>
                        <br /><br />
                        <a><b> We are now live!</b></a>
                        <p>Check us out at acm.iith.ac.in soon!</p>
                        <a><b> Paper1!</b></a>
                        <p>Check us out at acm.iith.ac.in soon!</p>
                        <a><b> Paper2!</b></a>
                        <p>Check us out at acm.iith.ac.in soon! Lorem Epsum Lorem Epsum Lorem Epsum Lorem EpsumLorem Epsum</p>
                        <a><b> xyz!</b></a>
                        <p>Check us out at acm.iith.ac.in soon! Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum</p>
                        <br />
                    </div>
                    <div className="col-md-1"></div>
                    <div class="col-md">
                        <br />
                        <a class="p30" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;News</a>
                        <br /><br />
                        <a><b> Chapter Started!</b></a>
                        <p>IIT Hyderabad ACM Student Chapter officially chartered on 31-08-2020</p>
                        <a><b> Honoiurable mention to team</b></a>
                        <p>Lorem Epsum Event is gonna be awesome.</p>
                        <a><b> Inauguration</b></a>
                        <p>Lorem Epsum Event is gonna be awesome.</p>
                        <a><b> Honourable mention to team</b></a>
                        <p>Lorem Epsum Event is gonna be awesome.</p>
                        <a href="/acm-iith/#/news"><u>See all</u></a>
                    </div>
                </div>
            </div>
            </div>

            <br /><br />
            <hr style={{backgroundColor: "#C0C0C0", height:"1px"}} />
            <br /><br />
            <p className="h35" id="contactus" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Contact Us</p>
            <br  />
            <div className="primaryContainer" style={{borderRadius: '15px', textAlign: 'center'}}>
                <p class="h35" style={{color: "black"}}>Shoot us an email at the address below to get in touch!</p>
                <br />
                <a class="p30" href="mailto: acm.chapter@cse.iith.ac.in" style={{color: '#3074b7', fontSize: '20px'}}>acm.chapter@cse.iith.ac.in</a>
            </div>
        </div>
       <br /><br /><br /><br />
        </div>
    )
}

export default Mainpart