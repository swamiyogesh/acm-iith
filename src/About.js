import React from 'react'
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'
import Team from './Team'
// import Footer from './Components/Common/Footer'

function About()   {
    return (
        <div className="About">
            <Navbar props="About" />
            <div className="container">
                <br /><br /><br />
                <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;About Us</p>
                <br />
                <p className="p20">                
                IIT Hyderabad ACM student chapter was officially chartered on 31st August, 2020 under the shelter of Computer Science and Engineering department at IIT Hyderabad. This student driven chapter is divided into four Interest groups namely, <a href="/acm-iith/#/info/machine-intelligence">Machine Intelligence</a>, <a href="/acm-iith/#/info/systems-and-network">Systems and Networks</a>, <a href="/acm-iith/#/info/theoretical-cs">Theoretical Computer Science</a> and <a href="/acm-iith/#/info/women-in-cs">Women in Computer Science</a>. The chapter will organize events which include talks by renowned speakers, organise reading groups and help in fostering research collaborations among the undergraduate and graduate students working in various disciplines of  Computer Science. 
The primary goal of this chapter is to help students gain exposure to cutting edge research in various disciplines of Computer Science and help them take part in research activities that focus on advancing their academic and research careers. 
If you’re working on exciting research projects and would like to present your research, feel free to drop us a mail at <a href="mailto: acm.chapter@iith.ac.in">acm.chapter@iith.ac.in.</a> 
                </p>
                <p className="p20">
                The chapter aims at bringing together computer fraternity and cultivate the research and development oriented skills among students. It attempts to create oppurtunities for networking, mentoring and bonding with peers and experts across the computing spectrum.
                </p>

                <a href="/acm-iith/#/joinus" style={{fontSize: '24px', color: "#080e2c"}}><b>Computing enthusiast enough? Become a member!</b></a>
                
                <br /><br /><br /><br /><br /><br />

                <Team />





                {/* <div className = "row">
                    <br />
                    <div className = "col-md">
                        <br />
                        <center><p className="h20" style={{color: '#3074b7', fontSize: '24px', borderRadius: '15px'}}>ACM | IIT Hyderabad</p></center>
                        <br />
                        <div className = "primaryContainer" style={{width: '100%', borderRadius: '15px'}}>
                            <br /><p style={{fontSize: '22px'}}>IIT Hyderabad ACM student chapter has been officially chartered on 31st August, 2020 under the department of Computer Science and Engineering. The chapter aims at bringing together computer fraternity and cultivate the research and development oriented skills among students. The chapter will organize events which includes talks by renowned speakers, workshops, etc, allowing the students to gain an exposure  in the computing world as well as to understand the advancements happening in computer science worldwide.</p>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div className = "col-md">
                        <br />
                        <center><p className="h20" style={{color: '#3074b7', fontSize: '24px', borderRadius: '15px'}}>ACM Student Chapter</p></center>
                        <br />
                        <div className = "primaryContainer" style={{width: '100%', borderRadius: '15px'}}>
                        <br /><p style={{fontSize: '22px'}}>ACM student chapter furnishes a plethora of unique and never ending opportunities for networking, mentoring and bonding with peers and experts across the computing spectrum, laying out support to both local communities and communities outside the institution. The main focus of an ACM student chapter is to focus on building and developing members' passion for computer science.</p>
                        <br /><br /><br /><br />
                        </div>
                    </div>
                </div> */}
            </div>


            

            {/* <div style={{position: 'absolute', width: '100%', bottom: 0}}>
                <Footer />
            </div> */}
        </div>
    )
}

export default About