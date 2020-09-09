import React from 'react'
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'
// import Footer from './Components/Common/Footer'

function About()   {
    return (
        <div className="About">
            <Navbar />
            <div className="container">
                <br /><br />
                <div class = "row">
                    <div class = "col-md">
                        <center><p class="h20" style={{color: '#f05a22', fontSize: '24px', borderRadius: '15px'}}>ACM | IIT Hyderabad</p></center>
                        <br />
                        <div class = "primaryContainer" style={{width: '100%', borderRadius: '15px'}}>
                            <br /><p style={{fontSize: '22px'}}>IIT Hyderabad ACM student chapter has been officially chartered on 31st August, 2020 under the department of Computer Science and Engineering. The chapter aims at bringing together computer fraternity and cultivate the research and development oriented skills among students. The chapter will organize events which includes talks by renowned speakers, workshops, etc, allowing the students to gain an exposure  in the computing world as well as to understand the advancements happening in computer science worldwide.</p>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div class = "col-md">
                        <center><p class="h20" style={{color: '#f05a22', fontSize: '24px', borderRadius: '15px'}}>ACM Student Chapter</p></center>
                        <br />
                        <div class = "primaryContainer" style={{width: '100%', borderRadius: '15px'}}>
                        <br /><p style={{fontSize: '22px'}}>ACM student chapter furnishes a plethora of unique and never ending opportunities for networking, mentoring and bonding with peers and experts across the computing spectrum, laying out support to both local communities and communities outside the institution. The main focus of an ACM student chapter is to focus on building and developing members' passion for computer science.</p>
                        <br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>


            

            {/* <div style={{position: 'absolute', width: '100%', bottom: 0}}>
                <Footer />
            </div> */}
        </div>
    )
}

export default About